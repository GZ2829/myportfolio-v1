import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  menu: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }
  toggleMenu(){
    this.menu = !this.menu;
    }

}
