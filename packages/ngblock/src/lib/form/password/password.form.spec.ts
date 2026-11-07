import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasswordFormComponent } from './password.form';

describe('PasswordFormComponent', () => {
  let fixture: ComponentFixture<PasswordFormComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordFormComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(PasswordFormComponent);
    fixture.componentRef.setInput('label', 'Password');
  });

  it('reveals and hides the password with its accessible toggle', () => {
    fixture.detectChanges();
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    const toggle: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    expect(input.type).toBe('password');
    toggle.click();
    fixture.detectChanges();
    expect(input.type).toBe('text');
    expect(toggle.getAttribute('aria-label')).toBe('Hide password');
  });
});
