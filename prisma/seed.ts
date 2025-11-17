import { hashSync } from "bcrypt";
import { prisma } from "./prisma-client";
import { categories, ingredients, products } from "./constants";

const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const generateProductVariation = ({
  productId,
  pizzaType,
  size,
}: {
  productId: number;
  pizzaType?: 1 | 2;
  size?: 20 | 30 | 40;
}) => {
  return {
    productId,
    price: size ? randomInt(size * 15, size * 20) : randomInt(190, 600),
    pizzaType,
    size,
  };
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User",
        email: "user@test.ru",
        password: hashSync("111111", 10),
        role: "USER",
      },
      {
        fullName: "Admin",
        email: "admin@test.ru",
        password: hashSync("111111", 10),
        role: "ADMIN",
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredient.createMany({
    data: ingredients,
  });

  await prisma.product.createMany({
    data: products,
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: "Пепперони фреш",
      imageUrl: "/assets/images/pizzas/pepperoni_fresh.webp",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: "Сырная",
      imageUrl: "/assets/images/pizzas/cheesy.webp",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: "Чоризо фреш",
      imageUrl: "/assets/images/pizzas/chorizo_fresh.webp",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(10, 40),
      },
    },
  });

  await prisma.productVariation.createMany({
    data: [
      // Пицца "Пепперони фреш"
      generateProductVariation({
        productId: pizza1.id,
        pizzaType: 1,
        size: 20,
      }),
      generateProductVariation({
        productId: pizza1.id,
        pizzaType: 2,
        size: 30,
      }),
      generateProductVariation({
        productId: pizza1.id,
        pizzaType: 2,
        size: 40,
      }),

      // Пицца "Сырная"
      generateProductVariation({
        productId: pizza2.id,
        pizzaType: 1,
        size: 20,
      }),
      generateProductVariation({
        productId: pizza2.id,
        pizzaType: 1,
        size: 30,
      }),
      generateProductVariation({
        productId: pizza2.id,
        pizzaType: 1,
        size: 40,
      }),
      generateProductVariation({
        productId: pizza2.id,
        pizzaType: 2,
        size: 20,
      }),
      generateProductVariation({
        productId: pizza2.id,
        pizzaType: 2,
        size: 30,
      }),
      generateProductVariation({
        productId: pizza2.id,
        pizzaType: 2,
        size: 40,
      }),

      // Пицца "Чоризо фреш"
      generateProductVariation({
        productId: pizza3.id,
        pizzaType: 1,
        size: 20,
      }),
      generateProductVariation({
        productId: pizza3.id,
        pizzaType: 2,
        size: 30,
      }),
      generateProductVariation({
        productId: pizza3.id,
        pizzaType: 2,
        size: 40,
      }),

      // Остальные продукты
      generateProductVariation({ productId: 1 }),
      generateProductVariation({ productId: 2 }),
      generateProductVariation({ productId: 3 }),
      generateProductVariation({ productId: 4 }),
      generateProductVariation({ productId: 5 }),
      generateProductVariation({ productId: 6 }),
      generateProductVariation({ productId: 7 }),
      generateProductVariation({ productId: 8 }),
      generateProductVariation({ productId: 9 }),
      generateProductVariation({ productId: 10 }),
      generateProductVariation({ productId: 11 }),
      generateProductVariation({ productId: 12 }),
      generateProductVariation({ productId: 13 }),
      generateProductVariation({ productId: 14 }),
      generateProductVariation({ productId: 15 }),
      generateProductVariation({ productId: 16 }),
      generateProductVariation({ productId: 17 }),
    ],
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User", "Category", "Ingredient", "Product", "ProductVariation", "Cart", "CartItem", "Order", "VerificationCode" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
    console.log("Seed completed successfully!");
  } catch (e) {
    console.error("Error during seed:", e);
  }
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
