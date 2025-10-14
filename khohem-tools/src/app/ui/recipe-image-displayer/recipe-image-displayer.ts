import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-recipe-image-displayer',
  imports: [
  ],
  templateUrl: './recipe-image-displayer.html',
  styleUrl: './recipe-image-displayer.scss'
})
export class RecipeImageDisplayer {
  @Input() imageUrl: string = ''
}
