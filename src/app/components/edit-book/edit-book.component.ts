import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['../../app.component.scss']
})
export class EditBookComponent implements OnInit {
  numberBookInList!: number;
  book = JSON.parse(localStorage.getItem('book') as string)
  alertShow = false;

  constructor(private fb: FormBuilder, private router: Router, private service: ApiService) { }
  form = this.fb.group({
    'description': ['', Validators.required],
    'title': ['', Validators.required],
    'countPages': ['', Validators.required],
    'date': ['', Validators.required],
  })

  ngOnInit() {
    this.numberBookInList = this.service.newBookList.findIndex(b => b.title === this.book.title);
  }
  
  close() {
    this.router.navigate(['list'])
  }
  
  onSubmit() {
    const book = {
      "id": this.service.newBookList.length + 1,
      "title": this.form.controls.title.value as unknown as string,
      "description": this.form.controls.description.value as unknown as string,
      "pageCount": this.form.controls.countPages.value as unknown as number,
      "excerpt": '' as unknown as string,
      "publishDate": this.form.controls.date.value as unknown as Date,
    }
    this.service.newBookList[this.numberBookInList] = book;
    this.alertShow = true;
  }

}

