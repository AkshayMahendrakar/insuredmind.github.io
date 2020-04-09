import { Component, OnInit, Inject } from '@angular/core';
import { VERSION, MatDialogRef, MatDialog, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { DataService } from 'src/app/services/data.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<LoginComponent>,
    private dataService: DataService
  ) { }

  ngOnInit() {
  }
  onClose(): void {
    this.dialogRef.close(true);
  }
  submit() {
    let data = {
      username: this.username,
      password: this.password
    }
     let result = this.dataService.getlogin(data)
     this.onClose()
  }
}
