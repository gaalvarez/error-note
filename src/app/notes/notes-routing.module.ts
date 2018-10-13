import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'search', component: SearchComponent },
  { path: 'comment', component: CommentComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
