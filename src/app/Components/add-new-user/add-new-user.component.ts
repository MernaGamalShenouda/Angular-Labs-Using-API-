import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../Services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-user',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[UsersService],
  templateUrl: './add-new-user.component.html',
  styles: ``
})
export class AddNewUserComponent {

  constructor(private userService:UsersService,private router: Router){}


  regForm = new FormGroup({
    name: new FormControl("",[Validators.required,Validators.minLength(3)]),
    age: new FormControl("",[Validators.required,Validators.min(20),Validators.max(40)]),
    email: new FormControl("",[Validators.required,Validators.email]),
    phone: new FormControl("",[Validators.required,Validators.pattern('[0-9]*')])
  })

  name = this.regForm.controls["name"];
  age = this.regForm.controls["age"];
  phone = this.regForm.controls["phone"];
  email = this.regForm.controls["email"];


  getData(){
    this.regForm.markAllAsTouched();
  }

  get NameValid(){
    return this.regForm.controls["name"].valid;
  }

  get AgeValid(){
      return this.regForm.controls["age"].valid;
  }

  get PhoneValid(){
    return this.regForm.controls["phone"].valid;
  }

  get EmailValid(){
    return this.regForm.controls["email"].valid;
  }

  Add(){
    let newUser = {name:this.name.value, age:this.age.value, phone:this.phone.value, email:this.email.value};
    this.userService.AddUser(newUser).subscribe(
      {
        complete:()=>{this.router.navigate(['/users']);}
      }
    );
  }
}
