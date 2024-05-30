import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChafafComponentsComponent } from './chafaf-components.component';
import { ButtonComponent } from './chafaf-components/button/button.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './chafaf-components/input/input.component';



@NgModule({
  declarations: [
    ChafafComponentsComponent,
    ButtonComponent,
    InputComponent,
  ],
  imports: [
    CommonModule, 
    FormsModule
  ],
  exports: [
    ChafafComponentsComponent,
    ButtonComponent,
    InputComponent
  ]
})
export class ChafafComponentsModule {
  static forRoot(authService: any): ModuleWithProviders<ChafafComponentsModule> {
    return {
      ngModule: ChafafComponentsModule,
      providers: [   
      ]
    };
  }

 }
