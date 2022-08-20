import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  template: '<h1>Hello World!</h1>',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
