/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"

import { Link } from "react-router-dom"
function LinkButton({children,to}) {
    const className="text-sm text-orange hover:text-brown";
    const navigate=useNavigate();
    if(to==="-1") return <button onClick={() => navigate(-1)} className={className}>{children}</button>
    return (
       <Link to={to} className={className}>{children}</Link>
    )
}

export default LinkButton
