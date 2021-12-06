import React , { useEffect , useState } from 'react'
import Home from './home'
import Protfolio from './Protfolio'
import Projects from './projects'
import ContectMe from './contectMe'
import DropDown from './dropDown'
import './index.css'
import {InView, useInView} from 'react-intersection-observer';
function App() {
const [homeRef , isViewHome ] = useInView()
const [ContactMeRef , isViewContact ] = useInView()
const [ProtfolioRef , isViewProtfolio ] = useInView()
const [ProjectsRef , isViewProject ] = useInView()
const [InViewComponent, setInViewComponent] = useState('home')
const [ChangebleComponent, setChangebleComponent] = useState(false)
// const taggleComponent = (component ,  inview)=>{
//     console.log( 'component '  + component , inview , 'inViewComponent' + InViewComponent  ) ;
//  if(component === 'home' && inview === true ){
//      setInViewComponent('home')
//      return
//  }
 
//     if   (InViewComponent === component ){
//         return 
//     }

//     if(inview){
// setInViewComponent(component) 
//     }
// // if(component === InViewComponent && inview === false) {
// // setChangebleComponent(true) }
// // else if( ChangebleComponent && component !== InViewComponent && inview ){
// // setInViewComponent(component)  
// // }
// }
useEffect(()=>{
if(isViewContact){
    setInViewComponent('ContactMe')
}
} , [isViewContact , isViewHome , isViewProject , isViewProtfolio] )
// useEffect(() => {
//     console.log(window.scrollY);
//     if(window.scrollY === 0){
//         taggleComponent('home' , true)
//     }
// }, [window.scrollY])
return (        <div className="myApp">
{/* <InView onChange={(inview)=>{taggleComponent('home', inview)}} > */}
     <div ref={homeRef} >   <Home  /> </div>
        {/* </InView> */}
{/* <InView onChange={(inview)=>{taggleComponent('Protfolio' , inview )}} >      */}
 <div ref={ProtfolioRef} >  <Protfolio/></div> 
{/* // </InView> */}
  {/* <InView onChange={(inview)=>{taggleComponent('Progects' , inview )}} > */}
<div ref={ProjectsRef} >     <Projects/></div>
      {/* </InView> */}
 {/* <InView onChange={(inview)=>{taggleComponent('ContactMe' , inview )}} >     */}
  <div ref={ContactMeRef} > <ContectMe/></div>
 {/* </InView>  */}
    <DropDown component={InViewComponent} />
    
        </div>
    )
}
export default App
