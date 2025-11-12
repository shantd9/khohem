import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class EditService {
  pictureOffset = signal(0)
  gapBetweenItems = signal(0)
}
