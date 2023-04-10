import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParnetComponent } from './parnet.component';

describe('ParnetComponent', () => {
  let component: ParnetComponent;
  let fixture: ComponentFixture<ParnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParnetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
