import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEscuderiaComponent } from './lista-escuderia.component';

describe('ListaEscuderiaComponent', () => {
  let component: ListaEscuderiaComponent;
  let fixture: ComponentFixture<ListaEscuderiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEscuderiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEscuderiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
