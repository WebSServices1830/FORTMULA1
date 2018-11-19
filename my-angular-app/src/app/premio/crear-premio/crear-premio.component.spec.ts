import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPremioComponent } from './crear-premio.component';

describe('CrearPremioComponent', () => {
  let component: CrearPremioComponent;
  let fixture: ComponentFixture<CrearPremioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPremioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPremioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
