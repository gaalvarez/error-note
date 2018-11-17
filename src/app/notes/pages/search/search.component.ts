import { Component, OnInit } from '@angular/core';
import { Note } from '../../shared/model/note';
import { Router } from '@angular/router';

export const NOTES: Note[] = [
  {
    title: '',
    language: '',
    tags: [],
    description: '',
    fileId: 0,
    solution: ''
  }
];

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  notes = NOTES;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(note: Note): void {
    this.router.navigate(['/comment']);
  }

}
