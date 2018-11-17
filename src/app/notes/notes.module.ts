import { CoreModule } from './../core/core.module';
import { UniqueUserValidatorService } from './shared/unique-user-validator.service';
import { UserRegisterService } from './shared/user-register.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './pages/register/register.component';
import { SearchComponent } from './pages/search/search.component';
import { CommentComponent } from './pages/comment/comment.component';
import { NotesRoutingModule } from './notes-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatOptionModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { NoteRegisterComponent } from './pages/note-register/note-register.component';
import { ErrorMessageComponent } from '../core/input-error/input-error.directive';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    NotesRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    HttpClientModule,
    CoreModule,
    FileUploadModule
  ],
  declarations: [RegisterComponent, SearchComponent, CommentComponent, NoteRegisterComponent, ErrorMessageComponent],
  providers: [UserRegisterService, UniqueUserValidatorService],
  entryComponents: [ErrorMessageComponent]
})
export class NotesModule { }
