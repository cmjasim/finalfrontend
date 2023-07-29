import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsloteComponent } from './vslote.component';

describe('VsloteComponent', () => {
  let component: VsloteComponent;
  let fixture: ComponentFixture<VsloteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VsloteComponent]
    });
    fixture = TestBed.createComponent(VsloteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
