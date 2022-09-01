// import { PrismaClient } from '@prisma/client'
const { PrismaClient } = require('@prisma/client')

const run = async () => {
   const prisma = new PrismaClient()
   try {
      if ((await prisma.facts.count()) === 0) {
         await prisma.facts.createMany({
            data: [
               {
                  message:
                     "Wasting food contributes to 10% of the world's greenhouse gas emissions.",
                  details:
                     "Food waste's high emissions are largely due to food production using a huge amount of land, water and energy. An area the size of the Indian subcontinent (4.4m km2 ) and water volume equivalent to 304 million Olympic swimming pools are needed to produce food that never leaves the farm.",
                  reference: 'World Wildlife Fund',
                  href: 'https://www.nrdc.org/food-waste',
               },
               {
                  message:
                     'Uneaten food equates to Americans throwing out as much as $218 billion each year.',
                  details:
                     "Between 2011-2012, some experts discovered that the US lost 15.4 billion dollars of retail food annually. Fruit losses, most of it perfectly good food, were around 12.3%-that's enough to feed 5.3 million people. They also found that US households were the most significant food wasters.",
                  reference: 'NRDC',
                  href: 'https://www.nrdc.org/sites/default/files/food-waste-city-level-report.pdf',
               },
               {
                  message:
                     'An average of 68% of all food discarded (as tracked in kitchen diaries) was potentially edible.',
                  details:
                     "A lot of the food we throw away is edible. Meanwhile, approximately 4-10% of food from kitchens in restaurants ends up as pre-consumer waste. For instance, McDonald's says its employees must dump all fries in the trash can after 7 minutes, while they must discard burgers after 20 mins.",
                  reference: 'NRDC',
                  href: 'https://www.nrdc.org/sites/default/files/food-matters-ib.pdf',
               },
               {
                  message:
                     '14% of food produced is lost from the post-harvest stage up to, but excluding, the retail stage.',
                  details:
                     "Fruits and vegetables usually suffer massive hits from food waste when compared to cereals and pulses on farms. Harvesting, poor handling, and inadequate storage contribute to on-farm storage losses. It's imperative to identify critical loss points to resolve these issues.",
                  reference: 'FAO',
                  href: 'https://www.fao.org/family-farming/detail/en/c/1245425/',
               },
               {
                  message:
                     '44% of fruit and veggies end up as waste in South Africa, most wasted before reaching the supermarket.',
                  details:
                     'Yearly, South Africa loses one-third of the 31 million tonnes of food produced locally. Fruit and vegetable wastage contribute a significant portion to the loss. Supermarket chains, restaurants, and the busy lifestyle of most South Africans play a considerable role in this trend.',
                  reference: 'World Wildlife Fund',
                  href: 'https://www.oneplanetnetwork.org/sites/default/files/wwf_food_waste_and_loss_final.pdf',
               },
            ],
         })
      } else {
         console.log('Default fact already created')
      }
   } finally {
      await prisma.$disconnect()
   }
}

run()
