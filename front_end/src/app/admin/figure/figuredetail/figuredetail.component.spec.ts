import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiguredetailComponent } from './figuredetail.component';

describe('FiguredetailComponent', () => {
  let component: FiguredetailComponent;
  let fixture: ComponentFixture<FiguredetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiguredetailComponent]
    });
    fixture = TestBed.createComponent(FiguredetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
