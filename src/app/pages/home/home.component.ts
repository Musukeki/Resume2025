import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { PersonalInfoComponent } from '../personal-info/personal-info.component';
import { MainContentComponent } from '../main-content/main-content.component';
import { HeaderSettingService } from '../../@Service/headerSettings.service';

// ** 資料來源 **
import jsonData from '../../../assets/data.json';

@Component({
  selector: 'app-home',
  imports: [PersonalInfoComponent, MainContentComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(
    private headerSettings: HeaderSettingService,
    private router: Router
  ) {}
  // ** 全域變數 **
  avatar: string = jsonData.avatar;

  ngOnInit() {}

  // 前往作品牆
  checkToPortfolio() {
    this.router.navigate(['/portfolio']);
  }
}
