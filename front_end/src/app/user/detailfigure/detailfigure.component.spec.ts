import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailfigureComponent } from './detailfigure.component';

describe('DetailfigureComponent', () => {
  let component: DetailfigureComponent;
  let fixture: ComponentFixture<DetailfigureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailfigureComponent]
    });
    fixture = TestBed.createComponent(DetailfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
