import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly http: HttpClient) { }

  private readonly URL_DB = "http://localhost:3000/users";

  GetAllUsers(){
    return this.http.get(this.URL_DB);
  }
  GetUserByID(id:number){
    return this.http.get(this.URL_DB+"/"+id);
  }
  AddUser(user:any){
    return this.http.post(this.URL_DB, user);
  }

}
