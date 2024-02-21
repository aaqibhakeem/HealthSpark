import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/signup.js';
import Login from './components/login.js';
import Requests from './components/requests.js';
import Nomatch from './components/nomatch.js';
import AudioPage from './components/audio.js';
import VideoPage from './components/video.js';
import ChatPage from './components/chat.js';
import Home from './components/home.js';
import AddRecord from './components/addrecord.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>

          <Route path='/signup' element={<Signup/>} />

          <Route path='/login' element={<Login/>} />
          
          <Route path='/requests' element={<Requests/>} />

          <Route path='*' element={<Nomatch />} />

          <Route path='/audio' element={<AudioPage />} />

          <Route path='/video' element={<VideoPage/>} />

          <Route path='/chat' element={<ChatPage/>} />

          <Route path='/add' element={<AddRecord />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
