const mask = {
    cpf(value){
        // CPF: 000.000.000-00
        return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d{1})/, '$1.$2')
        .replace(/(\d{3})(\d{1})/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(.\d{3})\d+?$/,'$1')
    },
    
    cnpj(value){
        // CNPJ: 00.000.000/0000-00
        return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d{1})/, '$1.$2')
        .replace(/(\d{3})(\d{1})/, '$1.$2')
        .replace(/(\d{3})(\d{1})/, '$1/$2')
        .replace(/(\d{4})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
    },
    telefone(value){
        // TELEFONE:(00)  0000-0000
        // CELULAR: (00) 00000-0000
        return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d{1})/, '($1) $2')
        .replace(/(\d{4})(\d{1})/, '$1-$2')
        .replace(/(\d{4})-(\d{1})(\d{4})/, '$1$2-$3')
        .replace(/(-\d{4,})\d+?$/, '$1')
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


