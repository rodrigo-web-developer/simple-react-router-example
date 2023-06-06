import { useCallback } from "react";
import "../styles/app.css";
import { RenderComponent, Link, useNavigation } from "simple-react-routing";

export default function Layout() {
    const navigator = useNavigation();

    const redirectToProduct = useCallback((e: React.UIEvent<Element, UIEvent>) => {
        navigator.navigateToRoute(e, "product-details",
            {
                "codigo": "ef4c3e47-f747-43ef-8962-1557caa5f8fa",
                "numero": "42"
            }
        );
    }, [navigator]);

    return (<div className="layout">
        <nav>
            <ul>
                <li><Link to="/pagina1">IR PARA PAGINA 1</Link></li>
                <li><Link to="/pagina2">IR PARA PAGINA 2</Link></li>
                <li><Link to="/pagina3">IR PARA PAGINA 3</Link></li>
                <li><Link to="/rota/textonormal">PAGINA COM REGEX</Link></li>
                <li><Link to="/rota/123456">PAGINA COM REGEX</Link></li>
                <li><Link to="/rota/teste">PAGINA SEM REGEX</Link></li>
                <li><a href="" onClick={(e) => redirectToProduct(e)}>PAGINA REGEX TIPO GUID E NUMBER</a></li>
                <li><Link to="/404">PAGINA SEM REGISTRO</Link></li>

            </ul>
        </nav>
        <div className="content">
            <RenderComponent />
        </div>
    </div>)
}