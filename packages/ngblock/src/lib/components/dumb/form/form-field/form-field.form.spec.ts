import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormFieldFormComponent } from './form-field.form';

describe('FormFieldFormComponent', () => {
  let fixture: ComponentFixture<FormFieldFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldFormComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(FormFieldFormComponent);
    fixture.componentRef.setInput('label', 'Email');
    fixture.componentRef.setInput('controlId', 'email');
  });

  it('renders its label and hint', () => {
    fixture.componentRef.setInput('hint', 'Use your work address');
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Email');
    expect(fixture.nativeElement.textContent).toContain(
      'Use your work address',
    );
  });

  it('shows an error instead of the hint', () => {
    fixture.componentRef.setInput('hint', 'Use your work address');
    fixture.componentRef.setInput('error', 'Email is required');
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Email is required');
    expect(fixture.nativeElement.textContent).not.toContain(
      'Use your work address',
    );
  });
});
