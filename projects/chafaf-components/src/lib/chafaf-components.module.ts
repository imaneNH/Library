import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChafafComponentsComponent } from './chafaf-components.component';
import { ButtonComponent } from './chafaf-components/button/button.component';



@NgModule({
  declarations: [
    ChafafComponentsComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChafafComponentsComponent,
    ButtonComponent
  ]
})
export class ChafafComponentsModule { }
