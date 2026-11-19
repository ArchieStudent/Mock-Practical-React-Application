import "dotenv/config";
import prisma from "../lib/prisma";

async function main() {
    await prisma.ingredient.deleteMany();
    await prisma.nutrition.deleteMany();
await prisma.recipe.deleteMany();
await prisma.cookbook.deleteMany();
    await prisma.chef.deleteMany();

    //chefs

    const rosaBell = await prisma.chef.create({
data: {
    name: "Rosa Bell",
    speciality: "Seafood",
    town: "Brixham",
}
    
    });

    //Add the rest of the chefs

    const tomAsante = await prisma.chef.create({
data: {
    name: "Tom Asante",
    speciality: "Street Food",
    town: "Exeter",
}
    
    });

    const meganPryce = await prisma.chef.create({
data: {
    name: "Megan Pryce",
    speciality: "Baking",
    town: "Newton Abbot",
}
    
    });

//cookbooks
const catchOfTheDay = await prisma.cookbook.create({
    data: {title: "Catch of the Day", publishedYear: 2021, chefId: rosaBell.id}
});

const harbourSuppers = await prisma.cookbook.create({
    data: {title: "Harbour Suppers", publishedYear: 2024, chefId: rosaBell.id}
});

const fireAndSpice = await prisma.cookbook.create({
    data: {title: "Fire and Spice", publishedYear: 2023, chefId: tomAsante.id}
});

const risingSlowly = await prisma.cookbook.create({
    data: {title: "Rising Slowly", publishedYear: 2025, chefId: meganPryce.id}
});

//recipes

const crabLinguine = await prisma.recipe.create({
    data: {title: "Crab Linguine", pageNumber: 14, cookingMinutes: 25, cookbookId: catchOfTheDay.id}
});


const mackerelToast = await prisma.recipe.create({
    data: {title: "Mackerel on Toast", pageNumber: 22, cookingMinutes: 15, cookbookId: catchOfTheDay.id}
});


const fishPie = await prisma.recipe.create({
    data: {title: "Brixham Fish Pie", pageNumber: 18, cookingMinutes: 60, cookbookId: harbourSuppers.id}
});

const scallops = await prisma.recipe.create({
    data: {title: "Seared Scallops", pageNumber: 40, cookingMinutes: 10, cookbookId: harbourSuppers.id}
});

const jerkChicken = await prisma.recipe.create({
    data: {title: "JerkChicken", pageNumber: 12, cookingMinutes: 90, cookbookId: fireAndSpice.id}
});

const chickpeaCurry = await prisma.recipe.create({
    data: {title: "Chickpea Curry", pageNumber: 27, cookingMinutes: 40, cookbookId: fireAndSpice.id}
});

   

//nutrition

const CrabLinguine = await prisma.nutrition.create({
    data: {calories: 610, saltGrams: 2.1, recipeId: crabLinguine.id}
});

const FishPie = await prisma.nutrition.create({
    data: {calories: 540, saltGrams: 1.8, recipeId: fishPie.id }
});

const JerkChicken = await prisma.nutrition.create({
    data: {calories: 480, saltGrams: 2.4, recipeId: jerkChicken.id }
});

const ChickpeaCurry = await prisma.nutrition.create({
    data: {calories: 390, saltGrams: 1.3, recipeId: chickpeaCurry.id }
});

//Ingredient
const garlic = await prisma.ingredient.create({
data: {
    name: "Garlic",
    allergen: false,
    allergenType: "N/A",
    recipe: { connect: [{ id:crabLinguine.id}, { id:jerkChicken.id}, { id:chickpeaCurry.id}] },
}

});

const butter = await prisma.ingredient.create({
data: {
    name: "Butter",
    allergen: true,
    allergenType: "Milk",
    recipe: { connect: [{ id:mackerelToast.id}, { id:fishPie.id}, { id:scallops.id}] },
}

});

const wheatFlour = await prisma.ingredient.create({
data: {
    name: "Wheat Flour",
    allergen: true,
    allergenType: "Gluten",
    recipe: { connect: [{ id:crabLinguine.id}, { id:fishPie.id}] },
}

});

const chilli = await prisma.ingredient.create({
data: {
    name: " Chilli",
    allergen: false,
    allergenType: "N/A",
    recipe: { connect: [{ id:crabLinguine.id}, { id:jerkChicken.id}, { id:chickpeaCurry.id}] },
}

});

const peanuts = await prisma.ingredient.create({
data: {
    name: " Peanuts",
    allergen: true,
    allergenType: "Peanuts",
    recipe: {},
}

});




    console.log("Seeding finished.");
}




main()
.catch((error) => {
    console.error(error);
    process.exit(1);
})
.finally(()=> prisma.$disconnect())
