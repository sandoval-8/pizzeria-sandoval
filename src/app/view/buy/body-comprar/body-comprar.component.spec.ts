import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyComprarComponent } from './body-comprar.component';

describe('BodyComprarComponent', () => {
  let component: BodyComprarComponent;
  let fixture: ComponentFixture<BodyComprarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyComprarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyComprarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
