import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';
import { Contact } from '../contact';

@Component({
  selector: 'app-email-inputs',
  templateUrl: './email-inputs.component.html',
  styleUrls: ['./email-inputs.component.css']
})
export class EmailInputsComponent implements OnInit {
  @Input() project: Project;
  @Input() contact: Contact;
  statuses: String[];
  subs: String[];

  constructor() {
    this.statuses= ['WCI', 'IN REVIEW', 'APPROVED', 'NA'];
    this.subs = ['SUB1', 'SUB2', 'SUB3', 'SUB4', 'SUB5', 'SUB6', 'SUB7', 'SUB8']
  }

  ngOnInit() {
  }

}