import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { SearchComponent } from './pages/search/search.component';
import { CommentComponent } from './pages/comment/comment.component';
import { NoteRegisterComponent } from './pages/note-register/note-register.component';


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'search', component: SearchComponent },
  { path: 'comment', component: CommentComponent },
  { path: 'note-reg', component: NoteRegisterComponent }
 ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
