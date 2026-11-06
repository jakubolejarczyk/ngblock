import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonTextComponent } from './button-text.control';

@Component({
  selector: 'ngb-button-text-host',
  imports: [ButtonTextComponent],
  template: '<ngb-button-text-control>Save</ngb-button-text-control>',
})
class ButtonTextHost {}

describe('ButtonTextComponent', () => {
  let fixture: ComponentFixture<ButtonTextHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonTextHost],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonTextHost);
  });

  it('projects its label into a native button', async () => {
    fixture.detectChanges();

    await fixture.whenStable();

    expect(fixture.nativeElement.querySelector('button').textContent.trim()).toBe(
      'Save',
    );
  });

  it('defaults to button type and can be disabled', () => {
    const buttonFixture = TestBed.createComponent(ButtonTextComponent);
    buttonFixture.componentRef.setInput('disabled', true);
    buttonFixture.detectChanges();

    const button: HTMLButtonElement =
      buttonFixture.nativeElement.querySelector('button');

    expect(button.type).toBe('button');
    expect(button.disabled).toBe(true);
  });

  it('supports a custom native button type', () => {
    const buttonFixture = TestBed.createComponent(ButtonTextComponent);
    buttonFixture.componentRef.setInput('type', 'submit');
    buttonFixture.detectChanges();

    const button: HTMLButtonElement =
      buttonFixture.nativeElement.querySelector('button');

    expect(button.type).toBe('submit');
  });
});
