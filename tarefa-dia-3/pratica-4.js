const primo = (num) => {
  let contador = 0;
  for(let i=1; i <= num; i++) {
    if(num % i === 0) {
      contador = contador + 1;
    }
}
if(contador == 2) {
  console.log(`O número ${num} é primo`)
  } else {
    console.log(`O número ${num} não é primo`)
  } 
}

primo(17);
primo(2);
primo(7);
primo(8);
primo(5);
primo(23);
primo(15);
primo(1500450271);