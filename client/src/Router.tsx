import { Route, Routes } from "react-router-dom";
import HomePage from "./containers/HomePage";
import PageNotFound from "./containers/PageNotFound";
import ProductListPage from "./containers/ProductListPage";

export default function Router() {
    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductListPage />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}