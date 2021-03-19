import { useHistory } from "react-router-dom";

export default function ProductShowIndex(params) {
    let n = useHistory();
    return <h1>{n.location.pathname}</h1>;
}
