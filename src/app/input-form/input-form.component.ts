import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.sass']
})
export class InputFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  bodies = ["test1","test2"];
  text;
  send() {
    this.bodies.push(this.text)
  }
}
