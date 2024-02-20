import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigureforcateComponent } from './figureforcate.component';

describe('FigureforcateComponent', () => {
  let component: FigureforcateComponent;
  let fixture: ComponentFixture<FigureforcateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FigureforcateComponent]
    });
    fixture = TestBed.createComponent(FigureforcateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
