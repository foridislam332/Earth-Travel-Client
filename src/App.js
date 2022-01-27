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
import AdminRoute from './Pages/AdminRoute/AdminRoute';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import SingleBlog from './Pages/SingleBlog/SingleBlog';
import AllBlogs from './Pages/AllBlogs/AllBlogs';
import ManageBlogs from './Pages/Admin/ManageBlogs/ManageBlogs';
import UpdateBlog from './Pages/Admin/UpdateBlog/UpdateBlog';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/blogs" element={<AllBlogs />} />
                        <Route
                            path="/singleBlog/:blogId"
                            element={<PrivateRoute><SingleBlog /></PrivateRoute>}
                        />
                        <Route
                            path="/createBlog"
                            element={<PrivateRoute><AddBlog /></PrivateRoute>}
                        />

                        <Route
                            path="/admin"
                            element={<AdminRoute><AdminPannel /></AdminRoute>}
                        />

                        <Route
                            path="/makeAdmin"
                            element={<AdminRoute><MakeAdmin /></AdminRoute>}
                        />
                        <Route
                            path="/manageBlog"
                            element={<AdminRoute><ManageBlogs /></AdminRoute>}
                        />

                        <Route
                            path="/updateBlog/:updateId"
                            element={<AdminRoute><UpdateBlog /></AdminRoute>}
                        />
                    </Routes>
                    <Footer></Footer>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
