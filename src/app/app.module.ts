import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFire, faSun, faMoon, faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faAngular, faBehance, faHtml5, faJs, faSass, faCss3Alt, faGitAlt, faJava, faNpm, faReact } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';
import smoothscroll from 'smoothscroll-polyfill';

import { AppComponent } from './app.component';
import { SplashComponent } from './components/splash/splash.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TimelineEventComponent } from './components/timeline-event/timeline-event.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    NavbarComponent,
    ContentComponent,
    SkillsComponent,
    ProjectsComponent,
    AboutComponent,
    TimelineComponent,
    TimelineEventComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(
      faLinkedin, faGithub, faAngular, faBehance, faHtml5, faJs, faSass, faFire, faCss3Alt,
      faGitAlt, faJava, faSun, faMoon, faIdCard, faNpm, faReact
    );
    smoothscroll.polyfill();
  }
}
