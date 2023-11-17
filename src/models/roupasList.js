export default class RoupasList {
    constructor() {
        this.roupas = [];
    }
    addRoupa(roupa) {
        this.roupas.push(roupa);
    }
    getRoupas() {
        return this.roupas;
    }
    getRoupaById(id) {
        return this.roupas.find(roupa => roupa.id === id);
    }

    updateRoupaById(id,nome, tipo, tamanho, cor, imagem, quantidade,) {
        this .roupas = this.roupas.map((roupa) => {
            if (roupa.id === id) {
                roupa.nome = nome;
                roupa.tipo = tipo;
                roupa.tamanho = tamanho;
                roupa.cor = cor;
                roupa.imagem = imagem;
                roupa.quantidade = quantidade;
            }
            return roupa;
        });
        return this.getRoupaById(id);


    }

    getClothBySearch(searchParams, param1) {
        return this.roupas.filter(cloth => cloth[searchParams] == param1);
    }

    deleteRoupa(id) {
        this.roupas = this.roupas.filter(roupa => roupa.id !== id);
    }

}