class NegociacoesView {

    private _elemento: Element;

    constructor(seletor: string) {
        this._elemento = document.querySelector(seletor);
    }

    update (model: Negociacoes): void {
        console.log(model);
        console.log(this._elemento);
        this._elemento.innerHTML = this.template(model);
    }

    template(model: Negociacoes): string {

        return `
        <table class= "table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${model.paraArray().map(negociacao =>
                    `
                        <tr>
                            <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getFullYear()}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>
                        </tr>
                    `
                ).join('')/* join vai concatenar cada return em uma única string gigante */}
            </tbody>

            <tfoot>
            </tfoot>

            </table>        
        `;
    }
}