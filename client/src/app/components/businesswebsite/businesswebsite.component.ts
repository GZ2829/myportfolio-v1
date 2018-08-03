import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-businesswebsite',
  templateUrl: './businesswebsite.component.html',
  styleUrls: ['./businesswebsite.component.css']
})
export class BusinesswebsiteComponent implements OnInit {
  menu: boolean = true;

  constructor() { }

  ngOnInit() {
  }
  toggleMenu(){
    this.menu = !this.menu;
    }


}
