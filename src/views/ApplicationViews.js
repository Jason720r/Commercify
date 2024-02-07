import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { ProductContainer } from "./ProductView.js"
import { Navigate } from "react-router-dom"


export const ApplicationViews = () => {
    return <>
        <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
            <Route path="/products" element={<ProductContainer />} />
            <Route element={<Authorized />}>
                {/* Add Routes here */}
            </Route>
        </Routes>
    </>
}
