import React from 'react';
import {onRemoveCityFrmSelected} from "../../../redux/actions/Countries";
import {useDispatch} from "react-redux";

const SelectedCountryCell = ({country}) => {
  const dispatch = useDispatch();
  const {id, name, cities} = country;

  const onRemoveCity = (cityId) => {
    dispatch(onRemoveCityFrmSelected(id, cityId))
  };

  return (
      <div className='mt-2'>
        <div className='font-weight-bold'>{name}</div>
        {cities.map((city, index) => {
          return (
            <div className='bg-light p-2 d-flex align-items-center mt-2' key={index}>
              <div className='flex-grow-1'>{city.name}</div>
              <div style={{cursor: 'pointer'}} onClick={() => onRemoveCity(city.id)}>X</div>
            </div>
          )
        })}
      </div>
  );
};

export default SelectedCountryCell;