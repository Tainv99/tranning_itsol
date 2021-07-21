import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-import-connective',
  templateUrl: './import-connective.component.html',
  styleUrls: ['./import-connective.component.css']
})
export class ImportConnectiveComponent implements OnInit {
  namefile;
  file ;
  uploadForm: FormGroup;
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ImportConnectiveComponent>,

  ) { }

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }
// tslint:disable-next-line:typedef
  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('profile').value);
    this.http.post<any>(`http://localhost:8082/customer/import`, formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err),
    );
    this.closeDialog();
  }
  // tslint:disable-next-line:typedef
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
      console.log(file.name);
      this.namefile = file.name;
    }
  }
  // tslint:disable-next-line:typedef
  closeDialog() {
    alert('success');
    this.dialogRef.close();
  }
}
