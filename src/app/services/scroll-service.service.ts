import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollServiceService {
  public skills = new Subject()
  public projects = new Subject();
  public splash = new Subject();

  constructor() { }

  scrollTo(page: string) {
    if (page == 'skills') {
      this.skills.next();
    } else if (page == 'projects') {
      this.projects.next();
    } else {
      this.splash.next();
    }
  }
}
