import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import bed from '../images/bed.jpg';
import bathroom from '../images/bathroom.jpg';
import area from '../images/area.jpg';
import heart from '../images/heart.jpg';


export default function card(props) {
    const val = props.House;
  return (
    <div className='property-component'>
          <div className='property-component-display'><img src={val.src}/></div>
          <div className='property-component-data'>
            <div className='data'>
              <div className='price'>
                <div className='price1'>{val.price}</div>
                <div className='month'>{val.month}</div>
              </div>
              <div><img className="img-heart" src={heart}/></div>
            </div>
          <div className='data-title'>{val.name}</div>
          <div className='data-address'>{val.address}</div>
          <div><hr/></div>
          <div className='data-details'>
            <div className='data-details-subsection'><img className="img-bed" src={bed}/>{val.bed}</div>
            <div className='data-details-subsection'><img className="img-bed" src={bathroom}/>{val.bathroom}</div>
            <div className='data-details-subsection'><img className="img-bed" src={area}/>{val.area}</div>
          </div>
          </div>
        </div>
  )
}
