import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public faqItems: Array<{ id: number; title: string; text: string }> = [
    {
      id: 1,
      title: 'How do I contact a Person?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nobis, corrupti accusantium, eum beatae numquam rem vero exercitationem id maxime, odit ad quas dicta. Explicabo labore at nostrum unde obcaecati!',
    },
    {
      id: 2,
      title: 'What can a Person do for me?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nobis, corrupti accusantium, eum beatae numquam rem vero exercitationem id maxime, odit ad quas dicta. Explicabo labore at nostrum unde obcaecati!',
    },
    {
      id: 3,
      title: 'Do I have to fill out an assessment?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nobis, corrupti accusantium, eum beatae numquam rem vero exercitationem id maxime, odit ad quas dicta. Explicabo labore at nostrum unde obcaecati!',
    },
  ];
}
