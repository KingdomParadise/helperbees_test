import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  public isLoading: boolean = true;

  constructor() {}

  public ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 300);
  }
}
