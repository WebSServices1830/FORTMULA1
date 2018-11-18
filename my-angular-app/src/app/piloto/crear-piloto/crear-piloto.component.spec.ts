import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPilotoComponent } from './crear-piloto.component';

describe('CrearPilotoComponent', () => {
  let component: CrearPilotoComponent;
  let fixture: ComponentFixture<CrearPilotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPilotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPilotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
