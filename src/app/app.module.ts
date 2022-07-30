import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing/app-routing.module';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { LoginComponent } from './Login/login/login.component';
import { BookListComponent } from './book-list/book-list.component';
import { JwtModule } from '@auth0/angular-jwt';
import { HomeComponent } from './Home/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guard/guards/auth.guard';
import { CustomersComponent } from './customers/customers.component';



export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    AddBookComponent,
    DeleteBookComponent,
    LoginComponent,
    HomeComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // AppRoutingModule,
    RouterModule.forRoot([
      { path: 'AddBook', component: AddBookComponent, pathMatch: 'full' },
      { path: 'customers', component: CustomersComponent,canActivate:[AuthGuard] },
      { path: 'booklist', component: BookListComponent, canActivate:[AuthGuard] },
      { path: 'Login', component: LoginComponent, pathMatch: 'full' },
      { path: '', component: HomeComponent, pathMatch: 'full' },
    ]),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: [ "localhost:44362"],
        disallowedRoutes: [""]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
