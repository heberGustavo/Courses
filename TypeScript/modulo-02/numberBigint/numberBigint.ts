
// ===> Exemplos: Number

let numb1: number = 23.1;
let numb2: number = 0x78cf;
let numb3: number = 0o577;
let numb4: number = 0b110001;

console.log(`Number - Ponto Flutuante: ${numb1}`);
console.log(`Number - Hexadecimal: ${numb2}`);
console.log(`Number - Octal...: ${numb3}`);
console.log(`Number - Binario: ${numb4}`);


// ===> Exemplos: BIG INT
let big1: bigint = 9007199254740991n;
let big2: bigint = 0b10000000000000000000000000000000000000000000000011n;
let big3: bigint = 0x20000000000003n;
let big4: bigint = 0o400000000000000003n;

console.log('Bigint...', big1);
console.log('Bigint Binário ... ', big2);
console.log('Bigint - Hexadecimal...', big3);
console.log('Bigint Octal...', big4);