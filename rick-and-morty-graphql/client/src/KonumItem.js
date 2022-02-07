function KonumItem({ konum: { id, name, type, dimesion } }) {
  return (
    <div className='card card-body shadow-sm mb-3'>
      <div className='row align-items-center'>
        <div className='col-md-6'>
          <h4 className='text-info'>{name}</h4>
        </div>
        <div className='col-md-3'>
          <h4 className='text-success'>{type}</h4>
        </div>
        <div className='col-md-3'>
          <h4 className='text-danger'>{dimesion}</h4>
        </div>
      </div>
    </div>
  )
}

export default KonumItem
