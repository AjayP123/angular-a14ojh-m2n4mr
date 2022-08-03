import { Component } from '@angular/core';

@Component({
  selector: 'table-basic',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableBasicComponent {
  displayedColumns: string[] = ['item', 'cost', 'cost1', 'cost2', 'cost3'];
  transactions: any[] = [
    { item: 'Beach ball', cost: 4 },
    { item: 'Towel', cost: 5 },
    { item: 'Frisbee', cost: 2 },
    { item: 'Sunscreen', cost: 4 },
    { item: 'Cooler', cost: 25 },
    { item: 'Swim suit', cost: 15 },
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions
      .map((t) => t.cost)
      .reduce((acc, value) => acc + value, 0);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
