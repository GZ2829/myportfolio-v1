import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('600ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('600ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ]),
    trigger('project1', [
      transition(':leave', [
        animate('300ms ease-in', style({transform: 'translateY(-300%)'}))
      ])
    ]),
    trigger('project2', [
      transition(':leave', [
        animate('650ms ease-in', style({transform: 'translateY(-500%)'}))
      ])
    ]),
    trigger('project3', [
      transition(':leave', [
        animate('1000ms ease-in', style({transform: 'translateY(-700%)'}))
      ])
    ])
  ]
})


export class ContactComponent implements OnInit {
    success: boolean = false;
    menu: boolean = false;
    projects: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

 toggleMenu(){
    this.menu = !this.menu;
  }

  toggleProjects(){
    this.projects = !this.projects
  }

  sendMail(name, email, message){
        let url = 'http://gz-portfolio.herokuapp.com'

      const data = {
        name: name,
        email: email,
        message: message

      }
      
       return this.http.post(`${url}/send`, data ).subscribe(err => {
         if(err){
          return alert(err)
         }else{
          return alert('Email sent, thank you for your submission')
         }
       })

       
    }
  
    
    
}


