import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['../../app.component.scss']
})
export class DescriptionComponent {
constructor(private service:ApiService,
 private router:Router){}

book = JSON.parse(localStorage.getItem('book') as string) 

close(){
this.router.navigate(['list'])
}

  editBook(){
    this.router.navigate(['list/edit-book']);
    
  }
}
