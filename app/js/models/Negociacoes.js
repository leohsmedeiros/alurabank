class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        // dessa forma estou mandando uma cópia do array e não a referência para ele
        return [].concat(this._negociacoes);
    }
}
