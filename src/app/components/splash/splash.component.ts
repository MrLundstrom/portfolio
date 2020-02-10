import { Component, OnInit } from '@angular/core';
import { ScrollServiceService } from 'src/app/services/scroll-service.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {
  root = document.documentElement;

  constructor(private scrollService: ScrollServiceService) { }

  ngOnInit() {
    this.scrollService.splash.subscribe(() => this.scrollTo());
    setInterval(() => this.setColor(), 5000);
  }
  setColor():void {
    this.root.style.setProperty('--main', this.getRGBA());
  }
  getRGBA(){
    const R = Math.floor(Math.random() * 255);
    const G = Math.floor(Math.random() * 255);
    const B = Math.floor(Math.random() * 255);
    return 'rgba(' + R + ',' + G + ',' + B + ', 0.9)';
  }

  scrollTo(){
    document.getElementById('splash').scrollIntoView({behavior: 'smooth'});
  }
}
