// Funzione per caricare i dati dal JSON
async function loadSystemData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        
        // Update UI con i dati del JSON
        document.getElementById('loc-display').innerText = data.yacht.location;
        document.getElementById('ext-temp').innerText = data.yacht.temp_ext;
        document.getElementById('ch-count').innerText = data.iptv.channels_count;
        document.getElementById('preview-ch').innerText = data.iptv.current_preview;
        document.getElementById('clima-val').innerText = data.domotica.clima;
        document.getElementById('lights-scene').innerText = data.domotica.lights_scene;
        
        // Telemetria iniziale
        updateTelemetryUI(data.yacht.telemetry);
        
    } catch (error) {
        console.error("Errore nel caricamento data.json:", error);
    }
}

// Funzione per aggiornare la telemetria (con piccola oscillazione random per realismo)
function updateTelemetryUI(telemetry) {
    setInterval(() => {
        const randomOsc = (Math.random() * 0.5 - 0.25);
        document.getElementById('spd-val').innerText = (telemetry.speed + randomOsc).toFixed(1);
        document.getElementById('depth-val').innerText = (telemetry.depth + (randomOsc * 2)).toFixed(1);
        document.getElementById('hdg-val').innerText = telemetry.heading;
    }, 3000);
}

// Orologio digitale
function startClock() {
    setInterval(() => {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
        document.getElementById('clock').innerText = timeStr;
    }, 1000);
}

// Inizializzazione
document.addEventListener('DOMContentLoaded', () => {
    loadSystemData();
    startClock();
});