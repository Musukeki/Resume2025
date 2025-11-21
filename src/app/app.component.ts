import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

// ** 資料來源 **
import jsonData from '../assets/data.json';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private title: Title) {}
  // ** 全域變數 **
  avatar: string = jsonData.avatar;

  ngOnInit() {
    this.title.setTitle(jsonData.headTitle);
  }
}
