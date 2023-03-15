import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { Book } from './interfaces/book';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'books-app';
  loading!: boolean;
  constructor(public router: Router) {
    router.events.subscribe((routerEvent) => {
      this.checkRouterEvent(routerEvent);
    });}
      ngOnInit(){
  }

  checkRouterEvent(routerEvent:any): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      this.loading = false;
    }
  }
}
