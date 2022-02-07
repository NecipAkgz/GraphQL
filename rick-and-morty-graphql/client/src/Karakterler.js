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
const SAYFABILGI_QUERY = gql`
  query GetSayfaBilgi($sayfa: Int!) {
    sayfaBilgi(sayfa: $sayfa) {
      pages
      next
      prev
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
  const { data: bilgi } = useQuery(SAYFABILGI_QUERY, {
    variables: {
      sayfa,
    },
  })

  return (
    <div>
      <h2>Karakterler</h2>
      {loading && <p>Yükleniyor ...</p>}
      {error && <p>Hata: {error.message}</p>}
      {bilgi && (
        <div>
          {console.log(bilgi.sayfaBilgi)}
          <button className='btn btn-primary m-3' onClick={() => setSayfa(1)}>
            İlk Sayfa
          </button>
          <button
            className='btn btn-info m-3'
            onClick={() => setSayfa((prev) => (prev > 1 ? prev - 1 : prev))}>
            Geri Git
          </button>
          <button
            className='btn btn-warning m-3'
            onClick={() =>
              setSayfa((prev) =>
                prev < bilgi.sayfaBilgi.pages ? prev + 1 : prev
              )
            }>
            İleri Git
          </button>
          <button
            className='btn  btn-secondary m-3'
            onClick={() => setSayfa(bilgi.sayfaBilgi.pages)}>
            Son Sayfa
          </button>
        </div>
      )}
      {data &&
        data.karakterler.map((karakter) => (
          <KarakterItem key={karakter.id} karakter={karakter} />
        ))}
    </div>
  )
}

export default Karakterler
