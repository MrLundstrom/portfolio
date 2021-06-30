import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollServiceService {
  public skills = new Subject()
  public projects = new Subject();
  public splash = new Subject();
  public about = new Subject();
  public repositories = new Subject();

  constructor() { }

  scrollTo(page: string) {
    if (page == 'skills') {
      this.skills.next();
    } else if (page == 'projects') {
      this.projects.next();
    } else if (page == 'splash') {
      this.splash.next();
    } else if (page == 'about'){
      this.about.next();
    } else{
      this.repositories.next();
    }
  }
}
