import StyleGrid from "./components/StyleGrid";

function App() {
    const styleObj=loadData();

    return (
        <StyleGrid data={styleObj}></StyleGrid>   
    )
}

function loadData() {
    const ans=[
        {ddate:new Date(21-10-2022), styleID:1, styleName:'0124K', designer: 'Kaamini', remarks:'Kurti only'},
        {ddate:new Date(22-10-2022), styleID:2, styleName:'H0199', designer: 'Kaamini', remarks:'Kurti only'},
        {ddate:new Date(23-10-2022), styleID:3, styleName:'H0200', designer: 'Poonam', remarks:'KLD'},
        {ddate:new Date(24-10-2022), styleID:4, styleName:'0173s', designer: 'Kaamini', remarks:'Gown'},
        {ddate:new Date(25-10-2022), styleID:5, styleName:'0209K', designer: 'Kaamini', remarks:'Kurti only'},
        {ddate:new Date(27-10-2022), styleID:6, styleName:'0199K White Tiger Shark hybrid ', designer: 'Kaamini', remarks:'3 Tier gown with dupatta, made in two variations'},
        {ddate:new Date(27-10-2022), styleID:7, styleName:'01209K', designer: 'Kaamini', remarks:'Kurti only with dupatta'},
        {ddate:new Date(28-10-2022), styleID:8, styleName:'1249K', designer: 'Kaamini', remarks:'Kurti only'},
        {ddate:new Date(28-10-2022), styleID:9, styleName:'H0709K', designer: 'Ruchinp', remarks:'Kurti only'},
        {ddate:new Date(30-10-2022), styleID:10, styleName:'3209K', designer: 'Poonam', remarks:'Kurti only'},
    ]
    return ans;
}

export default App;
