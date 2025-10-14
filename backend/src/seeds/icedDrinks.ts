import { DataSource } from 'typeorm';
import { Drink } from '../product/entities/drink.entity';

export const seedIcedDrinks = async (dataSource: DataSource) => {
  const foodRepository = dataSource.getRepository(Drink);

  const icedDrinks: Partial<Drink>[] = [
    {
      name: 'Iced Vanilla Latte',
      price: 4.5,
      description:
        'A smooth, creamy latte poured over ice and infused with delicate Madagascar vanilla syrup. Lightly sweet, beautifully balanced, and refreshingly cool — the perfect pick-me-up for warm afternoons.',
      ingredients: ['espresso', 'milk', 'vanilla syrup', 'ice'],
      image: '/assets/drinks/icedDrinks/iced-vanilla-latte.png',
      drinkType: 'cold',
      flavor: 'vanilla',
    },
    {
      name: 'Iced Caramel Latte',
      price: 4.6,
      description:
        'Velvety espresso meets silky milk and golden caramel syrup, poured over ice for a perfectly chilled indulgence. Sweet, creamy, and irresistibly smooth with every sip.',
      ingredients: [
        'espresso',
        'milk',
        'caramel syrup',
        'ice',
        'whipped cream',
      ],
      image: '/assets/drinks/icedDrinks/iced-caramel-latte.png',
      drinkType: 'cold',
      flavor: 'caramel',
    },
    {
      name: 'Iced Latte',
      price: 4.2,
      description:
        'A refreshing classic — rich espresso blended with chilled milk and poured over ice. Simple, smooth, and perfectly balanced to highlight the true flavor of coffee.',
      ingredients: ['espresso', 'milk', 'ice'],
      image: '/assets/drinks/icedDrinks/iced-latte.png',
      drinkType: 'cold',
      flavor: 'classic-latte',
    },
    {
      name: 'Iced Matcha Latte',
      price: 4.8,
      description:
        'Bright and earthy Japanese matcha whisked with cold milk and ice for a vibrant green refreshment. Smooth, slightly sweet, and naturally energizing.',
      ingredients: ['matcha powder', 'milk', 'ice', 'vanilla syrup'],
      image: '/assets/drinks/icedDrinks/iced-matcha-latte.png',
      drinkType: 'cold',
      flavor: 'matcha',
    },
    {
      name: 'Iced Taro Latte',
      price: 4.9,
      description:
        'A pastel-purple dream — creamy taro root blended with milk and ice for a smooth, nutty, and subtly sweet treat with tropical charm.',
      ingredients: ['taro paste', 'milk', 'vanilla syrup', 'ice'],
      image: '/assets/drinks/icedDrinks/iced-taro-latte.png',
      drinkType: 'cold',
      flavor: 'taro',
    },
    {
      name: 'Iced Ice Cream Latte',
      price: 5.2,
      description:
        'An indulgent fusion of espresso, milk, and a scoop of vanilla ice cream over ice. The perfect mix of coffee and dessert — creamy, cool, and luxuriously rich.',
      ingredients: [
        'espresso',
        'milk',
        'vanilla ice cream',
        'ice',
        'sugar syrup',
      ],
      image: '/assets/drinks/icedDrinks/ice-cream-latte.png',
      drinkType: 'cold',
      flavor: 'coffee-ice-cream',
    },
    {
      name: 'Iced Pumpkin Spice Latte',
      price: 5.0,
      description:
        'A fall favorite served cold — espresso with pumpkin purée, cinnamon, nutmeg, and creamy milk over ice. Sweetly spiced and wonderfully aromatic.',
      ingredients: [
        'espresso',
        'milk',
        'pumpkin puree',
        'cinnamon',
        'nutmeg',
        'ice',
      ],
      image: '/assets/drinks/icedDrinks/pumpkin-spice-latte.png',
      drinkType: 'cold',
      flavor: 'pumpkin-spice',
    },
    {
      name: 'Iced Americano',
      price: 3.8,
      description:
        'Bold espresso diluted with chilled water and poured over ice. Smooth, light, and invigorating — the purest expression of cold coffee flavor.',
      ingredients: ['espresso', 'cold water', 'ice'],
      image: '/assets/drinks/icedDrinks/iced-americano.png',
      drinkType: 'cold',
      flavor: 'americano',
    },
    {
      name: 'Iced Honey Cinnamon Latte',
      price: 4.7,
      description:
        'Sweet honey and a sprinkle of cinnamon swirl through chilled espresso and milk. Aromatic, lightly spiced, and perfectly refreshing for cozy days.',
      ingredients: ['espresso', 'milk', 'honey', 'cinnamon', 'ice'],
      image: '/assets/drinks/icedDrinks/iced-honey-cinnamon-latte.png',
      drinkType: 'cold',
      flavor: 'honey-cinnamon',
    },
    {
      name: 'Iced Coconut Cream Latte',
      price: 4.8,
      description:
        'A tropical escape in a cup — smooth espresso blended with creamy coconut milk and poured over ice. Sweet, nutty, and refreshingly light.',
      ingredients: ['espresso', 'coconut milk', 'vanilla syrup', 'ice'],
      image: '/assets/drinks/icedDrinks/iced-coconut-cream-latte.png',
      drinkType: 'cold',
      flavor: 'coconut-cream',
    },
    {
      name: 'Toffee Crunch Milkshake',
      price: 5.5,
      description:
        'Creamy vanilla ice cream blended with rich toffee syrup and topped with caramel drizzle and toffee bits — a smooth, crunchy, and utterly satisfying treat.',
      ingredients: [
        'milk',
        'vanilla ice cream',
        'toffee syrup',
        'whipped cream',
        'toffee pieces',
      ],
      image: '/assets/drinks/icedDrinks/toffee-crunch-milkshake.png',
      drinkType: 'cold',
      flavor: 'toffee',
    },
    {
      name: 'Caramel Chocolate Milkshake',
      price: 5.6,
      description:
        'Decadent chocolate and buttery caramel come together in this thick, velvety milkshake. Finished with whipped cream and a caramel drizzle for pure indulgence.',
      ingredients: [
        'milk',
        'chocolate syrup',
        'caramel syrup',
        'ice cream',
        'whipped cream',
      ],
      image: '/assets/drinks/icedDrinks/caramel-chocolate-milkshake.png',
      drinkType: 'cold',
      flavor: 'caramel-chocolate',
    },
    {
      name: 'Caramel Nut Milkshake',
      price: 5.7,
      description:
        'A creamy caramel base swirled with roasted nuts for a perfect mix of sweet and nutty. Smooth, rich, and loaded with crunch in every sip.',
      ingredients: [
        'milk',
        'ice cream',
        'caramel syrup',
        'hazelnuts',
        'almonds',
        'whipped cream',
      ],
      image: '/assets/drinks/icedDrinks/caramel-nut-milkshake.png',
      drinkType: 'cold',
      flavor: 'caramel-nut',
    },
    {
      name: 'Fudgy Brownie Milkshake',
      price: 5.8,
      description:
        'A chocolate lover’s dream — thick milkshake blended with chunks of homemade brownie, topped with whipped cream and fudge drizzle.',
      ingredients: [
        'milk',
        'chocolate ice cream',
        'brownie pieces',
        'fudge sauce',
        'whipped cream',
      ],
      image: '/assets/drinks/icedDrinks/brownie-milkshake.png',
      drinkType: 'cold',
      flavor: 'brownie',
    },
    {
      name: 'Oreo Cookie Milkshake',
      price: 5.7,
      description:
        'Crunchy Oreo cookies blended into smooth vanilla ice cream for a creamy, cookies-and-cream classic. Topped with whipped cream and cookie crumbs.',
      ingredients: [
        'milk',
        'vanilla ice cream',
        'oreo cookies',
        'chocolate syrup',
        'whipped cream',
      ],
      image: '/assets/drinks/icedDrinks/oreo-cookie-milkshake.png',
      drinkType: 'cold',
      flavor: 'oreo',
    },
    {
      name: 'Marshmallow Dream Milkshake',
      price: 5.6,
      description:
        'Soft toasted marshmallows blended with vanilla ice cream and milk, topped with whipped cream and a drizzle of caramel. A creamy cloud in every sip.',
      ingredients: [
        'milk',
        'vanilla ice cream',
        'marshmallows',
        'caramel syrup',
        'whipped cream',
      ],
      image: '/assets/drinks/icedDrinks/marshmallow-dream-milkshake.png',
      drinkType: 'cold',
      flavor: 'marshmallow',
    },
    {
      name: 'Cherry Chocolate Milkshake',
      price: 5.9,
      description:
        'Rich chocolate ice cream blended with ripe cherries for a velvety, fruity delight. Finished with whipped cream and dark chocolate shavings.',
      ingredients: [
        'milk',
        'chocolate ice cream',
        'cherries',
        'chocolate syrup',
        'whipped cream',
      ],
      image: '/assets/drinks/icedDrinks/cherry-chocolate-milkshake.png',
      drinkType: 'cold',
      flavor: 'cherry-chocolate',
    },
    {
      name: 'Classic Chocolate Milkshake',
      price: 5.4,
      description:
        'Smooth, thick, and timeless — pure chocolate ice cream blended with milk and fudge syrup. A nostalgic favorite that never disappoints.',
      ingredients: [
        'milk',
        'chocolate ice cream',
        'fudge syrup',
        'whipped cream',
      ],
      image: '/assets/drinks/icedDrinks/chocolate-milkshake.png',
      drinkType: 'cold',
      flavor: 'chocolate',
    },
  ];

  await foodRepository.save(icedDrinks);
  console.log('✅ Iced drinks seeded successfully.');
};
