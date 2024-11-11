import If from '../../../components/If';

export default function condicional2(){
    const numeroTeste = 3; 

    return(
        <div>
            <If teste={numeroTeste % 2 === 0}>
                <p>O número <strong>{numeroTeste}</strong> é Par</p>
            </If>
            <If teste={numeroTeste % 2 === 1}>
                <p>O número <strong>{numeroTeste}</strong> é Impar</p>
            </If>
        </div>
    );
}