import { Component, OnInit } from '@angular/core';
import { ScrollServiceService } from 'src/app/services/scroll-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  root = document.documentElement;
  showMenu = false;
  day = true;

  constructor(private scrollService: ScrollServiceService) { }

  ngOnInit() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.toggleMode()
    }
  }

  scroll(name: string) {
    this.scrollService.scrollTo(name);
  }
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  toggleMode() {
    if (this.day) {
      this.root.style.setProperty('--text', 'rgb(230,230,230)');
      this.root.style.setProperty('--bg', 'rgb(30,30,30)');
    } else {
      this.root.style.setProperty('--bg', 'rgb(230,230,230)');
      this.root.style.setProperty('--text', 'rgb(30,30,30)');
    }
    this.day = !this.day;
  }

}
