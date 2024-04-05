// import logo from './logo.svg';
import './App.css';
import GithubProfileFinder from './Components/Github-Finder';
import LightDarkMode from './Components/Light-Dark-Mode';
import QRCodeGenerator from './Components/Qr-code';
import SearchAutocomplete from './Components/Search-autocomplete';
import TicTacToe from './Components/Tic-Tac-Toe';
// import ImageSlider from './Components/Image-slider';
// import LoadMoreData from './Components/Load-More-data';
import TreeView from './Components/nested-menu';
// import Accordian from './Components/Accordion';
// import RandomColor from './Components/Random-color';
// import StarRating from './Components/star-rating';
import menus from './Components/nested-menu/data'

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider  url={"https://picsum.photos/v2/list"} page={1} limit={10}/> */}
      {/* <LoadMoreData /> */}
      {/* <TreeView  menus={menus}/> */}
      {/* <QRCodeGenerator /> */}
      {/* <LightDarkMode /> */}
      {/* <GithubProfileFinder /> */}
      {/* <SearchAutocomplete /> */}
      <TicTacToe />
    </div>
  );
}

export default App;
