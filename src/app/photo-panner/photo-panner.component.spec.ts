import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoPannerComponent } from './photo-panner.component';

describe('PhotoPannerComponent', () => {
  let component: PhotoPannerComponent;
  let fixture: ComponentFixture<PhotoPannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoPannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoPannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
