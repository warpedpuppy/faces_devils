import {TweenMax, Elastic} from 'gsap';


export default {
	
	fall(target) {
		let fallSpeed = Math.random()*2+1;
		return TweenMax.from(target, fallSpeed, { top:'200px', left:'200px', ease:Elastic.easeOut})
	}
}