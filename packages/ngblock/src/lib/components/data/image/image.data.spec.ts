import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageDataComponent } from './image.data';

describe('ImageDataComponent', () => {
  let fixture: ComponentFixture<ImageDataComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageDataComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ImageDataComponent);
    fixture.componentRef.setInput('src', '/image.png');
    fixture.componentRef.setInput('alt', 'Example');
  });

  it('renders a descriptive image and optional caption', () => {
    fixture.componentRef.setInput('caption', 'Preview');
    fixture.detectChanges();
    const image: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(image.alt).toBe('Example');
    expect(fixture.nativeElement.querySelector('figcaption').textContent).toBe(
      'Preview',
    );
  });
});
