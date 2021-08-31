import { Link } from "react-router-dom"

const NotFound = () => {
    return ( <div className="not-found">
        <h2>Sorry</h2>
        <p>The page you tried to see is no where to be found,
            It's okay it is not your fault.

            
        </p><br/><Link to="/"> Back to home</Link>
    </div> );
}
 
export default NotFound;