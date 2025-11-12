import {Component, inject} from '@angular/core';
import html2canvas from 'html2canvas';
import {ColorTemplateService} from '../../data-access/color-template.service';
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
  colorTemplateService = inject(ColorTemplateService)

  downloadAsJpg(languages: string[]) {
    //TODO improve this later.
    const elements = document.getElementsByClassName('recipe-wrapper');
    if (elements.length === 0) return;
    for (let i = 0; i < elements.length; i++) {
      const el = elements[i] as HTMLElement;
      const lang = el.id.slice(-2);

      html2canvas(el, { scale: 3 }).then(canvas => {
        canvas.toBlob((blob) => {
          if (!blob) return;

          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = `Recipe ${lang}.jpeg`;
          if (languages.find(l => l === lang)) {
            link.click();
          }
        }, 'image/jpeg', 1);
      });
    }
  }
}
