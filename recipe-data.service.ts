import { Ingredient } from '../models/Ingredient';
import { Injectable } from '@angular/core';
import { Channel } from '../models/Channel';
import { Recipe } from '../models/Recipe';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})


export class RecipeDataService {
  channel: Channel;
  SERVER_URI = 'http://localhost:3000/'
  constructor(private http: HttpClient) {
    // this.channel = new Channel();
    // this.channel.name = "Akarsh";
    // this.channel.recipes = [];
  }
  getRecipebyId(id): Observable<Recipe> {
    console.log("Recieved get recipe with : " + id);
    var URL = "http://localhost:3000/recipes/" + id;
    return this.http.get<Recipe>(URL, { withCredentials: true });
  }

  addRecipe(recipe) {
    // this.channel.recipes = [...this.channel.recipes, recipe];
    var URL = "http://localhost:3000/recipes/new";
    console.log("sending this  " + recipe);
    var response = this.http.post<Recipe>(URL,
      recipe, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')

    }
    ).subscribe(data => {
      console.log(data);
    });
  }

  addIngredient(ingredient){
    var URL = "http://localhost:3000/recipes/ingredients/new";
    console.log("sending this  " + ingredient);
    var response = this.http.post<Ingredient>(URL,
      ingredient, {
        observe: 'body',
        withCredentials: true,
        headers: new HttpHeaders().append('Content-Type', 'application/json')
      }
      ).subscribe(data => {
        console.log(data);
      });
  }

  getChannelRecipes(channelId): Observable<Recipe[]> {
    var URL = "http://localhost:3000/channel/" + channelId + "/recipes";
    var response = this.http.get<Recipe[]>(URL, { withCredentials: true });
    console.log("Received response " + response);
    return response;
  }

  getRecipes(): Observable<Recipe[]> {
    var URL = "http://localhost:3000/recipes";
    var recipes;
    recipes = this.http.get<Recipe[]>(URL, { withCredentials: true })
    // console.log(response);
    return recipes;
  }


  ngOnDestroy() { console.log("dying"); }

}
