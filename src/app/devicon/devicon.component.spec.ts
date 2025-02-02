import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviconComponent } from './devicon.component';

describe('DeviconComponent', () => {
  let component: DeviconComponent;
  let fixture: ComponentFixture<DeviconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
