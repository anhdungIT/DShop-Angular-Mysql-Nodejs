import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandeditComponent } from './brandedit.component';

describe('BrandeditComponent', () => {
  let component: BrandeditComponent;
  let fixture: ComponentFixture<BrandeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandeditComponent]
    });
    fixture = TestBed.createComponent(BrandeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
