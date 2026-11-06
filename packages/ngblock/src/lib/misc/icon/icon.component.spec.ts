import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconComponent } from './icon.component';

describe('IconComponent', () => {
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconComponent);
    fixture.componentRef.setInput('glyph', '★');
  });

  it('renders the glyph as decorative content', () => {
    fixture.detectChanges();

    const icon: HTMLElement = fixture.nativeElement.querySelector('span');

    expect(icon.textContent).toBe('★');
    expect(icon.getAttribute('aria-hidden')).toBe('true');
  });
});
