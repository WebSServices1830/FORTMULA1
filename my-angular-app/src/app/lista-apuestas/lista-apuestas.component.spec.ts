import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaApuestasComponent } from './lista-apuestas.component';

describe('ListaApuestasComponent', () => {
  let component: ListaApuestasComponent;
  let fixture: ComponentFixture<ListaApuestasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaApuestasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaApuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
