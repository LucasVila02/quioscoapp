
import Producto from '../components/Producto'
import Layout from '../layout/Layout'
import useQuiosco from '../hooks/useQuiosco'



export default function Home() {
  // NO SE PUEDE CONSULTAR UNA BD EN EL CLIENTE CON NEXT JS ---- SOLO EN SERVIDOR
  // useEffect(  () => {
  //   const consultarDB = async () =>{
  //     const primsa = new PrismaClient()

  //     const categorias = await primsa.categoria.findMany()
  //     console.log(categorias)
  //   }
  //   consultarDB()
  // },[])
  const {categoriaActual} = useQuiosco()
 
  return (
    <Layout pagina= {`Menú ${categoriaActual?.nombre}`}>
      <h1 className='text-4xl font-black'>{categoriaActual?.nombre}</h1>
      <p className='my-10 text-2xl'>
        Elige y personaliza tu pedido a continuación
      </p>
      <div className='grid gap-4  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {categoriaActual?.productos?.map( producto =>(
          <Producto
            key={producto.id}
            producto={producto}
          />

          ))}
      </div>
    </Layout>
  )
}


