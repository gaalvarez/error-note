import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { LoginComponent } from './core/auth/login/login.component';
import { EnoteNavComponent } from './core/enote-nav/enote-nav.component';

const routes: Routes = [
  {
    path: '',
    component: EnoteNavComponent,
    children: [
      { path: 'notes', loadChildren: './notes/notes.module#NotesModule' },
    ]
  },
  { path: 'login', component: LoginComponent },

  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
