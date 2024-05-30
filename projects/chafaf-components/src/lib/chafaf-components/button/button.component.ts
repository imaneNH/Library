import { Component, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html' ,
  styleUrls: ['./button.component.css'] 
})
export class ButtonComponent implements OnInit {

  @Input() label: string = 'Button';
  @Input() type: 'button' | 'submit' | 'reset' | undefined;
  @Input() buttonStyle : 'next' |'primary' | 'secondary' | 'danger' | 'login' |'Accueil'| 'add'  | undefined; 

  @Input() style : string | undefined; 
  constructor() { }

  ngOnInit(): void {
    

  }

}
