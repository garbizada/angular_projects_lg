import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentFirstComponent } from './ng-content-first.component';

describe('NgContentFirstComponent', () => {
  let component: NgContentFirstComponent;
  let fixture: ComponentFixture<NgContentFirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgContentFirstComponent]
    });
    fixture = TestBed.createComponent(NgContentFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
