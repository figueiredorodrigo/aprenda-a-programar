let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};


if(produtoA["internacional"]) {
    let imposto = ((20 / 100) * produtoA["valor"]);
    let total = produtoA["valor"] + imposto;
    console.log(`O produto A é internacional e tem um imposto de 20%. Preço total do produto com imposto é: ${total}`);
} else {
    let imposto = ((12 / 100) * produtoA["valor"]);
    let total = produtoA["valor"] + imposto;
    console.log(`O produto A é nacional e tem um imposto de 12%. Preço total do produto com imposto é: ${total}`);
}

if(produtoB["internacional"]) {
    let imposto = ((20 / 100) * produtoB["valor"]);
    let total = produtoB["valor"] + imposto;
    console.log(`O produto B é internacional e tem um imposto de 20%. Preço total do produto com imposto é: ${total}`);
} else {
    let imposto = ((12 / 100) * produtoB["valor"]);
    let total = produtoB["valor"] + imposto;
    console.log(`O produto B é nacional e tem um imposto de 12%. Preço total do produto com imposto é: ${total}`);
}

if(produtoC["internacional"]) {
    let imposto = ((20 / 100) * produtoC["valor"]);
    let total = produtoC["valor"] + imposto;
    console.log(`O produto C é internacional e tem um imposto de 20%. Preço total do produto com imposto é: ${total}`);
} else {
    let imposto = ((12 / 100) * produtoC["valor"]);
    let total = produtoC["valor"] + imposto;
    console.log(`O produto C é nacional e tem um imposto de 12%. Preço total do produto com imposto é: ${total}`);
}