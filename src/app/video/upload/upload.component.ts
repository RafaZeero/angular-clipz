import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { v4 as uuid } from 'uuid';
import { last, switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { ClipService } from 'src/app/services/clip.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  isDragOver = false;
  file: File | null = null;
  fileUploaded = false;

  showPercentage = false;
  percentage = 0;

  //alert
  showAlert = false;
  alertMsg = 'Please wait! Your clip is being uploaded.';
  alertColor = 'blue';
  inSubmission = false;

  //clipz user
  user: firebase.User | null = null;

  title = new FormControl('', {
    validators: [Validators.required, Validators.minLength(3)],
    nonNullable: true,
  });

  // form group to upload a clip
  uploadForm = new FormGroup({
    title: this.title,
  });
  constructor(
    private storage: AngularFireStorage,
    private auth: AngularFireAuth,
    private clipService: ClipService
  ) {
    auth.user.subscribe((user) => (this.user = user));
  }

  ngOnInit(): void {}

  // store a file at firebase
  storeFile($event: Event) {
    this.isDragOver = false;

    // check file uploaded.
    // if file was dragged, check if it exists or it's null,
    // otherwise file was uploaded from input, check if it exists or it's null
    this.file = ($event as DragEvent).dataTransfer
      ? ($event as DragEvent).dataTransfer?.files.item(0) ?? null
      : ($event.target as HTMLInputElement).files?.item(0) ?? null;
    /* the path $event.dataTransfer.files on chrome is an empty object {}, it is a bug on chrome browser*/
    if (!this.file || this.file.type !== 'video/mp4') {
      return;
    }

    // remove file extensions
    this.title.setValue(this.file.name.replace(/\.[^/.]+$/, ''));
    this.fileUploaded = true;
  }

  uploadFile() {
    //to disable the form during upload
    this.uploadForm.disable();

    // show alert message to user - clip upload in progress
    this.showAlert = true;
    this.alertColor = 'blue';
    this.alertMsg = 'Please wait! Your clip is being uploaded.';
    this.inSubmission = true;
    this.showPercentage = true;

    // add info to clip file to use it on firebase
    const clipFileName = uuid();
    const clipPath = `clips/${clipFileName}.mp4`;

    // using info from clip file
    const task = this.storage.upload(clipPath, this.file);
    const clipRef = this.storage.ref(clipPath);
    // console.log(task);
    task.percentageChanges().subscribe((progress) => {
      this.percentage = (progress as number) / 100;
    });

    task
      .snapshotChanges()
      .pipe(
        last(),
        switchMap(() => clipRef.getDownloadURL())
      )
      .subscribe({
        next: (url) => {
          const clip = {
            uid: this.user?.uid as string,
            displayName: this.user?.displayName as string,
            title: this.title.value,
            fileName: `${clipFileName}.mp4`,
            url,
          };
          this.clipService.createClip(clip);

          console.log(clip);

          // show alert message to user - clip upload complete
          this.alertColor = 'green';
          this.alertMsg =
            'Success! Your clip is now ready to share with the world.';
          this.showPercentage = false;
        },
        error: (err) => {
          //to enable the form if an error occurred
          this.uploadForm.enable();

          // show alert message to user - clip upload error
          this.alertColor = 'red';
          this.alertMsg = 'Upload failed! Please try again later.';
          this.inSubmission = true;
          this.showPercentage = false;
          console.error(err);
        },
      });
  }
}
