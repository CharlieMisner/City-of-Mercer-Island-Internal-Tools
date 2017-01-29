import { Component, OnInit } from '@angular/core';

class Project {
  projectName= 'A Building';
  permitNumber = '1234-567';
  address = 'Somewhere'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
statuses: String[];
project: Project;
  constructor(){
    this.statuses= ['WCI', 'IN REVIEW', 'APPROVED', 'NA'];
    this.project = new Project()
    console.log(this.project)
  }

  ngOnInit(){

  }

  title = 'City of Mercer Island - Building Permit Notification Email';
}
