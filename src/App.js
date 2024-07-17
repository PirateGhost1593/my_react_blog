import Header from './Header.js';
import Footer from './Footer.js';
import Nav from './Nav.js';
import Home from './Home.js';
import NewPost from './NewPost.js';
import PostPage from './PostPage.js';
import About from './About.js';
import Error from './Error.js';
import EditPost from './EditPost.js';
import {Route, Routes} from 'react-router-dom';
import { DataProvider } from './context/DataContext.js';

function App() {

  return (
    <div className="App">
      <Header title="React JS Blog"/>

      <DataProvider>
        <Nav />
          <Routes>
            <Route exact path="/" element={<Home />}/>
        
            <Route exact path="/post" element={<NewPost />}/>

            <Route exact path="/edit/:id" element={<EditPost />}/>   
        
            <Route path="/post/:id" element={<PostPage />}/>
            
            <Route path="/about" element={<About/>}/>
      
            <Route path="*" element={<Error/>}/>
          </Routes>
      </DataProvider>

      <Footer/>
    
    </div>
  );
}

export default App;
