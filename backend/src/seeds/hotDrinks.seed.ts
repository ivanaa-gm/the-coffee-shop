import { DataSource } from 'typeorm';
import { Drink } from '../product/entities/drink.entity';

export const seedHotDrinks = async (dataSource: DataSource) => {
  const foodRepository = dataSource.getRepository(Drink);

  const hotDrinks: Partial<Drink>[] = [
    {
      name: 'Classic Espresso Shot',
      price: 2.5,
      description:
        'A pure, intense shot of finely ground Arabica coffee beans — strong, aromatic, and perfectly balanced for true coffee lovers.',
      ingredients: ['Arabica coffee beans', 'water'],
      image: '/assets/drinks/hotDrinks/hd-espresso-classic.png',
      drinkType: 'hot',
      flavor: 'espresso',
    },
    {
      name: 'Double Espresso Boost',
      price: 3.2,
      description:
        'Twice the coffee, twice the energy. A bold, full-bodied espresso with deep caramel notes and a velvety crema finish.',
      ingredients: ['Arabica coffee beans', 'water'],
      image: '/assets/drinks/hotDrinks/hd-espresso-double.png',
      drinkType: 'hot',
      flavor: 'espresso-double',
    },
    {
      name: 'Vanilla Bean Latte',
      price: 4.2,
      description:
        'Smooth steamed milk infused with real vanilla bean and topped with delicate foam — a warm, creamy indulgence in every sip.',
      ingredients: ['espresso', 'milk', 'vanilla syrup', 'foam'],
      image: '/assets/drinks/hotDrinks/hd-latte-vanilla.png',
      drinkType: 'hot',
      flavor: 'vanilla-latte',
    },
    {
      name: 'Caramel Latte Bliss',
      price: 4.4,
      description:
        'Rich espresso blended with steamed milk and ribbons of golden caramel, finished with a light foam and a drizzle on top.',
      ingredients: ['espresso', 'milk', 'caramel syrup', 'foam'],
      image: '/assets/drinks/hotDrinks/hd-latte-caramel.png',
      drinkType: 'hot',
      flavor: 'caramel-latte',
    },
    {
      name: 'Classic Cappuccino',
      price: 4.0,
      description:
        'A traditional Italian-style cappuccino — balanced espresso, steamed milk, and thick foam dusted with cocoa powder for the perfect harmony of texture and flavor.',
      ingredients: ['espresso', 'milk', 'foam', 'cocoa powder'],
      image: '/assets/drinks/hotDrinks/hd-cappuccino-classic.png',
      drinkType: 'hot',
      flavor: 'cappuccino',
    },
    {
      name: 'Mocha Cappuccino',
      price: 4.6,
      description:
        'A chocolatey twist on the classic — smooth espresso blended with steamed milk, cocoa, and foam for a rich, indulgent experience.',
      ingredients: [
        'espresso',
        'milk',
        'foam',
        'chocolate syrup',
        'cocoa powder',
      ],
      image: '/assets/drinks/hotDrinks/hd-cappuccino-mocha.png',
      drinkType: 'hot',
      flavor: 'mocha-cappuccino',
    },
  ];

  await foodRepository.save(hotDrinks);
  console.log('✅ Hot drinks seeded successfully.');
};
