import React, { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"

import { AuthContext } from '../authcontext/authcontext'

const PrivateElement = ({ children }) => {

    const { currentUser } = useContext(AuthContext)

    let location = useLocation()

    return currentUser ? (
            children
        ) : (
            <Navigate to="/login" state={{ from: location }} />
        )
}

export default PrivateElement