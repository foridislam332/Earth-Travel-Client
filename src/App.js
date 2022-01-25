import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Router>
                <Navigation></Navigation>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes>
                <Footer></Footer>
            </Router>
        </div>
    );
}

export default App;
