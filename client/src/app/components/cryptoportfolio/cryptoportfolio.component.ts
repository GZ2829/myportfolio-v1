import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cryptoportfolio',
  templateUrl: './cryptoportfolio.component.html',
  styleUrls: ['./cryptoportfolio.component.css']
})
export class CryptoportfolioComponent implements OnInit {
  menu: boolean = true;

  constructor() { }

  ngOnInit() {
  }
  toggleMenu(){
    this.menu = !this.menu;
    }

}
