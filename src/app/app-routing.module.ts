import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './notes/pages/register/register.component';
import { SearchComponent } from './notes/pages/search/search.component';
import { CommentComponent } from './notes/pages/comment/comment.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'search', component: SearchComponent },
  { path: 'comment', component: CommentComponent }
 ];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
