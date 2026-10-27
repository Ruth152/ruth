export const dish =[
    {
      dish_id: "DISH-001",
      name: "Margherita Pizza",
      slug: "margherita-pizza",
      cuisine: "Italian",
      category: "Main Course",
      price: 14.99,
      rating: 4.7,
      review_count: 416,
      prep_time_minutes: 15,
      cook_time_minutes: 10,
      description: "Authentic Neapolitan pizza with San Marzano tomatoes, buffalo mozzarella, fresh basil, and extra virgin olive oil.",
      ingredients: [
        "Spices",
        "Garlic",
        "Salt",
        "Onions"
      ],
      allergens: [
        "Eggs"
      ],
      nutritional_values: {
        calories: 528,
        protein_g: 21,
        carbs_g: 55,
        fat_g: 14,
        sodium_mg: 1018
      },
      dietary_flags: {
        is_vegetarian: true,
        is_vegan: false,
        is_gluten_free: false,
        spicy_level: 1
      },
      images: {
        full_size: "https://i.postimg.cc/tCzbs5XX/images-(9).jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/margherita-pizza_thumb.jpg",
        gallery: [
          "https://images.example.com/dishes/gallery/margherita-pizza-angle1.jpg",
          "https://images.example.com/dishes/gallery/margherita-pizza-angle2.jpg",
          "https://images.example.com/dishes/gallery/margherita-pizza-ingredients.jpg"
        ]
      },
      customization_options: [
        {
          option_name: "Spice Adjustment",
          choices: [
            "Mild",
            "Medium",
            "Hot",
            "Extra Hot"
          ]
        },
        {
          option_name: "Add-ons",
          choices: [
            "Extra Sauce (+$0.50)",
            "Add Avocado (+$2.00)",
            "Double Protein (+$4.50)",
            "No Modifications"
          ]
        }
      ],
      tags: [
        "High Protein",
        "Chef's Special"
      ],
      availability: {
        is_in_stock: true,
        available_periods: [
          "Lunch",
          "Dinner"
        ]
      }
    },
    {
      dish_id: "DISH-002",
      name: "Fettuccine Alfredo",
      slug: "fettuccine-alfredo",
      cuisine: "Italian",
      category: "Main Course",
      price: 16.5,
      rating: 4.4,
      review_count: 135,
      prep_time_minutes: 25,
      cook_time_minutes: 10,
      description: "Rich and creamy fettuccine pasta tossed with pure butter and freshly grated Parmesan cheese.",
      ingredients: [
        "Tomatoes",
        "Spices",
        "Butter"
      ],
      allergens: [],
      nutritional_values: {
        calories: 854,
        protein_g: 17,
        carbs_g: 27,
        fat_g: 34,
        sodium_mg: 1052
      },
      dietary_flags: {
        is_vegetarian: false,
        is_vegan: false,
        is_gluten_free: false,
        spicy_level: 0
      },
      images: {
        full_size: "https://i.postimg.cc/zG5wqTjc/Fettuccine-Alfredo-Recipe-1.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/fettuccine-alfredo_thumb.jpg",
        gallery: [
          "https://images.example.com/dishes/gallery/fettuccine-alfredo-angle1.jpg",
          "https://images.example.com/dishes/gallery/fettuccine-alfredo-angle2.jpg",
          "https://images.example.com/dishes/gallery/fettuccine-alfredo-ingredients.jpg"
        ]
      },
      customization_options: [
        {
          option_name: "Spice Adjustment",
          choices: [
            "Mild",
            "Medium",
            "Hot",
            "Extra Hot"
          ]
        },
        {
          option_name: "Add-ons",
          choices: [
            "Extra Sauce (+$0.50)",
            "Add Avocado (+$2.00)",
            "Double Protein (+$4.50)",
            "No Modifications"
          ]
        }
      ],
      tags: [
        "Customer Favorite",
        "Spicy"
      ],
      availability: {
        is_in_stock: true,
        available_periods: [
          "Lunch",
          "Dinner"
        ]
      }
    },
    {
      dish_id: "DISH-003",
      name: "Lasagna Bolognese",
      slug: "lasagna-bolognese",
      cuisine: "Italian",
      category: "Main Course",
      price: 18.99,
      rating: 4.6,
      review_count: 395,
      prep_time_minutes: 15,
      cook_time_minutes: 60,
      description: "Layers of fresh pasta sheet alternating with slow-simmered beef ragù, creamy béchamel sauce, and melted mozzarella.",
      ingredients: [
        "Spices",
        "Cilantro",
        "Ginger",
        "Garlic",
        "Olive Oil"
      ],
      allergens: [
        "Nuts"
      ],
      nutritional_values: {
        calories: 825,
        protein_g: 11,
        carbs_g: 33,
        fat_g: 37,
        sodium_mg: 436
      },
      dietary_flags: {
        is_vegetarian: false,
        is_vegan: false,
        is_gluten_free: false,
        spicy_level: 1
      },
      images: {
        full_size: "https://i.postimg.cc/bNRDHW0h/lasagne-bolognese.webp",
        thumbnail: "https://images.example.com/dishes/thumbs/lasagna-bolognese_thumb.jpg",
        gallery: [
          "https://images.example.com/dishes/gallery/lasagna-bolognese-angle1.jpg",
          "https://images.example.com/dishes/gallery/lasagna-bolognese-angle2.jpg",
          "https://images.example.com/dishes/gallery/lasagna-bolognese-ingredients.jpg"
        ]
      },
      customization_options: [
        {
          option_name: "Spice Adjustment",
          choices: [
            "Mild",
            "Medium",
            "Hot",
            "Extra Hot"
          ]
        },
        {
          option_name: "Add-ons",
          choices: [
            "Extra Sauce (+$0.50)",
            "Add Avocado (+$2.00)",
            "Double Protein (+$4.50)",
            "No Modifications"
          ]
        }
      ],
      tags: [
        "Chef's Special"
      ],
      availability: {
        is_in_stock: true,
        available_periods: [
          "Lunch",
          "Dinner"
        ]
      }
    },
    {
      dish_id: "DISH-004",
      name: "Spaghetti Carbonara",
      slug: "spaghetti-carbonara",
      cuisine: "Italian",
      category: "Main Course",
      price: 17.25,
      rating: 4.6,
      review_count: 174,
      prep_time_minutes: 45,
      cook_time_minutes: 10,
      description: "Crispy guanciale, creamy egg yolks, freshly cracked black pepper, and aged Pecorino Romano tossed with al dente spaghetti.",
      ingredients: [
        "Tomatoes",
        "Spices",
        "Black Pepper",
        "Butter"
      ],
      allergens: [
        "Eggs"
      ],
      nutritional_values: {
        calories: 562,
        protein_g: 38,
        carbs_g: 43,
        fat_g: 27,
        sodium_mg: 627
      },
      dietary_flags: {
        is_vegetarian: false,
        is_vegan: false,
        is_gluten_free: false,
        spicy_level: 0
      },
      images: {
        full_size: "https://i.postimg.cc/50MbrN1R/Spaghetti-Carbonara.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/spaghetti-carbonara_thumb.jpg",
        gallery: [
          "https://images.example.com/dishes/gallery/spaghetti-carbonara-angle1.jpg",
          "https://images.example.com/dishes/gallery/spaghetti-carbonara-angle2.jpg",
          "https://images.example.com/dishes/gallery/spaghetti-carbonara-ingredients.jpg"
        ]
      },
      customization_options: [
        {
          option_name: "Spice Adjustment",
          choices: [
            "Mild",
            "Medium",
            "Hot",
            "Extra Hot"
          ]
        },
        {
          option_name: "Add-ons",
          choices: [
            "Extra Sauce (+$0.50)",
            "Add Avocado (+$2.00)",
            "Double Protein (+$4.50)",
            "No Modifications"
          ]
        }
      ],
      tags: [
        "Customer Favorite",
        "Comfort Food"
      ],
      availability: {
        is_in_stock: true,
        available_periods: [
          "Lunch",
          "Dinner"
        ]
      }
    },
    {
      dish_id: "DISH-005",
      name: "Risotto ai Funghi",
      slug: "risotto-ai-funghi",
      cuisine: "Italian",
      category: "Main Course",
      price: 19.5,
      rating: 4.5,
      review_count: 409,
      prep_time_minutes: 20,
      cook_time_minutes: 30,
      description: "Creamy Arborio rice slow-cooked in a rich broth with a medley of wild porcini mushrooms and truffle oil shavings.",
      ingredients: [
        "Spices",
        "Salt",
        "Onions",
        "Olive Oil"
      ],
      allergens: [],
      nutritional_values: {
        calories: 661,
        protein_g: 49,
        carbs_g: 64,
        fat_g: 36,
        sodium_mg: 471
      },
      dietary_flags: {
        is_vegetarian: false,
        is_vegan: false,
        is_gluten_free: false,
        spicy_level: 1
      },
      images: {
        full_size: "https://i.postimg.cc/pT1kTyT9/images-(10).jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/risotto-ai-funghi_thumb.jpg",
        gallery: [
          "https://images.example.com/dishes/gallery/risotto-ai-funghi-angle1.jpg",
          "https://images.example.com/dishes/gallery/risotto-ai-funghi-angle2.jpg",
          "https://images.example.com/dishes/gallery/risotto-ai-funghi-ingredients.jpg"
        ]
      },
      customization_options: [
        {
          option_name: "Spice Adjustment",
          choices: [
            "Mild",
            "Medium",
            "Hot",
            "Extra Hot"
          ]
        },
        {
          option_name: "Add-ons",
          choices: [
            "Extra Sauce (+$0.50)",
            "Add Avocado (+$2.00)",
            "Double Protein (+$4.50)",
            "No Modifications"
          ]
        }
      ],
      tags: [
        "Chef's Special",
        "Low Carb"
      ],
      availability: {
        is_in_stock: true,
        available_periods: [
          "Lunch",
          "Dinner"
        ]
      }
    },
    {
      dish_id: "DISH-006",
      name: "Tonkotsu Ramen",
      slug: "tonkotsu-ramen",
      cuisine: "Japanese",
      category: "Main Course",
      price: 15.99,
      rating: 4.5,
      review_count: 64,
      prep_time_minutes: 25,
      cook_time_minutes: 10,
      description: "Rich, creamy 16-hour pork bone broth served with tender chashu pork belly, soft-boiled ajitama egg, and wavy wheat noodles.",
      ingredients: [
        "Spices",
        "Butter",
        "Onions",
        "Cilantro"
      ],
      allergens: [
        "Shellfish"
      ],
      nutritional_values: {
        calories: 593,
        protein_g: 28,
        carbs_g: 28,
        fat_g: 25,
        sodium_mg: 878
      },
      dietary_flags: {
        is_vegetarian: false,
        is_vegan: false,
        is_gluten_free: false,
        spicy_level: 0
      },
      images: {
        full_size: "https://i.postimg.cc/ydSnDsZq/images-(11).jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/tonkotsu-ramen_thumb.jpg",
        gallery: [
          "https://images.example.com/dishes/gallery/tonkotsu-ramen-angle1.jpg",
          "https://images.example.com/dishes/gallery/tonkotsu-ramen-angle2.jpg",
          "https://images.example.com/dishes/gallery/tonkotsu-ramen-ingredients.jpg"
        ]
      },
      customization_options: [
        {
          option_name: "Spice Adjustment",
          choices: [
            "Mild",
            "Medium",
            "Hot",
            "Extra Hot"
          ]
        },
        {
          option_name: "Add-ons",
          choices: [
            "Extra Sauce (+$0.50)",
            "Add Avocado (+$2.00)",
            "Double Protein (+$4.50)",
            "No Modifications"
          ]
        }
      ],
      tags: [
        "Trending",
        "Comfort Food"
      ],
      availability: {
        is_in_stock: true,
        available_periods: [
          "Lunch",
          "Dinner"
        ]
      }
    },
    {
      dish_id: "DISH-007",
      name: "Chicken Katsu Curry",
      slug: "chicken-katsu-curry",
      cuisine: "Japanese",
      category: "Main Course",
      price: 14.5,
      rating: 4.8,
      review_count: 180,
      prep_time_minutes: 15,
      cook_time_minutes: 90,
      description: "Crispy panko-breaded chicken cutlet served over a bed of steamed white rice and smothered in rich, aromatic Japanese curry sauce.",
      ingredients: [
        "Spices",
        "Black Pepper",
        "Salt",
        "Tomatoes",
        "Ginger"
      ],
      allergens: [
        "Nuts"
      ],
      nutritional_values: {
        calories: 938,
        protein_g: 47,
        carbs_g: 24,
        fat_g: 25,
        sodium_mg: 830
      },
      dietary_flags: {
        is_vegetarian: false,
        is_vegan: false,
        is_gluten_free: true,
        spicy_level: 1
      },
      images: {
        full_size: "https://i.postimg.cc/6qcZ3mzP/image(12).jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/chicken-katsu-curry_thumb.jpg",
        gallery: [
          "https://images.example.com/dishes/gallery/chicken-katsu-curry-angle1.jpg",
          "https://images.example.com/dishes/gallery/chicken-katsu-curry-angle2.jpg",
          "https://images.example.com/dishes/gallery/chicken-katsu-curry-ingredients.jpg"
        ]
      },
      customization_options: [
        {
          option_name: "Spice Adjustment",
          choices: [
            "Mild",
            "Medium",
            "Hot",
            "Extra Hot"
          ]
        },
        {
          option_name: "Add-ons",
          choices: [
            "Extra Sauce (+$0.50)",
            "Add Avocado (+$2.00)",
            "Double Protein (+$4.50)",
            "No Modifications"
          ]
        }
      ],
      tags: [
        "Low Carb",
        "Spicy"
      ],
      availability: {
        is_in_stock: true,
        available_periods: [
          "Lunch",
          "Dinner"
        ]
      }
    },
    {
      dish_id: "DISH-008",
      name: "Spicy Tuna Roll Set",
      slug: "spicy-tuna-roll-set",
      cuisine: "Japanese",
      category: "Main Course",
      price: 18,
      rating: 4.2,
      review_count: 406,
      prep_time_minutes: 10,
      cook_time_minutes: 90,
      description: "Premium yellowfin spicy tuna, cucumber, and green onion rolls, lightly drizzled with house unagi sauce and sriracha mayo.",
      ingredients: [
        "Spices",
        "Cilantro",
        "Tomatoes",
        "Garlic",
        "Butter"
      ],
      allergens: [
        "Gluten",
        "Shellfish"
      ],
      nutritional_values: {
        calories: 547,
        protein_g: 15,
        carbs_g: 59,
        fat_g: 28,
        sodium_mg: 706
      },
      dietary_flags: {
        is_vegetarian: false,
        is_vegan: false,
        is_gluten_free: false,
        spicy_level: 1
      },
      images: {
        full_size: "https://i.postimg.cc/mgHrpnCh/images-(13).jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/spicy-tuna-roll-set_thumb.jpg",
        gallery: [
          "https://images.example.com/dishes/gallery/spicy-tuna-roll-set-angle1.jpg",
          "https://images.example.com/dishes/gallery/spicy-tuna-roll-set-angle2.jpg",
          "https://images.example.com/dishes/gallery/spicy-tuna-roll-set-ingredients.jpg"
        ]
      },
      customization_options: [
        {
          option_name: "Spice Adjustment",
          choices: [
            "Mild",
            "Medium",
            "Hot",
            "Extra Hot"
          ]
        },
        {
          option_name: "Add-ons",
          choices: [
            "Extra Sauce (+$0.50)",
            "Add Avocado (+$2.00)",
            "Double Protein (+$4.50)",
            "No Modifications"
          ]
        }
      ],
      tags: [
        "Spicy"
      ],
      availability: {
        is_in_stock: true,
        available_periods: [
          "Lunch",
          "Dinner"
        ]
      }
    },
    {
      dish_id: "DISH-009",
      name: "Beef Gyudon Bowl",
      slug: "beef-gyudon-bowl",
      cuisine: "Japanese",
      category: "Main Course",
      price: 13.99,
      rating: 4.5,
      review_count: 464,
      prep_time_minutes: 15,
      cook_time_minutes: 5,
      description: "Thinly sliced tender beef and sweet onions simmered in a savory dashi, soy sauce, and mirin broth over rice.",
      ingredients: [
        "Tomatoes",
        "Spices",
        "Ginger",
        "Cilantro"
      ],
      allergens: [],
      nutritional_values: {
        calories: 256,
        protein_g: 19,
        carbs_g: 15,
        fat_g: 39,
        sodium_mg: 453
      },
      dietary_flags: {
        is_vegetarian: false,
        is_vegan: false,
        is_gluten_free: false,
        spicy_level: 0
      },
      images: {
        full_size: "https://i.postimg.cc/1t5sS7nf/images-(14).jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/beef-gyudon-bowl_thumb.jpg",
        gallery: [
          "https://images.example.com/dishes/gallery/beef-gyudon-bowl-angle1.jpg",
          "https://images.example.com/dishes/gallery/beef-gyudon-bowl-angle2.jpg",
          "https://images.example.com/dishes/gallery/beef-gyudon-bowl-ingredients.jpg"
        ]
      },
      customization_options: [
        {
          option_name: "Spice Adjustment",
          choices: [
            "Mild",
            "Medium",
            "Hot",
            "Extra Hot"
          ]
        },
        {
          option_name: "Add-ons",
          choices: [
            "Extra Sauce (+$0.50)",
            "Add Avocado (+$2.00)",
            "Double Protein (+$4.50)",
            "No Modifications"
          ]
        }
      ],
      tags: [
        "Low Carb",
        "Spicy"
      ],
      availability: {
        is_in_stock: true,
        available_periods: [
          "Lunch",
          "Dinner"
        ]
      }
    },
    {
      dish_id: "DISH-010",
      name: "Tempura Moriawase",
      slug: "tempura-moriawase",
      cuisine: "Japanese",
      category: "Main Course",
      price: 16.75,
      rating: 4.6,
      review_count: 458,
      prep_time_minutes: 25,
      cook_time_minutes: 15,
      description: "A crispy assortment of lightly battered tiger prawns and seasonal vegetables served with a savory tentsuyu dipping sauce.",
      ingredients: [
        "Spices",
        "Black Pepper",
        "Cilantro",
        "Tomatoes",
        "Garlic"
      ],
      allergens: [
        "Fish"
      ],
      nutritional_values: {
        calories: 893,
        protein_g: 11,
        carbs_g: 49,
        fat_g: 8,
        sodium_mg: 994
      },
      dietary_flags: {
        is_vegetarian: false,
        is_vegan: false,
        is_gluten_free: false,
        spicy_level: 0
      },
      images: {
        full_size: "https://i.postimg.cc/Kj05VjXL/images-(15).jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/tempura-moriawase_thumb.jpg",
        gallery: [
          "https://images.example.com/dishes/gallery/tempura-moriawase-angle1.jpg",
          "https://images.example.com/dishes/gallery/tempura-moriawase-angle2.jpg",
          "https://images.example.com/dishes/gallery/tempura-moriawase-ingredients.jpg"
        ]
      },
      customization_options: [
        {
          option_name: "Spice Adjustment",
          choices: [
            "Mild",
            "Medium",
            "Hot",
            "Extra Hot"
          ]
        },
        {
          option_name: "Add-ons",
          choices: [
            "Extra Sauce (+$0.50)",
            "Add Avocado (+$2.00)",
            "Double Protein (+$4.50)",
            "No Modifications"
          ]
        }
      ],
      tags: [
        "High Protein",
        "Customer Favorite"
      ],
      availability: {
        is_in_stock: true,
        available_periods: [
          "Lunch",
          "Dinner"
        ]
      }
    },
    {
      dish_id: "DISH-011",
      name: "Birria Taco Trio",
      slug: "birria-taco-trio",
      cuisine: "Mexican",
      category: "Main Course",
      price: 13.5,
      rating: 4.4,
      review_count: 286,
      prep_time_minutes: 20,
      cook_time_minutes: 15,
      description: "Slow-braised shredded beef in traditional adobo broth, served in crispy corn tortillas with melted cheese and a side of consommé.",
      ingredients: [
        "Spices",
        "Garlic",
        "Black Pepper",
        "Salt"
      ],
      allergens: [],
      nutritional_values: {
        calories: 488,
        protein_g: 48,
        carbs_g: 84,
        fat_g: 42,
        sodium_mg: 588
      },
      dietary_flags: {
        is_vegetarian: false,
        is_vegan: false,
        is_gluten_free: true,
        spicy_level: 1
      },
      images: {
        full_size: "https://i.postimg.cc/zvhgwfJc/images-(16).jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/birria-taco-trio_thumb.jpg",
        gallery: [
          "https://images.example.com/dishes/gallery/birria-taco-trio-angle1.jpg",
          "https://images.example.com/dishes/gallery/birria-taco-trio-angle2.jpg",
          "https://images.example.com/dishes/gallery/birria-taco-trio-ingredients.jpg"
        ]
      },
      customization_options: [
        {
          option_name: "Spice Adjustment",
          choices: [
            "Mild",
            "Medium",
            "Hot",
            "Extra Hot"
          ]
        },
        {
          option_name: "Add-ons",
          choices: [
            "Extra Sauce (+$0.50)",
            "Add Avocado (+$2.00)",
            "Double Protein (+$4.50)",
            "No Modifications"
          ]
        }
      ],
      tags: [
        "Low Carb",
        "Comfort Food"
      ],
      availability: {
        is_in_stock: true,
        available_periods: [
          "Lunch",
          "Dinner"
        ]
      }
    },
    {
      dish_id: "DISH-012",
      name: "Chicken Enchiladas Suizas",
      slug: "chicken-enchiladas-suizas",
      cuisine: "Mexican",
      category: "Main Course",
      price: 15.25,
      rating: 4.7,
      review_count: 176,
      prep_time_minutes: 25,
      cook_time_minutes: 20,
      difficulty_level: "Hard",
      serving_size: "1-2 People",
      description: "Corn tortillas stuffed with shredded chicken, baked under a blanket of tangy creamy tomatillo salsa and bubbling Monterrey Jack cheese.",
      ingredients: [
        "Spices",
        "Garlic",
        "Salt",
        "Cilantro"
      ],
      allergens: [
        "Shellfish"
      ],
      nutritional_values: {
        calories: 458,
        protein_g: 21,
        carbs_g: 55,
        fat_g: 18,
        sodium_mg: 875
      },
      dietary_flags: {
        is_vegetarian: false,
        is_vegan: false,
        is_gluten_free: false,
        spicy_level: 0
      },
      images: {
        full_size: "https://i.postimg.cc/G2FRk0WP/Chicken-Enchiladas-Suizas-2.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/chicken-enchiladas-suizas_thumb.jpg",
        gallery: [
          "https://images.example.com/dishes/gallery/chicken-enchiladas-suizas-angle1.jpg",
          "https://images.example.com/dishes/gallery/chicken-enchiladas-suizas-angle2.jpg",
          "https://images.example.com/dishes/gallery/chicken-enchiladas-suizas-ingredients.jpg"
        ]
      },
      customization_options: [
        {
          option_name: "Spice Adjustment",
          choices: [
            "Mild",
            "Medium",
            "Hot",
            "Extra Hot"
          ]
        },
        {
          option_name: "Add-ons",
          choices: [
            "Extra Sauce (+$0.50)",
            "Add Avocado (+$2.00)",
            "Double Protein (+$4.50)",
            "No Modifications"
          ]
        }
      ],
      tags: [
        "Comfort Food",
        "Spicy"
      ],
      availability: {
        is_in_stock: true,
        available_periods: [
          "Lunch",
          "Dinner"
        ]
      }
    }
]