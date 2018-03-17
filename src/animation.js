import {TweenLite, TweenMax, Elastic} from 'gsap';


export default {
	
	fall(target) {
		let fallSpeed = Math.random()*30+1;
		return TweenMax.to(target, fallSpeed, { top:'200px', ease:Elastic.easeOut})
	}
}