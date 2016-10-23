import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subject } from "rxjs/Rx";
import { User } from "./user.interface";

declare var firebase: any;

@Injectable()
export class AuthService {
  constructor(private router: Router) {
  }

  signupUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
        console.log(error);
      });
  }

  signinUser(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
        console.log(error);
      });
  }

  logout() {
    //it will delete the user on my local machine (not on the data base).
    firebase.auth().signOut();
    this.router.navigate(['/signin']);
  }

  isAuthenticated(): Observable<boolean> {
    //function(user) (callBack method)  will be executed a mil or second after the isAuthenticated() method
    // subject: They are Observable which we are not limited observing but where we on our own
    // can also trigger certain resulat. we can listen and emit.
    //whenever we trigger something on that subject we will pass a boolean, and when we subscribe to the subject
    // we know we will get back a boolean, since we want the answer of the question "Are we authenticated?"
    const subject = new Subject<boolean>();

    //if we are sign it this will give us back the currentUser and if not it wont.
    //behind the scene it will store and manage a token for us.
    // return firebase.auth().currentUser;

    //this this executed whenever our authentificationState changes automatically.
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        subject.next(true); //which means emit a new value, emit the next value. (we emit a new value and it's true).
      } else {
        subject.next(false);
      }
    });
    return subject.asObservable();
  }
}




