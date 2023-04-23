import { useRouter } from "simple-react-routing";

export default function MyFirstPage() {
    const { pathParams } = useRouter();
    return (<>
        <h1>
            RECEBENDO PARAMETRO NUMERICO
        </h1>
        <h2>rota: /rota/:id(number)</h2>
        <h3>valor: {pathParams["id"]}</h3>
    </>)
}