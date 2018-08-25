import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  
  
})
export class ContactComponent implements OnInit {
    menu: boolean = false;
  constructor(private http: Http) { }

  ngOnInit() {
  }
  toggleMenu(){
    this.menu = !this.menu;
    }
    sendMail(){
      var data = ({
        
    });
    
    }
  
    
    
}


