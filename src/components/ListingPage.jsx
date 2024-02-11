import {React, useState} from 'react';
import NavBar from './NavBarComponent';
import ListingBGImage from "../assets/ListingBackground.png";
import Input from './interactionComponents/Input';
import Button from './interactionComponents/Button';


const ListingPage = ({navigate}) => {

    const [buttonClicked, setButtonClicked] = useState({filter: false, forRent: false, forSale: false});

    const buttonChange = (type) => {
        setButtonClicked(prevState => {
            return {...prevState, [`${type}`]: !prevState[`${type}`]}
        })
    }

    return (
        <div className='text-white py-4 px-3'>
            <div className='bg-black'>
                <NavBar  />
            </div>
            <div className="p-14 flex flex-row flex-wrap listing-bg-image items-center listing-vertical-height">
                <Input inputClass='basis-3/5 h-fit' />
                <div className='flex flex-wrap flex-grow'>
                    <Button title={"Filter"} onClick={() => buttonChange('filter')} buttonClass={`p-2 ml-auto  text-black ${buttonClicked.filter ? 'bg-gray-400' : "bg-white"}`} />
                    <Button title={"For Rent"}  onClick={() => buttonChange('forRent')} buttonClass={`p-2 ml-auto  text-black ${buttonClicked.forRent ? 'bg-gray-400' : "bg-white"}`}/>
                    <Button title={"For Sale"}  onClick={() => buttonChange('forSale')} buttonClass={`p-2 ml-auto  text-black ${buttonClicked.forSale ? 'bg-gray-400' : "bg-white"}`} />
                </div>
                
            </div>
        </div>
    )
};

export default ListingPage