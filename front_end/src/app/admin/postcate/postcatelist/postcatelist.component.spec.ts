import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcatelistComponent } from './postcatelist.component';

describe('PostcatelistComponent', () => {
  let component: PostcatelistComponent;
  let fixture: ComponentFixture<PostcatelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostcatelistComponent]
    });
    fixture = TestBed.createComponent(PostcatelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
