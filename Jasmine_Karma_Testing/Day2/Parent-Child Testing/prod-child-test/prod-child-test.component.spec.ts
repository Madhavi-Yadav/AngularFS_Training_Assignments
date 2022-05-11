import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdChildTestComponent } from './prod-child-test.component';

describe('ProdChildTestComponent', () => {
  let component: ProdChildTestComponent;
  let fixture: ComponentFixture<ProdChildTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdChildTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdChildTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
