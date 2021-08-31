import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  app: any;
  pageList: any[] = [];

  constructor(public appService: AppService) {
    this.pageList = this.appService.PageList;
  }

  ngOnInit(): void {
    this.app = this.appService.AppProps;
  }

  openSideBar() {
    this.appService.changeSideNav();
  }
}
