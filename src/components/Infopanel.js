import React from 'react';
import Globalstats from './Globalstats';
import Allcountries from './Allcountries';

export default function InfoPanel({currentScreen}) {

    if(currentScreen === 0)
        return <Globalstats />
    else if(currentScreen === 1)
        return <Allcountries />
    
    else return <Globalstats />
}