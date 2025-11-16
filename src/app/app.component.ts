import { Component, OnInit } from '@angular/core';
import { PersonalInfoComponent } from './pages/personal-info/personal-info.component';
import { MainContentComponent } from './pages/main-content/main-content.component';
import { Title } from '@angular/platform-browser';

// ** 資料來源 **
import jsonData from '../assets/data.json';
import { HeaderSettingService } from './@Service/headerSettings.service';

@Component({
  selector: 'app-root',
  imports: [PersonalInfoComponent, MainContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private title: Title,
    private headerSettings: HeaderSettingService
  ) {}
  // ** 全域變數 **
  avatar: string = jsonData.avatar;

  ngOnInit() {
    this.title.setTitle(jsonData.headTitle);
  }
}
