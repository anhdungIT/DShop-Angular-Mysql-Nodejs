import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcateaddComponent } from './postcateadd.component';

describe('PostcateaddComponent', () => {
  let component: PostcateaddComponent;
  let fixture: ComponentFixture<PostcateaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostcateaddComponent]
    });
    fixture = TestBed.createComponent(PostcateaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
