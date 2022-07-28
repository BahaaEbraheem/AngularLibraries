import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { LoginComponent } from './Login/login/login.component';
import { BookListComponent } from './book-list/book-list.component';
import { JwtModule } from '@auth0/angular-jwt';
import { HomeComponent } from './Home/home/home.component';
import { AuthGuardServiceService } from './auth-guard-service.service';



export function tokenGetter(){
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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  JwtModule.forRoot({
    config:{
      tokenGetter:tokenGetter,
      allowedDomains:["localhost:5001","localhost:4200"],
      disallowedRoutes:[""]
     }
  })
  ],
  providers: [AuthGuardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
