import {Component} from '@angular/core';
import html2canvas from 'html2canvas';
import {RecipeImageDisplayer} from './ui/recipe-image-displayer/recipe-image-displayer';
import {IngredientsList} from './ui/ingredients-list/ingredients-list';

@Component({
  selector: 'app-root',
  imports: [
    RecipeImageDisplayer,
    IngredientsList
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // recipe = {
  //   title: "Strawberry Tart",
  //   sections: [
  //     {
  //       sectionTitle: 'dough',
  //       ingredients: [
  //         {
  //           unit: '1 ½ cups',
  //           name: 'flour'
  //         },
  //         {
  //           unit: '½ cup',
  //           name: 'sugar (powdered)'
  //         },
  //         {
  //           unit: '½ c. cup',
  //           name: 'sunflower oil'
  //         },
  //         {
  //           unit: '1 tsp',
  //           name: 'baking powder'
  //         },
  //         {
  //           unit: '½',
  //           name: 'egg yolk'
  //         },
  //         {
  //           unit: '½ cup',
  //           name: 'butter'
  //         },
  //         {
  //           unit: 'pinch',
  //           name: 'vanilla powder'
  //         }
  //       ]
  //     },
  //     {
  //       sectionTitle: 'creme',
  //       ingredients: [
  //         {
  //           unit: '1 cup',
  //           name: 'milk'
  //         },
  //         {
  //           unit: '1',
  //           name: 'egg'
  //         },
  //         {
  //           unit: '1 tbsp',
  //           name: 'flour'
  //         },
  //         {
  //           unit: '¼ cup',
  //           name: 'sugar'
  //         }
  //       ]
  //     },
  //     {
  //       sectionTitle: 'glaze',
  //       ingredients: [
  //         {
  //           unit: '2 tbsp',
  //           name: 'strawberry jello'
  //         },
  //         {
  //           unit: '4 tbsp',
  //           name: 'warm water'
  //         },
  //         {
  //           unit: '2 tbsp',
  //           name: 'apricot jam'
  //         }
  //       ]
  //     }
  //   ]
  // }
  recipe = {
    title: "Ելակով Թարթ",
    sections: [
      {
        sectionTitle: 'խմոր',
        ingredients: [
          {
            unit: '1 ½ գ ',
            name: 'ալիւր'
          },
          {
            unit: '½ գ',
            name: 'փոշի շաքար'
          },
          {
            unit: '½ ս. գ',
            name: 'ձէթ'
          },
          {
            unit: '1 թ. դգ',
            name: 'պէյքինկ փաուտըր'
          },
          {
            unit: '½ հատ',
            name: 'հաւկիթի դեղնուց'
          },
          {
            unit: '½ գ',
            name: 'կարագ'
          },
          {
            unit: 'պտղունց մը',
            name: 'փոշի վանիլ'
          }
        ]
      },
      {
        sectionTitle: 'քրէմ',
        ingredients: [
          {
            unit: '1 գ',
            name: 'կաթ'
          },
          {
            unit: '1 հատ',
            name: 'հաւկիթ'
          },
          {
            unit: '1 ա. դգ',
            name: 'ալիւր'
          },
          {
            unit: '¼ գ',
            name: 'շաքար'
          }
        ]
      },
      {
        sectionTitle: 'ջնարակ',
        ingredients: [
          {
            unit: '2 ա. դգ',
            name: 'ելակի ճելօ'
          },
          {
            unit: '4 ա. դգ',
            name: 'տաք ջուր'
          },
          {
            unit: '2 ա. դգ',
            name: 'ծիրանի անուշ'
          }
        ]
      }
    ]
  }

  downloadAsJpg(fileName: string = 'capture.jpeg') {
    const element = document.getElementById("recipe-wrapper");
    if (!element) return;

    html2canvas(element, {scale: 3}).then(canvas => {
      canvas.toBlob((blob) => {
        if (blob) {
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = fileName;
          link.click();
        }
      }, 'image/jpeg', 1); // JPEG quality
    });
  }
}
