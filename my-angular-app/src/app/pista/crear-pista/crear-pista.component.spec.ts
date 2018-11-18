import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPistaComponent } from './crear-pista.component';

describe('CrearPistaComponent', () => {
  let component: CrearPistaComponent;
  let fixture: ComponentFixture<CrearPistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
