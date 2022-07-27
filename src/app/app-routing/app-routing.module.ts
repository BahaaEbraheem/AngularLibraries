import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from '../add-book/add-book.component';
import { LoginComponent } from '../Login/login/login.component';
import { BookListComponent } from '../book-list/book-list.component';
import { HomeComponent } from '../Home/home/home.component';


const routes: Routes = [
  
    {
      path:'AddBook',
      component:AddBookComponent,
      pathMatch:'full'
    },  {
      path:'booklist',
      component:BookListComponent,
      pathMatch:'full'
    },
    {
      path:'Login',
      component:LoginComponent,
      pathMatch:'full'
    },    {
      path:'',
      component:HomeComponent,
      pathMatch:'full'
    },
  
  ];

  @NgModule({
  imports: [
    CommonModule,
  RouterModule.forRoot(routes)
  ],
  exports: [
  RouterModule
  ],
  declarations: []
  })
  export class AppRoutingModule { }




