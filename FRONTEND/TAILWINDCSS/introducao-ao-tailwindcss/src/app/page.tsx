const Page = () => {
  return (
    <div className="w-screen h-screen p-5">
      <div className="bg-green-100 border-l-4 border-green-700 p-2 text-green-800 text-center">
        Você não tem mais acesso. 
        <a href="" className="underline ml-1">Faça o upgrade agora.</a>
      </div>

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
    </div>
  );
}

export default Page;