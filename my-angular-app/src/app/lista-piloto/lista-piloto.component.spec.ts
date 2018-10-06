import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPilotoComponent } from './lista-piloto.component';

describe('ListaPilotoComponent', () => {
  let component: ListaPilotoComponent;
  let fixture: ComponentFixture<ListaPilotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPilotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPilotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
