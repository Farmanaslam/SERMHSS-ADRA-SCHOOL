import { Link, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export default function Breadcrumbs () {
    const [searchParams, setSearchParams] = useSearchParams()

    let currentLink = ''
  
    const crumbs = searchParams.get("loc").split('/')
      .filter(crumb => crumb != '')
      .map((crumb, index) => {
        currentLink += `${crumb}%2F`

        const splitted_crumb = crumb.split("~")
        if (splitted_crumb.length > 1) {
          crumb = splitted_crumb[splitted_crumb.length - 1]
        }
  
        return (
          <li className="crumb flex items-center gap-2 font-thin text-sm hover:text-deepBlue relative" key={index}>
            <p className="crumb-seperator"></p>
            <Link to={`.?loc=${currentLink}`}>{crumb} {splitted_crumb.length > 1 && splitted_crumb[0]!="" ? "("+formatDate(splitted_crumb[0])+")" : ""}</Link>
          </li>
        )
      })

      useEffect(() => {
        document.querySelector(".crumb:first-child .crumb-seperator").classList.add("hidden")
      }, [])

      function formatDate(str) {
        return str.replace(/(\d\d\d\d)(\d\d)(\d\d)/g, '$3-$2-$1');
      }

    return (
        <ul className="breadcrumbs mb-3 flex items-center gap-2 border-2 p-2 uppercase">
            {crumbs}
        </ul>
    )
}