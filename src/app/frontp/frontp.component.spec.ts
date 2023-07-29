import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontpComponent } from './frontp.component';

describe('FrontpComponent', () => {
  let component: FrontpComponent;
  let fixture: ComponentFixture<FrontpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontpComponent]
    });
    fixture = TestBed.createComponent(FrontpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
