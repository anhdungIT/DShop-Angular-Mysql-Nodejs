import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCateComponent } from './blog-cate.component';

describe('BlogCateComponent', () => {
  let component: BlogCateComponent;
  let fixture: ComponentFixture<BlogCateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogCateComponent]
    });
    fixture = TestBed.createComponent(BlogCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
