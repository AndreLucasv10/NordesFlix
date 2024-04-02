import { useEffect, useState } from 'react'
import '/src/assets/login.css'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [dadosFormulario1, setDadosFormulario1] = useState('')
  const [dadosFormulario2, setDadosFormulario2] = useState('')
  const [tokenRequest, settokenRequest] = useState('')
  const navigate = useNavigate()


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      
    }
  };

  async function RequestToken(){

     try{
       let  tokenRequest = await fetch ('https://api.themoviedb.org/3/authentication/token/new?api_key=023be51ae786b61c9ece602c9e74de48', options)
       let requestToken = await tokenRequest.json()
       settokenRequest(requestToken.request_token)
       
      }
      catch(erro){
        console.log(erro)
      }
    }
    useEffect(() => {
      RequestToken()
    },[])
  async function validateToken(e){

    const options2 = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        
      },
      body: JSON.stringify({
        username: dadosFormulario1,
        password: dadosFormulario2,
        request_token: tokenRequest,
      }),
    
    };
    e.preventDefault()
    try{
      const autorizetoken = await fetch(`https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=023be51ae786b61c9ece602c9e74de48&request_token=${tokenRequest}`, options2);
      if (autorizetoken.ok) {
        const data = await autorizetoken.json();
        console.log(data);
        navigate('/Home')
        
      } else {
        console.error('Erro na solicitação:', autorizetoken.status);
      }
    }
    catch(erro){
      console.log(erro)
    }
  }
  
  return (
    <div className='login'>
      <div className='container-login'>
      <div className='login-titulo'><h1>NordesFlix</h1></div>
    <form className='form' onSubmit={validateToken}>
        <p>Usuario</p>
        <input type="text" value={dadosFormulario1} placeholder='Digite seu usuario' onChange={(e) => setDadosFormulario1(e.target.value)} />
        <p>senha</p>
        <input type="text" value={dadosFormulario2} placeholder='Digite sua senha'  onChange={(e) => setDadosFormulario2(e.target.value)} />
        <button  type='submit'>Login</button>
    </form>
      </div>
    </div>
  )
}

export default Login