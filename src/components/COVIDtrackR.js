import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Infopanel from './components/Infopanel';
import Footnav from './components/Footnav'

function COIVDtrackR() {
	const screenConfig = useState(0);

  return (
	<div>
		<Navbar />
		<Infopanel currentScreen={screenConfig[0]}/>
    <h1 style={{marginLeft: '50%'}}>THE END</h1>
		<Footnav screenConfig={screenConfig}/>
	</div>
  );
}

export default COIVDtrackR;