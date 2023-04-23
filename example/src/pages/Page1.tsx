
import { Link } from "simple-react-routing";;

export default function MyFirstPage() {
    return (<>
        <h1>
            HEY, THIS IS MY 1st PAGE
        </h1>
        <Link to="/pagina1/subpage">Navigate to subpage</Link>
    </>
    )
}