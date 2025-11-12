import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class EditService {
  pictureOffset = signal(0)

  // private edits = signal([]);
  //
  // getEdits() {
  //   return this.edits();
  // }
  //
  // addEdit(edit: any) {
  //   this.edits.set([...this.edits(), edit]);
  // }

}
