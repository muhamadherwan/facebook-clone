import './Widget.css';
import React from 'react'
import './Widget.css';

function Widget() {
    return (
        <div className='widget'>
            <h4>Your Pages</h4>
            <iframe
            src="https://www.facebook.com/plugins/page.php?
            href=https%3A%2F%2Fwww.facebook.com%2Freactjscommunity%2F&
            tabs=timeline&width=340&height=1500&small_header=false&
            adapt_container_width=true&
            hide_cover=false&show_facepile=true&appId"
            width='340'
            height='100%'
            style={{border:'none', overflow:'hidden'}}
            scrolling='no'
            frameBorder='0'
            allowTransparency='true'
            allow='encrypted-media'
            ></iframe>
        </div>
    )
}

export default Widget


