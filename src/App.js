import {Routes, Route} from 'react-router-dom'
import {Home} from './components/Home'
import About from './components/About'


function App() {
  return (
 <Routes>              
  <Route path='/' element={<Home/>}></Route>
  <Route path='about' element={<About/>}></Route>                    
 </Routes>           
   );
  }
  
  //Create the components that need to be rendered at different url
 // We created the home and about components
 // configure the routes using the routes and route components from react router

export default App;

