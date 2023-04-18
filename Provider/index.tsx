import { Provider } from "react-redux";
import { store } from "../utils/redux/store";
import React, { ReactNode } from 'react'


const Providers = ({children} : {children: ReactNode}) => {
  return (
    <Provider store={store}>
        <main>{children}</main>
    </Provider>
  )
}

export default Providers
