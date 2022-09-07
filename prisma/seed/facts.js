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
                  href: 'https://updates.panda.org/driven-to-waste-report',
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
               {
                  message:
                     "Food waste ends up wasting a quarter of our water supply in the form of uneaten food.",
                  details:
                     "Food waste ends up wasting nearly a quarter of our water supply in the form of uneaten food or over $172 billion in wasted water. Each year, as a country we spend over $220 billion growing, transporting, and processing almost 70 million tons of food that ends up going to waste",
                  reference: "NRDC",
                  href: "https://www.forbes.com/sites/quora/2018/07/18/what-environmental-problems-does-wasting-food-cause/?sh=6f2647b52f7a",
               },
               {
                  message:
                     "If 25% of the food currently being wasted globally was saved, it would be enough to feed 870 million people.",
                  details:
                     "If 25% of the food currently lost or wasted was saved, it would be enough to feed 870 million hungry people. By 2050, world food consumption is expected to grow by 70%. Sustainability across the global food supply chain is critical to ensuring healthy diets and adequate nutrition for all.",
                  reference: "DSM",
                  href: "https://www.dsm.com/human-nutrition/en/talking-nutrition/a-how-to-tackle-food-waste-for-a-more-sustainable-future.html",
               },
               {
                  message:
                     "Only 37% of people know the difference between 'use by' and 'best before' dates",
                  details:
                     "Foods with 'use by' dates are highly perishable and must be eaten before the date written. Foods with 'best before' dates can be eaten after the date on the packaging, although it won't be at their best quality.",
                  reference: "Respect Food",
                  href: "https://www.respectfood.com/article/what-the-difference-is-between-use-by-sell-by-and-best-before-dates/",
               },
               {
                  message:
                     "The direct economic consequences of food waste run to the tune of $750 billion annually.",
                  details:
                     "Food wasting does significant harm. Working out a solution starts with efforts to reduce perishable food waste in households. It's better to store leftovers and implement policies that encourage food preservation.",
                  reference: "FAO",
                  href: "https://www.fao.org/3/i3347e/i3347e.pdf",
               },
               {
                  message:
                     "The annual value of food wasted globally is $1 trillion, and it weighs about 1.3 billion tonnes.",
                  details:
                     "Aside from the social, economic, and moral implications of that waste—in a world where an estimated 805 million people go to bed hungry each night—the environmental cost of producing all that food, for nothing, is staggering.",
                  reference: "National Geographic",
                  href: "https://www.nationalgeographic.com/science/article/150122-food-waste-climate-change-hunger",
               },
               {
                  message:
                     "Cereals, fruits and meat are major contributors to the blue water footprint of food wastage.",
                  details:
                     "In 2007, the global blue water footprint for the agricultural production of food wastage was about 250 km3. That's almost 3 times the volume of Lake Geneva, or the annual water discharge of the Volga River.",
                  reference: "FAO",
                  href: "https://www.fao.org/fileadmin/templates/nr/sustainability_pathways/docs/Factsheet_FOOD-WASTAGE.pdf",
               },
               {
                  message:
                     "If food waste were to be a country. it would be the third largest emitter of greenhouse gases after China & the US.",
                  details:
                     "According to the latest available data, if integrated into a country ranking of top emitters, food waste would appear third after the US and China.",
                  reference: "FAO",
                  href: "https://www.fao.org/fileadmin/templates/nr/sustainability_pathways/docs/Factsheet_FOOD-WASTAGE.pdf",
               },
               {
                  message:
                     "By 2050, 2.3 billion people will join the planet, requiring a 70% increase in global food production.",
                  details:
                     "It is expected that by 2050, 2.3 billion people will join the global population. Just satisfying the expected food and feed demand will require a substantial increase in global food production of 70 percent, which is nearly 1 billion metric tons of cereal and 200 million tons of meat.",
                  reference: "FAO",
                  href: "https://www.fao.org/fileadmin/templates/wsfs/docs/expert_paper/How_to_Feed_the_World_in_2050.pdf",
               },
               {
                  message:
                     "UK households waste 4.5 million metric tons of food per year, worth £14 billion.",
                  details:
                     "According to a detailed study from the Waste and Resources Action Programme (WRAP). UK households still waste 4.5 million metric tons of food a year, worth £14 billion. This amounts to £700 for an average family with children.",
                  reference: "The Guardian",
                  href: "https://www.theguardian.com/environment/2020/jan/24/uk-households-waste-45m-tonnes-of-food-each-year",
               },
               {
                  message:
                     "More than 305 million pounds of food was estimated to be wasted this past Thanksgiving.",
                  details:
                     "ReFED, the leading national nonprofit working to end food waste across the food system, estimated that more than 305 million pounds of food, worth more than $400 million, was wasted this past Thanksgiving. This is equal to driving 169,000 cars for one full year.",
                  reference: "ReFED",
                  href: "https://refed.org/articles/refed-releases-2022-food-waste-forecast-and-predicts-more-than-300-million-pounds-of-food-will-go-to-waste-this-thanksgiving-alone/#:~:text=Press%20Toolkit-,ReFED%20Releases%202022%20Food%20Waste%20Forecast%20and%20Predicts%20More%20Than,To%20Waste%20This%20Thanksgiving%20Alone&text=ReFED%2C%20the%20leading%20national%20nonprofit,its%202022%20Food%20Waste%20Forecast.",
               },
               {
                  message:
                     "The United States discards more food than any other country in the world, about 40 million tons.",
                  details:
                     "The US wastes 40 million tons in food, which is estimated to be 30-40% of the entire US food supply, That's like every person in America throwing more than 650 average sized apples right into the garbage — or rather right into landfills, as most discarded food ends up there.",
                  reference: "rts",
                  href: "https://www.rts.com/resources/guides/food-waste-america/",
               },
               {
                  message:
                     "Americans waste more than $218 billion each year on food.",
                  details:
                     "According to the nonprofit organization Feeding America, Americans waste more than $218 billion each year on food, with dairy products being the food item we toss out the most. The average American family of four throws out $1,600 a year in produce.",
                  reference: "rts",
                  href: "https://www.rts.com/resources/guides/food-waste-america/",
               },
               {
                  message:
                     "The average American household spends more than $3,000 a year on eating out.",
                  details:
                     "Not only does it require an astonishing amount of plastic packaging and utensils, but it also produces a lot of wasted food. According to the Bureau of Labor, the restaurant industry spends an estimated $162 billion every year in costs related to wasted food.",
                  reference: "rts",
                  href: "https://www.rts.com/resources/guides/food-waste-america/",
               },
               {
                  message: "38 million Americans, including 12 million children, are food insecure.",
                  details: "According to the USDA, 10.5 percent (13.8 million) of U.S. households were food insecure at some time during 2020, which is unchanged from 2019. These households were often unable to acquire enough food to meet the needs of all their members because they had insufficient money ",
                  reference: "USDA",
                  href: "https://www.ers.usda.gov/topics/food-nutrition-assistance/food-security-in-the-u-s/key-statistics-graphics/#insecure"
               }
               ,
               {
                  message: "There's little retail market for “ugly” fruits and veggies, which are left to rot in field or go straight to a landfill.",
                  details: "Just because a piece of produce looks funky doesn't mean it's bad. Changing the perception of “ugly” fruits and veggies can create a market for perfectly edible - if unique - produce. But, until that happens, we need to rescue “ugly” produce before it goes to waste.                  ",
                  reference: "UBC",
                  href: "https://cases.open.ubc.ca/insistence-on-cosmetically-perfect-fruits-vegetables/"
               }
               ,
               {
                  message: "By 2050, food production will need to increase by 70% in order to match global population growth.                  ",
                  details: "Without improvements to existing supply chains, this increase will result in much more waste. Companies are developing systems like blockchain-based food tracking, spoilage preventative packaging, and in-store sensors which improve inventory management to tackle these issues.",
                  reference: "Visual Capitalist",
                  href: " https://www.visualcapitalist.com/sp/the-enormous-scale-of-americas-food-waste/                  "
               }
               ,
               {
                  message: "More than 60% of all food waste is produced on the commercial level.",
                  details: "Food goes to waste at every stage of food production and distribution, from farmers to retailers, and even households. Food lost at the commercial level - which comprises manufacturers, retailers, and farmers - contributes nearly 66 billion pounds every year.                  ",
                  reference: "RTS",
                  href: "https://www.rts.com/resources/guides/food-waste-america/#:~:text=%E2%80%A6and%20economic%20repercussions%20too&text=According%20to%20the%20nonprofit%20organization,%241%2C600%20a%20year%20in%20produce.                  "
               }
               ,
               {
                  message: "Food waste in the US is equivalent to the greenhouse emissions of 37 million cars.",
                  details: "The environmental impact of food waste cannot be understated. Disposed food in landfills emits methane, a greenhouse gas 28-36 times more potent than the carbon dioxide emitted by most vehicles. Indeed, landfills are the third-largest industrial emitter of methane.",
                  reference: "EPA",
                  href: "https://www.epa.gov/land-research/farm-kitchen-environmental-impacts-us-food-waste"
               }
               ,
               {
                  message: "In the US, agriculture alone is responsible for 80% of all water consumed, and 21-33% of it is wasted every year.",
                  details: "In the US as of 2015, irrigation accounted for 42% of the nation's freshwater withdrawals. Agriculture accounted for the majority of those withdrawals, and it accounts for approximately 80 to 90% of the nation's consumptive water use.",
                  reference: "Water Calculator",
                  href: "https://www.watercalculator.org/footprint/foods-big-water-footprint/"
               }
               ,
               {
                  message: "12.2 million tons of food waste was generated in 1960 compared to 63 million tons wasted in 2018",
                  details: "Between 2010 and 2017, there was an eight percent increase in food waste per capita. There are several reasons for this. For example, our food system has gotten more industrialized over time which means many more layers in the production chain for food to be wasted.",
                  reference: "EPA",
                  href: "https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling/us-state-and-local-waste-and-materials"
               }
               ,
               {
                  message: "A sustainable diet could decrease the U.S. biodiversity footprint of food consumption by roughly half.",
                  details: "Domestically produced beef and dairy, which require vast land areas, and imported fruit, which has an intense impact on biodiversity per unit land, have especially high biodiversity footprints. The USDA suggests vegetarian diets would reduce this biodiversity footprint. ",
                  reference: "PNAS",
                  href: "https://www.pnas.org/doi/10.1073/pnas.2113884119"
               }
               ,
               {
                  message: "Food waste costs the United States roughly 2% of its GDP, the same happens in Canada (UN).",
                  details: "In the U.S. alone, an estimated 133 billion pounds of edible food (worth over $161 billion) goes to waste every year. Food waste also contributes to the largest volume of material in U.S. landfills accounting for 21% of the waste stream.                 ",
                  reference: "United Nations",
                  href: "https://www.unep.org/regions/north-america/regional-initiatives/promoting-sustainable-lifestyles                  "
               }
               ,
               {
                  message: "All starving people ( 811 million +) could be fed by less than 1/4 of the food wasted in the US and Europe.",
                  details: "Over 42% of globally wasted food is fruit and vegetables. The shameful fact about the food waste issue is that all starving people in the world (over 811 million people) could be fed by less than a quarter of the food lost or wasted in the US and Europe.",
                  reference: "Fresh Inset",
                  href: "https://freshinset.com/food-waste-key-facts-we-cannot-ignore/"
               }
               ,
               {
                  message: "If we halved food waste, we wouldn't need to convert an area the size of Argentina into agricultural land.",
                  details: "The UN has set a goal to cut food waste by 50%. This would reduce our greenhouse gas emissions by 1.5 gigatons per year, which is more than the current emissions of Japan. We'd no longer need to convert an area the size of Argentina into agricultural land. ",
                  reference: "Love Food, Hate Waste",
                  href: "https://www.lovefoodhatewaste.com/article/wasting-food-feeds-climate-change"
               }
               ,
               {
                  message: "26% of global carbon emissions are created by growing and producing food alone",
                  details: "There are four key elements to consider when trying to quantify food GHG emissions: Livestock & fisheries account for 31% of food emissions, crop production for 27% of food emissions, land use for 24% of food emissions, and supply chains for 18% of food emissions.                  ",
                  reference: "Our World in Data",
                  href: "https://ourworldindata.org/food-ghg-emissions"
               }
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
