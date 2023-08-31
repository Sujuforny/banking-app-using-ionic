import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  BASEURL : String = "http://localhost:8080/api/v1/"
  
  constructor(private http: HttpClient) {}
  body : any = {
    email :  "",
    password : "",
    comformPassword : ""
  }

  onEmailChange(event: any) {
    this.body.email = event.detail.value;
  }
  onPasswordChange(event: any) {
    this.body.password = event.detail.value;
  }
  onComformPasswordChange(event: any) {
    this.body.password = event.detail.value;
    console.log(this.body)

  }
  public submit(){
    this.http.post(this.BASEURL+"auth/register",this.body).subscribe((data)=>{
      console.log(data)
    })
  }
}
