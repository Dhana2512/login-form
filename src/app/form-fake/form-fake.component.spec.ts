import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFakeComponent } from './form-fake.component';

describe('FormFakeComponent', () => {
  let component: FormFakeComponent;
  let fixture: ComponentFixture<FormFakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
