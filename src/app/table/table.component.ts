import { Component, ContentChild, ContentChildren, Directive, Input, QueryList, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTableDataCell]',
})
export class TableDataCellDirective {
  constructor(public template: TemplateRef<any>) {}
}

@Directive({
  selector: '[appTableColumn]',
})
export class TableColumnDirective {
  @ContentChild(TableDataCellDirective, { static: false })
  dataCell: TableDataCellDirective;

  @Input('appTableColumn')
  header: string;
}

@Component({
  selector: 'app-table',
  template: `
    <table>
      <thead>
        <tr>
          <ng-container *ngFor="let column of columns">
            <th>{{ column.header }}</th>
          </ng-container>
        </tr>
      </thead>

      <tbody>
        <tr *ngFor="let item of data">
          <ng-container *ngFor="let column of columns">
            <ng-container
              [ngTemplateOutlet]="column?.dataCell?.template"
              [ngTemplateOutletContext]="{ $implicit: item }"
            ></ng-container>
          </ng-container>
        </tr>
      </tbody>
    </table>
  `,
})
export class TableComponent {
  @ContentChildren(TableColumnDirective)
  columns: QueryList<TableColumnDirective>;

  @Input()
  data: ReadonlyArray<any>;
}
