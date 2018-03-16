import React from 'react';
import './Home.css';
import {connect} from 'react-redux';
import { addFace, addDevil } from '../actions/index.js';
import Character from '../components/Character';
import Devil from '../components/Devil';
class Home extends React.Component {
	constructor(props){
		super(props);
	}
	addFaceHandler(){
		this.props.dispatch(addFace())
	}
	addDevilHandler(){
		this.props.dispatch(addDevil())
	}
	render () {
		let devils = [];
		for(let i = 0; i < this.props.devils; i ++){
			devils.push(<Devil key={i} />)
		}
		let faces = [];
		for(let i = 0; i < this.props.faces; i ++){
			faces.push(<Character key={i} />)
		}
		return (
			<div>
		      <div className="buttonContainer">
		      <button className='homeButton' onClick={(e) => this.addFaceHandler()} >add face</button>
		      <button className='homeButton' onClick={(e) => this.addDevilHandler()} >add devil</button>
		      </div>
		      <div className="pool">
		      {devils}
		      {faces}
		      </div>
	      </div>
	    );
	}
    
}

export const mapStateToProps = state => ({
    faces: state.faces,
    devils: state.devils
});

export default connect(mapStateToProps)(Home);