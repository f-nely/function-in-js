function primo(num) {
  let qtdMultiplos = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      if (i !== 1) {
        qtdMultiplos++;
      }
    }
  }
  if (qtdMultiplos == 1) {
    return true;
  } else if (qtdMultiplos > 1) {
    return false;
  } else {
    return false;
  }
}
let numero = 3;
console.log(primo(numero));

// Teacher's answer
function primo(numero) {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return numero !== 1;
}

function main(numero) {
  console.log(primo(numero));
}
