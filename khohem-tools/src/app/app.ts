import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('khohem-tools');

  recipe = {
    title: "Strawberry Tart",
    sections: [
      {
        sectionTitle: 'dough',
        ingredients: [
          {
            unit: '1 ½ cups',
            name: 'flour'
          },
          {
            unit: '½ cup',
            name: 'sugar (powdered)'
          },
          {
            unit: '½ c. cup',
            name: 'sunflower oil'
          },
          {
            unit: '1 tsp',
            name: 'baking powder'
          },
          {
            unit: '½',
            name: 'egg yolk'
          },
          {
            unit: '½ cup',
            name: 'butter'
          },
          {
            unit: 'pinch',
            name: 'vanilla powder'
          }
        ]
      },
      {
        sectionTitle: 'creme',
        ingredients: [
          {
            unit: '1 cup',
            name: 'milk'
          },
          {
            unit: '1',
            name: 'egg'
          },
          {
            unit: '1 tbsp',
            name: 'flour'
          },
          {
            unit: '¼ cup',
            name: 'sugar'
          }
        ]
      },
      {
        sectionTitle: 'glaze',
        ingredients: [
          {
            unit: '2 tbsp',
            name: 'strawberry jello'
          },
          {
            unit: '4 tbsp',
            name: 'warm water'
          },
          {
            unit: '2 tbsp',
            name: 'apricot jam'
          }
        ]
      }
    ]
  }
}
