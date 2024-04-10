import { Routes } from '@angular/router';
import { UsersComponent } from './Components/users/users.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { ErrorComponent } from './Components/error/error.component';
import { AddNewUserComponent } from './Components/add-new-user/add-new-user.component';

export const routes: Routes = [
  {path:"", redirectTo:"users",pathMatch:"full"},
  {path:"users", component:UsersComponent},
  {path:"users/:id", component:UserDetailsComponent},
  {path:"add", component:AddNewUserComponent},
  {path:"**", component:ErrorComponent},
];
