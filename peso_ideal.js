btnCalcular.addEventListener('click', function(){
    
    frmNome = nome.value
    frmAltura = altura.value
    sexoFeminino
        
    if (sexoFeminino.checked === true) {
        fator = 21
    } else {
        fator = 22
    }

    peso = fator * Math.pow(frmAltura, 2).toFixed(2)

    mostrarPeso = document.getElementById('pesoIdeal')
    mostrarPeso.innerHTML = `
    <p> ${frmNome}, O seu peso ideal é ${peso}</p>
    `

})


btnLimpar.addEventListener('click', function(){
    document.location.reload(true);
})