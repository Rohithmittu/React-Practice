// import logo from './logo.svg';
import './App.css';
import ImageSlider from './Components/Image-slider';
import LoadMoreData from './Components/Load-More-data';
// import Accordian from './Components/Accordion';
// import RandomColor from './Components/Random-color';
import StarRating from './Components/star-rating';

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider  url={"https://picsum.photos/v2/list"} page={1} limit={10}/> */}
      <LoadMoreData />
    </div>
  );
}

export default App;
