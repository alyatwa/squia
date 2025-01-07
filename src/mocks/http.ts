import express from "express";
import { createMiddleware } from "@mswjs/http-middleware";
import { handlers } from "./handlers";
import cors from "cors";

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
// log requests
app.use((req: { method: any; url: any }, res: any, next: () => void) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.use(createMiddleware(...handlers));

app.listen(port, () => console.log(`Mock server is running on port: ${port}`));
