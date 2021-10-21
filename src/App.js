import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Facts from './Facts'
import Header from './Header'

function App() {
  const [limit, setLimit] = useState(1)
  const [facts, setFacts] = useState([])
  const [page, setPage] = useState(1)

  const changeLimit = (e) => {
    setLimit(e.target.value)
  }

  const getFacts = async () => {
    if (limit > 0) {
      let response = await axios.get(
        `https://catfact.ninja/facts?limit=${limit}&page=${page}`
      )
      console.log(response.data)
      setFacts(response.data.data)
    }
  }

  const openNextPage = () => {
    if (page < 332) setPage(page + 1)
  }

  const openPreviusPage = () => {
    if (page > 1) setPage(page - 1)
  }

  useEffect(() => {
    console.log(limit)
  }, [limit])

  useEffect(() => {
    getFacts()
  }, [page])

  return (
    <div className="App">
      <Header limit={limit} changeLimit={changeLimit} getFacts={getFacts} />
      <Facts
        openNextPage={openNextPage}
        openPreviusPage={openPreviusPage}
        facts={facts}
        page={page}
        setPage={setPage}
      />
    </div>
  )
}

export default App
