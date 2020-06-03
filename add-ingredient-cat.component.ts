import { RecipeDataService } from './../../../services/recipe-data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-ingredient-cat',
  templateUrl: './add-ingredient-cat.component.html',
  styleUrls: ['./add-ingredient-cat.component.css']
})
export class AddIngredientCatComponent implements OnInit {
  ingredientCatForm;
  ingredientCat;
  name: string;
  constructor(private formBuilder: FormBuilder,
    private RecipeDataService: RecipeDataService,
    private router: Router) {
    this.ingredientCatForm = formBuilder.group({
      name: '',
    });
  }

  ngOnInit(): void {
  }

  onIngredientCatSubmit(ingredientData) {
    this.ingredientCat = {
      name: ingredientData.name,
    };
    console.log("hiiii",this.ingredientCat);
    this.ingredientCatForm.reset();
    this.RecipeDataService.addIngredientCat(this.ingredientCat);
    this.router.navigateByUrl('/ingredients/category/new');
  }

}
