import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoHomeContentComponent } from './cargo-home-content.component';

describe('CargoHomeContentComponent', () => {
  let component: CargoHomeContentComponent;
  let fixture: ComponentFixture<CargoHomeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargoHomeContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargoHomeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
