import React from 'react'
import "../Assets/SearchResults.css"
import Card from '../Components/Card'

function SearchResult() {
  return (
    <div className="searchResultsContainer">
      <p><span className='boldText'>Search Result /</span><span>Trivandrum - A+</span></p>
        <div className="searchResults">
            <Card phoneNumber={9446451902}/>
            <Card phoneNumber={9446451902}/>
            <Card phoneNumber={9446451902}/>
            <Card phoneNumber={9446451902}/>
            <Card phoneNumber={9446451902}/>
            <Card phoneNumber={9446451902}/>
            <Card phoneNumber={9446451902}/>
            <Card phoneNumber={9446451902}/>
            <Card phoneNumber={9446451902}/>
            <Card phoneNumber={9446451902}/>
            <Card phoneNumber={9446451902}/>
        </div>
    </div>
  )
}

export default SearchResult