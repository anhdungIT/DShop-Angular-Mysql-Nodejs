import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcateeditComponent } from './postcateedit.component';

describe('PostcateeditComponent', () => {
  let component: PostcateeditComponent;
  let fixture: ComponentFixture<PostcateeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostcateeditComponent]
    });
    fixture = TestBed.createComponent(PostcateeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
