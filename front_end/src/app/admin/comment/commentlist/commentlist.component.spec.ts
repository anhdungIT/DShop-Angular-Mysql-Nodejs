import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentlistComponent } from './commentlist.component';

describe('CommentlistComponent', () => {
  let component: CommentlistComponent;
  let fixture: ComponentFixture<CommentlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentlistComponent]
    });
    fixture = TestBed.createComponent(CommentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
