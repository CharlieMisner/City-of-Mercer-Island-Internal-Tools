import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';
import { Contact } from '../contact';

@Component({
  selector: 'app-notification-email',
  templateUrl: './notification-email.component.html',
  styleUrls: ['./notification-email.component.css']
})
export class NotificationEmailComponent implements OnInit {
  @Input() project: Project;
  @Input() contact: Contact;
  @Input() submissionNumber: string;

  constructor() {}

  ngOnInit() {
  }

}
