
import '../index.css'
import FooterLayout from '../layout/footerLayout'
import DashboardLayout from '../layout/DashboardLayout'

function CoffeTypes() {


    return (
        <>

            <DashboardLayout />


            <div className="container mx-auto p-8">
                <h1 className="text-2xl font-bold mb-4">Coffee Types</h1>
            </div>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src="src/assets/arb.png" alt="Coffee Type" className="w-full h-68 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">Cafe Arabica</h2>
                            <p className="text-gray-700">La variedad arábica es la variedad de café mejor valorada en todo el mundo. Los beneficios del café arábica, propiedades y variedades están en el centro del debate entre los apasionados del café. Vamos a descubrir algunas de las características que lo hacen tan apreciado.
                            Otro de los beneficios del café arábica es que activa el sistema digestivo y estimula el metabolismo, es decir, acelera el modo en el que nuestro organismo produce y administra la energía necesaria para su correcto funcionamiento.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src="src/assets/lib.png" alt="Coffee Type" className="w-full h-68 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">Cafe Iberico</h2>
                            <p className="text-gray-700">Coffea liberica, comúnmente conocida como el café de Liberia, es una especie de planta con flores de la familia Rubiaceae, una de las especies de la que se produce el café. La planta es nativa de África occidental y central desde Liberia, de ahí su nombre, hasta Uganda y Angola.
                            El café Liberica también tiene un sabor ahumado, amaderado y vegetal muy marcado, similar al del café Robusta, que puede resultar desagradable. Este sabor se intensifica con los tuestes más oscuros.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src="src/assets/rob.png" alt="Coffee Type" className="w-full h-68 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">Coffee Type Title</h2>
                            <p className="text-gray-700">originaria del África Occidental. Crece sobre todo en África y en Brasil, donde se conoce con el nombre de Conillon. También se halla en el sureste asiático, donde los colonialistas franceses introdujeron el cultivo en Vietnam a fines del siglo XIX, y de allí pasó a Brasil. Es más fácil de cuidar que Coffea arabica y más barato de producir teniendo un precio de mercado internacional por debajo del valor del dólar. Mientras los granos de arabica son considerados superiores, robusta suele limitarse a grados menores de baja calidad.</p>
                        </div>
                    </div>
                    
                </div>

                
            </div>


            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src="src/assets/excelsa.png" alt="Coffee Type" className="w-full h-68 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">Cafe Excelsa</h2>
                            <p className="text-gray-700">El café en grano Excelsa es una variedad de café menos común, perteneciente a la especie Coffea excelsa (o Coffea liberica var. dewevrei). Se cultiva principalmente en el sudeste asiático y representa un pequeño porcentaje de la producción mundial de café.

Se caracteriza por su sabor único, con notas afrutadas y ácidas, combinadas con matices tostados y especiados, lo que le da un perfil complejo y equilibrado. Su cuerpo es medio y su acidez vibrante, lo que lo hace ideal para mezclas, aportando profundidad y carácter a otros cafés.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src="src/assets/Maragogipe.png" alt="Coffee Type" className="w-full h-68 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">Cafe Maragogipe </h2>
                            <p className="text-gray-700">El café en grano Maragogipe (Coffea arabica var. maragogipe), también conocido como "grano elefante", es una variedad del café arábica caracterizada por sus granos de gran tamaño. Originario de Brasil, se cultiva en varios países de América Latina.

Su perfil de sabor es suave y delicado, con una acidez brillante y un cuerpo ligero. Presenta notas dulces y afrutadas, a menudo con matices florales y achocolatados. Debido a su baja producción y características únicas, es muy apreciado en cafés de especialidad.

                            </p>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src="src/assets/Bourbon.png" alt="Coffee Type" className="w-full h-68 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">Cafe Bourbon</h2>
                            <p className="text-gray-700"> El café en grano Bourbon (Coffea arabica var. bourbon) es una de las variedades más apreciadas del café arábica, conocida por su sabor dulce y equilibrado. Originario de la isla de Bourbon (actual Reunión), se cultiva principalmente en América Latina y África.

Su perfil de sabor destaca por notas achocolatadas, frutales y ligeramente especiadas, con una acidez brillante y un cuerpo medio a completo. Es una variedad utilizada en cafés de especialidad debido a su complejidad y calidad en taza.</p>
                        </div>
                    </div>
                    
                </div>

                
            </div>
            




            <FooterLayout />


        </>
    )
}

export default CoffeTypes