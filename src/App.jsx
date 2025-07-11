import Navbar from './components/navbar/navbar';
import Intro from './components/intro/intro';
import Service from './components/our-service/service';
import Frame from './components/darkframe/frame';
import Brand  from './components/brand/brand';




function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro />
     <Service/>
     <Frame/>
     <Brand/>
     
    </div>
  );
}

export default App;
