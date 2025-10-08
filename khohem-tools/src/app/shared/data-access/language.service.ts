import {Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  language: WritableSignal<'en'|'hy'> = signal<'en' | 'hy'>('en')

  getCurrentLanguage() {
    return this.language()
  }

  setLanguage(lang: 'en'|'hy') {
    this.language.set(lang)
  }
}

