import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {LoadService} from '../service/load.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  implements OnInit{
  response: Observable<any>;

  constructor(private http: HttpClient) {}

  // tslint:disable-next-line:typedef
  run() {
    const body = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };
    const url = 'https://jsonplaceholder.typicode.com/posts';
    this.response = this.http.post(url, body);
  }

  ngOnInit(): void {
  }
}
