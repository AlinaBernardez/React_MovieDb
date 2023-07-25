import './App.css';
import { MyRoutes } from './routers/routes';


function App() {
  return (
    <div className='app-container'>
      <header className='header'>
        <h1 className='title'>🎬<a className='title-link' href='/'> Movies </a>🎬</h1>
      </header>
      <MyRoutes/>
    </div>
  )
}

export default App;
