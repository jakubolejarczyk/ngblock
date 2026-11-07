import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccordionMenuComponent } from './accordion.menu';

describe('AccordionMenuComponent', () => {
  let fixture: ComponentFixture<AccordionMenuComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionMenuComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AccordionMenuComponent);
    fixture.componentRef.setInput('items', [
      { title: 'Question', content: 'Answer' },
    ]);
  });

  it('expands an item when its trigger is activated', () => {
    fixture.detectChanges();
    fixture.nativeElement.querySelector('button').click();
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('[aria-expanded="true"]'),
    ).not.toBeNull();
    expect(fixture.nativeElement.textContent).toContain('Answer');
  });
});
