import './App.css';
import Name from "./components/Name";
import Information from "./components/Information";
import Buttons from "./components/Buttons";
import ProfileImage from "./components/ProfileImage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='card'>
      <ProfileImage />
      <Name />
      <Buttons />
      <Information />
      <Footer />
    </div>
  );
}

export default App;
