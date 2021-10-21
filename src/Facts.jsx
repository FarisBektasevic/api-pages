import React from 'react'
import Buttons from './Buttons'
import './Facts.css'

const Facts = ({ facts, openNextPage, openPreviusPage, page, setPage }) => {
  return (
    <>
      <div className="facts">
        {facts.map((fact, i) => {
          return (
            <div className="fact-box" key={i}>
              <h4>Fact: {i + 1}</h4>
              {fact.fact}
            </div>
          )
        })}
      </div>
      <div className="page-nav">
        <Buttons handleClick={openPreviusPage} text="<" />
        <div className="pages">
          <div
            onClick={() => {
              setPage(1)
            }}
          >
            1
          </div>
          <div
            onClick={() => {
              setPage(2)
            }}
          >
            2
          </div>
          <span>.....</span>
          {page > 1 && (
            <div
              onClick={() => {
                setPage(page - 1)
              }}
            >
              {page - 1}
            </div>
          )}

          <div>{page}</div>
          {page < 332 && (
            <div
              onClick={() => {
                setPage(page + 1)
              }}
            >
              {page + 1}
            </div>
          )}

          <span>.....</span>
          <div
            onClick={() => {
              setPage(331)
            }}
          >
            331
          </div>
          <div
            onClick={() => {
              setPage(332)
            }}
          >
            332
          </div>
        </div>
        <Buttons handleClick={openNextPage} text=">" />
      </div>
    </>
  )
}

export default Facts
