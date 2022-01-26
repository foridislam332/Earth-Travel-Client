import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import AddBlog from './Pages/Admin/AddBlog/AddBlog';
import AdminPannel from './Pages/Admin/AdminPannel/AdminPannel';
import MakeAdmin from './Pages/Admin/MakeAdmin/MakeAdmin';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/home" element={<Home />} />
                        <Route exact path="/addBlog" element={<AddBlog />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/register" element={<Register />} />
                        <Route exact path="/admin" element={<AdminPannel />} />
                        <Route exact path="/makeAdmin" element={<MakeAdmin />} />
                    </Routes>
                    <Footer></Footer>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
