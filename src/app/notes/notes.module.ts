import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './pages/register/register.component';
import { SearchComponent } from './pages/search/search.component';
import { CommentComponent } from './pages/comment/comment.component';
import { NotesRoutingModule } from './notes-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    NotesRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterComponent, SearchComponent, CommentComponent]
})
export class NotesModule { }
