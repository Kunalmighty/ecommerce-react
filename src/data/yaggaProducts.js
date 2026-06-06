import featuredImage from '@/images/yagga-featured.jpg';
import familyImage from '@/images/yagga-family.jpg';
import heroImage from '@/images/yagga-hero.jpg';

const buildImageCollection = (id, image) => [
  { id: `${id}-primary`, url: image }
];

const YAGGA_PRODUCTS = [
  {
    id: 'yagga-aga-flame-tee',
    name: 'Aga Flame Oversized Tee',
    brand: 'Yagga Street',
    price: 88,
    maxQuantity: 12,
    description: 'A heavyweight graphic tee built around Yagga inner-fire energy, with lotus and mandala artwork on a soft bio-washed cotton base.',
    keywords: ['yagga', 'streetwear', 'tee', 'lotus', 'mandala', 'oversized'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    isFeatured: true,
    isRecommended: true,
    availableColors: ['#101820', '#f4eadc', '#006d70'],
    image: heroImage,
    imageCollection: buildImageCollection('yagga-aga-flame-tee', heroImage)
  },
  {
    id: 'yagga-lotus-motion-hoodie',
    name: 'Lotus Motion Hoodie',
    brand: 'Yagga Street',
    price: 146,
    maxQuantity: 8,
    description: 'A structured fleece hoodie with an extravagant lotus back graphic, designed for a gym-to-cafe rhythm without losing its shape.',
    keywords: ['yagga', 'hoodie', 'lotus', 'streetwear', 'fleece'],
    sizes: ['S', 'M', 'L', 'XL'],
    isFeatured: true,
    isRecommended: false,
    availableColors: ['#0f4c4c', '#f4eadc', '#111316'],
    image: featuredImage,
    imageCollection: buildImageCollection('yagga-lotus-motion-hoodie', featuredImage)
  },
  {
    id: 'yagga-peacock-circuit-polo',
    name: 'Peacock Circuit Polo',
    brand: 'Yagga Craft',
    price: 118,
    maxQuantity: 10,
    description: 'A crisp technical polo with peacock-inspired geometry and a structured collar that keeps the silhouette sharp.',
    keywords: ['yagga', 'polo', 'peacock', 'technical', 'collar'],
    sizes: ['S', 'M', 'L', 'XL'],
    isFeatured: true,
    isRecommended: true,
    availableColors: ['#f7efe2', '#005f68', '#c2185b'],
    image: featuredImage,
    imageCollection: buildImageCollection('yagga-peacock-circuit-polo', featuredImage)
  },
  {
    id: 'yagga-mandala-flex-legging',
    name: 'Mandala Flex Legging',
    brand: 'Yagga Active',
    price: 96,
    maxQuantity: 15,
    description: 'A four-way stretch activewear piece with cosmic mandala panels, made for movement, recovery, and vivid print durability.',
    keywords: ['yagga', 'activewear', 'legging', 'mandala', 'stretch'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    isFeatured: false,
    isRecommended: true,
    availableColors: ['#0d4f5c', '#16213e', '#ff4f7b'],
    image: featuredImage,
    imageCollection: buildImageCollection('yagga-mandala-flex-legging', featuredImage)
  },
  {
    id: 'yagga-flying-tigress-kids-tee',
    name: 'Flying Tigress Kids Tee',
    brand: 'Yagga Kids',
    price: 54,
    maxQuantity: 18,
    description: 'A durable kids tee with playful folklore energy, bright storytelling motifs, and a soft finish made for everyday motion.',
    keywords: ['yagga', 'kids', 'tee', 'folklore', 'family'],
    sizes: ['2Y', '4Y', '6Y', '8Y', '10Y'],
    isFeatured: false,
    isRecommended: true,
    availableColors: ['#fff6e5', '#ffb000', '#2f7d7e'],
    image: familyImage,
    imageCollection: buildImageCollection('yagga-flying-tigress-kids-tee', familyImage)
  },
  {
    id: 'yagga-mini-me-dog-vest',
    name: 'Mini-Me Dog Cooling Vest',
    brand: 'Yagga Canine',
    price: 62,
    maxQuantity: 16,
    description: 'A breathable dog vest that brings the family-unit idea to pet apparel with coordinated motifs and summer-ready comfort.',
    keywords: ['yagga', 'dog', 'pet', 'vest', 'family', 'canine'],
    sizes: ['XS', 'S', 'M', 'L'],
    isFeatured: true,
    isRecommended: true,
    availableColors: ['#14213d', '#008b8b', '#ff6f61'],
    image: familyImage,
    imageCollection: buildImageCollection('yagga-mini-me-dog-vest', familyImage)
  }
];

export const getYaggaFeaturedProducts = (itemsCount) => {
  const products = YAGGA_PRODUCTS.filter((product) => product.isFeatured);
  return itemsCount ? products.slice(0, itemsCount) : products;
};

export const getYaggaRecommendedProducts = (itemsCount) => {
  const products = YAGGA_PRODUCTS.filter((product) => product.isRecommended);
  return itemsCount ? products.slice(0, itemsCount) : products;
};

export default YAGGA_PRODUCTS;
