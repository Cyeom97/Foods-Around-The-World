const Countries = ({ image, name, _id}) => {
    return (
        <div className="box">
            <div className="info">
                <h3>{name}</h3>
            </div>
            <div className="img">
                <img src={image} alt={name}/>
            </div>
        </div>
    )
}


export default Countries