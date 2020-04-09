import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  data: string;

  constructor(public dialog: MatDialog, private router: Router) {
  }

  ngOnInit() {
  }
  navigateToRoute(menu) {
    console.log("menu", menu)
    if (menu == 'login') {
      this.loginModal();
    } else if (menu == 'about') {
      this.router.navigate(['/home']);
    } else if (menu == 'gallery') {
      this.router.navigate(['/gallery']);
    } else {
      this.router.navigate(['/home']);
    }
  }

  loginModal() {
    let dialog;
    const dialogRef = this.dialog.open(LoginComponent, {
      height: '60%',
      width: '70%',
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
  ngDoCheck() {
    this.data = localStorage.getItem('showGallery');
    console.log("data", typeof (this.data))

  }
}
