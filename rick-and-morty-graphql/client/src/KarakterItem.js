import { Link } from 'react-router-dom'

function KarakterItem({ karakter: { id, name, status, gender, image } }) {
  return (
    <div className='card card-body mb-3'>
      <div className='row'>
        <div className='col-md-3'>
          <img style={{ width: 120 }} src={image} alt={name} />
        </div>
        <div className='col-md-6'>
          <h4>{name}</h4>
        </div>
        <div className='col-md-3'>
          <Link className='btn btn-primary' to={`/karakter/${id}`}>
            Detay
          </Link>
        </div>
      </div>
    </div>
  )
}

export default KarakterItem
