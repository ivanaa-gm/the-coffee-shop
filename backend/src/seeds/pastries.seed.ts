import { DataSource } from 'typeorm';
import { Food } from '../product/entities/food.entity';

export const seedPastries = async (dataSource: DataSource) => {
  const foodRepository = dataSource.getRepository(Food);

  const pastries: Partial<Food>[] = [
    {
      name: 'Butter Croissant',
      price: 2.8,
      description:
        'A classic French pastry with a golden flaky crust and delicate buttery layers that melt in your mouth. Perfectly crisp outside and soft within — best enjoyed warm.',
      ingredients: ['flour', 'butter', 'yeast', 'milk', 'sugar', 'salt'],
      image: '/assets/foods/pastries/butter-croissant.png',
      category: 'pastry',
      flavor: 'butter',
    },
    {
      name: 'Chocolate Croissant',
      price: 3.2,
      description:
        'Flaky pastry dough wrapped around rich dark chocolate, baked to perfection. Each bite balances crisp texture with smooth, indulgent cocoa richness.',
      ingredients: [
        'flour',
        'butter',
        'dark chocolate',
        'yeast',
        'milk',
        'sugar',
      ],
      image: '/assets/foods/pastries/chocolate-croissant.png',
      category: 'pastry',
      flavor: 'chocolate',
    },
    {
      name: 'Golden Puff Pastry',
      price: 3.1,
      description:
        'A light and airy square-shaped puff pastry baked until golden and crisp. Its buttery aroma and flaky texture make it the ideal companion to your morning coffee.',
      ingredients: ['flour', 'butter', 'egg wash', 'salt', 'sugar'],
      image: '/assets/foods/pastries/golden-puff-pastry.png',
      category: 'pastry',
      flavor: 'buttery',
    },
    {
      name: 'Honey Almond Pastry',
      price: 3.4,
      description:
        'A delicate puff pastry filled with a sweet almond-honey cream. Crispy edges and a glossy golden top give this treat a rich nutty flavor with a touch of natural sweetness.',
      ingredients: ['flour', 'butter', 'almonds', 'honey', 'egg', 'sugar'],
      image: '/assets/foods/pastries/honey-almond-pastry.png',
      category: 'pastry',
      flavor: 'almond-honey',
    },
    {
      name: 'Pain au Chocolat',
      price: 3.5,
      description:
        'A French café favorite — flaky, buttery pastry wrapped around twin batons of pure dark chocolate. Rich yet balanced, it’s an elegant indulgence any time of day.',
      ingredients: [
        'flour',
        'butter',
        'dark chocolate',
        'yeast',
        'milk',
        'egg',
      ],
      image: '/assets/foods/pastries/pain-au-chocolat.png',
      category: 'pastry',
      flavor: 'dark-chocolate',
    },
    {
      name: 'Custard Pain au Chocolat',
      price: 3.7,
      description:
        'A luxurious twist on the classic Pain au Chocolat — layers of puff pastry filled with creamy vanilla custard and ribbons of rich chocolate. Soft, luscious, and perfectly sweet.',
      ingredients: [
        'flour',
        'butter',
        'milk',
        'vanilla',
        'dark chocolate',
        'egg',
        'sugar',
      ],
      image: '/assets/foods/pastries/custard-pain-au-chocolat.png',
      category: 'pastry',
      flavor: 'chocolate-vanilla-custard',
    },
    {
      name: 'Fudgy Brownie',
      price: 3.6,
      description:
        'A dense, fudgy brownie infused with a shot of espresso and rich dark cocoa. The deep coffee notes highlight the chocolate flavor — a decadent treat for true dessert lovers.',
      ingredients: [
        'dark chocolate',
        'butter',
        'flour',
        'espresso',
        'sugar',
        'eggs',
        'cocoa powder',
      ],
      image: '/assets/foods/pastries/fudgy-brownie.png',
      category: 'pastry',
      flavor: 'chocolate-espresso',
    },
  ];

  await foodRepository.save(pastries);
  console.log('✅ Pastries seeded successfully.');
};
