import { Component, OnInit } from '@angular/core';
import { trainersData } from '../_data/trainers';
import { AuthService } from '../_services/auth.service';
import { UserServiceService } from '../_services/user-service.service';
import { usersData } from '../_data/users';
import { Trainer, UserClass } from '../_model/user';
import { ToastrService } from 'ngx-toastr';
import { Gender } from '../constants/enums';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public User:UserClass;
  constructor(
    private authService: AuthService,
    private userService: UserServiceService,
    private toastr: ToastrService,
   // public firebaseService: FirebaseService,
  ) {
    this.User=new UserClass(Gender.male,'test','abc');
  }

  ngOnInit(): void {
    //this.delete();
    //this.signup();
//this.userService.addUser();
//this.userService.updateUser();
//this.userService.DeleteUser();
this.GetAllsers();
this.Adduser();
  }
  Adduser(){
    const userData: UserClass = {
      role: {isAdmin : true,isTrainer:false,isUser:false},
      gender: Gender.male,
      username: "username",
      knownAs: "abc",
    }
   this.userService.Adduser(userData).then((res)=>
   {
    this.toastr.success('user added Successfully.');

   }).catch((err) => 
    
   this.toastr.error(err.message));
  }


  updateuser(){
    const userData: UserClass = {
      role: {isAdmin : true,isTrainer:false,isUser:false},
      gender: Gender.male,
      username: "username",
      knownAs: "abc",
    }
    
   this.userService.UpdateUser(userData,'45').then((res)=>
   {
    console.log('res', res);
    this.toastr.success('user updated Successfully.');

   }).catch((err) => 
    
   this.toastr.error(err.message));
  }

  deleteuser(){
    
   this.userService.DeleteUser('45').then((res)=>
   {
    console.log('res', res);
    this.toastr.success('user deleted Successfully.');

   }).catch((err) => 
    
   this.toastr.error(err.message));

  }
  // getUserbyId(){
    
  //   this.userService.getUserByID('45').then((res)=>
  //   {
  //    console.log('res', res);
  //    this.toastr.success('user deleted Successfully.');
 
  //   }).catch((err) => 
     
  //   this.toastr.error(err.message));
 
  //  }
 
  
  GetAllsers(){
    this.userService.getAllUser();
   }
 



  onSubmit(value){
    this.userService.createUser('cv0MFJL5CHWHl6R3OAp6',this.User)
    .then(
      res => {
        console.log('e',res);
       // this.resetFields();
        //this.router.navigate(['/home']);
      }
    )
  }
  signup() {
    debugger;
    this.authService.register('a2lfscsdddfsddmif@silent.com', 'Password123@', usersData[0])
      .then((res) => {
        debugger;
        console.log('res', res);
        this.toastr.success('Register Successful');
        this.Adduser();
      })
      .catch((err) => 
    
      this.toastr.error(err.message));
  }
  delete() {
    this.authService
      .remove()
      .then((res) => {
        console.log('res', res);
        this.toastr.success('Delete Successful');
      })
      .catch((err) => {
        console.log('err', err);
        this.toastr.error(err.message);
      });
  }
}
