import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testservice2Component } from './testservice2.component';

describe('Testservice2Component', () => {
  let component: Testservice2Component;
  let fixture: ComponentFixture<Testservice2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testservice2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testservice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
