import React from 'react';
import {Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon,Box} from '@chakra-ui/react';

export default function Title() {
  return (
    <div className='Title-outer'>
        <div className='title-name'><p>Search properties to rent</p></div>
        <div>
            <div>
                <input type="search" placeholder="Search with search bar"></input>
            </div>
        </div>
    </div>
  )
}
