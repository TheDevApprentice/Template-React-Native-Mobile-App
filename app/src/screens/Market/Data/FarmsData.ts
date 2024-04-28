import { Farm } from "../../../utils/Types/farm";

export const farmsData: Farm[] = [
    {
      id: 1,
      name: "La Ferme à Dédé",
      image: 'https://static.country-guide.ca/wp-content/uploads/2020/04/03165951/farm-sunset-1015089708-benedek-iStock-GettyImages.jpg',
      address: '123 Main St',
      squareMeters: '150',
      stars: '3',
      reviews: '3',
      price: '$$',
      location: {
        latitude: 46.1242006,
        longitude: -70.6764239,
      },
      products: [
        {
          id: 1,
          farmId: 1,
          category: "legumes",
          title: 'Potatoes',
          thumbnail: 'https://mapetiteassiette.com/wp-content/uploads/2020/11/pomme-de-terre333-e1605184894919.jpg',
          description: 'This is a potatoes',
          unit_price: 100,
          total: 200,
          inventory: 100,
        },
        {
          id: 20,
          farmId: 1,
          category: "legumes",
          title: 'Apple',
          thumbnail: 'https://fruiteriepotager.com/wp-content/uploads/2020/07/74134-1-Pomme-delicieuse-red.jpg',
          description: 'This is an apple',
          unit_price: 100,
          total: 200,
          inventory: 200,
        },
      ]
    },
    {
      id: 2,
      name: "La Ferme à Dédé",
      image: 'https://ec.europa.eu/eurostat/documents/4187653/16403426/Martin%20Bergsma_Shutterstock_287378714_RV.jpg',
      address: '456 Oak Ave',
      squareMeters: '200',
      stars: '4',
      reviews: '3',
      price: '$$',
      location: {
        latitude: 46.1242006,
        longitude: -70.6764239,
      },
      products: [
        {
          id: 90,
          farmId: 2,
          category: "legumes",
          title: 'Leek',
          thumbnail: 'https://cdn.pratico-pratiques.com/app/uploads/sites/2/2021/10/06102335/quoi-faire-avec-les-poireaux01-500x500.jpg',
          description: 'This is a leek',
          unit_price: 100,
          total: 200,
          inventory: 200,
        },
        {
          id: 98,
          farmId: 2,
          category: "legumes",
          title: 'Potatoes',
          thumbnail: 'https://mapetiteassiette.com/wp-content/uploads/2020/11/pomme-de-terre333-e1605184894919.jpg',
          description: 'This is a potatoes',
          unit_price: 450,
          total: 200,
          inventory: 200,
        },
      ]
    },
    {
      id: 3,
      name: "La Ferme à Dédé",
      image: 'https://modernfarmer.com/wp-content/uploads/2018/09/shutterstock_684006229-1200x800.jpg',
      address: '789 Maple Rd',
      squareMeters: '100',
      stars: '2',
      reviews: '3',
      price: '$',
      location: {
        latitude: 46.1242006,
        longitude: -70.6764239,
      },
      products: [
        {
          id: 30,
          farmId: 3,
          category: "legumes",
          title: 'Cucumber',
          thumbnail: 'https://iod.keplrstatic.com/api/c_fill,dpr_auto,g_north,f_auto,q_70,w_1100/mon_marche/8379_CONCOMBRE.jpg',
          description: 'This is a cucumber',
          unit_price: 100,
          total: 200,
          inventory: 200,
        },
        {
          id: 22,
          farmId: 3,
          category: "legumes",
          title: 'Carrots',
          thumbnail: 'https://img.taste.com.au/ijyhNEs4/w720-h480-cfill-q80/taste/2007/03/carrots-181856-2.jpg',
          description: 'This is a carrot',
          unit_price: 100,
          total: 200,
          inventory: 200,
        },
        {
          id: 17,
          farmId: 3,
          category: "legumes",
          title: 'Cauliflower',
          thumbnail: 'https://www.thespruce.com/thmb/zMuVL9LUjk1jPSFs_dAXXCrxhsA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-grow-cauliflower-1403494-hero-76cf5f524a564adabb1ac6adfa311482.jpg',
          description: 'This is a cauliflower',
          unit_price: 150,
          total: 300,
          inventory: 200,
        },
        {
          id: 15,
          farmId: 3,
          category: "legumes",
          title: 'Broccoli',
          thumbnail: 'https://vivregourmet.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/Broccoli.png.webp',
          description: 'This is a broccoli',
          unit_price: 200,
          total: 400,
          inventory: 200,
        },
        {
          id: 87,
          farmId: 3,
          category: "legumes",
          title: 'Potatoes',
          thumbnail: 'https://mapetiteassiette.com/wp-content/uploads/2020/11/pomme-de-terre333-e1605184894919.jpg',
          description: 'This is a potatoes',
          unit_price: 450,
          total: 200,
          inventory: 200,
        },
      ]
    },
    {
      id: 4,
      name: "La Ferme à Dédé",
      image: 'https://www.libertyhillfarm.com/wp-content/uploads/2021/06/lhf-homepage-002.jpg',
      address: '789 Maple Rd',
      squareMeters: '100',
      stars: '2',
      reviews: '3',
      price: '$$$',
      location: {
        latitude: 46.1242006,
        longitude: -70.6764239,
      },
      products: [
        {
          id: 40,
          farmId: 4,
          category: "legumes",
          title: 'Bell pepper',
          thumbnail: 'https://www.jaimefruitsetlegumes.ca/wp-content/uploads/2019/09/poivrons-Hans-Braxmeier-from-Pixabay-e1568384871652-700x700.jpg',
          description: 'This is a bell pepper',
          unit_price: 100,
          total: 200,
          inventory: 200,
        },
        {
          id: 8,
          farmId: 4,
          category: "legumes",
          title: 'Lettuce',
          thumbnail: 'https://www.100daysofrealfood.com/wp-content/uploads/2023/11/vecteezy_lettuce-salad-leaf-isolated-on-white-background-with_5582269-1200x800.jpg',
          description: 'This is a lettuce',
          unit_price: 80,
          total: 200,
          inventory: 200,
        },
        {
          id: 33,
          farmId: 4,
          category: "legumes",
          title: 'Broccoli',
          thumbnail: 'https://vivregourmet.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/Broccoli.png.webp',
          description: 'This is a broccoli',
          unit_price: 200,
          total: 400,
          inventory: 200,
        },
        {
          id: 85,
          farmId: 4,
          category: "legumes",
          title: 'Potatoes',
          thumbnail: 'https://mapetiteassiette.com/wp-content/uploads/2020/11/pomme-de-terre333-e1605184894919.jpg',
          description: 'This is a potatoes',
          unit_price: 450,
          total: 200,
          inventory: 200,
        },
      ]
    }, 
    {
      id: 5,
      name: "La Ferme à Dédé",
      image: 'https://www.libertyhillfarm.com/wp-content/uploads/2021/06/lhf-homepage-002.jpg',
      address: '729 Maple Rd',
      squareMeters: '100',
      stars: '2',
      reviews: '3',
      price: '$$$',
      location: {
        latitude: 46.1242006,
        longitude: -70.6764239,
      },
      products: [
        {
          id: 40,
          farmId: 5,
          category: "fruits",
          title: 'Strawberry',
          thumbnail: 'https://www.lanutrition.fr/sites/default/files/styles/article_large/public/ressources/fraises_bol_bois.jpg?itok=kUf1FqxM',
          description: 'This is a bell strawberry',
          unit_price: 100,
          total: 200,
          inventory: 200,
        },
        {
          id: 81,
          farmId: 5,
          category: "fruits",
          title: 'Raspberrys',
          thumbnail: 'https://www.matierebrutelab.com/blog/wp-content/uploads/2022/08/framboises.jpg',
          description: 'This is a raspberry basket',
          unit_price: 80,
          total: 200,
          inventory: 200,
        },
        {
          id: 83,
          farmId: 5,
          category: "fruits",
          title: 'Currants',
          thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/7/71/%C4%8Cerven%C3%BD_ryb%C3%ADz.jpg',
          description: 'This is some currant',
          unit_price: 200,
          total: 400,
          inventory: 200,
        },
        {
          id: 85,
          farmId: 4,
          category: "fruits",
          title: 'Berrys',
          thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Blackberries_%28Rubus_fruticosus%29.jpg',
          description: 'This is a handfull of berrys',
          unit_price: 450,
          total: 200,
          inventory: 200,
        },
      ]
    }
  ];