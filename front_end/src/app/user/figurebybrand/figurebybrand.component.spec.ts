import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigurebybrandComponent } from './figurebybrand.component';

describe('FigurebybrandComponent', () => {
  let component: FigurebybrandComponent;
  let fixture: ComponentFixture<FigurebybrandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FigurebybrandComponent]
    });
    fixture = TestBed.createComponent(FigurebybrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
