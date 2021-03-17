import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddProduct from "./components/products/addProduct";
import Header from "./components/header/header";
import CheckCard from "./components/header/header";
import NotFound from "./components/NotFound";
import {
    ConnectedProducts,
    ConnectedSelectedProducts,
} from "./components/products/container";
import ProductSelected from "./components/";
import "./App.css";

function RoutesSetting() {
    return (
        <main>
            <Switch>
                <Route path="/selected">
                    <ConnectedSelectedProducts />
                </Route>
                <Route path="/products">
                    <ConnectedProducts />
                </Route>
                <Route path="/add-product">
                    <AddProduct />
                </Route>
                <Route path="/product/:id">
                    <ProductSelected />
                </Route>
                <Route path="/check-card">
                    <CheckCard />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </main>
    );
}

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <RoutesSetting />
            </div>
        </Router>
    );
}

export default App;
