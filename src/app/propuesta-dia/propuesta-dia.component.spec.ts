import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropuestaDiaComponent } from './propuesta-dia.component';

describe('PropuestaDiaComponent', () => {
  let component: PropuestaDiaComponent;
  let fixture: ComponentFixture<PropuestaDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropuestaDiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropuestaDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
