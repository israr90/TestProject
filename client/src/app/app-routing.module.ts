import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';


const Routes: Routes = [
  // { path: '', component: SignupComponent, pathMatch: 'full' },
  // { path: 'updateuser', component: UpdateuserComponent },
  // { path: 'adduser', component: AdduserComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
