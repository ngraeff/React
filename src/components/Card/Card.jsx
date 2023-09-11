const Card = (props) =>{
    return (
      <div className="card">
        <div className="card-body">
          <p>{props.title}</p>
          <p>{props.description}</p>
        </div>
  
      </div>
    )
  }

export default Card