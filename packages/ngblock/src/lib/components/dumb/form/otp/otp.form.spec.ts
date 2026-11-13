import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { OtpFormComponent } from './otp.form';

describe('OtpFormComponent', () => {
  let fixture: ComponentFixture<OtpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtpFormComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(OtpFormComponent);
    fixture.componentRef.setInput('label', 'Verification code');
    fixture.detectChanges();
  });

  it('limits values to the configured length and numeric characters', () => {
    const emit = vi.spyOn(fixture.componentInstance.changed, 'emit');
    const input = fixture.nativeElement.querySelector(
      'input',
    ) as HTMLInputElement;
    input.value = '12a34567';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(input.value).toBe('123456');
    expect(emit).toHaveBeenCalledWith('123456');
  });
});
