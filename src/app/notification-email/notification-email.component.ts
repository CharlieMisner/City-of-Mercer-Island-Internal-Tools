import { Component, OnInit, Input } from '@angular/core';
import { Project } from './project';

@Component({
  selector: 'app-notification-email',
  templateUrl: './notification-email.component.html',
  styleUrls: ['./notification-email.component.css']
})
export class NotificationEmailComponent implements OnInit {
  @Input() project: Project;

  constructor() {}

  ngOnInit() {
  }

}
