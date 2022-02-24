import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleBookComponent } from './handle-book.component';

describe('HandleBookComponent', () => {
  let component: HandleBookComponent;
  let fixture: ComponentFixture<HandleBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandleBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
