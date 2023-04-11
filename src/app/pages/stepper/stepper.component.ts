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
  public step1Checks: string[] = [
    'Action',
    'Western',
    'Horror',
    'Romantic',
    'Drama',
    'Comedy',
    'Thriller',
    'Kevin Hart Buddy Comedy',
    'Science Fiction',
    'Noir',
    'Fantacy',
    'None of the above',
  ];

  public step2Radios: string[] = [
    '0 - 3 years',
    '4 - 6 years',
    '7 or more years',
  ];

  public step3Movies: [{ title: string; release: string }] = [
    {
      title: '',
      release: '',
    },
  ];

  public step4Radios: string[] = [
    'Popcorn',
    'Nachos',
    'Jonior Mints',
    'Milk Duds',
    'Skittles',
    'I only watch Criterion Collection films at Arthouses that disallow snacks because there might be a crinkling sound that disrupts other patrons.',
  ];

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
