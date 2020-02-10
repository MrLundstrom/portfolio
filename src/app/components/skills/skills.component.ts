import { Component, OnInit } from '@angular/core';
import { ScrollServiceService } from 'src/app/services/scroll-service.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(private scrollService: ScrollServiceService) { }

  ngOnInit() {
    this.scrollService.skills.subscribe(() => this.scrollTo());
  }
  scrollTo(){
    document.getElementById('skills').scrollIntoView({behavior: 'smooth'});
  }

}
