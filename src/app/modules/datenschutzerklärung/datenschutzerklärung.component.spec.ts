import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatenschutzerklärungComponent } from './datenschutzerklärung.component';

describe('DatenschutzerklärungComponent', () => {
  let component: DatenschutzerklärungComponent;
  let fixture: ComponentFixture<DatenschutzerklärungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatenschutzerklärungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatenschutzerklärungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
