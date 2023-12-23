import React from 'react';
import'./search-bar.css'
import {div, Form,FormGroup} from "reactstrap";

const SearchBar = () => {
  return <div lg='12'>
    <div className="search__bar">
        <Form className='d-flex align-items-center gap-4'>
            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <span>
                <i className="ri-map-pin-line"></i>
                </span>
                <div>
                    <h6>
                        Location
                    </h6>
                    <input type="text" placeholder='where are you going ?' name="" id="" />
                </div>
            </FormGroup>
            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <span>
                <i className="ri-map-pin-time-line"></i>
                </span>
                <div>
                    <h6>
                        Distance
                    </h6>
                    <input type="number" placeholder='Distance k/m' name="" id="" />
                </div>
            </FormGroup>
            <FormGroup className='d-flex gap-3 form__group form__group-last'>
                <span>
                <i className="ri-group-line"></i>
                </span>
                <div>
                    <h6>
                        Max People
                    </h6>
                    <input type="number" placeholder='0' name="" id="" />
                </div>
            </FormGroup>
        </Form>
    </div>
  </div>
}

export default SearchBar;
