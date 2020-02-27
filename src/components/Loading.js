import React from 'react';
// import '../styles/loader.css';
import loader from '../images/loader.gif';

const Loading = ( { isLoading, error, text } ) => {
  // Handle the loading state
  if( isLoading ) {
    return <div className='loader'>
      <div>
        <img className='loader__image' src={ loader } alt='Cargando...' />
      </div>
      { text }
    </div>;
  }
  // Handle the error state
  else if( error ) {
    return <div>Sorry, there was a problem loading the page.</div>;
  } else {
    return null;
  }
};

export default Loading;
