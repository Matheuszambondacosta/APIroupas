import {v4 as uuidv4} from 'uuid';
export class Roupas {
    constructor(nome, tipo, tamanho, cor, imagem, quantidade) {
        this.id = uuidv4();
        this.nome = nome;
        this.tipo = tipo;
        this.tamanho = tamanho;
        this.cor = cor;
        this.imagem = imagem;
        this.quantidade = quantidade;
    }

    getNome() {
        return this.nome;
    }

    getTipo() {
        return this.tipo;
    }

    getTamanho() {
        return this.tamanho;
    }

    getCor() {
        return this.cor;
    }

    getImagem() {
        return this.imagem;
    }

    getQuantidade() {
        return this.quantidade;
    }

    getId() {
        return this.id;
    }

}
export default Roupas 
