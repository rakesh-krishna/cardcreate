import React from 'react';
import './iframe.css'
export default function iframeScreen(urlOne) {
    console.log(urlOne)
    const data = urlOne.location.state.response == 'undefined' ? 'http://example.com' : urlOne.location.state.response
  return <div className='myIframe'>
      <iframe src={data}></iframe>
  </div>;
}
