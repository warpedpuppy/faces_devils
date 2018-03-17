import React from 'react';
import './Home.css';
import {connect} from 'react-redux';
import { addFace, addDevil } from '../actions/index.js';
import Character from '../components/Character';
import Devil from '../components/Devil';
import animation from '../animation';

let arr = [];
class Home extends React.Component {
	constructor(props){
		super(props);
		this.refArray = [];
		this.refArray2 = [];
	}
	addFaceHandler(){
		let refValue = `face${this.props.faces.length}`;
		this.refArray.push(refValue)
		this.props.dispatch(addFace(<Character setRef={item => this[refValue] = item} key={this.props.faces.length} />))
	}
	addDevilHandler(){
		let refValue = `devil${this.props.devils.length}`;
		this.refArray2.push(refValue);
		let keyVal = this.props.faces.length + this.props.devils.length;
		this.props.dispatch(addDevil(<Devil setRef={item => this[refValue] = item} key={keyVal} />))
	}
	animateFunction (){
		for (let i = 0; i < this.refArray.length; i++) {
			console.log(this.refArray[i])
			animation.fall(this[this.refArray[i]])
		}
		for (let i = 0; i < this.refArray2.length; i++) {
			console.log(this.refArray2[i])
			animation.fall(this[this.refArray2[i]])
		}
	}
	render () {
		

		return (
			<div>

		      <div className="buttonContainer">
		      <button className='homeButton' onClick={(e) => this.animateFunction()} >animate</button>
		      <button className='homeButton' onClick={(e) => this.addFaceHandler()} >add face</button>
		      <button className='homeButton' onClick={(e) => this.addDevilHandler()} >add devil</button>
		      </div>
		      <div className="pool">
			      {this.props.devils}
			      {this.props.faces}
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