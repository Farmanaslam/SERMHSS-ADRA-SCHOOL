import React from 'react'
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <>
    <h2 className='my-3' id="h2">ABOUT THE SCHOOL</h2>
    <div className='container'>
    <div className='row'>
      <div className='col-md-8 about'>
      <p>From the very beginning of the past century, Adra, anciently called Aradhya Nagari , was gradually flourishing as a railway town. People from different parts of the country came to this place to join the railways. A new socio-economic clan emerged with differences in caste, creed, language religious belief and culture. A need for a separate school for girls was felt by Sri. Kanti Das. Accordingly in a thatched house, adjacent to the present building, a school was set up. Later in the year 1926, the then B N Railway took all the financial and administrative responsibilities of this school. <Link to="/aboutus" style={{color:"blue"}}>read more...</Link>
      </p>
      </div>
      <div className='col-md-4'>
      <img src="/images/IMG_0312.jpg" id="img" width={"450px"} alt=''></img> 
      </div>
    </div>

{/* <div className='aligned '>
    <span id="p">From the very beginning of the past century, Adra, anciently called Aradhya Nagari , was gradually flourishing as a railway town. People from different parts of the country came to this place to join the railways. A new socio-economic clan emerged with differences in caste, creed, language religious belief and culture. A need for a separate school for girls was felt by Sri. Kanti Das. Accordingly in a thatched house, adjacent to the present building, a school was set up. Later in the year 1926, the then B N Railway took all the financial and administrative responsibilities of this school. <Link to="/aboutus" style={{color:"blue"}}>read more...</Link>
</span>
<img src="/images/IMG_0312.jpg" id="img" width={"450px"} alt=''></img> */}
  </div>
    </>
  )
}
