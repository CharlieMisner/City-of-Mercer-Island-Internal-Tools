import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';
import { Contact } from '../contact';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';


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

  private emailURL = 'http://127.0.0.1:8000/emails/';

  constructor(private http: Http) {
    this.statuses = ['WCI', 'IN REVIEW', 'APPROVED', 'NA'];
    this.subs = ['SUB1', 'SUB2', 'SUB3', 'SUB4', 'SUB5', 'SUB6', 'SUB7', 'SUB8']
  }

  sendEmail(emailtest: string): void {
    console.log('Attempt Send...');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.emailURL, { "test": "test" }, options).toPromise()
  }

  ngOnInit() {
  }
}