import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Book } from '../interfaces/book';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class BookListResolver implements Resolve<Book> {
  constructor(private service:ApiService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book> {
   return  this.service.getListBooks();
  }
}
