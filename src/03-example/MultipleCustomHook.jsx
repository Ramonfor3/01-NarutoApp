import { useCounter } from '../hooks/useCounter'
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHook = () => {
    
    const {counter, increment} = useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://naruto-api.fly.dev/api/v1/characters/${counter}`)
    const {images, name, about, info} = !!data && data;
    const imagenes = !!images && images[0] 
    const iconImage = '/src/resource/icon.png'
    console.log(data)

  return (
    <>
    <h1 
    className="text-warning">Naruto Characters
    <span>
    <button 
    className="btn btn-outline-secondary mt-2 mover-derecha"
    disabled={isLoading}
    onClick={() => increment()} >
    Next →
    </button>
    </span> 
    </h1>

    <hr />

    {
        isLoading ? (
            <div className='alert alert-info text-center'>
            Loading...
            </div>
        ):
        (
            <>
            <blockquote className='blockquote text-end'>
                 <p className='mb-1'>{info.Clã}</p>
           <footer className='blockquote-footer mt-2'>{info['Patente Ninja']}</footer>
                </blockquote>


      <div className="card w-25 h-25 mover-derecha custom-card-width">
        <div className="card-body custom-card-height">
            <img  src={true && imagenes.toString()} className="img-fluid rounded mx-auto images-hight images-width" alt="..."/>
          <p className="card-text"> 
                Village: {info.Afiliação}
          </p>
          <p className="card-text">
            Occupation: {info.Ocupação?info.Ocupação:"N/A"}
            </p>
          <p className="card-text">
            Partner: {info.Parceiro?info.Parceiro:"N/A"}
            </p>
          <p className="card-text">
            Ninja record: {info['Registro Ninja']?info['Registro Ninja']:"N/A"}
            </p>
        </div>
      </div>

      <div className="p-5 mb-4 bg-body-tertiary rounded-3 ">
        <div className="container-fluid py-5 ">
            <h1 className="display-5 fw-bold">{name}  
            <img src={iconImage} className='iconMax' alt="" /> </h1>
            <p className="col-md-8 fs-4 texto-limitado">{about}</p>
        </div>
      </div>

        </>
        )
    }

    </>
  )
}
