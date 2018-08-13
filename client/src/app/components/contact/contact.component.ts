import { Component, OnInit } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  viewProviders: [HTTP_PROVIDERS],
  
})
export class ContactComponent implements OnInit {
    menu: boolean = false;
  constructor(private http: Http) { }

  ngOnInit() {
  }
  toggleMenu(){
    this.menu = !this.menu;
    }
    submitData(data){
        this.http.post("/send", data)
    }
  
    
    
}


