import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transportconsolidated',
  templateUrl: './transportconsolidated.component.html',
  styleUrls: ['./transportconsolidated.component.css']
})
export class TransportconsolidatedComponent implements OnInit {
  menu: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu(){
    this.menu = !this.menu;
    }

}
