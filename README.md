# 🛥️ Nexus-XPanel - Integrated Yacht Control System

**Nexus-XPanel** è una dashboard di controllo di nuova generazione per yacht di lusso, ottimizzata per display touch-screen (Surface, iPad, Tablet industriali). Il sistema fonde un'estetica futuristica *Glassmorphism* con funzionalità critiche di navigazione e intrattenimento.

🌐 **Live Demo:** [https://iacreatorcar.github.io/Nexus-XPanel/](https://iacreatorcar.github.io/Nexus-XPanel/)

## 🚀 Caratteristiche Tecniche d'Avanguardia

### 🎵 Universal Media Hub (Progetto Unico)
Nexus-XPanel introduce un concetto di gestione audio inedito:
- **Direct Stream Injection**: Player YouTube integrato con possibilità di cambiare sorgente live tramite URL.
- **Local Drop Zone**: Funzionalità "VLC-Style" che permette di trascinare file audio locali (.mp3, .wav) direttamente nel browser. Utilizza l'API `URL.createObjectURL` per gestire i file in memoria locale senza caricamento su server.
- **Multi-Platform Support**: Switch rapido tra YouTube Music, Spotify ed Apple Music.

### 🌡️ Smart Home & Automation Logic
- **Visual Feedback Engine**: Il modulo clima utilizza una logica di calcolo dinamico per variare il `box-shadow` e l'opacità dei colori in base ai valori del termostato.
- **Global Scene Management**: Sistema di trigger centralizzato per gestire simultaneamente illuminazione e climatizzazione (Night, Party, Relax, Full).

### 🛰️ Tactical Bridge (Navigation)
- **Advanced Radar Skin**: Manipolazione dinamica dei layer di Google Maps tramite filtri CSS (invert, hue-rotate, brightness) per garantire la visibilità notturna (Night Mode) senza abbagliare l'equipaggio.
- **Telemetry Simulation**: Scripting asincrono per la simulazione di dati NMEA (Speed, Depth, Heading).

## 🛠️ Setup Locale & Backend (Technical Notes)

Anche se il progetto è pronto per il deploy statico (Vercel/GitHub Pages), ecco come gestirlo in locale:

1. **Struttura Asset**:
   - Assicurarsi che le immagini siano in `/assets/image/`.
   - Il file `style.css` contiene tutte le variabili CSS globali (Cyber-Cyan, Glass-Blur).
2. **Backend & Security**:
   - **CORS Policy**: Per lo streaming IPTV (.m3u8), il progetto richiede un server web attivo. In locale, si consiglia l'uso di **Live Server** (VS Code) o un server Node.js/Express per evitare blocchi Cross-Origin.
   - **Local Files**: La funzione Drag & Drop funziona esclusivamente in contesti sicuri (HTTPS o localhost).

## 📂 Struttura del Progetto
- `index.html`: Portale d'accesso con feedback tattile.
- `music.html`: Hub multimediale universale.
- `domotica.html`: Controllo clima e luci RGB.
- `nav.html`: Plancia radar tattica.
- `iptv.html`: Sistema TV streaming HLS.