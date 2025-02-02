import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviconContainerComponent } from './devicon-container.component';

describe('DeviconContainerComponent', () => {
  let component: DeviconContainerComponent;
  let fixture: ComponentFixture<DeviconContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviconContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviconContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
