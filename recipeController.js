const express = require('express');
const BodyParser = require("body-parser");
var router = express.Router();
var Channel = require("../Models/channel");
var Recipe = require('../Models/recipe');
var Ingredient = require('../Models/Ingredient');

router.use(BodyParser.json());
router.use(BodyParser.urlencoded({ extended: true }));

router.post("/new", isLoggedIn, async (request, response) => {
    try {
        var recipe = new Recipe({
            name: request.body.name,
            description: request.body.description,
            ingredients: request.body.ingredients,
            stepsToCook: request.body.steps,
            author: {
                id: request.user._id,
                username: request.user.username
            }
        })
        request.user.recipes.push(recipe);
        request.user.save();
        var result = await recipe.save();
    }
    catch (error) {
        console.log(error);
        console.log("hi");
        response.status(500).send(error);
    }
});

router.post("/ingredients/new", isLoggedIn, async (request, response) => {
    var name; var image; var density;
    console.log("ela unav",request.body.name);
    try {
        var ingredient = new Ingredient({
            name: request.body.name,
            image: request.body.image,
            density: request.body.density,
        })
        var result = await ingredient.save();
    }
    catch (error) {
        console.log("hiiiii",error);
        response.status(500).send(error);
    }
});

router.get('/', isLoggedIn, (req, res) => {

    Recipe.find().populate().exec((err, recipes) => {
        if (err) {
            console.log("Unable to retrieve recipes");
        } else {
            res.send(recipes);
        }
    });

});

router.get("/:id", isLoggedIn, async (request, response) => {
    try {
        var result = await Recipe.findById(request.params.id, (error, recipe) => {
            if (error) return response.status(500);
            result = recipe;
            response.send(result);
        });
    }
    catch (error) {
        response.status(500).send(error);
    }
});

router.put("/:id", isLoggedIn, async (request, response) => {
    try {
        var result = await Recipe.findByIdAndUpdate(request.params.id, request.body, (error, recipe) => {
            if (error) return response.status(500);
            result = recipe;
        })
        response.send(result);
    }
    catch (error) {
        response.status(500).send(error);
    }
});

router.delete("/:id", isLoggedIn, async (request, response) => {
    try {
        var result = await Recipe.findByIdAndRemove(request.params.id, (error, recipe) => {
            if (error) return response.status(500);
            result = recipe;
        })
        response.send(result);
    }
    catch (error) {
        response.status(500).send(error);
    }
});


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.send("No logged in user!!");
    }
}

module.exports = router;