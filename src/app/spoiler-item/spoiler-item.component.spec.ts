import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpoilerItemComponent } from './spoiler-item.component';

describe('SpoilerItemComponent', () => {
  let component: SpoilerItemComponent;
  let fixture: ComponentFixture<SpoilerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpoilerItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpoilerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
