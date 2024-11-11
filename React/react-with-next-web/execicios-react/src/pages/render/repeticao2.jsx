import listaProdutos from '../../../data/listaProdutos';

export default function repeticao2() {

    const ComBorda = {border: "1px solid #fff", padding: "10px"};

    function renderizarDados() {
        return listaProdutos.map(produto => {
            return <tr key={produto.id}>
                <td style={ComBorda}>{produto.id}</td>
                <td style={ComBorda}>{produto.nome}</td>
                <td style={ComBorda}>{produto.preco}</td>
            </tr>
        })
    }

    return (
        <>
            <table style={ComBorda}>
                <thead>
                    <tr>
                        <th style={ComBorda}>Id</th>
                        <th style={ComBorda}>Nome</th>
                        <th style={ComBorda}>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {renderizarDados()}

                </tbody>
            </table>
        </>
    );
}