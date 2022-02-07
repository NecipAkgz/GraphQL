/* eslint-disable no-unused-vars */
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from '../src/logo.png'
import './App.css'
import Karakter from './Karakter'
import Karakterler from './Karakterler'
import Konumlar from './Konumlar'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
})

function App() {
  const [tab, setTab] = useState('karakterler')

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='container'>
          <img
            src={logo}
            alt='Rick and morty'
            style={{ width: 300, display: 'block', margin: 'auto' }}
          />
          <button
            className='btn btn-link'
            onClick={() => setTab('karakterler')}>
            Karakterler
          </button>
          <button className='btn btn-link' onClick={() => setTab('konumlar')}>
            Konumlar
          </button>

          {tab === 'karakterler' ? (
            <Route exact path='/' component={Karakterler} />
          ) : (
            <Route exact path='/' component={Konumlar} />
          )}

          <Route exact path='/karakterler/:id' component={Karakter} />
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App
