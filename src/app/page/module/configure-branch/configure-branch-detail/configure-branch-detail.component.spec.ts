import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureBranchDetailComponent } from './configure-branch-detail.component';

describe('ConfigureBranchDetailComponent', () => {
  let component: ConfigureBranchDetailComponent;
  let fixture: ComponentFixture<ConfigureBranchDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureBranchDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureBranchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
