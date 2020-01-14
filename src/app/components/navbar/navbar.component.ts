import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  root = document.documentElement;
  showMenu = false;
  day = true;

  constructor() { }

  ngOnInit() {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: "smooth" });
  }
  toggleMenu(){
    this.showMenu = !this.showMenu;
  }
  toggleMode(){
    if (this.day){
      this.root.style.setProperty('--text', 'rgb(240,240,240)');
      this.root.style.setProperty('--bg', 'rgb(25,25,25)');
    } else{
      this.root.style.setProperty('--bg', 'rgb(240,240,240)');
      this.root.style.setProperty('--text', 'rgb(25,25,25)');
    }
    this.day = !this.day;
  }

}
