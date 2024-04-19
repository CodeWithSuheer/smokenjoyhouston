const categories = [
  {
    id: 1,
    name: "E-Cigarettes",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/vaping-device-e-cigarette.jpg?v=1713478799",
  },
  {
    id: 2,
    name: "E-Liquids",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/860_main_vapeliquids.gif?v=1713478797",
  },
  {
    id: 3,
    name: "Hookah & Sheesha",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/istockphoto-626155034-612x612.jpg?v=1713479211",
  },
  {                      
    id: 4,
    name: "Disposable Vape",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/image_1024.jpg?v=1713478797",
  },
];

const products = [
  {
    subCategoryId: 1,
    id: 1,
    categoryId: 1,
    name: "OG-FOUR",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/OG-FOUR.jpg?v=1713481673",
    description:
      "Our patented Lava-Quartz technology is the first of its kind, and draws inspiration from traditional glass. This RiG rips like a classic",
  },
  {
    subCategoryId: 1,
    id: 2,
    categoryId: 1,
    name: "PHIX-by-MLV",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/PHIX-by-MLV.jpg?v=1713481673",
    description:
      "The Phix by MLV is a sleek and slender prefilled pod vape, once known as the JUUL killer. It's been around since 2017",
  },
  {
    subCategoryId: 1,
    id: 3,
    categoryId: 2,
    name: "LAVOO-GLASS-HOOKAHS2",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/LAVOO-GLASS-HOOKAHS2.jpg?v=1713481673",
    description:
      "Lavoo Hookah specialize in fine glass hookahs and hookah accessories for your smoking pleasure.",
  },
  {
    subCategoryId: 1,
    id: 4,
    categoryId: 3,
    name: "KHALIL-MAMOON-TRIMETAL-ZOHARIA3",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/KHALIL-MAMOON-TRIMETAL-ZOHARIA3.jpg?v=1713481673",
    description:
      "The design of the LaVoo MP2 defies all rules of hookah manufacturing. The MP2 features a horizontal downstem",
  },
  {
    subCategoryId: 1,
    id: 5,
    categoryId: 4,
    name: "JAM-MONSTER-E-LIQUID2",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/JAM-MONSTER-E-LIQUID2.jpg?v=1713481673",
    description:
      "This blend is a balanced sweet that beginners and novices can enjoy equally!",
  },
  { 
    subCategoryId: 1,
     id: 6,
    categoryId: 1,
    name:"ABALONE-GLASS-PIPE",
    image:"https://cdn.shopify.com/s/files/1/0649/1399/8024/files/ABALONE-GLASS-PIPE.jpg?v=1713481672"
 },
 {
    subCategoryId:1,
    id:7,
    categoryId:2,
    image:"https://cdn.shopify.com/s/files/1/0649/1399/8024/files/JUST-REDS-E-LIQUID-BY-ALT-ZERO-100M.jpg?v=1713481673",
    name:"JUST-REDS-E-LIQUID-BY-ALT-ZERO-100M",
    description:"Experience the striking succulent explosion of your favorite red organic product flavored candies! Strawberry, watermelon, cherry"
 },
 {
  subCategoryId:1,
  id:8,
  categoryId:3,
  image:"https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Lost-Mary-2-1-300x300.jpg?v=1713481673",
  name:"Lost-Mary-2-1-300x300",
  description:"Equipped with an internal battery capacity of 360mAh, the vape pods provide long-lasting power to keep you going throughout the day."
 },
 {
  subCategoryId:1,
  id:9,
  categoryId:4,
  image:"https://cdn.shopify.com/s/files/1/0649/1399/8024/files/type-of-vaping-products.jpg?v=1713481672",
  name:"type-of-vaping-products",
  description:"E-cigarette, or vaping, products can be used to deliver nicotine, cannabis (THC, CBD), flavorings, chemicals, and other substances"
 },
 {
  subCategoryId:1,
  id:10,
  categoryId:1,
  image:"https://cdn.shopify.com/s/files/1/0649/1399/8024/files/AMIRA-HOOKAHS5.jpg?v=1713481672",
  name:"AMIRA-HOOKAHS5",
  description:"Amira Luxury hookah bowls come in 5 different styles. Please check pictures for the style needed"
 },
 {
  subCategoryId:1,
  id:11,
  categoryId:2,
  image:"https://cdn.shopify.com/s/files/1/0649/1399/8024/files/SMOK-MAG2.jpg?v=1713481672",
  name:"SMOK-MAG2",
  description:"Here comes the latest SMOK MAG Kit! It consists of a new MAG box mod with a TFV12 Prince tank"
 },
 {
  subCategoryId:1,
  id:12,
  categoryId:2,
  image:"https://cdn.shopify.com/s/files/1/0649/1399/8024/files/PULSAR-APX-WAX-VAPORIZER1.jpg?v=1713481673",
  name:"PULSAR-APX-WAX-VAPORIZER1",
  description:"The Pulsar APX Wax Vaporizer is powerful, portable and distinctly discreet at 3.5 inches tall!"
 },
 {
  subCategoryId:1,
  id:13,
  categoryId:2,
  image:"https://cdn.shopify.com/s/files/1/0649/1399/8024/files/JUST-REDS-E-LIQUID-BY-ALT-ZERO-100M_1.jpg?v=1713481673",
  name:"JUST-REDS-E-LIQUID-BY-ALT-ZERO-100M_1",
  description:"Experience the striking succulent explosion of your favorite red organic product flavored candies!"
 },
 {
  subCategoryId:1,
  id:14,
  categoryId:2,
  image:"https://cdn.shopify.com/s/files/1/0649/1399/8024/files/FRYD-60ML3.jpg?v=1713481673",
  name:"FRYD-60ML3",
  description:"A delicious take on a deep fried sponge cream cake stuffed with a sweet cream filling. Just like you get a the fair."
 },
 {
  subCategoryId:1,
  id:15,
  categoryId:3,
  image:"https://cdn.shopify.com/s/files/1/0649/1399/8024/files/ECONO-MYA-GELATO-2-HOSE-HOOKAH.jpg?v=1713481672",
  name:"ECONO-MYA-GELATO-2-HOSE-HOOKAH",
  description:"The Mya Gelato comes with a 6-foot long Mya hose, tray, matching porcelain bowl, and all the necessary grommets to ensure an air-tight seal."
 },
 {
  subCategoryId:1,
  id:16,
  categoryId:4,
  image:"https://cdn.shopify.com/s/files/1/0649/1399/8024/files/EXCISION-E-LIQUID-3.jpg?v=1713481672",
  name:"EXCISION-E-LIQUID-3",
  description:"One of their standout stars is Paradox, a delightful blend of pitch black dew with bold citrus, grape, and dark fruits"
 },
 {
  subCategoryId:1,
  id:17,
  categoryId:1,
  image:"https://cdn.shopify.com/s/files/1/0649/1399/8024/files/AIR-FACTORY-E-LIQUID.jpg?v=1713481672",
  name:"AIR-FACTORY-E-LIQUID",
  description:"This award-winning flavor is a blast of Blue Raspberry. Mildly sweet, mellow, with light creamy undertones. Learn More."
 },
 {
  subCategoryId:1,
  id:18,
  categoryId:2,
  image:"https://cdn.shopify.com/s/files/1/0649/1399/8024/files/FRUITY-CRISPY-TREATS-E-LIQUID2.jpg?v=1713481672",
  name:"FRUITY-CRISPY-TREATS-E-LIQUID2",
  description:'lueberry Crispy E-liquid by Ethos Crispy Treats is a Fruity Cereal, marshmallow and rice crispy treats'
 },
 {
  subCategoryId:1,
  id:19,
  categoryId:3,
  image:"https://cdn.shopify.com/s/files/1/0649/1399/8024/files/pipe_and_glas.jpg?v=1713481672",
  name:"pipe_and_glas",
  description:"Glass pipes allow users to inhale their drugs of choice. Interestingly enough, some glass pipes are nearly works of art"
 },
 {
  subCategoryId:1,
  id:20,
  categoryId:4,
  image:"https://cdn.shopify.com/s/files/1/0649/1399/8024/files/R-SERIES-2.jpg?v=1713481672",
  name:"R-SERIES-2",
  description:"“Vapor Blast” mouthpiece makes these devices even more discreet, and the classic mouthpiece is included for fans of the original visual chamber"
 }
];

const accessories = [
  {
    id:1,
    name:"Pipe and Glass",
    image:"https://cdn.shopify.com/s/files/1/0649/1399/8024/files/10247__40541.jpg?v=1713549710"
  },
  {
    id:2,
    name:"Refills and Pods",
    image:"https://cdn.shopify.com/s/files/1/0649/1399/8024/files/vape_philippines_600x600_de84bd3b-505b-40bb-8155-172b1f3fae84.webp?v=1713549710"
  }
];