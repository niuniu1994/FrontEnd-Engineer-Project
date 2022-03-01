import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentariesComponent } from './commentaries.component';

describe('CommentairesComponent', () => {
  let component: CommentariesComponent;
  let fixture: ComponentFixture<CommentariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
