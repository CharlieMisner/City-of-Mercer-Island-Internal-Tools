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
project: Project;
contact: Contact;
  constructor(){
    this.statuses= ['WCI', 'IN REVIEW', 'APPROVED', 'NA'];
    this.project = new Project();
    this.contact = new Contact();
    console.log(this.project)
  }

  ngOnInit(){

  }

  title = 'City of Mercer Island - Building Permit Notification Email';
}
