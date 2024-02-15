import {React, useState} from 'react';
import NavBar from './NavBarComponent';
import ListingBGImage from "../assets/ListingBackground.png";
import Input from './interactionComponents/Input';
import Button from './interactionComponents/Button';
import { Form, FormSelect, InputGroup } from 'react-bootstrap';


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
                <br/>
                {buttonClicked.filter && <Form className='flex flex-row items-center justify-evenly gap-6 flex-wrap grow bg-slate-200 text-black font-bold mt-2 py-3'>
                    <div className=''>
                        Property Type
                        <FormSelect aria-label="Property Type" className='rounded-pill'>
                            <option value="House">House</option>
                            <option value="Appartment">Appartment</option>
                            <option value="Condo">Condo</option>
                        </FormSelect>
                    </div>
                    <div className=' text-center'>
                        Price Range
                        <InputGroup size="sm">
                            <Form.Control
                                aria-label="Small"
                                placeholder='$0'
                                aria-describedby="inputGroup-sizing-sm"
                                className='rounded-pill'
                            />
                            <div className='px-3'>
                                -
                            </div>
                            <Form.Control
                                aria-label="Small"
                                placeholder='$100000'
                                aria-describedby="inputGroup-sizing-sm"
                                className='rounded-pill'
                            />
                        </InputGroup>
                    </div>
                    <div className=' text-center'>
                        Square Feet
                        <InputGroup size="sm" className=''>
                            <Form.Control
                                aria-label="Small"
                                placeholder='0'
                                aria-describedby="inputGroup-sizing-sm"
                                className='rounded-pill'
                            />
                            <div className='px-3'>
                                -
                            </div>
                            <Form.Control
                                aria-label="Small"
                                placeholder='1000'
                                aria-describedby="inputGroup-sizing-sm"
                                className='rounded-pill'
                            />
                        </InputGroup>
                    </div>
                    <div>
                        Beds
                        <FormSelect aria-label="Property Type" className='rounded-pill'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="2">3</option>
                        </FormSelect>
                    </div>
                    <div>
                        Baths
                        <FormSelect aria-label="Property Type" className='rounded-pill'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </FormSelect>
                    </div>
                </Form> }
            </div>
        </div>
    )
};

export default ListingPage