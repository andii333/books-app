import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['../../app.component.scss']
})
export class AlertComponent {
  constructor(private router:Router){}
  openAddBook(){
this.router.navigate(['list/add-book'])
  }
  closeAddBook(){
this.router.navigate(['list'])
  }
}
