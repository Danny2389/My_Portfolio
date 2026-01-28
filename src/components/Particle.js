import React, { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#000000",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 1,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                enable: false,
                opacity: 0.03,
              },
              move: {
                direction: "right",
                enable: true,
                outModes: {
                  default: "out",
                },
                random: false,
                speed: 0.05,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 1500,
                },
                value: 160,
              },
              opacity: {
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.05,
                },
                value: { min: 0.05, max: 1 },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: 1,
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
}

export default Particle;
