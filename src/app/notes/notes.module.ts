import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './pages/register/register.component';
import { SearchComponent } from './pages/search/search.component';
import { CommentComponent } from './pages/comment/comment.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [RegisterComponent, SearchComponent, CommentComponent],
  declarations: [RegisterComponent, SearchComponent, CommentComponent]
})
export class NotesModule { }
