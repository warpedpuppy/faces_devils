import React from 'react';
import './Character.css';
export default function Character (props) {
		let divStyle = {left: props.leftVal, width: `${props.w}px`};
	    return (
				<svg xmlns="http://www.w3.org/2000/svg" style={divStyle} ref={props.setRef} viewBox="0 0 231 231" className="character">
				<g id="Layer_2" data-name="Layer 2">
				<g id="Layer_1-2" data-name="Layer 1">
				<circle className="cls-1" cx="115.5" cy="115.5" r="113"/>
				<path className="cls-2" d="M140.5,94.5s2-48,27-37,13,51,13,51Z"/>
				<path className="cls-2" d="M86.5,90.5s-2.22-48-29.91-37-14.4,51-14.4,51Z"/>
				<path className="cls-3" d="M54.5,128.5c2,2,43,59,107,11"/>
				<circle cx="68" cy="88" r="10"/><circle cx="161" cy="92" r="10"/>
				</g>
				</g>
				</svg>

	    );
	  
}
