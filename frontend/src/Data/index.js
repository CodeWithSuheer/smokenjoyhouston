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
  {
    id:5,
    name:"Kratom",
    image:"https://cdn.shopify.com/s/files/1/0649/1399/8024/files/360_F_443419933_HmlqPjJeCLYgpKj3YMhVU5SsecI4EjV4.jpg?v=1713551494"
  },
  {
    id:6,
    name:"Delta 8",
    image:"https://cdn.shopify.com/s/files/1/0649/1399/8024/files/3e3ad9_8acd633b4703474ba0947193e852582e_mv2.webp?v=1713551624"
  }
];

const products = [
  {
    id: 1,
    subCategoryId: 1,
    categoryId: 1,
    name: "kratom Red Broneo 40 Capsule",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/kratom_-_red_broneo_40_capsule.webp?v=1713566320",
  },
  {
    id: 2,
    subCategoryId: 1,
    categoryId: 1,
    name: "Kratom k Shot",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/kratom-_k_shot.webp?v=1713566320",
  },
  {
    id: 3,
    subCategoryId: 1,
    categoryId: 1,
    name: "Kratom Choice Borneo",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/kratom-choice_borneo.jpg?v=1713566320",
  },
  {
    id: 4,
    subCategoryId: 1,
    categoryId: 1,
    name: "kratom Opms Back",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/kratom-_opms_black.jpg?v=1713566321",
  },
  {
    id: 5,
    subCategoryId: 1,
    categoryId: 1,
    name: "kratom 7OHMZ Tablets 6",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/kratom-_7OHMZ-Tablets-6.webp?v=1713566320",
  },
  {
    id: 6,
    subCategoryId: 1,
    categoryId: 1,
    name: "KRATOM CHOICE MAENGA DA",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/kratom-choice_maenga_da.webp?v=1713566320",
  },
  {
    id: 7,
    subCategoryId: 1,
    categoryId: 1,
    name: "kratom Mit 45",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/kratom-_mit_45.webp?v=1713566320",
  },
  {
    id: 8,
    subCategoryId: 1,
    categoryId: 1,
    name: "Kratom Maenga Da 120 Capsule",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/kratom-_maenga_da_120_capsule.webp?v=1713566319",
  },
  {
    id: 9,
    subCategoryId: 1,
    categoryId: 1,
    name: "EJuice Juice Head Orange Mango",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/ejuice_-_juice_head_orange_mango.webp?v=1713567694",
  },
  {
    id: 10,
    subCategoryId: 1,
    categoryId: 1,
    name: "EJuice Yogi E liquids",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/ejuice_-_yogi-e-liquids.jpg?v=1713567694",
  },
  {
    id: 11,
    subCategoryId: 1,
    categoryId: 1,
    name: "EJuice Daze Salt Watermelon",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/ejuice_-_Daze_Salt_Watermelon.jpg?v=1713567694",
  },
  {
    id: 12,
    subCategoryId: 1,
    categoryId: 1,
    name: "Vapetasia Salts Pineapple",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/vapetasia-salts-pineapple.webp?v=1713567693",
  },
  {
    id: 13,
    subCategoryId: 1,
    categoryId: 1,
    name: "EJuice Finest Salt Inc Lemon",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/vapetasia-salts-pineapple.webp?v=1713567693",
  },
  {
    id: 14,
    subCategoryId: 1,
    categoryId: 1,
    name: "EJuice Salt Nkd 100",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/e_juice_-_salt_nkd_100.jpg?v=1713567693",
  },
  {
    id: 15,
    subCategoryId: 1,
    categoryId: 1,
    name: "EJuice Cpastal Clouds Tes Leches",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/ejuice-_coastal_clouds_tes_leches.webp?v=1713567694",
  },
  {
    id: 16,
    subCategoryId: 1,
    categoryId: 1,
    name: "EJuice Naked All Melon",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/e_juice-_naked_all_melon.webp?v=1713567693",
  },
  {
    id: 17,
    subCategoryId: 1,
    categoryId: 1,
    name: "EJuice REDS Apple",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/ejuice_-_REDS_apple.jpg?v=1713567694",
  },
  {
    id: 18,
    subCategoryId: 1,
    categoryId: 1,
    name: "EJuice Twist",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/ejuice-_twist_-mint0sat__19274.jpg?v=1713567693",
  },
  {
    id: 38,
    subCategoryId: 1,
    categoryId: 1,
    name: "Titanium Cubes",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Titanium_Cubes.png?v=1713565110",
  },
  {
    id: 39,
    subCategoryId: 1,
    categoryId: 1,
    name: "Al Fakher Hookah Flavors",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Al_Fakher_Hookah_Flavors.jpg?v=1713565110",
  },
  {
    id: 40,
    subCategoryId: 1,
    categoryId: 1,
    name: "Adalya Hookah Tobacco",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Adalya_Hookah_Tobacco.png?v=1713565109",
  },
  {
    id: 41,
    subCategoryId: 1,
    categoryId: 1,
    name: "Starbuzz Hookah",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Starbuzz-Hookah.jpg?v=1713565109",
  },
  {
    id: 42,
    subCategoryId: 1,
    categoryId: 1,
    name: "CocoNara Natural Hookah",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/CocoNara_Natural_Hookah.png?v=1713565109",
  },
  {
    id: 43,
    subCategoryId: 1,
    categoryId: 1,
    name: "Strikingly Flavors",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Strikingly_Flavors.png?v=1713565109",
  },
  {
    id: 44,
    subCategoryId: 1,
    categoryId: 1,
    name: "Starbuzz Hookah",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Starbuzz_hookah.png?v=1713565109",
  },
  {
    id: 45,
    subCategoryId: 1,
    categoryId: 1,
    name: "Khalil Mamoon Hookah",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Khalil_Mamoon_Hookah.jpg?v=1713565109",
  },
  {
    id: 28,
    subCategoryId: 1,
    categoryId: 1,
    name: "Suorin Air Pro Pod System All Colors",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/suorin_-_air_pro_-_pod_system_-_all_colors.png?v=1713569991",
  },
  {
    id: 29,
    subCategoryId: 1,
    categoryId: 1,
    name: "E-CIG-CALIBURN-A3",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/e-cig-Caliburn-A3.jpg?v=1713569991",
  },
  {
    id: 30,
    subCategoryId: 1,
    categoryId: 1,
    name: "Mag P3 Smoke",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Mag_P3-_Smok__65242.jpg?v=1713569990",
  },
  {
    id: 31,
    subCategoryId: 1,
    categoryId: 1,
    name: "Geek VapeWENAX-H1",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/geek_vapeWENAX-H1.webp?v=1713569990",
  },
  {
    id: 32,
    subCategoryId: 1,
    categoryId: 1,
    name: "Red Stabilizing Wood CloudIsland",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Red-Stabilizing-Wood_CloudIsland.webp?v=1713569989",
  },
  {
    id: 33,
    subCategoryId: 1,
    categoryId: 1,
    name: "Smok-G-Prive-4-Kit-Black",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Smok-G-Prive-4-Kit-Black.jpg?v=1713569990",
  },
  {
    id: 34,
    subCategoryId: 1,
    categoryId: 1,
    name: "ECig Calibum unwellwebp",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/e-cig_calibum_unwellwebp.webp?v=1713569990",
  },
  {
    id: 35,
    subCategoryId: 1,
    categoryId: 1,
    name: "ECigg calibum A2",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/e-cigg_calibum_A2.jpg?v=1713569989",
  },
  {
    id: 36,
    subCategoryId: 1,
    categoryId: 1,
    name: "Smok Novo-4",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/smok-novo-4.jpg?v=1713569989",
  },
  {
    id: 37,
    subCategoryId: 1,
    categoryId: 1,
    name: "Wood Smok Novo Pod Kit",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/wood-smok-novo-pod-kit.jpg?v=1713569990",
  },
  {
    id: 46,
    subCategoryId: 1,
    categoryId: 1,
    name: "SMOKE Novo 2 Pod Kit",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/SMOK-Novo-2-Pod-Kit-800-Mah-Battery-Vape-Online-in-Pakistan18.jpg?v=1713570636",
  },
  {
    id: 47,
    subCategoryId: 1,
    categoryId: 1,
    name: "Airbar Stick Summer Breeze",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/airbar-stick-summer-breeze-600x600.jpg?v=1713570636",
  },
  {
    id: 48,
    subCategoryId: 1,
    categoryId: 1,
    name: "Juicy Bar jb5000 Berry Ice",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/juicy-bar-jb5000-disposable-vape-black-blueberry-ice-41759382307106.webp?v=1713570635",
  },
  {
    id: 49,
    subCategoryId: 1,
    categoryId: 1,
    name: "Dispossible Lost Marry watermelon",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Dispossible_Lost_Marry_-_watermelon.webp?v=1713570635",
  },
  {
    id: 50,
    subCategoryId: 1,
    categoryId: 1,
    name: "Dispossible Vape",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/9414C35E-5FEC-4E05-86E4-877F242EE1AB.webp?v=1713570636",
  },
  {
    id: 19,
    subCategoryId: 1,
    categoryId: 1,
    name: "Cake 3.0 Candy Jack Sauce",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/cake_3.0_candy_jack_sauce.png?v=1713569242",
  },
  {
    id: 20,
    subCategoryId: 1,
    categoryId: 1,
    name: "Akora Liquid Blue Berry",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/akora_liquid_blue_berry.webp?v=1713569241",
  },
  {
    id: 21,
    subCategoryId: 1,
    categoryId: 1,
    name: "Hybrid Stizzy X Blend Gelato",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/hybrid_stizzy_x_blend_gelato.webp?v=1713569241",
  },
  {
    id: 22,
    subCategoryId: 1,
    categoryId: 1,
    name: "Cake 3.0 Hawaiian Sweet Haze Sativa",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/cake_3.0_hawaiian_sweet_haze_sativa.webp?v=1713569240",
  },
  {
    id: 22,
    subCategoryId: 1,
    categoryId: 1,
    name: "Akora Liquid Diamond",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/akora_liquid_diamond.webp?v=1713569241",
  },
  {
    id: 23,
    subCategoryId: 1,
    categoryId: 1,
    name: "Hybrid Stizzy X Blend Skywalker Og",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/hybrid_stizzy_x_blend_skywalker_og.webp?v=1713569241",
  },
  {
    id: 23,
    subCategoryId: 1,
    categoryId: 1,
    name: "Cake 2.0 Ceral Milk",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/cake_2.0_ceral_milk.webp?v=1713569241",
  },
  {
    id: 24,
    subCategoryId: 1,
    categoryId: 1,
    name: "Cake lemonade StiVA",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/cake_lemonade_stiVA.jpg?v=1713569241",
  },
  {
    id: 25,
    subCategoryId: 1,
    categoryId: 1,
    name: "Exotix Sauced",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/exotix_sauced.jpg?v=1713569241",
  },
  {
    id: 26,
    subCategoryId: 1,
    categoryId: 1,
    name: "Indica Watermelon-Z",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/indica-watermelon-z.jpg?v=1713569241",
  },
  {
    id: 27,
    subCategoryId: 1,
    categoryId: 1,
    name: "Akora Thca Flower",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/akora_thca_flower.jpg?v=1713569240",
  },
];

const accessories = [
  {
    id: 1,
    name: "Pipe and Glass",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/10247__40541.jpg?v=1713549710",
  },
  {
    id: 2,
    name: "Refills and Pods",
    image:
      "https://cdn.shopify.com/s/files/1/0649/1399/8024/files/vape_philippines_600x600_de84bd3b-505b-40bb-8155-172b1f3fae84.webp?v=1713549710",
  },
];

export { categories, products, accessories };
