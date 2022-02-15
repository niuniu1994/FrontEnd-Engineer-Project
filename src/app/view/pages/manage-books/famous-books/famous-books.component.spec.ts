import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamousBooksComponent } from './famous-books.component';

describe('FamousBooksComponent', () => {
  let component: FamousBooksComponent;
  let fixture: ComponentFixture<FamousBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamousBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamousBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
