import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.step = parseInt(this.route.snapshot.params['step']) - 1;
    console.log(this.step);
    setTimeout(() => {
      this.isLoading = false;
    }, 800);
  }

  public isLoading: boolean = true;
  public step: number = 0;

  // Step 1
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
    { id: 'fantasy', checked: false, text: 'Fantasy' },
    { id: 'none', checked: false, text: 'None of the above' },
  ];

  public changeStep1Checks(id: string): void {
    // Uncheck all checkboxes and check the 'None' checkbox
    if (id === 'none') {
      this.step1Checks.forEach((item) => {
        if (item.id !== 'none') {
          item.checked = false;
        }
      });
    } else {
      // Uncheck the 'None' checkbox
      this.step1Checks.forEach((item) => {
        if (item.id === 'none') {
          item.checked = false;
        }
      });
    }
  }

  // Step 2
  public step2Radios: Array<{ id: number; text: string }> = [
    { id: 1, text: '0 - 3 years' },
    { id: 2, text: '4 - 6 years' },
    { id: 3, text: '7 or more years' },
  ];

  public selectedStep2Radio: number = 0;

  // Step 3
  public step3Movies: Array<{ title: string; release: string }> = [
    {
      title: '',
      release: '',
    },
  ];

  // Step 4
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

  // Step 5
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

  // Add movie
  public AddFavoriteMovie() {
    this.step3Movies.push({ title: '', release: '' });
  }

  // Next and Prev
  public NextStep() {
    if (this.step === 4) {
      this.step = 0;
      this.router.navigate(['/final']);
    } else {
      this.step++;
      this.router.navigate(['/stepper/' + (this.step + 1)]);
    }
  }

  public PrevStep() {
    this.step--;
    this.router.navigate(['/stepper/' + (this.step + 1)]);
  }

  // Exit Assessment
  public ExitAssessment() {
    this.step = 0;
    this.router.navigate(['/final']);
  }

  // validation for next button
  public getNextStatus(): boolean {
    switch (this.step) {
      case 0:
        return this.step1Checks.filter((c) => c.checked === true).length > 0;
      case 1:
        return this.selectedStep2Radio > 0;
      case 2:
        return (
          this.step3Movies.filter(
            (m) => m.title.length > 0 && m.release.length > 0
          ).length > 0
        );
      case 3:
        return this.selectedStep4Radio > 0;
      case 4:
        return (
          this.step5Address.addr1.trim().length > 0 &&
          this.step5Address.city.trim().length > 0 &&
          this.step5Address.state.trim().length > 0 &&
          this.step5Address.zip.trim().length > 0
        );
      default:
        return false;
    }
  }
}
