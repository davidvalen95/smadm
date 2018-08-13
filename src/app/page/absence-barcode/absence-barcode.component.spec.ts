import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceBarcodeComponent } from './absence-barcode.component';

describe('AbsenceBarcodeComponent', () => {
  let component: AbsenceBarcodeComponent;
  let fixture: ComponentFixture<AbsenceBarcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsenceBarcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsenceBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
