import { useState } from "react";
import Form1 from "../components/test-form-components/form1";

export default function TestForm() {
    const [data, setData] = useState({})

    return (
        <div className="offset-1 col-10 shadow rounded my-4">
            <Form1 />
        </div>
    )
}
