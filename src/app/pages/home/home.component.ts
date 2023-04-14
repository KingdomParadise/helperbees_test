import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public isLoading: boolean = true;

  constructor() {}

  public ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 300);
  }
}
