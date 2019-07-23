import { transform } from "@babel/core";
import * as babel from "@babel/core";
import { cepRequire } from "../src/index";

const example = `
//@ts-ignore-cep
const fs = require("fs");
//@ts-ignore-cep
const path = require("path");
//@ts-ignore
const dateFns = require("date-fns");
`;

it("first 2 requires to be replace with window.cep_node.require", () => {
  const { code } = babel.transform(example, { plugins: [cepRequire] });
  expect(code).toMatchSnapshot();
});
