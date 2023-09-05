import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import News1 from './components/News1';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

// react class base components
export default function App() {
  const apiKey= process.env.REACT_APP_NEWS_API;    //way of using environment variables
  const [progress, setProgress] = useState(0);      //state 
 
  

  // setProgress = (progress) => {
  //   setState({
  //     progress: progress,
  //   })
  // }

    return (
      <BrowserRouter>
        <Navbar/>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={(progress)}
        // onLoaderFinished={() => setProgress(0)}
        />
        <div className="">
          <Routes>
            <Route exact path="/" element={<News1 setProgress={setProgress} apiKey={apiKey} key="general" pageSize={6} country="in" category="general" />}></Route>
            <Route exact path="/business" element={<News1 setProgress={setProgress} apiKey={apiKey} key="business" pageSize={6} country="in" category="business" />}></Route>
            <Route exact path="/entertaintment" element={<News1 setProgress={setProgress} apiKey={apiKey} key="entertaintment" pageSize={6} country="in" category="entertainment" />}></Route>
            <Route exact path="/health" element={<News1 setProgress={setProgress} apiKey={apiKey} key="health" pageSize={6} country="in" category="health" />}></Route>
            <Route exact path="/science" element={<News1 setProgress={setProgress} apiKey={apiKey} key="science" pageSize={6} country="in" category="science" />}></Route>
            <Route exact path="/sports" element={<News1 setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={6} country="in" category="sports" />}></Route>
            <Route exact path="/technology" element={<News1 setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={6} country="in" category="technology" />}></Route>
          </Routes>


        </div>
      </BrowserRouter>
    )

}




