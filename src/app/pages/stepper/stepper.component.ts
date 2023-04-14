import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  constructor(private router: Router) {}

  public isLoading: boolean = true;
  public step: number = 0;
  public step1Checks: Array<{ id: string; checked: boolean; text: string }> = [
    { id: 'action', checked: false, text: 'Action' },
    { id: 'western', checked: false, text: 'Western' },
    { id: 'horror', checked: false, text: 'Horror' },
    { id: 'romantic', checked: false, text: 'Romantic' },
    { id: 'drama', checked: false, text: 'Drama' },
    { id: 'comedy', checked: false, text: 'Comedy' },
    { id: 'triller', checked: false, text: 'Thriller' },
    { id: 'kevin', checked: false, text: 'Kevin Hart Buddy Comedy' },
    { id: 'fiction', checked: false, text: 'Science Fiction' },
    { id: 'noir', checked: false, text: 'Noir' },
    { id: 'fantacy', checked: false, text: 'Fantacy' },
    { id: 'none', checked: false, text: 'None of the above' },
  ];

  public step2Radios: Array<{ id: number; text: string }> = [
    { id: 1, text: '0 - 3 years' },
    { id: 2, text: '4 - 6 years' },
    { id: 3, text: '7 or more years' },
  ];

  public selectedStep2Radio: number = 0;

  public step3Movies: Array<{ title: string; release: string }> = [
    {
      title: '',
      release: '',
    },
  ];

  public step4Radios: Array<{ id: number; text: string }> = [
    { id: 1, text: 'Popcorn' },
    { id: 2, text: 'Nachos' },
    { id: 3, text: 'Jonior Mints' },
    { id: 4, text: 'Milk Duds' },
    { id: 5, text: 'Skittles' },
    {
      id: 6,
      text: 'I only watch Criterion Collection films at Arthouses that disallow snacks because there might be a crinkling sound that disrupts other patrons.',
    },
  ];

  public selectedStep4Radio: number = 0;

  public step5Address: {
    addr1: string;
    addr2: string;
    city: string;
    state: string;
    zip: string;
  } = {
    addr1: '',
    addr2: '',
    city: '',
    state: '',
    zip: '',
  };

  public ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 800);
  }

  public AddFavoriteMovie() {
    this.step3Movies.push({ title: '', release: '' });
  }

  public NextStep() {
    if (this.step === 4) {
      this.step = 0;
      this.router.navigate(['/final']);
    } else {
      this.step++;
    }
  }

  public PrevStep() {
    this.step--;
  }

  public ExitAssament() {
    this.router.navigate(['/final']);
  }
}
