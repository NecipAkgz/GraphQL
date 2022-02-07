import { gql, useQuery } from '@apollo/client'
import { useState } from 'react'
import KarakterItem from './KarakterItem'

const KARAKTERLER_QUERY = gql`
  query GetKarakterler($sayfa: Int!) {
    karakterler(sayfa: $sayfa) {
      id
      name
      gender
      status
      image
    }
  }
`

function Karakterler() {
  const [sayfa, setSayfa] = useState(1)
  const { loading, error, data } = useQuery(KARAKTERLER_QUERY, {
    variables: {
      sayfa,
    },
  })

  return (
    <div>
      <h2>Karakterler</h2>
      {loading && <p>Yükleniyor ...</p>}
      {error && <p>Hata: {error.message}</p>}
      {data &&
        data.karakterler.map((karakter) => (
          <KarakterItem key={karakter.id} karakter={karakter} />
        ))}
    </div>
  )
}

export default Karakterler
