import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})



export class InputComponent implements OnInit {

  @Input() placeholder: string = 'Enter text';
  @Input() label : string ='label';
  @Input() inputStyle: 'search' | 'contact' | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
