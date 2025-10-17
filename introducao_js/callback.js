const inicio = ()=> {
    console.log('Ibicio 1');
}

const fim = ()=> {
    console.log('fim 1');
}

const processa = (ini, final) => {
    ini();

    final();
}

processa(inicio, fim);

processa (() => {
    console.log('inicio 2')
}, ()=>{
    console.log('fim 2')
});