import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Br3Component } from './br3.component';

describe('Br3Component', () => {
  let component: Br3Component;
  let fixture: ComponentFixture<Br3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Br3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Br3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
