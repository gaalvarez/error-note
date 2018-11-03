import { Component, OnInit } from '@angular/core';
import { Note } from '../../shared/notes';
import { Router } from '@angular/router';

export const NOTES: Note[] = [
  { title: '',
  language: '',
  tags: [],
  description: '',
  file: null,
  solution: '',
  links: [] }
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
