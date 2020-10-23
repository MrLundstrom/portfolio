import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/interfaces/event';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  timeline:Event[] = [
    { year: 1992, description: 'I was born' },
    { year: 1998, description: 'Started school in Sturebyskolan' },
    { year: 2008, description: "Finnished school and started to attend upper secondary school at Mikael Elias Teoretiska Gymnasium" },
    { year: 2011, description: "Finnished upper secondary school" },
    { year: 2012, description: "Skied & snowboarded in Whistler, Canada for 6 months." },
    { year: 2013, description: "Backpacked through South America for four months with a friend and started Engineering preparatory year at KTH (Royal Institute of Technology" },
    { year: 2014, description: "Started studying Industrial engineering & management at the Faculty of Engineering, Lund University" },
    { year: 2020, description: "Almost finnished with my master, I decided to create this portfolio." }
  ]
  currentEvent:Event = this.timeline[0];

  constructor() { }

  ngOnInit(): void {
  }

  setEvent(event:Event){
    this.currentEvent = event;
    console.log(event);
  }



}
