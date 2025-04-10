import {
  Inventory,
  InventoryCategory,
  StockType,
} from "@/types/Inventory.types";
import {
  Order,
  OrderStatus,
  OrderType,
  OrderCategory,
  OrderServiceType,
} from "@/types/Order.types";
import { http, HttpResponse } from "msw";
import { faker } from "@faker-js/faker";
import { Product, ProductStatus, ProductType } from "@/types/Product.types";
import { Customer, CustomerStatus } from "@/types/Customer.types";

const baseUrl = "http://localhost:5000/api/v1";

export const handlers = [
  http.get(`${baseUrl}/inventory`, () => {
    const inventory: Inventory[] = Array.from({ length: 5 }, () => ({
      id: faker.string.nanoid(),
      stockType: faker.helpers.arrayElement(Object.values(StockType)),
      category: faker.helpers.arrayElement(Object.values(InventoryCategory)),
      name: faker.commerce.productName(),
      quantity: faker.number.int({ min: 1, max: 100 }),
      companyName: faker.company.name(),
      sellingPrice: faker.number.int({ min: 1, max: 500 }),
      buyingPrice: faker.number.int({ min: 1, max: 500 }),
      createdAt: faker.date.past(),
    }));
    return HttpResponse.json(inventory);
  }),

  // delete
  http.delete(`${baseUrl}/*/:id`, async ({ params }) => {
    return HttpResponse.json({ message: "Inventory deleted" });
  }),

  // update
  http.put(`${baseUrl}/*/:id`, async ({ request, params }) => {
    const nextPost = await request.json();
    return HttpResponse.json(nextPost);
  }),

  // customers
  http.get(`${baseUrl}/customers`, () => {
    const customers: Customer[] = Array.from({ length: 5 }, () => ({
      id: faker.string.nanoid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number({ style: "international" }),
      status: faker.helpers.arrayElement(Object.values(CustomerStatus)),
    }));
    return HttpResponse.json(customers);
  }),

  // products
  http.get(`${baseUrl}/products`, () => {
    const products: Product[] = Array.from({ length: 5 }, () => ({
      id: faker.string.nanoid(),
      name: faker.commerce.productName(),
      size: faker.number.int({ min: 1, max: 100 }),
      type: faker.helpers.arrayElement(Object.values(ProductType)),
      status: faker.helpers.arrayElement(Object.values(ProductStatus)),
      unitsCount: faker.number.int({ min: 1, max: 100 }),
      unitPrice: faker.number.int({ min: 1, max: 500 }),
      unitSize: faker.number.int({ min: 1, max: 100 }),
      packagePrice: faker.number.int({ min: 1, max: 500 }),
      description: faker.commerce.productDescription(),
      companyName: faker.company.name(),
      companyEmail: faker.internet.email(),
      createdAt: faker.date.past().toISOString(),
    }));
    return HttpResponse.json(products);
  }),

  //delete order
  http.delete(`${baseUrl}/order/:id`, async ({ params }) => {
    return HttpResponse.json({ message: "Order deleted" });
  }),

  // update orders
  http.put(`${baseUrl}/order/:id`, async ({ request, params }) => {
    const nextPost = await request.json();
    return HttpResponse.json(nextPost);
  }),

  //add order
  http.post(`${baseUrl}/order`, async ({ request, params }) => {
    const nextPost = await request.json();
    return HttpResponse.json(nextPost);
  }),

  // get orders
  http.get(`${baseUrl}/orders`, () => {
    const orders: Order[] = Array.from({ length: 5 }, () => ({
      id: faker.string.nanoid(),
      amount: faker.number.int({ min: 50, max: 500 }),
      createdAt: faker.date.past(),
      customerName: faker.person.fullName(),
      orderNo: faker.string.nanoid(),
      orderType: OrderType.FRIDGES,
      category: faker.helpers.arrayElement(Object.values(OrderCategory)),
      quantity: faker.number.int({ min: 1, max: 10 }),
      companyName: faker.company.name(),
      status: faker.helpers.arrayElement(Object.values(OrderStatus)),
      serviceType: faker.helpers.arrayElement(Object.values(OrderServiceType)),
    }));
    return HttpResponse.json(orders);
  }),
  // handle OPTIONS requests
  http.options("*", () => {
    return new Response(null, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Credentials": "*",
      },
    });
  }),

  http.get("*", (req) => {
    console.log(req.request.body);
  }),
];
