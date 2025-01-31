
import '../index.css'
import FooterLayout from '../layout/footerLayout'
import DashboardLayout from '../layout/DashboardLayout'

function AboutUs() {


    return (
        <>

            <DashboardLayout />


                <div className="my-8"></div>
            <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">About Us</h1>
        <div className="flex flex-col md:flex-row items-start mb-8">
          <div className="md:w-1/2 p-4">
            <p className="text-lg mb-4 text-gray-700">
            Bienvenido a Café Ichiban! 

Aquí comienza tu viaje hacia el mejor café en grano. Nos apasiona llevar hasta tu taza la más alta calidad, combinando tradición, sabor y frescura en cada sorbo.

Explora nuestra selección y descubre el café perfecto para ti. Porque en Café Ichiban, no solo vendemos café, ¡compartimos momentos inolvidables!

Siéntete como en casa y disfruta la experiencia. ¡Gracias por elegirnos! 
            </p>
            <p className="text-lg mb-4 text-gray-700">
            En el corazón de las montañas, donde la neblina abraza los cafetales al amanecer, nació Café Ichiban. Nuestra historia comienza hace más de 20 años, cuando un grupo de apasionados caficultores decidió perseguir un sueño: cultivar los mejores granos de café y compartir su esencia con el mundo.

Inspirados en la palabra japonesa "Ichiban", que significa "el mejor" o "el número uno", nos propusimos crear un café que no solo deleitara los sentidos, sino que también transmitiera la dedicación y el amor por cada grano cosechado.

Desde entonces, hemos trabajado con productores locales que siguen métodos tradicionales y sostenibles, asegurando la calidad y el respeto por la tierra. Cada lote de nuestro café es seleccionado a mano, tostado con precisión y enviado directamente a tu taza, garantizando frescura y un sabor inigualable.

Hoy, Café Ichiban es más que una marca; es una comunidad de amantes del café que buscan autenticidad, excelencia y un momento de felicidad en cada sorbo.

Bienvenido a nuestra historia. Bienvenido a Café Ichiban. 
            </p>
            <p className="text-lg mb-4 text-gray-700">
              Gracias por elegir cafe Ichiban.
            </p>
          </div>
          <div className="md:w-1/2 p-4">
            <div className="bg-white p-2 rounded-lg shadow-lg mb-5">
              <img src="src/assets/grano1.png" alt="Coffee Beans" className="w-full h-48 object-cover rounded-t-lg" />
            </div>
            <div className="bg-white p-2 rounded-lg shadow-lg mb-4">
              <img src="src/assets/grano2.png" alt="Coffee Cup" className="w-full h-48 object-cover rounded-t-lg" />
            </div>
            <div className="bg-white p-2 rounded-lg shadow-lg mb-4">
              <img src="src/assets/grano3.png" alt="Coffee Shop" className="w-full h-48 object-cover rounded-t-lg" />
            </div>
          </div>
        </div>
        <div className="bg-gray-100 py-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Mision y Vision</h2>
          <p className="text-lg mb-4 text-center text-gray-700">
          Nuestra Misión
En Café Ichiban, nos dedicamos a ofrecer café en grano de la más alta calidad, seleccionando cuidadosamente cada cosecha para brindar una experiencia única en cada taza. Trabajamos de la mano con productores comprometidos con la sostenibilidad y la excelencia, asegurando que cada grano refleje el esfuerzo, la pasión y la tradición cafetera. Nuestro propósito es llevar a cada cliente un café excepcional, fresco y lleno de sabor, creando momentos inolvidables con cada sorbo.

Nuestra Visión
Ser reconocidos como la marca de café en grano preferida por los amantes del buen café, destacándonos por nuestra calidad, compromiso con la sostenibilidad y pasión por la excelencia. Buscamos expandir nuestra comunidad de café, promoviendo el consumo consciente y el respeto por los productores, mientras innovamos constantemente para ofrecer nuevas experiencias que enamoren a cada paladar.
          </p>
        </div>
      </div>
           

            <FooterLayout />
           
            


        </>
    )
}

export default AboutUs