import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionBooksComponent } from './description-books.component';

describe('DescriptionBooksComponent', () => {
  let component: DescriptionBooksComponent;
  let fixture: ComponentFixture<DescriptionBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
