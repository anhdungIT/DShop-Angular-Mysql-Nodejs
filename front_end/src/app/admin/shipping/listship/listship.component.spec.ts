import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListshipComponent } from './listship.component';

describe('ListshipComponent', () => {
  let component: ListshipComponent;
  let fixture: ComponentFixture<ListshipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListshipComponent]
    });
    fixture = TestBed.createComponent(ListshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
