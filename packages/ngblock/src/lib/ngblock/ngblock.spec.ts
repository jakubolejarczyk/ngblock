import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ngblock } from './ngblock';

describe('Ngblock', () => {
  let component: Ngblock;
  let fixture: ComponentFixture<Ngblock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngblock],
    }).compileComponents();

    fixture = TestBed.createComponent(Ngblock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
