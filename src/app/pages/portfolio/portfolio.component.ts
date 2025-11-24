import { routes } from './../../app.routes';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

// ** 引入 masonry 套件 **
import Masonry from 'masonry-layout';

// ** 資料來源 **
import jsonData from '../../../assets/portfolio.json';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  standalone: true,
})
export class PortfolioComponent implements AfterViewInit {
  @ViewChild('grid') gridRef!: ElementRef;

  portfolioData = jsonData;

  constructor(private router: Router) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    const gridEl = this.gridRef.nativeElement;

    const msnry = new Masonry(gridEl, {
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true,
      gutter: 0,
    });
  }

  // 前往作品內頁
  linkTo(url: any) {
    // this.router.navigate([link]);

    window.open(url, '_blank');
  }
}
