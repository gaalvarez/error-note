import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'error-note';
  count = 0;

  ngOnInit(): void {
    console.log('Hello Angular from console');
  }

  increment() {
    this.count++;
  }
}
