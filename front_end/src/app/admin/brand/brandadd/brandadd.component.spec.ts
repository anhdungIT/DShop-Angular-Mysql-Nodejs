import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandaddComponent } from './brandadd.component';

describe('BrandaddComponent', () => {
  let component: BrandaddComponent;
  let fixture: ComponentFixture<BrandaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandaddComponent]
    });
    fixture = TestBed.createComponent(BrandaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
