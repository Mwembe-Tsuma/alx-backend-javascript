// task_3/js/crud.d.ts

import { RowID, RowElement } from '../interface';

declare module 'crud.js' {
  function insertRow(row: RowElement): RowID;
  function deleteRow(rowId: RowID): void;
  function updateRow(rowId: RowID, row: RowElement): RowID;
}
