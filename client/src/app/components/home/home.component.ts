import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('awesomeAnimation', [


    ])
  ]
})
export class HomeComponent implements OnInit {
    menu: boolean = false;
    projects: boolean = false

  

  constructor() { }

  ngOnInit() {
    
  }
  toggleMenu(){
  
    
    this.menu = !this.menu;
    }
    toggleMenuClose(){
    
  
    }
  toggleProjects(){
    this.projects = !this.projects
  }
}
