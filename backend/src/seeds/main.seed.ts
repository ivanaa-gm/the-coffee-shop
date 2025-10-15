import { DataSource } from 'typeorm';
import { seedHotDrinks } from './hotDrinks.seed';
import { seedIcedDrinks } from './icedDrinks';
import { seedLemonades } from './lemonades.seed';
import { seedTeas } from './teas.seed';
import { seedCupcakes } from './cupcakes.seed';
import { seedDonuts } from './donuts.seed';
import { seedIceCreams } from './iceCreams.seed';
import { seedPastries } from './pastries.seed';
import { AppDataSource } from '../data-source';

AppDataSource.initialize()
  .then(async (dataSource: DataSource) => {
    console.log('🔄 Resetting product table...');

    await dataSource.query('TRUNCATE TABLE "foods" RESTART IDENTITY CASCADE;');
    await dataSource.query('TRUNCATE TABLE "drinks" RESTART IDENTITY CASCADE;');

    await seedHotDrinks(dataSource);
    await seedIcedDrinks(dataSource);
    await seedLemonades(dataSource);
    await seedTeas(dataSource);
    await seedCupcakes(dataSource);
    await seedDonuts(dataSource);
    await seedIceCreams(dataSource);
    await seedPastries(dataSource);

    await dataSource.destroy();
    console.log('✅✅✅ Database seeding complete. ✅✅✅');
  })
  .catch((error) => console.error('❌ Error seeding DB:', error));
