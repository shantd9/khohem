import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeImageDisplayer } from './recipe-image-displayer';

describe('RecipeImageDisplayer', () => {
  let component: RecipeImageDisplayer;
  let fixture: ComponentFixture<RecipeImageDisplayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeImageDisplayer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeImageDisplayer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
