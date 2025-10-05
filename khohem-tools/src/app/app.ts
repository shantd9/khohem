import {Component, input, OnInit, signal} from '@angular/core';
import html2canvas from 'html2canvas';
import {RecipeImageDisplayer} from './ui/recipe-image-displayer/recipe-image-displayer';
import {IngredientsList} from './ui/ingredients-list/ingredients-list';
import {RecipeTitle} from './ui/recipe-title/recipe-title';
import {Recipe} from './shared/interfaces/recipe';
import {strawberryTart} from './ui/database';
import {ttoum} from './ui/database/ttoum';

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
export class App implements OnInit {
  recipe = signal<Recipe | null>(null);
  language = signal<'en' | 'hy'>('en')

  ngOnInit() {
    this.recipe.update(() => ttoum);
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

  toggleToArmenian() {
    this.language.update(() => 'hy')
  }

  toggleToEnglish() {
    this.language.update(() => 'en')
  }
}
