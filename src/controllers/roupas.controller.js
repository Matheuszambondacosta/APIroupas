import RoupasList from "../models/roupasList.js";
import Roupas from "../models/roupas.js";

const roupaList = new RoupasList();

export const criarRoupa = (req, res) => {
    const { nome, tipo, tamanho, cor, imagem, quantidade } = req.body;

    const erros = [];
    if (!nome || !tipo || !tamanho || !cor || !imagem || !quantidade) {
        return res.status(400).json({ message: "Dados inválidos" });
    }
    if (nome.length < 6) {
        erros.push("Nome deve conter no mínimo 6 caracteres");
    }
    else if (nome.length > 40) {
        erros.push("Nome deve conter no máximo 40 caracteres");
    }
    if (quantidade > 15000) {
        erros.push("Quantidade deve ser maior que 15000");
    }
    if (tipo.length > 50) {
        erros.push("Tipo deve conter no máximo 50 caracteres");
    }
    if (cor.length > 20) {
        erros.push("Cor deve conter no máximo 20 caracteres");
    }
    if (imagem != "jpg" && imagem != "png" && imagem != "jpeg" && imagem != "gif" && imagem != "svg") {
        erros.push("Imagem deve ser jpg, png, jpeg, gif ou svg");
    }
    if (tamanho != "PP" && tamanho != "P" && tamanho != "M" && tamanho != "G" && tamanho != "GG" && tamanho != "XG") {
        erros.push("Tamanho deve ser PP, P, M, G, GG ou XG");
    }
    if (erros.length) {
        return res.status(400).json({ message: erros });
    }



    const roupas = new Roupas(nome, tipo, tamanho, cor, imagem, quantidade);
    roupaList.addRoupa(roupas);
    return res.status(201).json(roupas);

};
export const getAllRoupas = (req, res) => {
    const { tipo, tamanho, cor, } = req.query;

    let roupas = [];

    if(tipo){
        roupas = roupaList.getClothBySearch('tipo', tipo);
    }
    if(tamanho){
        roupas = roupaList.getClothBySearch('tamanho', tamanho);
    }
    if(cor){
        roupas = roupaList.getClothBySearch('cor', cor);
    }
    if(!tipo && !tamanho && !cor){
        roupas = roupaList.getRoupas();
    } 

    return res.status(200).json({roupas, count: roupas.length});

}

export const listarRoupas = (req, res) => {
    return res.json(roupaList.getRoupas());
};

export const listarRoupaById = (req, res) => {
    const id = req.params.id;
    const roupa = roupaList.getRoupaById(id);
    if (!roupa) {
        return res.status(404).json({ message: "Roupa não encontrada" });
    }
    return res.json(roupa);
};
export const atualizarRoupa = (req, res) => {
    const id = req.params.id;
    const { nome, tipo, tamanho, cor, imagem, quantidade } = req.body;
    const roupa = roupaList.getRoupaById(id);
    const erros = [];
    
    if (!nome || !tipo || !tamanho || !cor || !imagem || !quantidade) {
        return res.status(400).json({ message: "Dados inválidos" });
    }
    if (nome.length < 6) {
        erros.push("Nome deve conter no mínimo 6 caracteres");
    }
    else if (nome.length > 40) {
        erros.push("Nome deve conter no máximo 40 caracteres");
    }
    if (quantidade > 15000) {
        erros.push("Quantidade deve ser maior que 15000");
    }
    if (tipo.length > 50) {
        erros.push("Tipo deve conter no máximo 50 caracteres");
    }
    if (cor.length > 20) {
        erros.push("Cor deve conter no máximo 20 caracteres");
    }
    if (imagem != "jpg" && imagem != "png" && imagem != "jpeg" && imagem != "gif" && imagem != "svg") {
        erros.push("Imagem deve ser jpg, png, jpeg, gif ou svg");
    }
    if (tamanho != "PP" && tamanho != "P" && tamanho != "M" && tamanho != "G" && tamanho != "GG" && tamanho != "XG") {
        erros.push("Tamanho deve ser PP, P, M, G, GG ou XG");
    }
    else if(!roupa){
        return res.status(404).json({ message: "Roupa não encontrada" });
    }
    if (erros.length) {
        return res.status(400).json({ message: erros });
    }
    if(erros.length == 0){
        const roupaUpdated = roupaList.updateRoupaById(id, nome, tipo, tamanho, cor, imagem, quantidade);
        return res.status(200).json(roupaUpdated);
    }
};
export const deletarRoupa = (req, res) => {
    const { id } = req.params;

    const roupaDeleted = roupaList.getRoupaById(id);

    if (!roupaDeleted) {
        return res.status(404).json({ message: "Roupa não encontrada" });
    }

    roupaList.deleteRoupa(roupaDeleted.id);

    return res.status(200).send({ message: "Roupa deletada com sucesso" });
};


