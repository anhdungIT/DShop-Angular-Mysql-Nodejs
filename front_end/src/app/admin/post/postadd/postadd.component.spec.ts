import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostaddComponent } from './postadd.component';

describe('PostaddComponent', () => {
  let component: PostaddComponent;
  let fixture: ComponentFixture<PostaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostaddComponent]
    });
    fixture = TestBed.createComponent(PostaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
