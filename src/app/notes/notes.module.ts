import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { CommentComponent } from './comment/comment.component';
import { NotesRoutingModule } from './notes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NotesRoutingModule
  ],
  exports: [RegisterComponent, SearchComponent, CommentComponent],
  declarations: [RegisterComponent, SearchComponent, CommentComponent]
})
export class NotesModule { }
