import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-button',
  template: `<button [ngStyle]="style">{{label}}</button>`,
  styles: [`button { padding: 10px 20px; border: none; cursor: pointer; }`]
})
export class ButtonComponent implements OnInit {

  @Input() label: string = 'Button';
  @Input() style: { [klass: string]: any; } = {};
  constructor() { }

  ngOnInit(): void {
  }

}
