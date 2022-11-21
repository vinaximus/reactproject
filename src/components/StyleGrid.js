import StyleElement from "./StyleElement";

function StyleGrid(props) {
    //props is the styleObj array of styles
    const styleData=props.data;
    //console.table (styleData);

    return (
        <div>
            {
                styleData.map(
                    (x)=>
                        <StyleElement record={x}></StyleElement>
                    
                )
            }
            
                
                
               
        </div> 


    
    )
}

export default StyleGrid;