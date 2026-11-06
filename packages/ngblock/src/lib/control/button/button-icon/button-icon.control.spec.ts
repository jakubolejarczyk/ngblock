import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { ButtonIconComponent } from './button-icon.control';

describe('ButtonIconComponent', () => {
  let fixture: ComponentFixture<ButtonIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonIconComponent);
    fixture.componentRef.setInput('icon', 'favorite');
    fixture.componentRef.setInput('ariaLabel', 'Add to favorites');
  });

  it('renders the selected icon and accessible label', () => {
    fixture.detectChanges();

    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');

    expect(button.textContent.trim()).toBe('★');
    expect(button.getAttribute('aria-label')).toBe('Add to favorites');
  });

  it('supports button type and disabled inputs', () => {
    fixture.componentRef.setInput('type', 'submit');
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');

    expect(button.type).toBe('submit');
    expect(button.disabled).toBe(true);
  });

  it('emits the native click event', () => {
    const clickHandler = vi.fn();
    fixture.componentInstance.buttonClick.subscribe(clickHandler);
    fixture.detectChanges();

    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    button.click();

    expect(clickHandler).toHaveBeenCalledOnce();
    expect(clickHandler).toHaveBeenCalledWith(
      expect.objectContaining({ target: button }),
    );
  });
});
