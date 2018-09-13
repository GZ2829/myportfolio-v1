import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menu: boolean = false;

  constructor() { }

  ngOnInit() {
    
  }
  toggleMenu(){
    this.menu = !this.menu;
    }
}
