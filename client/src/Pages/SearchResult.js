import React from 'react'
import "../Assets/SearchResults.css"
import Card from '../Components/Card'

function SearchResult() {
  return (
    <div className="searchResultsContainer">
      <p><span className='boldText'>Search Result /</span><span>Trivandrum - A+</span></p>
        <div className="searchResults">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}

export default SearchResult