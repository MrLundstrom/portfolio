import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { ScrollServiceService } from 'src/app/services/scroll-service.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {
  projects;

  constructor(private ghs: GithubService,private scrollService: ScrollServiceService) { }

  ngOnInit(): void {
    this.projects = this.ghs.getProjects()
    this.scrollService.repositories.subscribe(() => this.scrollTo());

  }
  scrollTo(){
    document.getElementById('repositories').scrollIntoView({behavior: 'smooth'});
  }
}
