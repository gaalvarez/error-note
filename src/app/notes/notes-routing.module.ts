import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { SearchComponent } from './pages/search/search.component';
import { CommentComponent } from './pages/comment/comment.component';
import { NoteRegisterComponent } from './pages/note-register/note-register.component';
import { OktaAuthGuard } from '@okta/okta-angular';

export function onAuthRequired({ oktaAuth, router }) {
  // Redirect the user to your custom login page
  router.navigate(['/login']);
}

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [OktaAuthGuard],
    data: {
      onAuthRequired
    }
  },
  {
    path: 'comment',
    component: CommentComponent,
    canActivate: [OktaAuthGuard],
    data: {
      onAuthRequired
    }
  },
  {
    path: 'note-reg',
    component: NoteRegisterComponent,
    canActivate: [OktaAuthGuard],
    data: {
      onAuthRequired
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
