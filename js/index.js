const mask = {
    cpf(value){
        return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d{1})/, '$1.$2')
        .replace(/(\d{3})(\d{1})/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(.\d{3})\d+?$/,'$1')
    },
    
    cnpj(value){
        return value
    },
    telefone(value){
        return value
    },
    cep(value){
        return value
    },
    pis(value){
        return value
    },
    
}

document.querySelectorAll("input").forEach(($Input)=>{
    const field = $Input.dataset.js
    $Input.addEventListener("input", (e)=>{
        const value = e.target.value
        e.target.value = mask[field](value)
    })
})


