import { Component, OnInit } from '@angular/core';
import { ScrollServiceService } from 'src/app/services/scroll-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private scrollService: ScrollServiceService) { }

  ngOnInit() {
    this.scrollService.about.subscribe(() => this.scrollTo());
  }

  scrollTo() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  }

}