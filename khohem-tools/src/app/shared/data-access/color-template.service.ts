import {Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorTemplateService {
  _colorTemplates: WritableSignal< ColorTemplate[] >= signal([
    {
      id: 1,
      titleColor: "#5a6ff6",
      sectionsColorEven: "#5a6ff6",
      sectionsColorOdd: "#ffffff",
      sectionsTitleEven: "#ffffff",
      sectionsTitleOdd: "#ffffff",
      unitColor: "#5a6ff6",
      ingredientColor: "#ffffff",
      backgroundColor: "#EDC675"
    },
    {
      id: 2,
      titleColor: "#F0965B",
      sectionsColorEven: "#A66651",
      sectionsColorOdd: "#A66651",
      sectionsTitleEven: "#ffffff",
      sectionsTitleOdd: "#ffffff",
      unitColor: "#f1dd55",
      ingredientColor: "#ffffff",
      backgroundColor: "#5d4278"
    }
  ])

  _selectedColorTemplateId: WritableSignal<number> = signal(1)


  getSelectedColorTemplate(): ColorTemplate | undefined {
    return this._colorTemplates().find(ct => ct.id === this._selectedColorTemplateId())
  }

  setSelectedColorTemplate(id: number) {
    this._selectedColorTemplateId.set(id)
  }

  constructor() {
  }
}

export interface ColorTemplate {
  id: number
  titleColor: string
  sectionsColorEven: string
  sectionsColorOdd: string
  sectionsTitleEven: string
  sectionsTitleOdd: string
  unitColor: string
  ingredientColor: string
  backgroundColor: string
}
