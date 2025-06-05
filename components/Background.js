import React, { useEffect, useState } from 'react';

const Background = () => {
    // Create state for random positions
    const [positions, setPositions] = useState([]);

    // Generate random positions only on client-side
    useEffect(() => {
        // Generate positions for orbital elements
        const orbitalPositions = Array.from({ length: 3 }, () => ({
            rotation: Math.random() * 360,
        }));

        // Generate positions for orbs
        const orbPositions = [
            { top: '20%', right: '15%' },
            { bottom: '15%', left: '10%' },
            { top: '35%', left: '30%' },
            { bottom: '30%', right: '20%' },
        ];

        // Generate positions for beam elements
        const beamPositions = [
            { top: '30%', left: '-25%', rotate: 15 },
            { bottom: '25%', right: '-10%', rotate: -20 },
        ];

        // Generate positions for particles
        const particlePositions = Array.from({ length: 30 }, () => ({
            delay: Math.random() * 15,
            size: Math.random() * 3 + 1,
            top: Math.random() * 100,
            left: Math.random() * 100,
        }));

        setPositions({
            orbitals: orbitalPositions,
            orbs: orbPositions,
            beams: beamPositions,
            particles: particlePositions,
        });
    }, []);

    // Initial render with empty placeholders
    if (positions.particles === undefined) {
        return (
            <div className="fixed inset-0 -z-20 overflow-hidden bg-base-100">
                <div className="absolute inset-0 bg-gradient-radial from-base-300/50 to-base-100"></div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 -z-30 overflow-hidden bg-base-100">
            {/* Gradient base */}
            <div className="absolute inset-0 bg-gradient-radial from-base-300/50 to-base-100"></div>

            {/* Accent orbital rings */}
            {positions.orbitals && positions.orbitals.map((orbital, index) => (
                <div key={`orbital-${index}`} className={`orbital orbital-${index + 1}`}></div>
            ))}

            {/* Glowing orbs */}
            {positions.orbs && positions.orbs.map((orb, index) => (
                <div
                    key={`orb-${index}`}
                    className={`orb orb-${index + 1}`}
                    style={{
                        top: orb.top || 'auto',
                        right: orb.right || 'auto',
                        bottom: orb.bottom || 'auto',
                        left: orb.left || 'auto',
                    }}
                ></div>
            ))}

            {/* Light beams */}
            {positions.beams && positions.beams.map((beam, index) => (
                <div
                    key={`beam-${index}`}
                    className={`beam beam-${index + 1}`}
                    style={{
                        top: beam.top || 'auto',
                        right: beam.right || 'auto',
                        bottom: beam.bottom || 'auto',
                        left: beam.left || 'auto',
                        transform: `rotate(${beam.rotate}deg)`,
                    }}
                ></div>
            ))}

            {/* Particle field */}
            <div className="particles">
                {positions.particles && positions.particles.map((particle, i) => (
                    <div
                        key={`particle-${i}`}
                        className="particle"
                        style={{
                            '--delay': `${particle.delay}s`,
                            '--size': `${particle.size}px`,
                            '--top': `${particle.top}%`,
                            '--left': `${particle.left}%`,
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Background;