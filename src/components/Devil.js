import React, { Component } from 'react';
import './Devil.css';

export default class Devil extends Component {
	  constructor(props) {
		super(props);
		
	  }
	  
	  render() {

	    return (
			<div className='devilDiv'>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 238.74 252.61" className="devil">
				<g id="Layer_2" data-name="Layer 2">
				<g id="Layer_1-2" data-name="Layer 1">
				<path className="d-cls-1" d="M236.24,137.11A112.93,112.93,0,1,1,174.58,36.42,113,113,0,0,1,236.24,137.11Z"/>
				<polygon className="d-cls-1" points="228.24 5.11 213.7 69.38 174.24 37.11 228.24 5.11"/>
				<polygon className="d-cls-1" points="4.5 14.75 65.88 38.72 28.08 72.92 4.5 14.75"/>
				<path className="d-cls-2" d="M152.24,116.11l42-27s10,37-7,43S152.24,116.11,152.24,116.11Z"/>
				<path className="d-cls-2" d="M88.71,112.35,49.15,78.67s-15,37.63,1.62,46.08S88.71,112.35,88.71,112.35Z"/>
				<line className="d-cls-3" x1="82.24" y1="172.11" x2="139.24" y2="178.11"/>
				</g>
				</g>
				</svg>
			</div>
	    );
	  }
}
