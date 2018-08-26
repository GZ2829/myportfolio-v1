import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  
  
})
export class ContactComponent implements OnInit {
    menu: boolean = false;
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
      console.log(data)
       return this.http.post(`${url}/send`, data, )
       .subscribe(res => console.log('done'))
    
    }
  
    
    
}


