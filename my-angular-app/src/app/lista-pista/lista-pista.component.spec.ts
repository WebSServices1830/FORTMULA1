import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPistaComponent } from './lista-pista.component';

describe('ListaPistaComponent', () => {
  let component: ListaPistaComponent;
  let fixture: ComponentFixture<ListaPistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
