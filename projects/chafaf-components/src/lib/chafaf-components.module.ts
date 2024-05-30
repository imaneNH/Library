import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChafafComponentsComponent } from './chafaf-components.component';
import { ButtonComponent } from './chafaf-components/button/button.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ChafafComponentsComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule, 
    FormsModule
  ],
  exports: [
    ChafafComponentsComponent,
    ButtonComponent,
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
