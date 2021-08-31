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
export class LayoutService {
  public isSideNavOpen: boolean;

  public appProps: appPropsType = {
    name: 'Template',
    icon: 'home',
    code: 0
  };

  public pages: pageListType[] = [
    {
      title: 'Register',
      name: 'Page Register',
      icon: 'home',
      linkTo: 'HomePage',
      roles: ['ADS'],
    },
    {
      title: 'Register2',
      name: 'Page Register2',
      icon: 'home',
      linkTo: 'HomePage',
      roles: ['ADS'],
    }
  ];

  constructor() {
    this.isSideNavOpen = true;
  }

  changeSideNav(){
    this.isSideNavOpen = !this.isSideNavOpen;
  }

  get sideNavStatus() {
    return this.isSideNavOpen;
  }

  get PageList() {
    return this.pages;
  }

  get AppProps() {
    return this.appProps;
  }
}
