import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  @Input() label : string ='label';
  constructor() { }

  ngOnInit(): void {
  }

}
