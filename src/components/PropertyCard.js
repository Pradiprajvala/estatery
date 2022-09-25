import React from 'react'
import '../styles/PropertyCard.css'
import SingleBedIcon from '@mui/icons-material/SingleBed';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const PropertyCard = ({property}) => {
    const {  location,image, title, address, beds, bathrooms, area, price } = property
    // console.log(image, title, address, beds, bathrooms, area, price );
  return (
    <div className='propertyCard'>
          <div className='propertyCardImage'>
            <img src={image} alt='' />
          </div>
          <div className='propertyCardContent'> 
            <div className='propertyCardCenter'>
                <p className="propertyCardCenterPrice">${price}</p><p className='propertyCardCenterUnit'>/month</p>
                <FavoriteBorderIcon />
            </div>
            <div>
            <p className='propertyCardTitle'>{title}</p>
            <p className='propertyCardAddress'>{address}, {location} </p>
            </div>
            <hr />
            <div className='propertyCardFooter'>
                <div className='propertyCardFooterItem'><SingleBedIcon /><p>{beds}Beds</p></div>
                <div className='propertyCardFooterItem'><SingleBedIcon /><p>{bathrooms}Bathrooms</p></div>
                <div className='propertyCardFooterItem'><SingleBedIcon /><p>{area}m<sup>2</sup></p></div>
            </div>
          </div>
        </div>
  )
}

export default PropertyCard