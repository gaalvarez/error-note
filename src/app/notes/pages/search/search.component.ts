import { Component, OnInit } from '@angular/core';
import { Note } from '../../shared/note';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export const NOTES: Note[] = [
  { description: 'Error 1', languaje: 'drools', tipo: 'deploy' },
  { description: 'Error 2', languaje: 'phyton', tipo: 'config' },
  { description: 'Error 3', languaje: 'R', tipo: 'code' },
  { description: 'Error 4', languaje: 'javascript', tipo: 'config' },
  { description: 'Error 5', languaje: 'typescript', tipo: 'config' },
  { description: 'Error 6', languaje: 'java', tipo: 'config' },
];
