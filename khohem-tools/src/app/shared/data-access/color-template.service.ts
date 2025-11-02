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
      sectionsTitleOdd: "#5a6ff6",
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
    },
    {
      id: 3,
      titleColor: "#FDF4C4",
      sectionsColorEven: "#FDF4C4",
      sectionsColorOdd: "#FFFFFF",
      sectionsTitleEven: "#000000",
      sectionsTitleOdd: "#000000",
      unitColor: "#FDF4C4",
      ingredientColor: "#ffffff",
      backgroundColor: "#201F1F"
    },
    {
      id: 4,
      titleColor: "#FADF70",
      sectionsColorEven: "#FDF4C4",
      sectionsColorOdd: "#FFFFFF",
      sectionsTitleEven: "#000000",
      sectionsTitleOdd: "#000000",
      unitColor: "#FADF70",
      ingredientColor: "#FFFFFF",
      backgroundColor: "#bf7647"
    },
    {
      id: 5,
      titleColor: "#AF2E84",
      sectionsColorEven: "#FFFFFF",
      sectionsColorOdd: "#FFFFFF",
      sectionsTitleEven: "#FFFFFF",
      sectionsTitleOdd: "#FFFFFF",
      unitColor: "#AF2E84",
      ingredientColor: "#5C4277",
      backgroundColor: "#CFE17F"
    }
  ])

  _selectedColorTemplateId: WritableSignal<number> = signal(1)

  getColorTemplateMainColors(): Pick<ColorTemplate, 'id' | 'titleColor' | 'backgroundColor'>[] {
    return this._colorTemplates().map(ct => ({
      id: ct.id,
      titleColor: ct.titleColor,
      backgroundColor: ct.backgroundColor
    }) )
  }

  getSelectedColorTemplate(): ColorTemplate | undefined {
    return this._colorTemplates().find(ct => ct.id === this._selectedColorTemplateId())
  }

  getTitleColor(): string {
    return this.getSelectedColorTemplate()?.titleColor || "#000000"
  }

  getBackgroundColor(): string {
    return this.getSelectedColorTemplate()?.backgroundColor || "#ffffff"
  }

  getSectionColorEven(): string {
    return this.getSelectedColorTemplate()?.sectionsColorEven || "#ffffff"
  }

  getSectionColorOdd(): string {
    return this.getSelectedColorTemplate()?.sectionsColorOdd || "#ffffff"
  }

  getSectionTitleColorEven(): string {
    return this.getSelectedColorTemplate()?.sectionsTitleEven || "#000000"
  }

  getSectionTitleColorOdd(): string {
    return this.getSelectedColorTemplate()?.sectionsTitleOdd || "#000000"
  }

  getUnitColor(): string {
    return this.getSelectedColorTemplate()?.unitColor || "#000000"
  }

  getIngredientColor(): string {
    return this.getSelectedColorTemplate()?.ingredientColor || "#000000"
  }

  setSelectedColorTemplate(id: number) {
    this._selectedColorTemplateId.set(id)
  }

  toggleSelectedColorTemplate() {
    const currentId = this._selectedColorTemplateId()
    const currentIndex = this._colorTemplates().findIndex(ct => ct.id === currentId)
    const nextIndex = (currentIndex + 1) % this._colorTemplates().length
    this._selectedColorTemplateId.set(this._colorTemplates()[nextIndex].id)
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
