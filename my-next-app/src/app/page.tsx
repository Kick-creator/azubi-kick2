"use client";

import { useState, useEffect } from 'react';

export default function Page() {
  const [currentTime, setCurrentTime] = useState<string | null>(null);

  useEffect(() => {
    // Funktion zur Aktualisierung der Zeit
    const updateTime = () => {
      const time = new Date().toLocaleString();
      setCurrentTime(time);
    };

    // Initiale Zeit setzen
    updateTime();

    // Optional: Uhrzeit alle 60 Sekunden aktualisieren
    const intervalId = setInterval(updateTime, 60000);

    // Aufräumen bei Komponentenauslagerung
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      <h1>Welcome to Azubi-Kick!</h1>
      {currentTime ? (
        <p>Current time: {currentTime}</p>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}