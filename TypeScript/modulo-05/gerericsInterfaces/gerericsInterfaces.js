"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../../utils/utils"));
(0, utils_1.default)("Exemplo 01");
;
const myPair = {
    first: 12,
    second: "Meu teste pair"
};
console.log(myPair);
(0, utils_1.default)("Exemplo 02");
async function fetchJson(url) {
    const response = await fetch(url);
    const headers = {};
    response.headers.forEach((value, key) => {
        headers[key] = value;
    });
    const data = await response.json();
    return {
        data: data,
        status: response.status,
        statusText: response.statusText,
        headers
    };
}
(async () => {
    const response = await fetchJson("https://jsonplaceholder.typicode.com/todos/1");
    console.log(response.data);
})();
