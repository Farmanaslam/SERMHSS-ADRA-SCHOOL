import React from 'react'
export default function Feeparticulars() {
  return (
    <>
    <div className='container'>
    <h2 id="h2">FEE PARTICULARS</h2>
    <table className="table">
    <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">SDF (Rs.)</th>
        <th scope="col">Misc (Rs.)</th>
        <th scope="col">Total (Rs.)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">IX-XII</th>
        <td>6000</td>
        <td>50</td>
        <td>6050</td>
      </tr>
      <tr>
        <th scope="row">XI & XII <br></br> Science</th>
        <td>7200</td>
        <td>50</td>
        <td>7250</td>
      </tr>
      
    </tbody>
  </table>
  <ul id="l1">
<li>Online through SB Collect</li>
<li>Printout should be deposite dto class teacher should be paid within the month of April in every session.</li>
<li>For class IX, X, XI, XII Registration fees, Board Exam fee and other fee payable to board & council will be collected seperately as per the insructions.</li>
    </ul>

    </div>
    </>
  )
}
