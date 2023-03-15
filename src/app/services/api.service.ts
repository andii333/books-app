import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http:HttpClient) {}

newBookList!: Book[];

getListBooks(){
  return this.http.get<Book>('https://fakerestapi.azurewebsites.net/api/v1/Books')
}

}
