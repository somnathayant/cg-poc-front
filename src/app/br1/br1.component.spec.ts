import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Br1Component } from './br1.component';

describe('Br1Component', () => {
  let component: Br1Component;
  let fixture: ComponentFixture<Br1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Br1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Br1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
