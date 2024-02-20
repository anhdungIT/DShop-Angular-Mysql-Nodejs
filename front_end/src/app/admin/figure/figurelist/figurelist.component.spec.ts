import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigurelistComponent } from './figurelist.component';

describe('FigurelistComponent', () => {
  let component: FigurelistComponent;
  let fixture: ComponentFixture<FigurelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FigurelistComponent]
    });
    fixture = TestBed.createComponent(FigurelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
