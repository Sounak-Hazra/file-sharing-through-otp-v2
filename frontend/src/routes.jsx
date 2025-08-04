import SendFile from "./page/Send"
import Receive from "./page/Receive"
import Layout from "./components/Layout"


const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <SendFile />
            },
            {
                path: "/recive",
                element: <Receive />
            }
        ]
    }
]

export default routes