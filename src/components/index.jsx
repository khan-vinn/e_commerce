import { useHistory } from "react-router-dom";

export default function ProductShowIndex() {
    let n = useHistory();
    return <h1>{n.location.pathname}</h1>;
}
