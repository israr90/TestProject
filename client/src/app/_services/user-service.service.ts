import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
//import { resolve } from 'dns';
import { User } from 'firebase';
import { USERS } from '../constants/collections';
import { Gender } from '../constants/enums';
import { usersData } from '../_data/users';
import { Trainer, UserClass,UserData,City } from '../_model/user';
@Injectable({
  providedIn: 'root',
})

export class UserServiceService {
  constructor(private db: AngularFirestore) {}
  getUsers() {
    return this.db.collection(USERS).valueChanges();
  }



  /// get user section services
  getAllUser() 
  { 
    return this.db.collection("users").get().subscribe(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
      });
  });
    //return this.db.collection("users").get();
    
  }

  getAllUserD() 
  { 
    return this.db.collection("users").get().subscribe(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
      });
  });
    //return this.db.collection("users").get();
    
  }

  getUserByID(id) { 
    return this.db.collection(USERS).doc(id);
  }

  //add new user
  Adduser(user:any) {
    return this.db.collection(USERS).add(user);
  }

  //update user
  UpdateUser(user:UserClass,id:string) {
    return this.db.collection(USERS).doc(id).update(user);
  }
  //delete user section
  DeleteUser(id:string) {
    return this.db.collection(USERS).doc(id).delete();
  }
  createUser(id: string, user: UserClass) {
    return this.db.collection(USERS).doc(id).set(user);
  }
  addTrainer(id: string, trainer: Trainer) {
    return this.db.collection(USERS).doc(id).set(trainer);
  }
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.db.doc(`users/${user.uid}`);
    const userData: UserData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }
}
