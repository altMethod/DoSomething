import { Component } from '@angular/core';

import { AngularFire, FirebaseAuth } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DoSomething'
  displayName: string;
  photoURL: string;

  constructor(private firebaseAuth: FirebaseAuth,
    private angularFire: AngularFire,
    private router: Router) {

    this.angularFire.auth.subscribe(user => {
      if (user) {
        this.displayName = user.google.displayName;
        this.photoURL = user.google.photoURL;
        this.router.navigate(['/todo']);
      }
    });
  }

  login() {
    this.firebaseAuth.login();
    this.router.navigate(['/todo']);
  }

  logout() {
    this.firebaseAuth.logout();
    this.router.navigate(['/']);
    location.reload();
  }
}