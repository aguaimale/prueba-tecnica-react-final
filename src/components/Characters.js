import React, { useState } from 'react';

const Characters = ({ characters = [] }) => {
  const [order, setOrder] = useState('asc');
  const [filter, setFilter] = useState({
    name: '',
    gender: '',
    status: ''
  });

  const changeOrder = () => {
    setOrder(order === 'asc' ? 'desc' : 'asc');
  }

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  }

  const filteredCharacters = characters.filter(character => {
    if (filter.name && !character.name.toLowerCase().includes(filter.name.toLowerCase())) return false;
    if (filter.gender && character.gender !== filter.gender) return false;
    if (filter.status && character.status !== filter.status) return false;
    return true;
  });

  const sortedCharacters = [...filteredCharacters].sort((a, b) => {
    if (order === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <div>

      <div className="" >
        <form>
          <div className="form-group ">
            <label>Nombre</label>
            <input type="text" className="form-control" name="name" value={filter.name} onChange={handleFilterChange} />
          </div>
          <div className="form-group">
            <label>Género</label>
            <select className="form-control" name="gender" value={filter.gender} onChange={handleFilterChange}>
              <option value="">Todos</option>
              <option value="Male">Hombre</option>
              <option value="Female">Mujer</option>
              <option value="unknown">Desconocido</option>
            </select>
          </div>
          <div className="form-group">
            <label>Estado</label>
            <select className="form-control" name="status" value={filter.status} onChange={handleFilterChange}>
              <option value="">Todos</option>
              <option value="Alive">Vivo</option>
              <option value="Dead">Muerto</option>
              <option value="unknown">Desconocido</option>
            </select>
          </div>
        </form>
      </div>

      <button className='btn btn-success mb-3 mt-3'
        onClick={changeOrder}>Ordenar A-Z
      </button>

      <div className='row'>
        {sortedCharacters.map((item, index) => (
          <div key={index} className='col mb-4'>
            <div className='card card-shadow' style={{ minWidth: '200px' }}>
              <img src={item.image} alt='' className='img-rounded-top' />
              <div className='card-body'>
                <h5 className='card-title'>{item.name}</h5>
                <hr />
                <p>Estado: {item.status}</p>
                <p>Especie: {item.species}</p>
                <p>Genero: {item.gender}</p>
                <p>Origen: {item.origin.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Characters;