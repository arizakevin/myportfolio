import config from '../assets/particles.json';
import 'particles.js/particles';
const particlesJS = window.particlesJS;

export default function initParticles() {
	$('particles-js').particlesJS.load('particles-js', config, function() {
		console.log('callback - particles.js config loaded');
	});
}