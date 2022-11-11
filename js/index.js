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
        .replace(/(-\d{4})\d+?$/, '$1')
    },
    cep(value){
        // CEP: 00000-000
        return value
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d{1})/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1')
    },
    pis(value){
        // PIS: 000.00000.00-0
        return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d{1})/, "$1.$2")
        .replace(/(\d{5})(\d{1})/, "$1.$2")
        .replace(/(\d{5}\.)(\d{2})(\d{1})/, "$1$2-$3")
        .replace(/(-\d{1})\d+?$/, "$1")
    },
    
}

document.querySelectorAll("input").forEach(($Input)=>{
    const field = $Input.dataset.js
    $Input.addEventListener("input", (e)=>{
        const value = e.target.value
        e.target.value = mask[field](value)
    })
})


