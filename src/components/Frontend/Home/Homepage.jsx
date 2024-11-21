import React from 'react'
import Headers from './Headers'
import Homebanner from './Homebanner'
import MoviesCards from './MoviesCards'
import Koreancards from './Koreancards'

const Homepage = () => {
  return (
    <>
    <Headers/>
    <Homebanner/>
     <MoviesCards/>
     <Koreancards/>
    </>
  )
}

export default Homepage
