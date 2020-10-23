import { Component, Input, OnInit } from '@angular/core';
import { Event } from 'src/app/interfaces/event';

@Component({
  selector: 'app-timeline-event',
  templateUrl: './timeline-event.component.html',
  styleUrls: ['./timeline-event.component.scss']
})
export class TimelineEventComponent implements OnInit {
  myEvent: Event;
  @Input()set event(events: Event) {
    this.myEvent = events
  }

  constructor() { }

  ngOnInit(): void {
  }


}
