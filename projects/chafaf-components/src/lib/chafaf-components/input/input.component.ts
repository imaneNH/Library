import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})



export class InputComponent implements OnInit {

  @Input() inputStyle : ''| undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
