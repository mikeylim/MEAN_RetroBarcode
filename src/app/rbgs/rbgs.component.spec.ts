import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RbgsComponent } from './rbgs.component';

describe('RbgsComponent', () => {
  let component: RbgsComponent;
  let fixture: ComponentFixture<RbgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RbgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
