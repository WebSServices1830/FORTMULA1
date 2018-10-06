import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPremioComponent } from './lista-premio.component';

describe('ListaPremioComponent', () => {
  let component: ListaPremioComponent;
  let fixture: ComponentFixture<ListaPremioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPremioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPremioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
