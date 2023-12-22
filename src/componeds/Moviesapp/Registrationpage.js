import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import "../Moviesapp/Homepage/Homepage.module.css";
const Registartion = () => {
    //  http://localhost:8000/posts

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [repeatpassword, setrepeatpassword] = useState("")


    const navigate = useNavigate();
    const obj = { name, email, password, repeatpassword }
    const handlesubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8000/posts", obj)
            .then(() => {
                navigate('/login')
            })
            .catch((error) => console.log(error))
    }


    return (

        <section onSubmit={handlesubmit} style={{ marginLeft: 100, marginRight: 200 }}>
            <div class="container "  >
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-lg-12 col-xl-11">
                        <div class="card text-black" style={{ borderradius: "25px" }}>
                            <div class="card-body p-md-5">
                                <div class="row justify-content-center">
                                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                        <form class="mx-1 mx-md-4">

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="text" id="form3Example1c" class="form-control" value={name} onChange={(event) => setname(event.target.value)} />
                                                    <label class="form-label" for="form3Example1c">Your Name</label>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="email" id="form3Example3c" class="form-control" value={email} onChange={(event) => setemail(event.target.value)} />
                                                    <label class="form-label" for="form3Example3c">Your Email</label>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4c" class="form-control" value={password} onChange={(event) => setpassword(event.target.value)} />
                                                    <label class="form-label" for="form3Example4c">Password</label>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4cd" class="form-control" value={repeatpassword} onChange={(event) => setrepeatpassword(event.target.value)} />
                                                    <label class="form-label" for="form3Example4cd">Repeat your password</label>
                                                </div>
                                            </div>


                                            <div class="d-flex justify-content-center mx-4 mb-3">
                                                <p>Already registered? <Link to="/login">Login</Link></p>
                                            </div>

                                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" class="btn btn-primary btn-lg" >Register</button>
                                            </div>


                                        </form>

                                    </div>
                                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/a5/4e/c0/a54ec0ae-3cbe-b0fb-a752-b433a4fd00d5/source/512x512bb.jpg"
                                            class="img-fluid" alt="text" width={400} />

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>



    )
}
export default Registartion;