import React from 'react'
import Header from "./Header";
import Footer from './Footer';


/**
 *  function App is a top-level API ReactJS component.
 * @returns Header component and Footer component
 */

const App = () => {
  return (
    <div>
        <div className="appstyle">
        <Header/>
        <Footer/>
        </div>
    </div>
  )
}

export default App

