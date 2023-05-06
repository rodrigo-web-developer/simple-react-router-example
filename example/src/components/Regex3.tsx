import { useRouter } from "simple-react-routing"

export default function MyThirdPage() {
    const { pathParams } = useRouter();
    if (pathParams["codigo"]) {
        return (<>
            <h1>
                RECEBENDO PARAMETRO GUID
            </h1>
            <h3>guid: {pathParams["codigo"]}</h3>
            <h3>number: {pathParams["numero"]}</h3>
        </>)
    }
    return (<>
        <h1>
            RECEBENDO ROTA EXATA
        </h1>
        <h3>rota: /rota/teste</h3>
    </>)
}