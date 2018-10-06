import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscuderiaComponent } from './escuderia.component';

describe('EscuderiaComponent', () => {
  let component: EscuderiaComponent;
  let fixture: ComponentFixture<EscuderiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscuderiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscuderiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
