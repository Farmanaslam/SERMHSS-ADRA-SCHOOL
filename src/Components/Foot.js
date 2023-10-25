import React from "react";
import{Link} from "react-router-dom"
export default function Foot() {
  return (
    <>
    <div className="footer-component">
    <div className="foot">
      <div className="container">
        <div className="row py-4">
          <div className="col-md-4">
            <p className="my-2">
              South Eastern Railway Mixed Higher Secondary School, Adra is an
              important center of learning in this part of Purulia. Established
              by the British.
            </p>
          </div>
          <div className="links col-md-4">
            <h5 >Links</h5>
            <ul>
             <Link to="/aboutus"> <li>About Us</li></Link>
             <Link to="/mandatory"> <li>Mandatory Disclosure</li></Link>
             <Link to="/contact"> <li>Contact Us</li></Link>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>
              FMXG+2PC, Adra Station Road Junction Near Adra, West Bengal 723121
            </p>
          </div>
          
        </div>
         </div>
      
      
    </div>
      <div className="footerend">
      <h5>Copyright 2023 &copy; SERMHSS</h5>
    </div>
    </div>
    </>
  );
}
