import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfFirstComponent } from './ng-if-first.component';

describe('NgIfFirstComponent', () => {
  let component: NgIfFirstComponent;
  let fixture: ComponentFixture<NgIfFirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgIfFirstComponent]
    });
    fixture = TestBed.createComponent(NgIfFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
