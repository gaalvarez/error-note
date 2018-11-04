import { LoggerService } from 'src/app/core/logger/logger.service';
import { Note } from './../../shared/notes';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-register',
  templateUrl: './note-register.component.html',
  styleUrls: ['./note-register.component.css']
})
export class NoteRegisterComponent implements OnInit {

  note: Note = {
    title: '',
    language: '',
    tags: [],
    description: '',
    file: null,
    solution: '',
    links: []
  };
  notesRegisterForm = this.fb.group({
    title: [this.note.title],
    language: [this.note.language],
    tags: [this.note.tags],
    description: [this.note.description],
    file: [this.note.file],
    solution: [this.note.solution],
    links: [this.note.links]
  });
  errors = {
    required: 'el valor es requerido'
  };

  constructor(
    private fb: FormBuilder,
    private log: LoggerService
  ) { }

  ngOnInit() {
  }


  hasError(control: string): boolean {
    if (this.notesRegisterForm.controls[control].errors) {
      return true;
    } else {
      return false;
    }
  }

  messageError(control: string): string {
    if (this.notesRegisterForm.controls[control].errors) {
      return this.errors[Object.keys(this.notesRegisterForm.controls[control].errors)[0]];
    } else {
      return '';
    }
  }

  onAction() {
    this.log.info('registrar la site info: ' + JSON.stringify(this.note));
  }
}
