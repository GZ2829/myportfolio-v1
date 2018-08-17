import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
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
       const close = document.getElementById('menu')
  
    }
  toggleProjects(){
    this.projects = !this.projects
  }
}
