import { gql, useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'

const KARAKTER_QUERY = gql`
  query getKrakter($id: Int!) {
    karakter(id: $id) {
      id
      name
      gender
      status
      image
    }
  }
`

function Karakter() {
  const { id } = useParams()
  const { loading, data } = useQuery(KARAKTER_QUERY, {
    variables: {
      id: parseInt(id),
    },
  })

  return (
    <div>
      {loading && <p>Yükleniyor ...</p>}
      {data && data.karakter.name}
    </div>
  )
}

export default Karakter
