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
    imageUrl: "/public/assets/images/cheese-border.png",
  },
  {
    name: "Сливочная моцарелла",
    imageUrl: "/public/assets/images/mozzarella.png",
  },
  {
    name: "Сыры чеддер и пармезан",
    imageUrl: "/public/assets/images/cheddar-parmesan-cheeses.png",
  },
  {
    name: "Острый перец халапеньо",
    imageUrl: "/public/assets/images/jalopeno.png",
  },
  {
    name: "Нежный цыпленок",
    imageUrl: "/public/assets/images/tender-chick.png",
  },
  {
    name: "Шампиньоны",
    imageUrl: "/public/assets/images/champignon.png",
  },
  {
    name: "Ветчина",
    imageUrl: "/public/assets/images/ham.png",
  },
  {
    name: "Пикантная пепперони",
    imageUrl: "/public/assets/images/pepperoni.png",
  },
  {
    name: "Острая чоризо",
    imageUrl: "/public/assets/images/spicy-chorizo.png",
  },
  {
    name: "Маринованные огурчики",
    imageUrl: "/public/assets/images/pickles.png",
  },
  {
    name: "Свежие томаты",
    imageUrl: "/public/assets/images/tomato.png",
  },
  {
    name: "Красный лук",
    imageUrl: "/public/assets/images/red-onion.png",
  },
  {
    name: "Сочные ананасы",
    imageUrl: "/public/assets/images/pineapple",
  },
  {
    name: "Итальянские травы",
    imageUrl: "/public/assets/images/italian-herbs.png",
  },
  {
    name: "Сладкий перец",
    imageUrl: "/public/assets/images/sweet-pepper.png",
  },
  {
    name: "Кубики брынзы",
    imageUrl: "/public/assets/images/feta-cheese.png",
  },
  {
    name: "Митболы",
    imageUrl: "/public/assets/images/meatballs.png",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: "Омлет с ветчиной и грибами",
    imageUrl: "/public/assets/images/omelette-ham-mushrooms.webp",
    categoryId: 2,
  },
  {
    name: "Омлет с пепперони",
    imageUrl: "/public/assets/images/omelette-pepperoni.webp",
    categoryId: 2,
  },
  {
    name: "Кофе Латте",
    imageUrl: "/public/assets/images/coffee-latte.webp",
    categoryId: 2,
  },
  {
    name: "Дэнвич ветчина и сыр",
    imageUrl: "/public/assets/images/dandnwich-ham-cheese.webp",
    categoryId: 3,
  },
  {
    name: "Куриные наггетсы",
    imageUrl: "/public/assets/images/chicken-nuggets.webp",
    categoryId: 3,
  },
  {
    name: "Картофель из печи с соусом 🌱",
    imageUrl: "/public/assets/images/baked-potato-vegan-sauce.webp",
    categoryId: 3,
  },
  {
    name: "Додстер",
    imageUrl: "/public/assets/images/dodster.webp",
    categoryId: 3,
  },
  {
    name: "Острый Додстер 🌶️🌶️",
    imageUrl: "/public/assets/images/spicy-dodster.webp",
    categoryId: 3,
  },
  {
    name: "Банановый молочный коктейль",
    imageUrl: "/public/assets/images/banana-milkshake.webp",
    categoryId: 4,
  },
  {
    name: "Карамельное яблоко молочный коктейль",
    imageUrl: "/public/assets/images/caramel-apple-milkshake.webp",
    categoryId: 4,
  },
  {
    name: "Молочный коктейль с печеньем Орео",
    imageUrl: "/public/assets/images/oreo-milkshake.webp",
    categoryId: 4,
  },
  {
    name: "Классический молочный коктейль 👶",
    imageUrl: "/public/assets/images/classic-milkshake.webp",
    categoryId: 4,
  },
  {
    name: "Ирландский Капучино",
    imageUrl: "/public/assets/images/irish-cappuccino.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Карамельный капучино",
    imageUrl: "/public/assets/images/caramel-cappuccino.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Кокосовый латте",
    imageUrl: "/public/assets/images/coconut-latte-coffee.webp",
    categoryId: 5,
  },
  {
    name: "Кофе Американо",
    imageUrl: "/public/assets/images/coffee-americano.webp",
    categoryId: 5,
  },
];
