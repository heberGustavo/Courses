const ComStyle = {border: "1px solid black", margin: "5px", padding: "5px"};

export default function Filho(props){
    return(
        <div>
            <button 
            style={ComStyle}
                onClick={() => props.funcao("PASSEI NO ENEM!", "Uhumm", "Minha nota foi -10")}
            >
                Falar com o Pai
            </button>
        </div>
    );
}