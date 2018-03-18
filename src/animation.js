import {TimelineMax, Bounce} from 'gsap';


export default {
	
	fall(target) {
		let fallSpeed = Math.random()*1+1;
		let tl = new TimelineMax();
		tl.to(target,fallSpeed, {bottom:'500px'});
		tl.to(target, fallSpeed, {bottom:'0',  ease:Bounce.easeOut});
	}
}