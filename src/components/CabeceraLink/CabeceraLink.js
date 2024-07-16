import { Link } from "react-router-dom"

const CabeceraLink = ({children, url}) => {
    return(
        <Link to={url}>
            {children}
        </Link>
    )
}

export default CabeceraLink