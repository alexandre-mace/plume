const transportCategory = "Déplacements";
const foodCategory = "Nourriture";
const housingCategory = "Logement";
const buyingCategory = "Achats";
const publicCategory = "Dépense publique";

const meat = "Viande";
const airplane = "Avion";
const car = "Voiture";
const fish = "Poisson";
const milkEggs = "Lait et oeufs";
const heating = "Gaz et fioul";
const thrash = "Déchets, eau";
const clothes = "Vêtements";
const electricity = "Électricité";
const house = "Maison";
const building = "Construction";
const leisure = "Loisirs";
const electronic = "Électronique, telecoms";
const others = "Autres";

const data = [
  { name: "Autres transports", size: 190, category: transportCategory },
  { name: airplane, size: 430, category: transportCategory },
  { name: car, size: 2030, category: transportCategory },
  { name: meat, size: 920, category: foodCategory },
  { name: "Boissons", size: 450, category: foodCategory },
  { name: milkEggs, size: 390, category: foodCategory },
  { name: "Fruits et légumes", size: 240, category: foodCategory },
  { name: fish, size: 120, category: foodCategory },
  { name: "Autres", size: 230, category: foodCategory },
  { name: heating, size: 1180, category: housingCategory },
  { name: building, size: 440, category: housingCategory },
  { name: electricity, size: 160, category: housingCategory },
  { name: thrash, size: 120, category: housingCategory },
  { name: house, size: 530, category: buyingCategory },
  { name: leisure, size: 320, category: buyingCategory },
  { name: electronic, size: 180, category: buyingCategory },
  { name: clothes, size: 170, category: buyingCategory },
  { name: "Assurance, banque", size: 80, category: buyingCategory },
  { name: "Santé, éducation", size: 80, category: buyingCategory },
  { name: others, size: 240, category: buyingCategory },
  { name: "Administration et défense", size: 310, category: publicCategory },
  { name: "Enseignement", size: 300, category: publicCategory },
  { name: "Santé", size: 230, category: publicCategory },
  { name: "Infrastructures", size: 200, category: publicCategory },
  { name: "Sport, culture", size: 90, category: publicCategory },
  { name: "Autres", size: 270, category: publicCategory },
];

export {
  data,
  buyingCategory,
  foodCategory,
  housingCategory,
  publicCategory,
  transportCategory,
  meat,
  airplane,
  car,
  fish,
  thrash,
  heating,
  milkEggs,
  clothes,
  electricity,
  house,
  building,
  others,
  electronic,
  leisure,
};
