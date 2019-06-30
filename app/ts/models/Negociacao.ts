class Negociacao {
    
    private _data;
    private _quantidade;
    private _valor;

    constructor(data, quantidade, valor) {
        // _ representa uma convenção que diz que esse tipo de variável
        // não pode ser alterado fora dos métodos da própria classe
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
        
    }

    get data () {
        return this._data;
    }

    get quantidade () {
        return this._quantidade;
    }

    get valor () {
        return this._valor;
    }

    get volume () {
        return this._quantidade * this._valor;
    }
}