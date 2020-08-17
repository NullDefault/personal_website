import React from 'react';
import ParticleBackground from 'react-particle-backgrounds';

const AnimatedBackground = function() {
    const settings = {
        particle: {
            particleCount: 42,
            color: "#fff",
            minSize: 1.4,
            maxSize: 4.2
        },
        velocity: {
            minSpeed: 0.14,
            maxSpeed: 0.42
        },
        opacity: {
            minOpacity: 0,
            maxOpacity: 0.5,
            opacityTransitionTime: 15000
        }
    }

    return (
        <ParticleBackground className="particle-background" settings={settings}/>
    )
}

export default AnimatedBackground;