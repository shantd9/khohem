import {Component, inject, output} from '@angular/core';
import html2canvas from 'html2canvas';
import {LanguageService} from '../../shared/data-access/language.service';
import {ColorTemplateService} from '../../shared/data-access/color-template.service';

@Component({
  selector: 'app-color-picker',
  imports: [],
  templateUrl: './color-picker.html',
  styleUrl: './color-picker.scss'
})
export class ColorPickerComponent {

  colorTemplateService = inject(ColorTemplateService);
  colorTemplateSelected = output<number>()

}
