import express from "express";
import { createMiddleware } from "@mswjs/http-middleware";
import { handlers } from "./handlers";

const app = express();
const port = 5000;
app.use(
  (
    req: any,
    res: { header: (arg0: string, arg1: string) => void },
    next: () => void
  ) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Methods",
      "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
  }
);
app.use(express.json());
app.use(createMiddleware(...handlers));

app.listen(port, () => console.log(`Mock server is running on port: ${port}`));
