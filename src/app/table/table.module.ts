import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableColumnDirective, TableComponent, TableDataCellDirective } from './table.component';

const COMPONENTS = [TableComponent, TableColumnDirective, TableDataCellDirective];

@NgModule({
  imports: [CommonModule],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
})
export class TableModule {}
