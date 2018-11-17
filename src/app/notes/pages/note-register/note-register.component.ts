import { BaseComponent } from 'src/app/core/base-component/base.component';
import { TAGS } from './../../shared/mocks/mock-tags';
import { LoggerService } from 'src/app/core/logger/logger.service';
import { Note } from '../../shared/model/note';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { InputErrorService } from 'src/app/core/input-error/input-error.service';

const URL = 'http://localhost:8080/files';

@Component({
  selector: 'app-note-register',
  templateUrl: './note-register.component.html',
  styleUrls: ['./note-register.component.css']
})
export class NoteRegisterComponent extends BaseComponent implements OnInit {

  tags = TAGS;
  note: Note = {
    title: '',
    language: '',
    tags: [],
    description: '',
    fileId: 0,
    solution: '',
  };
  notesRegisterForm = this.fb.group({
    title: [this.note.title, Validators.required],
    language: [this.note.language, Validators.required],
    tags: [this.note.tags],
    description: [this.note.description, Validators.required],
    file: [],
    solution: [this.note.solution]
  });
  public uploader: FileUploader = new FileUploader({ url: URL });

  constructor(
    private fb: FormBuilder,
    private log: LoggerService,
    private ies: InputErrorService
  ) {
    super(ies);
  }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (item => {
      item.withCredentials = false;
   });
  }

  onAction() {
    this.uploadFile();
    this.log.info('registrar la site info: ' + JSON.stringify(this.notesRegisterForm.value as Note));
  }

  uploadFile(): any {
    this.uploader.uploadAll();
  }
}
