function click1(){
    console.log('click 01')
}

export default function botao(){

    const ComStyle = {border: "1px solid black", margin: "5px"};
    function click2(){
        console.log('click 02')
    }

    return(
        <div>
            <button style={ComStyle} onClick={click1}>Click #01</button>
            <button style={ComStyle} onClick={click2}>Click #02</button>
            <button style={ComStyle} onClick={e => console.log(e)}>Click #03</button>
            <button style={ComStyle} onClick={function() {
                console.log('click 04')
            }}>Click #04</button>
            <div>
                <input 
                    type="text" 
                    style={ComStyle}
                    onChange={e => console.log(e.target.value)} 
                />
            </div>
        </div>
    );
}