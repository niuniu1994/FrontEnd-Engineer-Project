import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupContainsComponent } from './popup-contains.component';

describe('PopupContainsComponent', () => {
  let component: PopupContainsComponent;
  let fixture: ComponentFixture<PopupContainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupContainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupContainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
