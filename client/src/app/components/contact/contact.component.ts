import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  
  
})
export class ContactComponent implements OnInit {
    menu: boolean = false;
    success: string = null;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  toggleMenu(){
    this.menu = !this.menu;
    }
    sendMail(name, email, message){
        let url = 'http://localhost:4040'

      const data = {
        name: name,
        email: email,
        message: message

      }
      
       return this.http.post(`${url}/send`, data, )
       .subscribe(err => {
         if(err){
          this.success === 'Email Failed'
         }
         else{
           this.success === 'Email Sent Successfully'
         }
       })
    
    }
  
    
    
}


