const arrayValor = [1, 2 ,3, 4, 5, 6];
console.log(arrayValor);

const arrayObjects=[
    {nome: 'Fulano', idade: 23, socio:false},
    {nome: 'Bolsonaro', idade: 60, socio:true}
];

console.log('antes', arrayObjects)

arrayObjects.push [
    {nome: 'Lula', idade: 98, socio: false}
]

console.log('Depois', arrayObjects)