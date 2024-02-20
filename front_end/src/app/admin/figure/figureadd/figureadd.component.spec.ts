import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigureaddComponent } from './figureadd.component';

describe('FigureaddComponent', () => {
  let component: FigureaddComponent;
  let fixture: ComponentFixture<FigureaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FigureaddComponent]
    });
    fixture = TestBed.createComponent(FigureaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
