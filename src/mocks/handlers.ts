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
  http.get(`${baseUrl}/orders`, () => {
    const orders: Order[] = [
      {
        id: "order-1",
        amount: 100,
        createdAt: new Date(),
        customerName: "John Doe",
        orderNo: "order-1",
        orderType: "fridges",
        category: "package_10",
        quantity: 1,
        companyName: "Company",
        status: "pending",
        serviceType: "delivery",
      },
    ];
    return HttpResponse.json(orders);
  }),
  http.get("*", (req) => {
    console.log(req.request.body);
  }),
];
