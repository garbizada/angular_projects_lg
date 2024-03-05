import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForFirstComponent } from './ng-for-first.component';

describe('NgForFirstComponent', () => {
  let component: NgForFirstComponent;
  let fixture: ComponentFixture<NgForFirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgForFirstComponent]
    });
    fixture = TestBed.createComponent(NgForFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
