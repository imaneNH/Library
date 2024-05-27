import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChafafComponentsComponent } from './chafaf-components.component';

describe('ChafafComponentsComponent', () => {
  let component: ChafafComponentsComponent;
  let fixture: ComponentFixture<ChafafComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChafafComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChafafComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
