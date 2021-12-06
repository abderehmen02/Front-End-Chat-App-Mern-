import React from 'react'
import reactDom from 'react-dom'
import MyApp from './MyApp/index'
function App() {
    return (
        <div>
<MyApp/>
        </div>
// https://drive.google.com/file/d/1IVmhPR7q5OmbNP-I6vVcAvb6t-N7kmGz/view
    )
}
reactDom.render( <App/> , document.getElementById('root') )
