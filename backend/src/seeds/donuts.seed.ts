import { DataSource } from 'typeorm';
import { Food } from '../product/entities/food.entity';

export const seedDonuts = async (dataSource: DataSource) => {
  const foodRepository = dataSource.getRepository(Food);

  const donuts: Partial<Food>[] = [
    {
      name: 'Classic Sugar Donut',
      price: 1.8,
      description:
        'Soft, airy, and perfectly golden — this timeless donut is rolled in fine sugar for a simple yet irresistible sweetness that never goes out of style.',
      ingredients: ['flour', 'sugar', 'yeast', 'milk', 'eggs', 'butter'],
      image: '/assets/foods/donuts/classic-sugar-donut.png',
      category: 'donut',
      flavor: 'sugar',
    },
    {
      name: 'Glazed Donut',
      price: 2.0,
      description:
        'A soft, pillowy donut coated in a smooth vanilla glaze that glistens with every bite. Lightly sweet and melt-in-your-mouth good — a true bakery favorite.',
      ingredients: [
        'flour',
        'sugar',
        'yeast',
        'milk',
        'vanilla',
        'butter',
        'eggs',
      ],
      image: '/assets/foods/donuts/glazed-donut.png',
      category: 'donut',
      flavor: 'vanilla-glazed',
    },
    {
      name: 'Hazelnut Donut',
      price: 2.4,
      description:
        'Filled with a creamy hazelnut center and topped with chocolate drizzle, this donut delivers nutty richness and silky smooth indulgence in every bite.',
      ingredients: [
        'flour',
        'hazelnut cream',
        'cocoa',
        'sugar',
        'milk',
        'butter',
        'yeast',
      ],
      image: '/assets/foods/donuts/hazelnut-donut.png',
      category: 'donut',
      flavor: 'hazelnut-chocolate',
    },
    {
      name: 'Chocolate Donut',
      price: 2.2,
      description:
        'Rich and decadent, this chocolate lover’s dream is dipped in smooth chocolate icing with a soft, moist interior — pure cocoa perfection.',
      ingredients: [
        'flour',
        'cocoa powder',
        'chocolate glaze',
        'sugar',
        'butter',
        'eggs',
      ],
      image: '/assets/foods/donuts/chocolate-donut.png',
      category: 'donut',
      flavor: 'chocolate',
    },
    {
      name: 'Strawberry Donut',
      price: 2.3,
      description:
        'Bright, fruity, and delightfully pink — this strawberry-glazed donut bursts with juicy berry flavor and adds a splash of sweetness to your day.',
      ingredients: [
        'flour',
        'strawberry glaze',
        'milk',
        'sugar',
        'butter',
        'yeast',
      ],
      image: '/assets/foods/donuts/strawberry-donut.png',
      category: 'donut',
      flavor: 'strawberry',
    },
    {
      name: 'Caramel Donut',
      price: 2.4,
      description:
        'Golden and glossy, this donut is covered with smooth caramel glaze and sprinkled with a hint of sea salt for the perfect balance of sweet and rich.',
      ingredients: ['flour', 'caramel', 'butter', 'milk', 'sugar', 'yeast'],
      image: '/assets/foods/donuts/caramel-donut.png',
      category: 'donut',
      flavor: 'caramel',
    },
    {
      name: 'Pink Glazed Donut',
      price: 2.1,
      description:
        'Playful and sweet — a soft donut coated in a vibrant pink vanilla glaze, perfect for those who love their treats as pretty as they are delicious.',
      ingredients: [
        'flour',
        'sugar',
        'vanilla',
        'milk',
        'butter',
        'food coloring',
        'yeast',
      ],
      image: '/assets/foods/donuts/pink-glazed-donut.png',
      category: 'donut',
      flavor: 'pink-vanilla',
    },
    {
      name: 'Red Berry Donut',
      price: 2.5,
      description:
        'Topped with a deep red berry glaze and hints of raspberry and cherry, this donut offers a fruity burst of flavor and a beautiful finish to your coffee break.',
      ingredients: [
        'flour',
        'raspberry glaze',
        'cherry puree',
        'sugar',
        'butter',
        'yeast',
      ],
      image: '/assets/foods/donuts/red-berry-donut.png',
      category: 'donut',
      flavor: 'red-berry',
    },
  ];

  await foodRepository.save(donuts);
  console.log('✅ Donuts seeded successfully.');
};
