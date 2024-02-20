import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigureeditComponent } from './figureedit.component';

describe('FigureeditComponent', () => {
  let component: FigureeditComponent;
  let fixture: ComponentFixture<FigureeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FigureeditComponent]
    });
    fixture = TestBed.createComponent(FigureeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
