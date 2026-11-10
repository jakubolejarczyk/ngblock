import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertMessageComponent } from './alert.message';

describe('AlertMessageComponent', () => {
  let fixture: ComponentFixture<AlertMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertMessageComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AlertMessageComponent);
  });

  it('uses a polite status role by default', () => {
    fixture.detectChanges();
    const alert = fixture.nativeElement.querySelector('div');
    expect(alert.getAttribute('role')).toBe('status');
    expect(alert.getAttribute('aria-live')).toBe('polite');
  });

  it('announces errors assertively', () => {
    fixture.componentRef.setInput('type', 'error');
    fixture.detectChanges();
    const alert = fixture.nativeElement.querySelector('div');
    expect(alert.getAttribute('role')).toBe('alert');
    expect(alert.getAttribute('aria-live')).toBe('assertive');
  });
});
