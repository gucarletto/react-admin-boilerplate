import React from 'react';
import { Admin } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './providers/authProvider';

//connect the data provider to the REST endpoint
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App() {
 return (
     <Admin dataProvider={dataProvider} />
 );
}

export default App;