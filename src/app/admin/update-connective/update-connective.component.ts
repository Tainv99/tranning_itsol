import {Component, Inject, OnInit} from '@angular/core';
import {Connective} from '../model/connective';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {ConnectiveServiceService} from '../service/connective-service.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-connective',
  templateUrl: './update-connective.component.html',
  styleUrls: ['./update-connective.component.css']
})
export class UpdateConnectiveComponent implements OnInit {
  id: number;
  connective = new Connective();
  conForm: FormGroup;
  submitted = false;
  myObjData: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private conService: ConnectiveServiceService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<UpdateConnectiveComponent>,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.conForm = this.formBuilder.group({
      codeAgent: [null, Validators.required],
      codeBranchAgent: [null, Validators.required],
    });
    this.getConById();
  }

  // tslint:disable-next-line:typedef
  closeDialog() {
    this.dialogRef.close();
  }

  // tslint:disable-next-line:typedef
  get f() {
    return this.conForm.controls;
  }

  // tslint:disable-next-line:typedef
  updateConnective() {
    this.http.post(`http://localhost:8082/customer/create`, this.conForm.value)
      .subscribe(data => {
        this.closeDialog();
        console.log(data);
        // this.connective = new Connective();
      }, error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;

    if (this.conForm.invalid) {
      return;
    }
    this.updateConnective();
  }

  // tslint:disable-next-line:typedef
  getConById() {
    this.conService.getConById(this.data.id)
      .subscribe(data => {
        this.myObjData = data;
        this.patchValueObjToForm();
        console.log(this.myObjData.id);
      }, error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  patchValueObjToForm() {
    // debugger;
    this.conForm.patchValue({codeAgent: this.myObjData.id});
    this.conForm.patchValue({codeAgent: this.myObjData.codeAgent});
    this.conForm.patchValue({codeBranchAgent: this.myObjData.codeBranchAgent});
  }

  // tslint:disable-next-line:typedef
  clear() {
    this.conForm.patchValue({codeAgent: ''});
    this.conForm.patchValue({codeBranchAgent: ''});
  }
}
