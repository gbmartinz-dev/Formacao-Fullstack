const Page = () => {
  return (

    // Desafio alert
    <div className="w-screen h-screen p-5 bg-gray-900">
      <div className="rounded-md bg-red-100 border-l-4 border-red-700 p-2 text-red-800 text-center">
        Você não tem mais acesso. 
        <a href="" className="underline ml-1">Faça o upgrade agora.</a>
      </div>


      {/* Cartão invite */}
      <div className="my-3 w-96 rounded-md border border-gray-500 bg-white p-4">
        <div>
          <div className="inline-block">
            <img className="w-14 h-14 rounded-full" src="https://avatars.githubusercontent.com/u/173977632?v=4" alt="Foto de perfil do usuário" />
          </div>
          <div className="inline-block ml-5">
            <div className="text-blue-700 font-bold pb-1">Gabriel Martins</div>
            <div className="text-gray-400 ">Te enviou um convite!</div>
          </div>
        </div>
        <div className="mt-4">
          <button className="rounded-md px-5 py-2 bg-blue-800 text-white">Aceitar</button>
          <button className="ml-3 rounded-md px-5 py-2 border border-blue-800 text-blue-800">Negar</button>
        </div>
      </div>

      <div className="mt-5">
        <h1 className="text-3xl font-bold text-center">Sistema de Login</h1>
        
        <div className="my-6">
          <label className="block text-lg mb-2" htmlFor="emailField">Endereço de E-mail</label>
          <input className="w-full p-2 rounded-md text-lg bg-gray-800 border border-gray-600 outline-blue-500" type="email" id="emailField" />
        </div>

        <div className="my-6">
          <label className="block text-lg mb-2" htmlFor="passwordField">Senha</label>
          <input className="w-full p-2 rounded-md text-lg bg-gray-800 border border-gray-600 outline-blue-500" type="email" id="passwordField" />
        </div>

        <div className="my-6">
          <button className="w-full p-2 rounded-md text-lg font-bold border-none text-white bg-blue-800">Entrar</button>
        </div>

      </div>
      <div className="text-center text-gray-400">
        Não é mebro? <a className="text-white font-bold underline" href="">Faça seu cadastro agora</a>
      </div>
    </div>
  );
}

export default Page;