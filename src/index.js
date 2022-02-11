import React from 'react'
import reactDom from 'react-dom'
import MyRouter from './router/MyRouter'
function App() {
    return (
        <div>
            <MyRouter/>
        </div>
    )
}
reactDom.render( <App/> , document.getElementById('root') )
