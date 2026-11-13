import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { FieldsetLayoutComponent } from './fieldset.layout';

describe('FieldsetLayoutComponent', () => {
  let fixture: ComponentFixture<FieldsetLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldsetLayoutComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(FieldsetLayoutComponent);
    fixture.componentRef.setInput('legend', 'Account');
    fixture.detectChanges();
  });

  it('renders a semantic fieldset and supports disabled state', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('fieldset').disabled).toBe(true);
    expect(fixture.nativeElement.querySelector('legend').textContent).toContain(
      'Account',
    );
  });
});
