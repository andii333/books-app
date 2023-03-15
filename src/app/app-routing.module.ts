import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './components/add-book/add-book.component';
import { AlertComponent } from './components/alert/alert.component';
import { DescriptionComponent } from './components/description/description.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { BookOpenGuard } from './guards/book-open.guard';
import { BookListResolver } from './resolvers/book-list.resolver';

const routes: Routes = [
  
  { path: 'list', component: ListBooksComponent, resolve: { listBooks: BookListResolver }, 
  children:[
    { path: 'description', canActivate: [BookOpenGuard], component: DescriptionComponent},
    { path: 'add-book', component: AddBookComponent},
    { path: 'alert', component: AlertComponent},
    { path: 'edit-book', canActivate:[BookOpenGuard], component: EditBookComponent},
]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
