import { createBrowserRouter } from "react-router-dom"
import Home from "./routes/home"
import ConsentForm from "./routes/consent"
import TestForm from "./routes/testForm"
import App from "./App"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "consent",
                element: <ConsentForm />
            },
            {
                path: "testform",
                element: <TestForm />
            }
        ]
    }
])
