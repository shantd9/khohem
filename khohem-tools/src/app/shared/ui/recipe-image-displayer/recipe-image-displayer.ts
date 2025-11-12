import {Component, inject, Input} from '@angular/core';
import { EditService } from '../../services/edit.service';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-recipe-image-displayer',
  imports: [
    NgStyle
  ],
  templateUrl: './recipe-image-displayer.html',
  styleUrl: './recipe-image-displayer.scss'
})
export class RecipeImageDisplayer {
  editService = inject(EditService);
  @Input() imageUrl: string = ''
}
