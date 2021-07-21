import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ImportConnectiveComponent} from '../import-connective/import-connective.component';
import {UpdateConnectiveComponent} from '../update-connective/update-connective.component';
import {HttpClient} from '@angular/common/http';
import {ConnectiveServiceService} from '../service/connective-service.service';
import {Connective} from '../model/connective';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {LoadService} from '../service/load.service';

@Component({
  selector: 'app-list-connective',
  templateUrl: './list-connective.component.html',
  styleUrls: ['./list-connective.component.css']
})
export class ListConnectiveComponent implements OnInit {
  result;
  connective: Connective = new Connective();
  sub: any;
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private conService: ConnectiveServiceService,
    private http: HttpClient,
    public loaderService: LoadService
  ) {
  }

  ngOnInit(): void {
    this.reLoad();
  }
  // tslint:disable-next-line:typedef
  reLoad() {
    this.sub = this.conService.getConnectiveList(this.connective)
      .subscribe(data => {
      this.result = data;
    });
  }
  // tslint:disable-next-line:typedef
  goToItems() {
    this.router.navigate(['admin/import']);
  }

  // tslint:disable-next-line:typedef
  openDialog() {
    this.dialog.open(ImportConnectiveComponent);
  }

  // tslint:disable-next-line:typedef
  openDialogUpdate(data: number) {
    // @ts-ignore
    this.dialog.open(UpdateConnectiveComponent, {panelClass: 'my-outlined-dialog', data: {id: data}});
  }

  // tslint:disable-next-line:typedef
  search() {
    this.http.post(`${environment.CON_URL}/seach`, this.connective)
      .subscribe(data => {
      this.result = data;
    });
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    this.search();
  }

  download(): Observable<Blob> {
    console.log(this.connective);
    // @ts-ignore
    return this.http.post(`${environment.CON_URL}/download/excel`, this.connective, {
      responseType: 'blob'
    }).subscribe(data => {
      const blob = new Blob([data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
