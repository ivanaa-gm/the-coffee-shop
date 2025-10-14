import { DataSource } from 'typeorm';
import { Drink } from '../product/entities/drink.entity';

export const seedLemonades = async (dataSource: DataSource) => {
  const drinkRepository = dataSource.getRepository(Drink);

  const lemonades: Partial<Drink>[] = [
    {
      name: 'Peach Paradise Lemonade',
      price: 4.3,
      description:
        'A sun-kissed fusion of ripe peaches and freshly squeezed lemons, served over ice for a perfectly balanced sweet–tart refreshment. A sip of summer in every glass.',
      ingredients: [
        'peach puree',
        'lemon juice',
        'sugar syrup',
        'water',
        'ice',
      ],
      image: '/assets/drinks/lemonades/peach.png',
      drinkType: 'cold',
      flavor: 'peach',
    },
    {
      name: 'Raspberry Spark Lemonade',
      price: 4.4,
      description:
        'Tangy raspberries meet zesty lemon in this vibrant pink lemonade. Refreshingly bold and naturally fruity, with a hint of sparkle that brightens any moment.',
      ingredients: [
        'raspberry syrup',
        'lemon juice',
        'sparkling water',
        'mint leaves',
        'ice',
      ],
      image: '/assets/drinks/lemonades/raspberry.png',
      drinkType: 'cold',
      flavor: 'raspberry',
    },
    {
      name: 'Pomegranate Bliss Lemonade',
      price: 4.6,
      description:
        'A luxurious twist on the classic — tart pomegranate juice blended with lemon and a drizzle of honey, creating a deep ruby-colored refreshment bursting with antioxidants.',
      ingredients: [
        'pomegranate juice',
        'lemon juice',
        'honey',
        'water',
        'ice',
      ],
      image: '/assets/drinks/lemonades/pomegranate.png',
      drinkType: 'cold',
      flavor: 'pomegranate',
    },
    {
      name: 'Green Apple Zest Lemonade',
      price: 4.5,
      description:
        'Crisp green apple and zesty lemon come together in a tangy, invigorating drink. A sweet-and-sour harmony that’s as refreshing as a cool breeze on a hot day.',
      ingredients: [
        'green apple syrup',
        'lemon juice',
        'mint',
        'sparkling water',
        'ice',
      ],
      image: '/assets/drinks/lemonades/green-apple.png',
      drinkType: 'cold',
      flavor: 'green apple',
    },
    {
      name: 'Strawberry Sunset Lemonade',
      price: 4.4,
      description:
        'Fresh strawberry puree swirled into hand-pressed lemonade — a sunset-pink refreshment that’s sweet, tangy, and irresistibly smooth.',
      ingredients: [
        'strawberry puree',
        'lemon juice',
        'sugar syrup',
        'water',
        'ice',
      ],
      image: '/assets/drinks/lemonades/strawberry.png',
      drinkType: 'cold',
      flavor: 'strawberry',
    },
    {
      name: 'Blueberry Chill Lemonade',
      price: 4.5,
      description:
        'Cool, crisp, and naturally sweet — juicy blueberries and fresh lemon come together for a deliciously purple twist on a summer classic.',
      ingredients: [
        'blueberry syrup',
        'lemon juice',
        'sugar syrup',
        'water',
        'ice',
      ],
      image: '/assets/drinks/lemonades/blueberry.png',
      drinkType: 'cold',
      flavor: 'blueberry',
    },
    {
      name: 'Dragonfruit Dream Lemonade',
      price: 4.8,
      description:
        'A vibrant pink lemonade crafted with exotic dragonfruit, zesty lemon, and a splash of coconut water for a tropical, dreamy refreshment.',
      ingredients: [
        'dragonfruit puree',
        'lemon juice',
        'coconut water',
        'honey',
        'ice',
      ],
      image: '/assets/drinks/lemonades/dragonfruit.png',
      drinkType: 'cold',
      flavor: 'dragonfruit',
    },
    {
      name: 'Classic Lemonade',
      price: 3.9,
      description:
        'Pure and simple — freshly squeezed lemons blended with just the right amount of sweetness for the perfect balance of tart and refreshing.',
      ingredients: ['lemon juice', 'sugar syrup', 'water', 'ice'],
      image: '/assets/drinks/lemonades/lemon.png',
      drinkType: 'cold',
      flavor: 'lemon',
    },
    {
      name: 'Zesty Lime Cooler',
      price: 4.0,
      description:
        'Fresh lime juice meets a touch of mint and sparkling water for a crisp, cooling lemonade with an extra zing. A true thirst quencher.',
      ingredients: [
        'lime juice',
        'mint',
        'sparkling water',
        'sugar syrup',
        'ice',
      ],
      image: '/assets/drinks/lemonades/lime.png',
      drinkType: 'cold',
      flavor: 'lime',
    },
    {
      name: 'Golden Mango Lemonade',
      price: 4.7,
      description:
        'Smooth mango nectar and citrusy lemon blended into golden perfection — naturally sweet, tropical, and energizing.',
      ingredients: ['mango puree', 'lemon juice', 'honey', 'water', 'ice'],
      image: '/assets/drinks/lemonades/mango.png',
      drinkType: 'cold',
      flavor: 'mango',
    },
    {
      name: 'Ruby Grapefruit Lemonade',
      price: 4.6,
      description:
        'Bright grapefruit and tangy lemon come together for a citrus-forward drink that’s both bitter and refreshing — perfect for those who love bold flavors.',
      ingredients: [
        'grapefruit juice',
        'lemon juice',
        'honey',
        'sparkling water',
        'ice',
      ],
      image: '/assets/drinks/lemonades/grapefruit.png',
      drinkType: 'cold',
      flavor: 'grapefruit',
    },
    {
      name: 'Pineapple Breeze Lemonade',
      price: 4.5,
      description:
        'A tropical escape in a glass — fresh pineapple juice blended with lemon and a hint of mint, creating a vibrant, juicy, and uplifting lemonade.',
      ingredients: ['pineapple juice', 'lemon juice', 'mint', 'water', 'ice'],
      image: '/assets/drinks/lemonades/pineapple.png',
      drinkType: 'cold',
      flavor: 'pineapple',
    },
    {
      name: 'Watermelon Wave Lemonade',
      price: 4.4,
      description:
        'Sweet watermelon and lemon juice unite for a light, hydrating drink that tastes like pure summer. Served over crushed ice for the ultimate refreshment.',
      ingredients: [
        'watermelon juice',
        'lemon juice',
        'sugar syrup',
        'mint leaves',
        'ice',
      ],
      image: '/assets/drinks/lemonades/watermelon.png',
      drinkType: 'cold',
      flavor: 'watermelon',
    },
    {
      name: 'Citrus Burst Lemonade',
      price: 4.3,
      description:
        'Freshly squeezed oranges and lemons create a citrus explosion that’s bright, tangy, and full of vitamin-packed flavor.',
      ingredients: [
        'orange juice',
        'lemon juice',
        'sugar syrup',
        'water',
        'ice',
      ],
      image: '/assets/drinks/lemonades/orange.png',
      drinkType: 'cold',
      flavor: 'orange',
    },
    {
      name: 'Kiwi Twist Lemonade',
      price: 4.7,
      description:
        'Vibrant green kiwi puree blended with lemon and a touch of honey for a sweet-tart balance that feels both exotic and refreshing.',
      ingredients: ['kiwi puree', 'lemon juice', 'honey', 'water', 'ice'],
      image: '/assets/drinks/lemonades/kiwi.png',
      drinkType: 'cold',
      flavor: 'kiwi',
    },
  ];

  await drinkRepository.save(lemonades);
  console.log('✅ Lemonades seeded successfully.');
};
