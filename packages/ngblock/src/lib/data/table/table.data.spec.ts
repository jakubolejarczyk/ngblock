import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  TableDataComponent,
  type DataColumn,
  type DataRow,
} from './table.data';

describe('TableDataComponent', () => {
  let fixture: ComponentFixture<TableDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableDataComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TableDataComponent);
    fixture.componentRef.setInput('columns', [
      { key: 'name', header: 'Name' },
    ] satisfies readonly DataColumn[]);
    fixture.componentRef.setInput('rows', [
      { name: 'Avery' },
    ] satisfies readonly DataRow[]);
  });

  it('renders accessible headers and row data', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('th').textContent).toBe('Name');
    expect(fixture.nativeElement.querySelector('tbody td').textContent).toBe(
      'Avery',
    );
    expect(
      fixture.nativeElement.querySelector('caption').textContent.trim(),
    ).toBe('Data');
  });

  it('shows an empty state when there are no rows', () => {
    fixture.componentRef.setInput('rows', []);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('tbody').textContent).toContain(
      'No data',
    );
  });
});
