import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescriptionComponent } from './components/description/description.component';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { LoadingComponent } from './components/loading/loading.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './components/alert/alert.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';


@NgModule({
  declarations: [
    AppComponent,
    DescriptionComponent,
    ListBooksComponent,
    LoadingComponent,
    AddBookComponent,
    AlertComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
