import logo from './logo.svg';
import './App.css';
// JSX CODE HTML INSIDE js=== 
// component -> Function that return JSX
import MobileOS from './components/MobileOS';
import { MobileOSHeading } from './components/MobileOS';
import {MobilemfgHeading,MobilemfgList} from './components/Mobilemfg'
function App() {
  return (
    <div>
    <MobileOSHeading></MobileOSHeading>
      <MobileOS></MobileOS>
      <MobilemfgHeading></MobilemfgHeading>
      <MobilemfgList></MobilemfgList>
    </div>
  );
}

export default App;
