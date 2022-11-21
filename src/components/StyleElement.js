import './StyleElement.css';




function StyleElement(props) {
    const reco=props.record;
    
    return (
        <div className='reco-grid'>
            <div className="reco-item">
                {reco.ddate.toString()}
            </div>
            <div className="reco-item">
                {reco.styleName}
            </div>
            <div className="reco-item">
                {reco.designer}
            </div>
            <div className="reco-item">
                {reco.remarks}
            </div>
        </div>
    )
}

export default StyleElement;
