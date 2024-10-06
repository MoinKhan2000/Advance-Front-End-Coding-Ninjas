import { name } from "./first.js";    // Named exports must be imported using their exact original name.
//  we can use alice such as import {name as nameOfStudent} from './first.js';
import greet from './first.js';        // Default exports can be imported using any name.
// 'greet' is imported as the default export here.

console.log(name);
greet();

//? Without the following configuration:
//! "type": "module" in package.json
//? ES module syntax (import/export) will not work in Node.js.
//? Node.js requires the "type": "module" field in package.json to recognize ES modules.
