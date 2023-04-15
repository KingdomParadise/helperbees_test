import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadscrumb',
  templateUrl: './breadscrumb.component.html',
  styleUrls: ['./breadscrumb.component.scss'],
})
export class BreadscrumbComponent implements OnInit {
  constructor() {}

  public paths: Array<{ path: string; url: string }> = [
    {
      path: 'Home',
      url: '/',
    },
  ];
  public activePath: string = 'Plans';

  ngOnInit(): void {}
}
