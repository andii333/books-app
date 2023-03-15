import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Book } from 'src/app/interfaces/book';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['../../app.component.scss']
})

@Injectable({
  providedIn: 'root'
})

export class ListBooksComponent implements OnInit, OnDestroy {
  subscribeList!: Subscription;
  listBooks!: Book[];
  showListBooks!: Book[];
  increaseDecrease = true;

  constructor(private service: ApiService,
    private route: ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {
    this.subscribeList = this.route.data.subscribe((response) => {
      this.service.newBookList = response['listBooks'];
      this.listBooks = this.service.newBookList
      this.showListBooks = this.listBooks;
    }
    )
  }

  ngOnDestroy() {
    this.subscribeList.unsubscribe();
    localStorage.removeItem('book');
  }

  searchBook(text: HTMLInputElement) {
    this.showListBooks = this.listBooks;
    this.showListBooks = this.listBooks.filter(e => e.title.toLowerCase().includes(text.value.toLowerCase()))
  }

  sort(selected: HTMLSelectElement) {
    if (selected.value === 'title') {
      this.showListBooks = this.showListBooks.sort((a: any, b: any) => {
        if (this.increaseDecrease) {
          return a.title.split(' ')[1] - b.title.split(' ')[1]
        } else {
          return b.title.split(' ')[1] - a.title.split(' ')[1]
        }
      })
    } else {
      if (this.increaseDecrease) {
        this.showListBooks = this.showListBooks.sort((a: any, b: any) => {
          if (a[selected.value] < b[selected.value]) { return -1 } else
            if (a[selected.value] > b[selected.value]) { return 1 } else
              return 0;
        })
      } else {
        this.showListBooks = this.showListBooks.sort((a: any, b: any) => {
          if (a[selected.value] < b[selected.value]) { return 1 } else
            if (a[selected.value] > b[selected.value]) { return -1 } else
              return 0;
        })
      }
    }
  }

  descendingSort(selected: HTMLSelectElement) {
    this.increaseDecrease = false;
    this.sort(selected)
  }

  ascendingSort(selected: HTMLSelectElement) {
    this.increaseDecrease = true;
    this.sort(selected)
  }

  addBook() {
    this.router.navigate(['list/add-book'])
  }

  openWindowDescription(book: Book) {
    localStorage.setItem('book', JSON.stringify(book))
    this.router.navigate(['list/description']);
  }

}
