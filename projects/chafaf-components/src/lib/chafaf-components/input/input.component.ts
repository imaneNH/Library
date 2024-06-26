import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  encapsulation: ViewEncapsulation.None,
})



export class InputComponent implements OnInit {

  passwordFieldType: string = 'password';
  @Input() label: string = 'Input';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() label1: string = '';
  @Input() label2: string = '';
  @Input() options: string[] = [];
  @Input() inputStyle: 'search' | 'contact' | 'textarea' | 'email' | 'password' | 'firstname' | 'lastname' | 'socialnumber' | 'phone' | 'file' | 'mosque' | 'address' | 'country' | 'amount' | 'title' | 'list'| 'checkbox' | undefined;
  @Input() customInputStyle: any = {};
  @Input() customFrameStyle: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  selectedValue: string = '';

  onRadioChange(event: Event): void {
    this.selectedValue = (event.target as HTMLInputElement).value;
  }

  togglePasswordVisibility(): void {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

}
