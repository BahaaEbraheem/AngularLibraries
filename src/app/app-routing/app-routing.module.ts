import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from '../add-book/add-book.component';


const routes: Routes = [
  
    {
      path:'AddBook',
      component:AddBookComponent,
      pathMatch:'full'
    }
  ,
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




