import { DataSource } from 'typeorm';
import { Drink } from '../product/entities/drink.entity';

export const seedTeas = async (dataSource: DataSource) => {
  const drinkRepository = dataSource.getRepository(Drink);

  const teas: Partial<Drink>[] = [
    {
      name: 'Matcha Mint Lemon Tea',
      price: 3.9,
      description:
        'An invigorating fusion of Japanese matcha, cool mint leaves, and bright lemon essence. This tea awakens your senses with a balance of earthy matcha and citrus freshness, creating a clean, revitalizing sip that’s perfect for an afternoon energy boost.',
      ingredients: ['matcha', 'mint leaves', 'lemon juice', 'honey', 'water'],
      image: '/assets/drinks/teas/tea-matcha-mint-lemon.png',
      drinkType: 'hot',
      flavor: 'matcha-mint-lemon',
    },
    {
      name: 'Rose Lychee Tea',
      price: 4.2,
      description:
        'A delicate infusion where fragrant rose petals meet the exotic sweetness of lychee. Each cup feels like a gentle floral breeze — smooth, soothing, and slightly tropical — perfect for moments when you crave calm elegance in a cup.',
      ingredients: ['rose petals', 'lychee syrup', 'black tea', 'honey'],
      image: '/assets/drinks/teas/tea-rose-lychee.png',
      drinkType: 'hot',
      flavor: 'rose-lychee',
    },
    {
      name: 'Lavender Berry Tea',
      price: 4.0,
      description:
        'A serene blend of lavender blossoms, blueberries, and blackberries that creates a fragrant floral melody. The gentle sweetness of berries complements the calming aroma of lavender, making this tea a soothing escape for mind and body.',
      ingredients: [
        'lavender',
        'blueberries',
        'blackberries',
        'hibiscus',
        'water',
      ],
      image: '/assets/drinks/teas/tea-lavender-berry.png',
      drinkType: 'hot',
      flavor: 'lavender-berry',
    },
    {
      name: 'Chai Spice Tea',
      price: 3.8,
      description:
        'A traditional Indian-inspired blend of bold black tea and warm spices — cinnamon, cardamom, and cloves — finished with creamy milk. Rich, aromatic, and comforting, this chai delivers cozy warmth with every sip.',
      ingredients: [
        'black tea',
        'cinnamon',
        'cardamom',
        'cloves',
        'milk',
        'sugar',
      ],
      image: '/assets/drinks/teas/tea-chai-spice.png',
      drinkType: 'hot',
      flavor: 'chai-spice',
    },
    {
      name: 'Vanilla Rooibos Tea',
      price: 3.7,
      description:
        'Naturally sweet and caffeine-free, this smooth rooibos tea is enhanced with pure vanilla bean and a touch of honey. Its deep amber color and creamy caramel aroma make it an ideal companion for slow, peaceful evenings.',
      ingredients: ['rooibos', 'vanilla bean', 'honey', 'water'],
      image: '/assets/drinks/teas/tea-vanilla-rooibos.png',
      drinkType: 'hot',
      flavor: 'vanilla-rooibos',
    },
    {
      name: 'Spiced Citrus Hibiscus Tea',
      price: 3.9,
      description:
        'Bright hibiscus petals meet zesty orange peel and warming cinnamon in this naturally caffeine-free infusion. The result is a vibrant ruby-red tea that’s tangy, lightly spiced, and full of lively citrus character.',
      ingredients: ['hibiscus', 'orange peel', 'cinnamon', 'ginger', 'honey'],
      image: '/assets/drinks/teas/tea-citrus-hibiscus.png',
      drinkType: 'hot',
      flavor: 'spiced-citrus-hibiscus',
    },
    {
      name: 'Lemon Ginger Honey Tea',
      price: 3.6,
      description:
        'A timeless comfort drink that blends zesty lemon, spicy ginger, and golden honey. Each sip offers soothing warmth and natural sweetness — perfect for boosting your mood or easing into a cozy night in.',
      ingredients: ['ginger', 'lemon', 'honey', 'water'],
      image: '/assets/drinks/teas/tea-lemon-ginger-honey.png',
      drinkType: 'hot',
      flavor: 'lemon-ginger-honey',
    },
    {
      name: 'Blueberry Earl Grey',
      price: 4.1,
      description:
        'A refined twist on the British classic — Earl Grey infused with ripe wild blueberries. The signature bergamot aroma meets soft berry sweetness, producing a cup that feels both timeless and playfully modern.',
      ingredients: ['black tea', 'bergamot oil', 'blueberries', 'sugar'],
      image: '/assets/drinks/teas/tea-blueberry-earl-grey.png',
      drinkType: 'hot',
      flavor: 'blueberry-earl-grey',
    },
    {
      name: 'Lemongrass Jasmine Tea',
      price: 3.8,
      description:
        'A light and uplifting blend of jasmine blossoms and lemongrass. Its floral perfume and gentle citrus notes refresh the palate and clear the mind — a perfect choice for a mindful pause in your day.',
      ingredients: ['jasmine tea', 'lemongrass', 'lemon peel'],
      image: '/assets/drinks/teas/tea-lemongrass-jasmine.png',
      drinkType: 'hot',
      flavor: 'lemongrass-jasmine',
    },
    {
      name: 'Caramel Toffee Black Tea',
      price: 4.3,
      description:
        'A luxurious dessert-style tea that combines robust black tea with creamy caramel and buttery toffee. Its smooth, decadent flavor lingers like a treat, offering a rich, sweet finish without being overpowering.',
      ingredients: ['black tea', 'caramel', 'toffee syrup', 'milk'],
      image: '/assets/drinks/teas/tea-caramel-toffee-black.png',
      drinkType: 'hot',
      flavor: 'caramel-toffee',
    },
  ];

  await drinkRepository.save(teas);
  console.log('✅ Teas seeded successfully!');
};
