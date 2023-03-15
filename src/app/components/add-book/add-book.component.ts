import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['../../app.component.scss']
})
export class AddBookComponent {
  constructor(private fb: FormBuilder, private router: Router, private service: ApiService) { }
  form = this.fb.group({
    'description': ['', Validators.required],
    'title': ['', Validators.required],
    'countPages': ['', Validators.required],
    'date': ['', Validators.required],

  })

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
    this.service.newBookList.push(book)
this.form.reset();
    this.router.navigate(['list/alert'])
  }
}
