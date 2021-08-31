import { Injectable } from '@angular/core';

type pageListType = {
  title: string;
  name: string;
  icon: string;
  linkTo: string;
  roles: string[];
}

type appPropsType = {
  name: string;
  icon: string;
  code: number;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public isSideNavOpen: boolean;

  private appProps: appPropsType = {
    name: 'Template',
    icon: 'home',
    code: 0
  };

  private pages: pageListType[] = [
    {
      title: 'buttons',
      name: 'Buttons',
      icon: 'touch_app',
      linkTo: '/buttons',
      roles: ['ADS'],
    },
    {
      title: 'datapicker',
      name: 'Datapicker',
      icon: 'date_range',
      linkTo: '/datapicker',
      roles: ['ADS'],
    },
    {
      title: 'table',
      name: 'Table',
      icon: 'table_rows',
      linkTo: '/table',
      roles: ['ADS'],
    },
    {
      title: 'select',
      name: 'Select',
      icon: 'smart_button',
      linkTo: '/select',
      roles: ['ADS'],
    }
  ];

  constructor() {
    this.isSideNavOpen = true;
  }

  changeSideNav(){
    this.isSideNavOpen = !this.isSideNavOpen;
  }

  get sideNavOpen() {
    return this.isSideNavOpen;
  }

  get PageList() {
    return this.pages;
  }

  get AppProps() {
    return this.appProps;
  }
}
