import React from 'react'
import { Navigate, Outlet, Route } from 'react-router-dom'

type Props = {
  redirect: string
  authed: boolean
}

export default function AuthRoute(props: Props) {
  return props.authed ? <Outlet /> : <Navigate to={props.redirect} />
}
