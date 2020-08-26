import React, { useRef, useEffect } from 'react';
import useWebAnimations, { rubberBand } from "@wellyshen/use-web-animations";
import './App.css';

function Animation() {
	const { ref, playState, getAnimation } = useWebAnimations({
		keyframes: [{
		  transform: "translate(0, 0)"
		}, {
			transform: "translate(1320px, 0)"
		  }],
		timing: {
		  duration: 1750, // Run for 1000ms
		  iterations: Infinity, // Repeat once
		  direction: "alternate",},
		  onReady: ({ playState, animate, animation }) => {
			// Triggered when the animation is ready to play (Google Chrome: available in v84+)
		  },
		  onUpdate: ({ playState, animate, animation }) => {
			// Triggered when the animation enters the running state or changes state
		  },
		  onFinish: ({ playState, animate, animation }) => {
			// Triggered when the animation enters the finished state (Google Chrome: available in v84+)
		  }
		  // More useful options...
	  });	

	return (
		<div>
			<div className="target" ref={ref} type="text">
				Hello World!
			</div>
			Current Animation is: {playState}
			<br/>
			<button onClick={() => getAnimation().pause()}>Pause</button>
			<button onClick={() => getAnimation().play()}>Play</button>
		</div>
	)
}

export default Animation
