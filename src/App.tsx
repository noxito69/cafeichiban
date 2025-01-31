
import './App.css'
import DashboardLayout from './layout/DashboardLayout'
import FooterLayout from './layout/footerLayout'


function App() {


  return (
    <>
      
    <DashboardLayout />

    

    <main className="bg-[#F5F5F5] text-[#333]">
        <section className="hero bg-cover bg-center h-screen" style={{ backgroundImage: "url('src/assets/cafefondo.jpg')" }}>
          <div className="container mx-auto h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white">Bienvenido a Café Ichiban</h1>
              <p className="mt-4 text-xl text-white">"Aroma y sabor en cada rincón, con Ichiban en el corazón."</p>
              <button className="mt-6 px-6 py-3 bg-[#C49A6C] text-white rounded-lg hover:bg-[#B0825C]">Comprar Ahora</button>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Nuestros productos mas famosos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src="src/assets/arabica.png" alt="Producto 1" className="w-full object-cover rounded-t-lg" />
                <h3 className="text-xl font-bold mt-4">Arabica Brasile</h3>
                <p className="mt-2 text-gray-600">Café Arabica Selection Brasile (250 g)</p>
                <button className="mt-4 px-4 py-2 bg-[#C49A6C] text-white rounded-lg hover:bg-[#B0825C]">Comprar</button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src="src/assets/liberica.png" alt="Producto 2" className="w-full object-cover rounded-t-lg" />
                <h3 className="text-xl font-bold mt-4">Arabica Brasile Mineiro</h3>
                <p className="mt-2 text-gray-600">Café Arabica Selection Brasile Mineiro (250 g)</p>
                <button className="mt-4 px-4 py-2 bg-[#C49A6C] text-white rounded-lg hover:bg-[#B0825C]">Comprar</button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src="src/assets/Robusta.png" alt="Producto 3" className="w-full object-cover rounded-t-lg" />
                <h3 className="text-xl font-bold mt-4">Cafe Intenso</h3>
                <p className="mt-2 text-gray-600">Café Intenso Illy (250 g)</p>
                <button className="mt-4 px-4 py-2 bg-[#C49A6C] text-white rounded-lg hover:bg-[#B0825C]">Comprar</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterLayout />
      

    </>


  );
}

export default App
