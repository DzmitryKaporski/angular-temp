import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpoilerComponent } from './spoiler.component';

describe('SpoilerComponent', () => {
  let component: SpoilerComponent;
  let fixture: ComponentFixture<SpoilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpoilerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpoilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
