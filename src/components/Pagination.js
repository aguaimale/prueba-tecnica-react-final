import React from 'react';

const Pagination = ({prev, next, onPrevious, onNext}) => {

  const handleAnterior = () =>{
    onPrevious();
    window.scrollTo(0, 0);

  }

  const handleSiguiente = () =>{
    onNext();
    window.scrollTo(0, 0);

  }


  return (
    <div>
       <nav className='my-5'>
        <ul className='pagination justify-content-center'>
        {
          prev ?
          (<li className='page-item'>
            <button className='page-link' onClick={handleAnterior} >Anterior</button>
          </li>)
          :
          null
        }

        {
          next ?
          (<li className='page-item'>
            <button className='page-link' onClick={handleSiguiente} >Siguiente</button>
          </li>)
          :
          null
          
        }  
        
          
        </ul>
       </nav>
    </div>
  );
}

export default Pagination;
