class Negociacoes {
    private _negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    paraArray (): Negociacao[] {
        // dessa forma estou mandando uma cópia do array e não a referência para ele
        return [].concat(this._negociacoes);
    }
}