import React, { useEffect } from "react";
import { useState } from "react";
import $ from 'jquery';
const mandatoryData = [
  {
    name: "Affiliation_2014_CBSE",
    title: "Affiliation 2014 CBSE",
  },
  {
    name: "Building_safety_certificate",
    title: "Building Safety Certificate",
  },

  {
    name: "Land_certificate_with_Sketch",
    title: "Land Certificate With Sketch",
  },

  {
    name: "Name _change_and_upgradation",
    title: "Name Change and Upgradation",
  },

  {
    name: "School_management_committee",
    title: "School Management Committee",
  },

  {
    name: "Self_declaration",
    title: "Self Declaration",
  },

  {
    name: "Sr _secondary_affiliation",
    title: "Sr. Secondary Affiliation",
  },

  {
    name: "Water_&_Sanitation_certificate",
    title: "Water & Sanitation Certificate",
  },
  {
    name: "Fire_safty_certificate",
    title: "Fire Safety Certificate",
  },
];

export default function Mandatory() {
  const [pdfSrc, setPdfSrc] = useState("Affiliation_2014_CBSE");
  const [pdfTitle,setPdfTitle]=useState("Affiliation 2014 CBSE")
  function handleButtonClick(event) {
    setPdfSrc(event.target.dataset.name);
   
  }
     useEffect(()=>{
      let tabButtons=document.querySelectorAll(".list-group-item");
      tabButtons.forEach(tabButton=>{
        if(tabButton.dataset.name==pdfSrc){
          tabButton.classList.add("active")
        }else{
          tabButton.classList.remove("active")
        }
      })
     },[pdfSrc])
  return (
    <>
      <h2 id="h2">MANDATORY DISCLOSURE</h2>
      <div className="container my-4 d-flex">
        <div className="tabs col-md-4">
          <ul className="list-group ">
            
            {
              mandatoryData.map((data, index) => (
                <li
                key={index}
                  className="list-group-item"
                  data-name={data.name}
                  onClick={handleButtonClick}
                >
                  {data.title}
              </li>
              ))
            }
          </ul>
        </div>
        {/* <div className="col-md-8 mx-4 border">
          <object
            title="mandatory disclosure"
            id="myPdf"
            data={`/MandatoryDisclosure/${pdfSrc}.pdf`}
            className="w-100 "
          ></object>
          <a className="download btn btn-primary mx-2 my-2" href={`/MandatoryDisclosure/${pdfSrc}.pdf`} download>Download</a>
        </div> */}

<div className="col-md-8 mx-4 border">
          <div className="card h-100">
            <h3 className="card-header">
            <b>{pdfTitle}</b>
            </h3>
            <div className="card-body h-100">
            <object
              title="mandatory disclosure"
              id="myPdf"
              data={`/MandatoryDisclosure/${pdfSrc}.pdf`}
              className="w-100 d-none d-md-block" style={{height:'90%'}}
            >
            </object>
            <a className="download btn btn-primary mx-2 my-2" href={`/MandatoryDisclosure/${pdfSrc}.pdf`} download>Download</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
