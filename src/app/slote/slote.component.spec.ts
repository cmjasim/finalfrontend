import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SloteComponent } from './slote.component';

describe('SloteComponent', () => {
  let component: SloteComponent;
  let fixture: ComponentFixture<SloteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SloteComponent]
    });
    fixture = TestBed.createComponent(SloteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
