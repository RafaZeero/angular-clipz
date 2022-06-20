import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { delay, map, Observable } from 'rxjs';
import IUser from '../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userCollection: AngularFirestoreCollection<IUser>;
  public isAuthenticated$: Observable<boolean>;
  public isAuthenticatedWithDelay$: Observable<boolean>;

  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.userCollection = db.collection('users');
    this.isAuthenticated$ = auth.user.pipe(map((user) => !!user));
    this.isAuthenticatedWithDelay$ = this.isAuthenticated$.pipe(delay(1350));
    // this.route.data.subscribe(console.log);
  }

  public async createUser(userData: IUser) {
    if (!userData.password) {
      throw new Error('Password is required');
    }
    const userCredentials = await this.auth.createUserWithEmailAndPassword(
      userData.email,
      userData.password
    );

    if (!userCredentials.user) {
      throw new Error("User can't be found");
    }
    await this.userCollection.doc(userCredentials.user.uid).set({
      name: userData.name,
      email: userData.email,
      age: userData.age,
      phoneNumber: userData.phoneNumber,
    });

    await userCredentials.user.updateProfile({
      displayName: userData.name,
    });
  }

  async logout($event?: Event) {
    $event?.preventDefault();

    await this.auth.signOut();

    await this.router.navigateByUrl('/');
  }
}
