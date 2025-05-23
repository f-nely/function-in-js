let calculador = (n) => {
  if (n % 2 == 0) {
    return n * 2;
  } else {
    return n * 3;
  }
};

console.log(calculador(5));

// Teacher's answer
const calculador1 = (numero) => (numero % 2 === 0 ? numero * 2 : numero * 3);

function main(n) {
  if (calculador1.prototype === undefined) {
    console.log(calculador1(n));
  } else {
    console.log("É necessário definir uma arrow function");
  }
}
