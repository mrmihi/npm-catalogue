import { generator } from "./utils/index.js";

const templates = [
  {
    name: "Express microservice",
    path: "express-microservice",
  },
  {
    name: "package-kit",
    path: "package-kit",
  }
];

export default function (plop) {
  return generator(plop, templates);
}
