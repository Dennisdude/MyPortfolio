import { useEffect, useState } from "react";

export const DayBackground = () => {
  const [clouds, setClouds] = useState([]);

  // Konfiguration
  const CLOUD_COUNT = 6; 

  useEffect(() => {
    generateClouds();
  }, []);

  const randomBetween = (min, max) => Math.random() * (max - min) + min;

  const generateClouds = () => {
    const newClouds = [];
    
    // Zonen für die Höhe: Oben, Mitte, Unten
    const verticalZones = [
      { min: 5, max: 20 },
      { min: 25, max: 45 },
      { min: 50, max: 65 }
    ];

    for (let i = 0; i < CLOUD_COUNT; i++) {
      // 1. Puffs generieren
      const numPuffs = Math.floor(randomBetween(4, 7));
      const puffs = [];
      for (let j = 0; j < numPuffs; j++) {
        puffs.push({
          id: j,
          width: randomBetween(70, 130),
          height: randomBetween(70, 130),
          xOffset: randomBetween(-45, 45),
          yOffset: randomBetween(-25, 25),
        });
      }

      // 2. Zone zuweisen (abwechselnd)
      const zone = verticalZones[i % verticalZones.length];
      const topPosition = randomBetween(zone.min, zone.max);

      // 3. Dauer & Startzeitpunkt berechnen
      const duration = randomBetween(60, 90); 
      
      // Gleichmäßige Verteilung beim Start erzwingen
      const interval = duration / CLOUD_COUNT;
      const baseDelay = -1 * (interval * i); 
      const randomDelayOffset = randomBetween(-5, 5); 
      const finalDelay = baseDelay + randomDelayOffset;

      newClouds.push({
        id: i,
        top: topPosition,
        // Tiefer liegende Wolken (höhere Top %) etwas kleiner skalieren für Perspektive
        scale: randomBetween(0.8, 1.2) - (topPosition > 40 ? 0.2 : 0),
        opacity: randomBetween(0.85, 0.98),
        duration: duration,
        delay: finalDelay, 
        puffs: puffs,
        // Z-Index: Untere Wolken verdecken obere (optional, je nach Geschmack)
        zIndex: Math.floor(topPosition),
      });
    }

    setClouds(newClouds);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-linear-to-b from-sky-300 via-sky-200 to-white">
      
      {/* Sonne */}
      <div className="absolute top-[5%] right-[10%] w-32 h-32 rounded-full bg-yellow-200 blur-[2px] shadow-[0_0_60px_30px_rgba(253,224,71,0.6)] animate-pulse-slow" />

      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="absolute animate-cloud-drift flex items-center justify-center"
          style={{
            top: cloud.top + "%",
            left: "-20%", 
            opacity: cloud.opacity,
            transform: `scale(${cloud.scale})`,
            zIndex: cloud.zIndex,
            animationDuration: cloud.duration + "s",
            animationDelay: cloud.delay + "s",
            willChange: "transform",
          }}
        >
          <div className="relative w-0 h-0">
            {cloud.puffs.map((puff) => (
              <div
                key={puff.id}
                className="cloud-puff"
                style={{
                    width: puff.width + "px",
                    height: puff.height + "px",
                    marginLeft: puff.xOffset + "px",
                    marginTop: puff.yOffset + "px",
                    transform: `translate(-50%, -50%)`, 
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};