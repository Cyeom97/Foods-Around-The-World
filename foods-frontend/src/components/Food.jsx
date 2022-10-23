const Food = ({image, name, description}) => {
    
    return (
        <div className='box'>
            <div className="info">
                <h3>{name}</h3>
            </div>
            <div>
                <img src={image} alt={name} />
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Food