import { Component } from '@angular/core';

interface Car {
  brand: string;
  model: string;
  hp: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'web-components';

  data: Car[] = [
    {
      brand: 'Seat',
      model: 'Ibiza 6L',
      hp: 75,
    },
    {
      brand: 'Smart',
      model: 'fortwo',
      hp: 45,
    },
  ];
}
