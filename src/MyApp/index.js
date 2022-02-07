import React , { useEffect , useRef , useState } from 'react'
import Home from './home'
import Protfolio from './Protfolio'
import Projects from './projects'
import ContectMe from './contectMe'
import DropDown from './Navigation'
import './index.css'
import {InView, useInView} from 'react-intersection-observer';
export const  MyContext = React.createContext()
function App() {
const [homeRef , isViewHome ] = useInView()
const HomeReference = useRef()
const ProjectsReference = useRef() 
const PortfolioReference = useRef() 
const ContactMeReference = useRef()
const [ContactMeRef , isViewContact ] = useInView()
const [ProtfolioRef , isViewProtfolio ] = useInView()
const [ProjectsRef , isViewProject ] = useInView()
const [InViewComponent, setInViewComponent] = useState('Home')
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

if(isViewHome){
  setInViewComponent('Home')
}
if(isViewProtfolio){
  setInViewComponent('portfolio')
}
if(isViewProject){
  setInViewComponent('Projects')
}
if(isViewContact){
    setInViewComponent('ContactMe')
}
} , [isViewContact , isViewHome , isViewProject , isViewProtfolio] )

// console.log(HomeReference.current.scrollIntoView) }
// useEffect(() => {
//     console.log(window.scrollY);
//     if(window.scrollY === 0){
//         taggleComponent('home' , true)
//     }
// }, [window.scrollY])
return (    
      <div className="myApp">
      <MyContext.Provider value={ { HomeReference ,  ProjectsReference , PortfolioReference , ContactMeReference }} >
<DropDown component={InViewComponent} />
    
{/* <InView onChange={(inview)=>{taggleComponent('home', inview)}} > */}
     <div ref={   HomeReference } ><div ref={homeRef} >    <Home  /> </div> </div>
        {/* </InView> */}
{/* <InView onChange={(inview)=>{taggleComponent('Protfolio' , inview )}} >      */}
 <div ref={   PortfolioReference } > <div ref={ProtfolioRef} >  <Protfolio /> </div> </div> 
{/* // </InView> */}
  {/* <InView onChange={(inview)=>{taggleComponent('Progects' , inview )}} > */}
<div ref={ProjectsRef , ProjectsReference} > <div ref={ProjectsRef} >    <Projects/> </div> </div>
      {/* </InView> */}
 {/* <InView onChange={(inview)=>{taggleComponent('ContactMe' , inview )}} >     */}
  <div ref={ContactMeRef , ContactMeReference } > <div ref={ContactMeRef} > <ContectMe/> </div> </div>
 {/* </InView>  */}
    </MyContext.Provider>
        </div>
    )
}
export default App
