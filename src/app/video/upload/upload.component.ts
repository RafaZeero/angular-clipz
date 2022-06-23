import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  isDragOver = false;
  file: File | null = null;
  fileUploaded = false;
  constructor() {}

  ngOnInit(): void {}

  storeFile($event: Event) {
    this.isDragOver = true;
    this.file = ($event as DragEvent).dataTransfer?.files.item(0) ?? null;
    /* the path $event.dataTransfer.files on chrome is an empty object {}, it is a bug on chrome browser*/
    if (!this.file || this.file.type !== 'video/mp4') {
      return;
    }
    this.fileUploaded = true;
  }
}
