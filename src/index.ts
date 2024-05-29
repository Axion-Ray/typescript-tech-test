import * as fs from "fs";
import { DataFactory } from "./factories/dataFactory";

const people = DataFactory.generatePeople();

fs.writeFileSync("output.json", JSON.stringify(people, null, 2));

console.log("Data has been generated and saved to output.json");
