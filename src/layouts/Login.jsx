import { useEffect, useState } from "react";
import image from "../assets/loginpic.png"
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";



export default function Login() {
    const [login, setLogin] = useState({
        username: '',
        password: '',
        errorUser: '',
        errorPass: '',
    });

    const [register, setRegister] = useState({
        username: '',
        email: '',
        password: '',
        confirmPass: '',
        errorUser: '',
        errorEmail: '',
        errorPassword:'',
        errorConfirm: '',
        });

    const [error, setError] = useState({
        login: '',
        register: '',
    })

    const [choose, setChoose] = useState(false);

    const loginValidate = (e) =>{
        e.preventDefault();
                if(login.username === '' && login.password === ''){
            setError(state => ({...state, login: 'Username and Password are empty.'}));
        }else{
            setError(state => ({...state, login: ''}));
        }

        if(login.username === ''){
            setLogin(state => ({...state, errorUser: 'Username is Empty.'}));
        }else{
            setLogin(state => ({...state, errorUser: ''}));
        }

        if(login.password === ''){
            setLogin(state => ({...state, errorPass: 'Password is Empty.'}));
        }else{
            setLogin(state => ({...state, errorPass: ''}));
        }
    };

    const registerValidate = (e) =>{
        e.preventDefault();
        
        if(register.username === ''){
            setRegister(state => ({...state, errorUser: 'Username must not be empty.'}));
        }else{
            setRegister(state => ({...state, errorUser: ''}));
        }

        if(register.password === ''){
            setRegister(state => ({...state, errorPass: 'Password must not be empty.'}));
        }else{
            setRegister(state => ({...state, errorPass: ''}));
        }

        if(register.email === ''){
            setRegister(state => ({...state, errorEmail: 'Email must not be empty.'}));
        }else{
            setRegister(state => ({...state, errorEmail: ''}));
        }

        if(register.confirmPass !== register.password){
            setRegister(state => ({...state, errorConfirm: 'Password does not match.'}));
        }else{
            setRegister(state => ({...state, errorConfirm: ''}));
        }

        if(
            register.email !== '' && register.password && register.email && register.confirmPass
        ){
        setChoose(false);
        }
       
    }

    useEffect(() => {
        if(choose === true){
            setLogin(state => ({...state, username: '', password: '', errorUser: '', errorPass: ''}));
        }

        if(choose === false){
          setRegister(state => ({...state, username: '', password: '', email: '', confirmPass: '',}));
        }
    }) 

   
 return(

    <div className="fixed inset-0 flex justify-center items-center">

        <form className="p-1 flex justify-center items-center border border-gray-200 h-[30rem]">
            
            <div>
                <img src={image} alt="" />
            </div>


            <div className={`${choose ? 'hidden' : ''} flex flex-col items-center justify-evenly w-[25rem] h-full border-l`}>

                <div>
                    <h1 className="text-2xl font-medium">Login</h1>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center p-1 rounded-md border border-gray-400">
                        <FaUser className="mr-1" />
                        <input type="text" 
                        placeholder="Username"  
                        className="outline-none"
                        value={login.username}
                        onChange={(e) => setLogin(state => ({...state, username: e.target.value}) )}
                        />
                        
                    </div>

                        <span className="text-red-500 font-medium">{login.errorUser}</span>

                    </div>

               
                    <div className="flex flex-col items-center">
                        <div className="flex items-center p-1 rounded-md border border-gray-400">
                            <FaLock className="mr-1" />
                            <input 
                            type="password" 
                            placeholder="Password"  
                            className="outline-none"
                            value={login.password}
                            onChange={(e) => setLogin(state => ({...state, password: e.target.value}) )}
                            />
                            
                        </div>

                            <span className="text-red-500 font-medium h-[0.25rem]">{login.errorPass}</span>

                    </div>


                <button className="bg-blue-500 p-[.75rem] px-[4rem] rounded-lg text-white font-medium"
                onClick={loginValidate}
                >
                    Login
                </button>

                <button className="hover:text-blue-500"
                onClick={(e) => {e.preventDefault();setChoose(true)}}
                >Create an account</button>
            </div>

            <div className={`${choose ? '' : 'hidden'} flex flex-col items-center justify-evenly w-[25rem] h-full border-l`}>

                <div>
                    <h1 className="text-2xl font-medium">Register</h1>
                </div>

                <div className="flex flex-col items-center">
                        <div className="flex items-center p-1 rounded-md border border-gray-400">
                            <FaUser className="mr-1" />
                            <input 
                            type="text" 
                            placeholder="Username"  
                            className="outline-none"
                            value={register.username}
                            onChange={(e) => setRegister(state => ({...state, username: e.target.value}) )}
                            />
                            
                        </div>

                            <span className="text-red-500 font-medium h-[0.25rem]">{register.errorUser}</span>

                    </div>


                
                    <div className="flex flex-col items-center">
                        <div className="flex items-center p-1 rounded-md border border-gray-400">
                            <MdOutlineMailOutline className="mr-1" />
                            <input 
                            type="text" 
                            placeholder="Email"  
                            className="outline-none"
                            value={register.email}
                            onChange={(e) => setRegister(state => ({...state, email: e.target.value}) )}
                            />
                            
                        </div>

                            <span className="text-red-500 font-medium h-[0.25rem]">{register.errorEmail}</span>

                    </div>
                    
                    <div className="flex flex-col items-center">
                        <div className="flex items-center p-1 rounded-md border border-gray-400">
                            <FaLock className="mr-1" />
                            <input 
                            type="password" 
                            placeholder="Password"  
                            className="outline-none"
                            value={register.password}
                            onChange={(e) => setRegister(state => ({...state, password: e.target.value}) )}
                            />
                            
                        </div>

                            <span className="text-red-500 font-medium h-[0.25rem]">{register.errorPass}</span>

                    </div>

                    <div className="flex flex-col items-center">
                        <div className="flex items-center p-1 rounded-md border border-gray-400">
                            <FaLock className="mr-1" />
                            <input 
                            type="password" 
                            placeholder="Confirm Password"  
                            className="outline-none"
                            value={register.confirmPass}
                            onChange={(e) => setRegister(state => ({...state, confirmPass: e.target.value}) )}
                            />
                            
                        </div>

                            <span className="text-red-500 font-medium h-[0.25rem]">{register.errorConfirm}</span>

                    </div>

                <button 
                className="bg-blue-500 p-[.75rem] px-[4rem] rounded-lg text-white font-medium"
                onClick={registerValidate}
                >
                    Register
                </button>
            </div>
        </form>

    </div>

 )
}