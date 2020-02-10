import { Component, OnInit } from '@angular/core';
import { ScrollServiceService } from 'src/app/services/scroll-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private scrollService: ScrollServiceService) { }

  ngOnInit() {
    this.scrollService.projects.subscribe(() => this.scrollTo());
  }
  scrollTo(){
    document.getElementById('projects').scrollIntoView({behavior: 'smooth'});
  }

}
