import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html' ,
  styleUrls: ['./button.component.css'] 
})
export class ButtonComponent implements OnInit {

  @Input() label: string = 'Button';
  @Input() type: string = "button";
  @Input() buttonStyle : 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() buttonStyle2 : 'btn pdf' | 'btn excel' | 'btn csv' | undefined; 
  constructor() { }

  ngOnInit(): void {
  }

}
