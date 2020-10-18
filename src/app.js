import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import Header from './components/Header'
import SlideShow from  './components/SlideShow'


const ThirdParty = () => {
    return (
        <div>
            <Header /> 
            <SlideShow />
        </div>
    )
}
ReactDOM.render(<ThirdParty /> , document.getElementById('app'))
