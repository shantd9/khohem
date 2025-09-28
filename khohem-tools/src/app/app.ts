import {Component} from '@angular/core';
import html2canvas from 'html2canvas';
import {RecipeImageDisplayer} from './ui/recipe-image-displayer/recipe-image-displayer';
import {IngredientsList} from './ui/ingredients-list/ingredients-list';
import {RecipeTitle} from './ui/recipe-title/recipe-title';
import {Recipe} from './shared/interfaces/recipe';
import {UnitKey} from './shared/interfaces/unit';
import {IngredientKey} from './shared/interfaces/ingredient';

@Component({
  selector: 'app-root',
  imports: [
    RecipeImageDisplayer,
    IngredientsList,
    RecipeTitle
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  recipe: Recipe = {
    title: "Strawberry Tart",
    titleHy: "Ելակով Թարթ",
    sections: [
      {
        sectionTitle: 'dough',
        sectionTitleHy: 'խմոր',
        ingredients: [
          { quantity: "1 ½", unit: UnitKey.Cup, ingredient: IngredientKey.Flour },
          { quantity: "½", unit: UnitKey.Cup, ingredient: IngredientKey.PowderedSugar },
          { quantity: "½", unit: UnitKey.Tablespoon, ingredient: IngredientKey.Oil },
          { quantity: "1", unit: UnitKey.Teaspoon, ingredient: IngredientKey.BakingPowder },
          { quantity: "½", unit: UnitKey.Piece, ingredient: IngredientKey.EggYolk },
          { quantity: "½", unit: UnitKey.Cup, ingredient: IngredientKey.Butter },
          { quantity: "", unit: UnitKey.Pinch, ingredient: IngredientKey.VanillaPowder },
        ]
      },
      {
        sectionTitle: 'cream',
        sectionTitleHy: 'քրէմ',
        ingredients: [
          { quantity: "1", unit: UnitKey.Cup, ingredient: IngredientKey.Milk },
          { quantity: "1", unit: UnitKey.Piece, ingredient: IngredientKey.Egg },
          { quantity: "1", unit: UnitKey.Tablespoon, ingredient: IngredientKey.Flour },
          { quantity: "¼", unit: UnitKey.Cup, ingredient: IngredientKey.Sugar },
        ]
      },
      {
        sectionTitle: 'glaze',
        sectionTitleHy: 'ջնարակ',
        ingredients: [
          { quantity: "2", unit: UnitKey.Tablespoon, ingredient: IngredientKey.StrawberryJelly },
          { quantity: "4", unit: UnitKey.Tablespoon, ingredient: IngredientKey.HotWater },
          { quantity: "2", unit: UnitKey.Tablespoon, ingredient: IngredientKey.ApricotJam },
        ]
      }
    ]
  };
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
