import { Router } from '@angular/router';
import { RecipeDataService } from './../../../services/recipe-data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-add-ingredients',
  templateUrl: './add-ingredients.component.html',
  styleUrls: ['./add-ingredients.component.css']
})
export class AddIngredientsComponent implements OnInit {
  ingredientForm;
  ingredient;
  name: string;
  imageUrl: string;
  density: Number;
  constructor(private formBuilder: FormBuilder,
    private RecipeDataService: RecipeDataService,
    private router: Router) {
    this.ingredientForm = formBuilder.group({
      name: '',
      image: '',
      density: ''
    });
  }

  ngOnInit(): void {
  }

  onIngredientSubmit(ingredientData) {
    this.ingredient = {
      name: ingredientData.name,
      imageUrl: ingredientData.image,
      density: ingredientData.density
    };
    console.log("hiiii",this.ingredient);
    this.ingredientForm.reset();
    this.RecipeDataService.addIngredient(this.ingredient);
    this.router.navigateByUrl('/ingredients/new');
  }
}
