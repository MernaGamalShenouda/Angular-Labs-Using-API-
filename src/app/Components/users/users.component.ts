import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../Services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { OneUserComponent } from '../one-user/one-user.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterModule,
    OneUserComponent
  ],
  providers:[
    UsersService
  ],
  templateUrl: './users.component.html',
  styles: ``
})
export class UsersComponent implements OnInit{
  constructor(private userService:UsersService){}
  Users:any;
  ngOnInit(): void {
    this.userService.GetAllUsers().subscribe({
      next:(data)=>{
        this.Users = data;
      },
      error:(err)=>{console.log("Error !")}
    })
  }
}
