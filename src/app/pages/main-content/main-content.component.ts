import { Component } from '@angular/core';

// ** 資料來源 **
import jsonData from '../../../assets/data.json';

@Component({
  selector: 'app-main-content',
  imports: [],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  // ** 全域變數 **
  // 主要資料
  mainInfo: any = jsonData.mainInfo;
}
