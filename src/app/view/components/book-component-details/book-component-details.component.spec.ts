import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponentDetailsComponent } from './book-component-details.component';

describe('BookComponentDetailsComponent', () => {
  let component: BookComponentDetailsComponent;
  let fixture: ComponentFixture<BookComponentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookComponentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
