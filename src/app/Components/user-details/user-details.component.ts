import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../Services/users.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [HttpClientModule],
  providers:[UsersService],
  templateUrl: './user-details.component.html',
  styles: ``
})
export class UserDetailsComponent implements OnInit {
  ID:any;
  user:any;
  constructor(myRoute:ActivatedRoute,private userService:UsersService){
    this.ID = myRoute.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.userService.GetUserByID(this.ID).subscribe({
      next:(data)=>{
        this.user = data;
      },
      error:(err)=>{console.log("7asal Error")}
    })
  }

}
