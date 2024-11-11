const stylePCustom = {
    fontSize: "20px",
    margin: "20px",
    backgroundColor: "black",
    width: "50px",
    height: "50px",
    borderRadius: "25px",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
};

export default function NumeroDisplay(props){
    return(
        <div style={stylePCustom}>
            {props.number}
        </div>
    );
}