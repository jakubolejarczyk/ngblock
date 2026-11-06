import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button';

@Component({
  selector: 'ngb-button-host',
  imports: [ButtonComponent],
  template: '<ngb-button>Save</ngb-button>',
})
class ButtonHost {}

describe('ButtonComponent', () => {
  let fixture: ComponentFixture<ButtonHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonHost],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonHost);
  });

  it('projects its label into a native button', async () => {
    fixture.detectChanges();

    await fixture.whenStable();

    expect(fixture.nativeElement.querySelector('button').textContent.trim()).toBe(
      'Save',
    );
  });

  it('defaults to button type and can be disabled', () => {
    const buttonFixture = TestBed.createComponent(ButtonComponent);
    buttonFixture.componentRef.setInput('disabled', true);
    buttonFixture.detectChanges();

    const button: HTMLButtonElement =
      buttonFixture.nativeElement.querySelector('button');

    expect(button.type).toBe('button');
    expect(button.disabled).toBe(true);
  });

  it('supports a custom native button type', () => {
    const buttonFixture = TestBed.createComponent(ButtonComponent);
    buttonFixture.componentRef.setInput('type', 'submit');
    buttonFixture.detectChanges();

    const button: HTMLButtonElement =
      buttonFixture.nativeElement.querySelector('button');

    expect(button.type).toBe('submit');
  });
});
