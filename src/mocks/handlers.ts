import { Order, OrderStatus, OrderType, OrderCategory, OrderServiceType } from "@/types/Order.types";
import { http, HttpResponse } from "msw";

const baseUrl = "http://localhost:5000/api/v1";

export const handlers = [
  http.get(`${baseUrl}/uu`, () => {
    return HttpResponse.json({
      user: {
        id: "abc-123",
        name: "John Maverick",
      },
    });
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
  http.get(`${baseUrl}/orders`, () => {
    const orders: Order[] = [
      {
        id: "order-1",
        amount: 100,
        createdAt: new Date(),
        customerName: "John Doe",
        orderNo: "order-1",
        orderType: OrderType.FRIDGES,
        category: OrderCategory.PACKAGE_10,
        quantity: 1,
        companyName: "Company",
        status: OrderStatus.PENDING,
        serviceType: OrderServiceType.DELIVERY,
      },
    ];
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
