export const categories = [
  { name: "Пиццы" },
  { name: "Завтрак" },
  { name: "Закуски" },
  { name: "Коктейли" },
  { name: "Напитки" },
];

export const ingredients = [
  {
    name: "Сырный бортик",
    imageUrl: "/assets/images/ingredients/cheese-border.png",
  },
  {
    name: "Сливочная моцарелла",
    imageUrl: "/assets/images/ingredients/mozzarella.png",
  },
  {
    name: "Сыры чеддер и пармезан",
    imageUrl: "/assets/images/ingredients/cheddar-parmezan-cheeses.png",
  },
  {
    name: "Острый перец халапеньо",
    imageUrl: "/assets/images/ingredients/jalopeno.png",
  },
  {
    name: "Нежный цыпленок",
    imageUrl: "/assets/images/ingredients/tender-chick.png",
  },
  {
    name: "Шампиньоны",
    imageUrl: "/assets/images/ingredients/champignon.png",
  },
  {
    name: "Ветчина",
    imageUrl: "/assets/images/ingredients/ham.png",
  },
  {
    name: "Пикантная пепперони",
    imageUrl: "/assets/images/ingredients/pepperoni.png",
  },
  {
    name: "Острая чоризо",
    imageUrl: "/assets/images/ingredients/spicy-chorizo.png",
  },
  {
    name: "Маринованные огурчики",
    imageUrl: "/assets/images/ingredients/pickles.png",
  },
  {
    name: "Свежие томаты",
    imageUrl: "/assets/images/ingredients/tomato.png",
  },
  {
    name: "Красный лук",
    imageUrl: "/assets/images/ingredients/red-onion.png",
  },
  {
    name: "Сочные ананасы",
    imageUrl: "/assets/images/ingredients/pineapple.png",
  },
  {
    name: "Итальянские травы",
    imageUrl: "/assets/images/ingredients/italian-herbs.png",
  },
  {
    name: "Сладкий перец",
    imageUrl: "/assets/images/ingredients/sweet-pepper.png",
  },
  {
    name: "Кубики брынзы",
    imageUrl: "/assets/images/ingredients/feta-cheese.png",
  },
  {
    name: "Митболы",
    imageUrl: "/assets/images/ingredients/meatballs.png",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: "Омлет с ветчиной и грибами",
    imageUrl: "/assets/images/products/omelette-ham-mushrooms.webp",
    categoryId: 2,
  },
  {
    name: "Омлет с пепперони",
    imageUrl: "/assets/images/products/omelette-pepperoni.webp",
    categoryId: 2,
  },
  {
    name: "Кофе Латте",
    imageUrl: "/assets/images/products/coffee-latte.webp",
    categoryId: 2,
  },
  {
    name: "Дэнвич ветчина и сыр",
    imageUrl: "/assets/images/products/dandwich-ham-cheese.webp",
    categoryId: 3,
  },
  {
    name: "Куриные наггетсы",
    imageUrl: "/assets/images/products/chicken-nuggets.webp",
    categoryId: 3,
  },
  {
    name: "Картофель из печи с соусом 🌱",
    imageUrl: "/assets/images/products/baked-potato-vegan-sauce.webp",
    categoryId: 3,
  },
  {
    name: "Додстер",
    imageUrl: "/assets/images/products/dodster.webp",
    categoryId: 3,
  },
  {
    name: "Острый Додстер 🌶️🌶️",
    imageUrl: "/assets/images/products/spicy-dodster.webp",
    categoryId: 3,
  },
  {
    name: "Банановый молочный коктейль",
    imageUrl: "/assets/images/products/banana-milkshake.webp",
    categoryId: 4,
  },
  {
    name: "Карамельное яблоко молочный коктейль",
    imageUrl: "/assets/images/products/caramel-apple-milkshake.webp",
    categoryId: 4,
  },
  {
    name: "Молочный коктейль с печеньем Орео",
    imageUrl: "/assets/images/products/oreo-milkshake.webp",
    categoryId: 4,
  },
  {
    name: "Классический молочный коктейль 👶",
    imageUrl: "/assets/images/products/classic-milkshake.webp",
    categoryId: 4,
  },
  {
    name: "Ирландский Капучино",
    imageUrl: "/assets/images/products/irish-cappucino.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Карамельный капучино",
    imageUrl: "/assets/images/products/caramel-cappucino.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Кокосовый латте",
    imageUrl: "/assets/images/products/coconut-latte-coffee.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Американо",
    imageUrl: "/assets/images/products/coffee-americano.webp",
    categoryId: 5,
  },
];
