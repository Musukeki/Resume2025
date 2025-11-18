import { Component } from '@angular/core';

// ** 資料來源 **
import jsonData from '../../../assets/data.json';

@Component({
  selector: 'app-personal-info',
  imports: [],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss',
})
export class PersonalInfoComponent {
  // ** 全域變數 **
  // 基本資料
  basicInformation: any = jsonData.basicInformation;

  // 左側列表資料
  sidebarInfo: any[] = jsonData.sidebarInfo;

  ngOnInit() {
    this.sidebarInfo.forEach((i) => {
      console.log(i.dataLink);
    });
  }
}
