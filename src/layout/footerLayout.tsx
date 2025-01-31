
import '../index.css'

function footerLayout() {


    return (
        <>




            <footer className="bg-[#4B2E2E] text-[#E8D8C4] py-8 mt-20">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h2 className="text-3xl font-semibold">Contáctanos</h2>
                            <p className="mt-2">123 Calle Falsa, Ciudad Imaginaria, País de Nunca Jamás</p>
                            <p className="mt-1">Teléfono: (123) 456-7890</p>
                            <p className="mt-1">Email: contacto@cafeichiban.com</p>
                        </div>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <a href="#" className="text-[#E8D8C4] hover:text-[#C49A6C]">Facebook</a>
                            <a href="#" className="text-[#E8D8C4] hover:text-[#C49A6C]">Twitter</a>
                            <a href="#" className="text-[#E8D8C4] hover:text-[#C49A6C]">Instagram</a>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}

export default footerLayout