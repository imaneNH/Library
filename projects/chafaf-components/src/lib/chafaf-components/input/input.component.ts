import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})



export class InputComponent implements OnInit {

  passwordFieldType: string = 'password';
  @Input() label: string = 'Input';
  @Input() placeholder: string = 'Enter text';
  @Input() inputStyle: 'search' | 'contact' | 'textarea' | 'email' | 'password' | 'firstname' | 'lastname' | 'socialnumber' | 'phone' | 'file' | 'mosque' | 'address' | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }


  togglePasswordVisibility(): void {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

}
