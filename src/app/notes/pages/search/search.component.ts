import { Component, OnInit } from '@angular/core';
import { Note } from '../../shared/note';
import { Router } from '@angular/router';

export const NOTES: Note[] = [
  { description: 'Error 1', language: 'drools', type: 'deploy' },
  { description: 'Error 2', language: 'phyton', type: 'config' },
  { description: 'Error 3', language: 'R', type: 'code' },
  { description: 'Error 4', language: 'javascript', type: 'config' },
  { description: 'Error 5', language: 'typescript', type: 'config' },
  { description: 'Error 6', language: 'java', type: 'config' },
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
