import { Component, OnInit } from '@angular/core';
import { Project } from './project';
import { Contact } from './contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
statuses: String[];
subs: String[];
project: Project;
contact: Contact;
submissionNumber: string;
  constructor(){
    this.statuses= ['WCI', 'IN REVIEW', 'APPROVED', 'NA'];
    this.subs = ['SUB1', 'SUB2', 'SUB3', 'SUB4', 'SUB5', 'SUB6', 'SUB7', 'SUB8'];
    this.project = new Project();
    this.contact = new Contact()
  }

  ngOnInit(){

  }

  title = 'City of Mercer Island - Building Permit Notification Email';
}
