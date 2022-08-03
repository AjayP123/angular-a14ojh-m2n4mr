import { Component, Input } from '@angular/core';
import { dataTable } from './data.table.constant';
@Component({
  selector: 'app-zippy-multislot',
  templateUrl: './zippy-multislot.component.html',
  styleUrls: ['./zippy-multislot.component.scss'],
})
export class ZippyMultislotComponent {
  @Input() dataSource: any = dataTable.ReportContent;
  public readonly items: Array<number> = [1];
  public readonly: Array<{ header: string; templateType: number }> = [
    { header: 'Start Date-End Date', templateType: 2 },
    { header: 'Start Time-End Time', templateType: 2 },
    { header: 'Battery Start-Battery End', templateType: 2 },
    { header: 'Total Charging Duration', templateType: 1 },
    { header: 'Charging Location', templateType: 1 },
  ];
  // @Input() columsHeading: any = [
  //   { header: 'Start Date', value: 'StartDate' },
  //   { header: 'Start Time', value: 'StartTime' },
  //   { header: 'Battery Start', value: 'BatteryStart' },
  //   { header: 'Total Charging Duration', value: 'TotalChargingDuration' },
  //   { header: 'Charging Location', value: 'ChargingLocation' },
  //   { header: 'Distance Since Last Charge', value: 'DistanceSinceLastCharge' },
  //   { header: 'Assigned Driver', value: 'Type' },
  //   { header: 'responsive', value: 'responsive' },
  // ];
  @Input() columsHeading: any = [
    'StartDate',
    'StartTime',
    'BatteryStart',
    'TotalChargingDuration',
    'ChargingLocation',
    'DistanceSinceLastCharge',
    'AssignedDriver',
    'responsive',
  ];
  totalColumns = ['total'];
  getTotal(index: number, totalParameter: string, element?: any) {
    console.log(element);
    return this.dataSource.Sections[index].Footer.filter(
      (f: any) => f.Type === totalParameter
    )[0].Value;
    return 2;
  }
  public auditLogs = [
    { auditEventType: '06/07/2022', serialNumber: 1, createdBy: 'test_a' },
    { auditEventType: 'test', serialNumber: 1, createdBy: 'test_a' },
    { auditEventType: 'test', serialNumber: 1, createdBy: 'test_a' },
    { auditEventType: 'test', serialNumber: 1, createdBy: 'test_a' },
  ];
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
