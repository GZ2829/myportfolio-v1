import { Component, OnInit } from '@angular/core';
@ViewChild('videoHero') videoplayer; 

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor() {
    this.videoplayer.nativeElement.play();
  }

  ngOnInit() {
  }

}
