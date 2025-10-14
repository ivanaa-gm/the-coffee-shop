import { DataSource } from 'typeorm';
import { Food } from '../product/entities/food.entity';

export const seedIceCreams = async (dataSource: DataSource) => {
  const foodRepository = dataSource.getRepository(Food);

  const iceCreams: Partial<Food>[] = [
    {
      name: 'Caramel Swirl Delight',
      price: 4.5,
      description:
        'Rich and creamy caramel ice cream blended with buttery ribbons of golden caramel sauce. Every scoop offers a perfect harmony of sweetness and smoothness, reminiscent of a homemade caramel drizzle on warm waffles.',
      ingredients: ['milk', 'cream', 'sugar', 'caramel sauce'],
      image: '/assets/foods/icecreams/ic-caramel-swirl-delight.png',
      category: 'ice-cream',
      flavor: 'caramel',
    },
    {
      name: 'Hazelnut Crunch',
      price: 4.8,
      description:
        'Silky hazelnut ice cream enriched with roasted hazelnut bits for a satisfying crunch. A perfect balance of nutty aroma and creamy texture, inspired by classic European pralines.',
      ingredients: ['milk', 'cream', 'sugar', 'hazelnuts', 'vanilla'],
      image: '/assets/foods/icecreams/ic-hazelnut-crunch.png',
      category: 'ice-cream',
      flavor: 'hazelnut',
    },
    {
      name: 'Mint Chocolate Chip',
      price: 4.2,
      description:
        'Cool, refreshing mint ice cream with generous chunks of dark chocolate that melt in your mouth. A delightful contrast of chill and sweetness that refreshes your senses instantly.',
      ingredients: [
        'milk',
        'cream',
        'sugar',
        'mint extract',
        'chocolate chips',
      ],
      image: '/assets/foods/icecreams/ic-mint-chocolate-chip.png',
      category: 'ice-cream',
      flavor: 'mint-chocolate',
    },
    {
      name: 'Classic Vanilla Dream',
      price: 3.9,
      description:
        'Smooth, creamy vanilla ice cream made with real vanilla beans. Its timeless flavor and delicate aroma make it a comforting classic that pairs perfectly with any dessert or coffee.',
      ingredients: ['milk', 'cream', 'sugar', 'vanilla bean'],
      image: '/assets/foods/icecreams/ic-classic-vanilla-dream.png',
      category: 'ice-cream',
      flavor: 'vanilla',
    },
    {
      name: 'Lavender Blueberry Swirl',
      price: 4.6,
      description:
        'Elegant lavender-infused ice cream with ripples of sweet blueberry syrup. The floral and fruity fusion delivers a calming and aromatic treat that feels like summer in Provence.',
      ingredients: ['milk', 'cream', 'sugar', 'lavender', 'blueberries'],
      image: '/assets/foods/icecreams/ic-lavender-blueberry-swirl.png',
      category: 'ice-cream',
      flavor: 'lavender-blueberry',
    },
    {
      name: 'Lemon Meringue',
      price: 4.4,
      description:
        'Bright and tangy lemon ice cream swirled with soft meringue pieces for a light, airy finish. Its zesty freshness and smooth texture make it an irresistible citrus indulgence.',
      ingredients: ['milk', 'cream', 'sugar', 'lemon zest', 'meringue bits'],
      image: '/assets/foods/icecreams/ic-lemon-meringue.png',
      category: 'ice-cream',
      flavor: 'lemon-meringue',
    },
    {
      name: 'Strawberry Rose',
      price: 4.5,
      description:
        'Fragrant rose ice cream infused with luscious strawberry purée. This romantic blend brings together floral sweetness and fruity charm in every scoop.',
      ingredients: ['milk', 'cream', 'sugar', 'strawberries', 'rose extract'],
      image: '/assets/foods/icecreams/ic-strawberry-rose.png',
      category: 'ice-cream',
      flavor: 'strawberry-rose',
    },
    {
      name: 'Oreo Explosion',
      price: 4.7,
      description:
        'Creamy vanilla ice cream generously packed with crunchy Oreo cookie chunks. The blend of smooth cream and chocolate cookies delivers the ultimate cookies-and-cream experience.',
      ingredients: ['milk', 'cream', 'sugar', 'Oreo cookies'],
      image: '/assets/foods/icecreams/ic-oreo-explosion.png',
      category: 'ice-cream',
      flavor: 'oreo',
    },
    {
      name: 'Purple Yam Swirl',
      price: 4.6,
      description:
        'Exotic purple yam (ube) ice cream with a naturally sweet, nutty flavor. Its creamy texture and vivid purple hue make it as beautiful as it is delicious.',
      ingredients: ['milk', 'cream', 'sugar', 'purple yam'],
      image: '/assets/foods/icecreams/ic-purple-yam-swirl.png',
      category: 'ice-cream',
      flavor: 'purple-yam',
    },
    {
      name: 'Blueberry Cheesecake',
      price: 4.8,
      description:
        'Decadent cheesecake ice cream marbled with blueberry sauce and bits of real cheesecake. A dessert lover’s dream that perfectly combines tanginess, sweetness, and creaminess.',
      ingredients: [
        'milk',
        'cream',
        'sugar',
        'cheesecake chunks',
        'blueberries',
      ],
      image: '/assets/foods/icecreams/ic-blueberry-cheesecake.png',
      category: 'ice-cream',
      flavor: 'blueberry-cheesecake',
    },
    {
      name: 'Cotton Candy Dream',
      price: 4.3,
      description:
        'Playful cotton candy-flavored ice cream that captures the magic of a carnival in every bite. Sweet, colorful, and irresistibly nostalgic.',
      ingredients: ['milk', 'cream', 'sugar', 'cotton candy flavor'],
      image: '/assets/foods/icecreams/ic-cotton-candy-dream.png',
      category: 'ice-cream',
      flavor: 'cotton-candy',
    },
    {
      name: 'Mango Tango',
      price: 4.5,
      description:
        'Tropical mango ice cream with a splash of orange zest for an extra citrus kick. Every spoonful is a dance of bright, fruity flavors that transport you to the beach.',
      ingredients: ['milk', 'cream', 'sugar', 'mango puree', 'orange zest'],
      image: '/assets/foods/icecreams/ic-mango-tango.png',
      category: 'ice-cream',
      flavor: 'mango-tango',
    },
    {
      name: 'Cookie Dough Bliss',
      price: 4.7,
      description:
        'Sweet vanilla ice cream filled with chunks of soft cookie dough and chocolate chips. A chewy and creamy indulgence that satisfies every cookie lover’s craving.',
      ingredients: [
        'milk',
        'cream',
        'sugar',
        'cookie dough',
        'chocolate chips',
      ],
      image: '/assets/foods/icecreams/ic-cookie-dough-bliss.png',
      category: 'ice-cream',
      flavor: 'cookie-dough',
    },
    {
      name: 'Midnight Chocolate Fudge',
      price: 4.9,
      description:
        'Intensely rich chocolate ice cream made with premium cocoa and ribbons of dark fudge. Deep, velvety, and utterly irresistible for true chocolate enthusiasts.',
      ingredients: ['milk', 'cream', 'sugar', 'cocoa', 'fudge'],
      image: '/assets/foods/icecreams/ic-midnight-chocolate-fudge.png',
      category: 'ice-cream',
      flavor: 'chocolate-fudge',
    },
    {
      name: 'Banana Split Swirl',
      price: 4.6,
      description:
        'Smooth banana ice cream with ribbons of strawberry sauce and bits of chocolate. A playful twist on the classic banana split sundae — fruity, creamy, and fun.',
      ingredients: [
        'milk',
        'cream',
        'sugar',
        'banana puree',
        'strawberry sauce',
        'chocolate flakes',
      ],
      image: '/assets/foods/icecreams/ic-banana-split-swirl.png',
      category: 'ice-cream',
      flavor: 'banana-strawberry',
    },
    {
      name: 'Pistachio Velvet',
      price: 4.8,
      description:
        'Luxuriously smooth pistachio ice cream crafted from roasted pistachios and a hint of vanilla. A refined flavor that combines nuttiness with subtle sweetness.',
      ingredients: ['milk', 'cream', 'sugar', 'pistachios', 'vanilla'],
      image: '/assets/foods/icecreams/ic-pistachio-velvet.png',
      category: 'ice-cream',
      flavor: 'pistachio',
    },
    {
      name: 'Raspberry Ripple',
      price: 4.5,
      description:
        'Delicate vanilla ice cream infused with tangy raspberry swirls. A fruity and refreshing classic with just the right touch of tartness and sweetness.',
      ingredients: ['milk', 'cream', 'sugar', 'raspberry puree', 'vanilla'],
      image: '/assets/foods/icecreams/ic-raspberry-ripple.png',
      category: 'ice-cream',
      flavor: 'raspberry',
    },
  ];

  await foodRepository.save(iceCreams);
  console.log('✅ Ice creams seeded successfully.');
};
