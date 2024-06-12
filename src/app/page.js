import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row justify-between items-center p-24 bg-slate-300">
      <div className="flex flex-col">
        <h2 className="font-bold pb-10 lg:text-2xl text-blue-600">facebook</h2>    
        <h1 className="pb-10 lg:text-2xl text-gray-900">Masuk Terbaru</h1>
        <p>Klik foto anda atau tambah akun</p>
        
        <div className="flex flex-col space-y-4 mt-5">
          {/* Photo selection section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
              <img src="https://via.placeholder.com/150" alt="Foto 1" className="w-24 h-24 rounded-full" />
              <p className="mt-2 text-gray-700">User 1</p>
              <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                &times;
              </button>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                </svg>
              </div>
              <p className="mt-2 text-blue-500">Tambahkan Akun</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white w-1/3 justify-between p-6">
        <input className="border border-gray-500 rounded-md h-14 p-2" type="text" placeholder="Email address" />  
        <input className="border border-gray-500 rounded-md h-14 mt-5 p-2" type="password" placeholder="Password" /> 
        <button className="bg-blue-500 text-white font-bold text-lg rounded-md w-full h-14 mt-5">Masuk</button> 
        <a href="https://id-id.facebook.com/login.php/" className="text-blue-500 text-center mt-5">Lupa kata sandi?</a>
        <br className="mt-5"/>
        <div className="border border-gray-300"></div>
        <button className="bg-green-500 text-white font-bold text-lg rounded-md w-full h-14 mt-5">Buat Akun Baru</button>
      </div>
    </main>
  );
}



