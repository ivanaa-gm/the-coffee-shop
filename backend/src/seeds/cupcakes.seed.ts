import { DataSource } from 'typeorm';
import { Food } from '../product/entities/food.entity';

export const seedCupcakes = async (dataSource: DataSource) => {
  const foodRepository = dataSource.getRepository(Food);

  const cupcakes: Partial<Food>[] = [
    {
      name: 'Strawberry Dream Cupcake',
      price: 5.5,
      description:
        'Soft brown dough base topped with creamy pink strawberry frosting and a sprinkle of pink sugar magic — a perfect harmony of chocolate warmth and fruity sweetness.',
      ingredients: [
        'brown dough',
        'strawberry frosting',
        'pink sprinkles',
        'sugar',
        'butter',
        'flour',
      ],
      image: '/assets/foods/cupcakes/strawberry-dream.png',
      category: 'cupcake',
      flavor: 'chocolate-strawberry',
    },
    {
      name: 'Classic Choco Vanilla Funfetti',
      price: 5.7,
      description:
        'Rich chocolate cupcake layered with silky vanilla frosting and a cheerful burst of rainbow sprinkles — the perfect blend of nostalgia and indulgence.',
      ingredients: [
        'chocolate dough',
        'vanilla frosting',
        'rainbow sprinkles',
        'cocoa',
        'butter',
        'flour',
      ],
      image: '/assets/foods/cupcakes/choco-vanilla-funfetti.png',
      category: 'cupcake',
      flavor: 'chocolate-vanilla',
    },
    {
      name: 'Pink Velvet Delight',
      price: 5.6,
      description:
        'Light vanilla cupcake crowned with smooth pink frosting and playful black sprinkles. A visually striking dessert with a soft, buttery flavor and a touch of sweetness.',
      ingredients: [
        'vanilla dough',
        'pink frosting',
        'black sprinkles',
        'sugar',
        'butter',
        'flour',
      ],
      image: '/assets/foods/cupcakes/pink-velvet-delight.png',
      category: 'cupcake',
      flavor: 'vanilla-berry',
    },
    {
      name: 'Rose Blossom Cupcake',
      price: 5.4,
      description:
        'A gentle vanilla sponge layered with rose-hued frosting and soft pink sprinkles — light, fragrant, and delicately sweet like a spring morning treat.',
      ingredients: [
        'vanilla dough',
        'rose frosting',
        'pink sprinkles',
        'flour',
        'sugar',
        'eggs',
      ],
      image: '/assets/foods/cupcakes/rose-blossom.png',
      category: 'cupcake',
      flavor: 'vanilla-rose',
    },
    {
      name: 'Rainbow Vanilla Cloud',
      price: 5.6,
      description:
        'Fluffy vanilla cake swirled with creamy white frosting and topped with rainbow sprinkles for a bite of pure joy and celebration.',
      ingredients: [
        'vanilla dough',
        'vanilla frosting',
        'rainbow sprinkles',
        'sugar',
        'milk',
        'flour',
      ],
      image: '/assets/foods/cupcakes/rainbow-vanilla-cloud.png',
      category: 'cupcake',
      flavor: 'vanilla',
    },
    {
      name: 'Blueberry Bliss Cupcake',
      price: 5.8,
      description:
        'Moist chocolate cupcake topped with smooth blue vanilla frosting and soft pink sprinkles — a delicious visual contrast with hints of berries and cream.',
      ingredients: [
        'chocolate dough',
        'blue frosting',
        'pink sprinkles',
        'cocoa',
        'flour',
        'sugar',
      ],
      image: '/assets/foods/cupcakes/blueberry-bliss.png',
      category: 'cupcake',
      flavor: 'chocolate-blueberry',
    },
    {
      name: 'Lavender Love Cupcake',
      price: 5.9,
      description:
        'Vanilla cupcake with airy purple lavender frosting and matching sprinkles — calming, floral, and irresistibly smooth.',
      ingredients: [
        'vanilla dough',
        'lavender frosting',
        'purple sprinkles',
        'flour',
        'butter',
        'sugar',
      ],
      image: '/assets/foods/cupcakes/lavender-love.png',
      category: 'cupcake',
      flavor: 'lavender-vanilla',
    },
    {
      name: 'Mocha Crunch Cupcake',
      price: 6.0,
      description:
        'Deep chocolate sponge topped with rich mocha frosting and crunchy coffee sprinkles — bold and aromatic for true coffee lovers.',
      ingredients: [
        'chocolate dough',
        'mocha frosting',
        'coffee sprinkles',
        'cocoa',
        'espresso',
        'flour',
      ],
      image: '/assets/foods/cupcakes/mocha-crunch.png',
      category: 'cupcake',
      flavor: 'mocha',
    },
    {
      name: 'Chocolate Rose Cupcake',
      price: 5.7,
      description:
        'Decadent chocolate base with smooth pink rose frosting and delicate pink sprinkles — a romantic and irresistible flavor pairing.',
      ingredients: [
        'chocolate dough',
        'rose frosting',
        'pink sprinkles',
        'cocoa',
        'butter',
        'sugar',
      ],
      image: '/assets/foods/cupcakes/chocolate-rose.png',
      category: 'cupcake',
      flavor: 'chocolate-rose',
    },
    {
      name: 'Party Sprinkle Choco Cupcake',
      price: 5.8,
      description:
        'Classic chocolate cupcake layered with creamy chocolate frosting and bright rainbow sprinkles — every bite is a mini celebration.',
      ingredients: [
        'chocolate dough',
        'chocolate frosting',
        'rainbow sprinkles',
        'cocoa',
        'flour',
        'sugar',
      ],
      image: '/assets/foods/cupcakes/party-sprinkle-choco.png',
      category: 'cupcake',
      flavor: 'chocolate',
    },
    {
      name: 'Caramel Kiss Cupcake',
      price: 6.1,
      description:
        'Soft brown sponge with a swirl of smooth caramel frosting and golden caramel sprinkles — luxuriously sweet and buttery.',
      ingredients: [
        'brown dough',
        'caramel frosting',
        'caramel sprinkles',
        'sugar',
        'butter',
        'flour',
      ],
      image: '/assets/foods/cupcakes/caramel-kiss.png',
      category: 'cupcake',
      flavor: 'caramel',
    },
    {
      name: 'Berry Vanilla Cupcake',
      price: 5.0,
      description:
        'Chocolate base topped with vanilla frosting and a burst of fruity raspberry sprinkles — the perfect mix of creamy and tangy.',
      ingredients: [
        'chocolate dough',
        'vanilla frosting',
        'fruit sprinkles',
        'raspberries',
        'flour',
        'cocoa',
      ],
      image: '/assets/foods/cupcakes/berry-vanilla.png',
      category: 'cupcake',
      flavor: 'chocolate-vanilla-berry',
    },
    {
      name: 'Berry Blush Cupcake',
      price: 5.8,
      description:
        'Rich chocolate cake crowned with pink berry frosting and fruit sprinkles — vibrant, fruity, and visually stunning.',
      ingredients: [
        'chocolate dough',
        'pink frosting',
        'fruit sprinkles',
        'strawberry puree',
        'cocoa',
      ],
      image: '/assets/foods/cupcakes/berry-blush.png',
      category: 'cupcake',
      flavor: 'chocolate-strawberry',
    },
    {
      name: 'Rainbow Rose Delight',
      price: 5.9,
      description:
        'Brown sponge with soft pink frosting and rainbow sprinkles — a playful combination of buttery flavor and joyful color.',
      ingredients: [
        'brown dough',
        'pink frosting',
        'rainbow sprinkles',
        'flour',
        'sugar',
        'butter',
      ],
      image: '/assets/foods/cupcakes/rainbow-rose-delight.png',
      category: 'cupcake',
      flavor: 'vanilla-strawberry',
    },
  ];

  await foodRepository.save(cupcakes);
  console.log('✅ Cupcakes seeded successfully.');
};
