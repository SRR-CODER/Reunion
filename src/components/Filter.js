import React from 'react';
import {Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon,Box} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';

export default function Filter({ filters, setFilters }) {

  const handleSubmission = (e) => {
    e.preventDefault();
    const loc = document.getElementsByClassName("filter-price")[0].value;
    const when = document.getElementsByClassName("filter-price")[1].value;
    const price = document.getElementsByClassName("filter-price")[2].value;
    const type = document.getElementsByClassName("filter-price")[3].value;

    setFilters({
        loc: loc === "" ? "all" : loc,
        when: when,
        price: price,
        type: type
    })
  };

  return (
    <div className='Filter-outer'>
        <div>
            {console.log(filters["loc"])}
            <div className='filter-title'><nbsp/>Location</div>
            <div>
                <select className='filter-price'>
                    <option value="New York" selected><p className='ranges'>New York</p></option>
                    <option value="Florida" ><p className='ranges'>Florida</p></option>
                    <option value="Texas"><p className='ranges'>Texas</p></option>
                </select>
            </div>
        </div>

        <div class="vl"></div>

        <div>
            <div className='filter-title'>When</div>
            <div>
                <select className='filter-price'>
                    <option selected>Select Move in time</option>
                    <option value="Move in"><p className='ranges'>Move in</p></option>
                    <option value="After 1 week" ><p className='ranges'>After 1 week</p></option>
                    <option value="After 2 weeks"><p className='ranges'>After 2 weeks</p></option>
                </select>
            </div>
        </div>

        <div class="vl"></div>

        <div>
            <div className='filter-title'>Price</div>
            <div>
                <select className='filter-price'>
                    <option value="0"><p className='ranges'>$100-$500</p></option>
                    <option value="1" selected><p className='ranges'>$500-$2,500</p></option>
                    <option value="2"><p className='ranges'>$2,500-$5,000</p></option>
                    <option value="3"><p className='ranges'>$5,000-$10,000</p></option>
                </select>
            </div>
        </div>
        
        <div class="vl"></div>

        <div>
            <div className='filter-title'>Property Type</div>
            <div>
                <select className='filter-price'>
                    <option value="HOUSE"><p className='ranges' selected>HOUSE</p></option>
                    <option value="OFFICE"><p className='ranges'>OFFICE</p></option>
                    <option value="WAREHOUSE"><p className='ranges'>WAREHOUSE</p></option>
                </select>
            </div>
        </div>

        <div class="vl"></div>

        <div>
            <div className='search-btn'>
                <Button colorScheme='black' variant='outline' size='md'
                    // onClick={sendfilter}
                    height='40px'
                    width='100px'
                    border='2px'
                    borderColor='purple'
                    backgroundColor='rgb(138, 79, 255)' color="white" fontSize="large" 
                    _hover={{
                        background: "rgb(251, 247, 255)",
                        color: "black",
                      }}
                      onClick = {(e) => handleSubmission(e)}>Search</Button>  
            </div>
        </div>

    </div>
  )
}
