import React from 'react'
import reactDom from 'react-dom'
import MyRouter from './router/MyRouter'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
    return ( 
              <MyRouter/>
    )
}
reactDom.render( <App/> , document.getElementById('root') )
