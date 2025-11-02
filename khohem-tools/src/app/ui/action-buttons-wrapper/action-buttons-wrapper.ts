import {Component, inject} from '@angular/core';
import html2canvas from 'html2canvas';
import {LanguageService} from '../../shared/data-access/language.service';
import {ColorTemplateService} from '../../shared/data-access/color-template.service';
import {ColorPickerComponent} from '../color-picker/color-picker';

@Component({
  selector: 'app-action-buttons-wrapper',
  imports: [
    ColorPickerComponent
  ],
  templateUrl: './action-buttons-wrapper.html',
  styleUrl: './action-buttons-wrapper.scss'
})
export class ActionButtonsWrapper {
  languageService = inject(LanguageService)
  colorTemplateService = inject(ColorTemplateService)

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
    this.languageService.setLanguage("hy")
  }

  toggleToEnglish() {
    this.languageService.setLanguage("en")
  }

  toggleStyles() {
    this.colorTemplateService.toggleSelectedColorTemplate()
  }
}
