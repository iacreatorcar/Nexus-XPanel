# 🛥️ Nexus-XPanel — Integrated Yacht Control System

**Nexus-XPanel** is a high-end, integrated dashboard for luxury yacht management, optimized for touch-screen displays such as Microsoft Surface, iPads, and industrial marine monitors

![Nexus-XPanel Preview](assets/image/landing-page.svg)

🌐 **Live Demo (GitHub):** https://iacreatorcar.github.io/Nexus-XPanel/  
🚀 **Mirror Link (Vercel):** https://nexus-xpanel.vercel.app/

> 📚 **Progetto dimostrativo / integration study** – Questo repository mostra pattern di integrazione per sistemi marittimi. Per soluzioni commerciali su misura, contattami direttamente.

---

## 🌊 Real World Background

This project was born from 20+ years of hands-on experience managing AV and digital systems aboard cruise ships and luxury yachts — including **MSC Cruises**, **Aroya Cruises**, and **Custom Line 106** superyacht commissioning (Ferretti Group, Adriatic shipyard).

Nexus-XPanel translates that operational knowledge into a deployable interface prototype, designed around real problems faced by onboard technical teams daily:

1. Crew needed a **single unified interface** to control AV, lighting, HVAC, and navigation data
2. Existing solutions were **proprietary, expensive, and inflexible**
3. Onboard environments demand **offline-first, low-latency** systems that work without stable internet
4. **Integration gap** — Shipowners need open, flexible systems that can talk to existing Crestron/AMX/Savant infrastructure without vendor lock-in

Nexus-XPanel addresses all four challenges with a lightweight, browser-based architecture compatible with Crestron/AMX processors and IPTV satellite encoders.

---

## 👨‍💻 About the Author

**Carmine D'Alise** — *Senior Digital Systems Leader | Hospitality & AV Tech | Full Stack Developer*

After 20+ years of on-board operations as Field Technician, Multimedia & Technical Manager, and Digital Experience Lead at MSC Cruises, Celebrity Cruises, Aroya Cruises, and luxury yacht shipyards, I translate field experience into innovative digital solutions.

**Certified:** Crestron DMC-E-4K · CTI-TCT-C · CTI-TCT-R · Dante Level 2 · Cisco ICND2

---

## 🚀 Key Features

### 🎵 Universal Media Hub
- **Direct Stream Injection** — Integrated YouTube player with live source switching via URL
- **Local Drop Zone** — "VLC-Style" drag and drop for local audio files (`.mp3`, `.wav`) using `URL.createObjectURL` API — no server uploads required
- **Multi-Platform Support** — Seamless switching between YouTube Music, Spotify, and Apple Music

### 🌡️ Smart Home & Automation Logic
- **Visual Feedback Engine** — Climate module uses dynamic `box-shadow` and color opacity based on real-time thermostat values
- **Global Scene Management** — Centralized trigger system for simultaneous RGB lighting and HVAC control (Night, Party, Relax, Full modes)

### 🛰️ Tactical Bridge (Navigation)
- **Advanced Radar Skin** — Dynamic Google Maps layer manipulation via CSS filters (`invert`, `hue-rotate`, `brightness`) for Night Mode visibility
- **Telemetry Simulation** — Asynchronous NMEA data simulation (Speed, Depth, Heading)

### 📺 IPTV System
- **HLS/M3U8 Streaming Engine** — Built to interface with satellite streaming encoders onboard
- Compatible with onboard IPTV hardware used in cruise and superyacht environments

---

## 🛠️ Technical Implementation

While deployed as a static site, Nexus-XPanel incorporates complex client-side logic for maximum speed and privacy:

1. **File System Access API (Simulation)** — VLC-style player creates temporary blobs, allowing playback of local media libraries without internet connection
2. **HLS/M3U8 Streaming Engine** — Interfaces with satellite streaming encoders via secure HTTPS context or local Node.js proxy for CORS handling
3. **State Management** — UI maintains yacht state (temperature, light scenes) through JavaScript objects, simulating real-time PLC/Crestron processor connection
4. **Environment Setup:**
   - **Frontend:** HTML5, CSS3 (Custom Properties & Keyframes), Vanilla JavaScript
   - **Local Backend (Development):** Node.js/Express or VS Code Live Server for HLS stream header handling
5. **Integration Architecture** — The UI maintains clear separation between presentation (HTML/CSS) and control logic (JavaScript). Replacing the `CrestronBridge` simulation class with a real WebSocket connection requires ~20 lines of code change — demonstrating production-ready patterns.

---

## 🔄 Integration Ready — From Prototype to Reality

Nexus-XPanel is designed as a **demonstration of integration patterns**, not just a static dashboard. The architecture shows exactly how a modern HTML5 interface can connect to real maritime systems.

### 🧩 Compatible Systems (Integration Proven)

| System Type | Examples | Integration Method |
|:---|:---|:---|
| **Professional AV Control** | Crestron, AMX, Savant, Control4 | WebSocket / HTTP API / TCP Socket |
| **IPTV & Streaming** | Satellite encoders (Harmonic, Cisco), HLS sources | Native HLS.js + CORS proxy |
| **Navigation (NMEA)** | Furuno, Raymarine, Garmin, Simrad | NMEA 0183 over TCP / WebSocket bridge |
| **HVAC & Lighting** | BMS systems, KNX, DALI, Modbus | REST API simulation → real gateway |
| **Connectivity** | Starlink, Peplink, KVH VSAT | Dashboard integration (planned) |

### 🔌 Integration Patterns Demonstrated

This prototype implements **client-side patterns** that translate directly to real integrations:

```javascript
// Pattern 1: Simulated PLC/Crestron connection
// Replace this with actual WebSocket to Crestron processor
class CrestronBridge {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
    // In production: this.socket = new WebSocket(`ws://${ip}:${port}`)
  }
  
  connect() {
    console.log(`🔄 Connecting to Crestron at ${this.ip}:${this.port}`);
    // In production: this.socket.onopen = () => this.onReady()
  }
  
  sendScene(scene) {
    console.log(`🎬 Triggering scene: ${scene}`);
    // In production: this.socket.send(JSON.stringify({ command: scene }))
  }
  
  sendCommand(device, action, value) {
    console.log(`📡 ${device} → ${action}: ${value}`);
    // In production: this.socket.send(JSON.stringify({ device, action, value }))
  }
}

// Pattern 2: NMEA data simulation → real NMEA over TCP
class NMEABridge {
  parseSentence(sentence) {
    const parts = sentence.split(',');
    return {
      speed: parseFloat(parts[7]),
      heading: parseFloat(parts[8]),
      status: parts[2]
    };
  }
}

// Pattern 3: State management for HVAC/Lighting
class YachtStateManager {
  constructor() {
    this.state = {
      temperature: 21,
      lighting: { r: 255, g: 255, b: 255 },
      scenes: {}
    };
  }
  
  setScene(name, config) {
    this.state.scenes[name] = config;
    // In production: this.syncWithCrestron(name, config)
  }
}
🚀 From Demo to Deployment
Phase	What Nexus-XPanel Provides	Client Provides
1. Proof of Concept	This working prototype	Use case requirements
2. Integration Design	Architecture for your specific hardware	Access to systems (Crestron, NMEA, etc.)
3. Custom Development	Tailored UI and business logic	APIs, credentials, testing environment
4. Onboard Deployment	Docker/PWA packaging, training	Shipboard network, displays
💡 This is a study prototype. The real value is my 20+ years of experience translating these patterns into onboard systems. Contact me for commercial integration projects.

📂 Project Structure
text
Nexus-XPanel/
├── index.html          # Main gateway with tactile feedback
├── music.html          # Universal multimedia hub
├── domotica.html       # HVAC and RGB lighting control
├── nav.html            # Tactical radar bridge
├── iptv.html           # HLS streaming television system
└── assets/
    ├── image/          # UI assets and landing page SVG
    └── css/            # Custom stylesheets
🗺️ Roadmap
✅ Integration-ready architecture — WebSocket hooks for Crestron/AMX (pattern implemented, awaiting real processor for testing)

Docker containerization for onboard deployment

Mobile PWA version for crew tablets

Integration with Samsung MagicInfo API

Multi-language support (AR / EN / IT / ES)

REST API backend for persistent yacht state management

Integration with Peplink/Starlink connectivity dashboard

🛠️ For System Integrators & Shipyards
Nexus-XPanel serves as my technical portfolio for maritime digital integration. If you represent:

Crestron/AMX dealers looking for modern HTML5 UI alternatives

Shipyards (Ferretti, Sanlorenzo, Azimut, etc.) needing unified bridge interfaces

Yacht management companies wanting to digitalize operations

Satellite/IPTV providers seeking crew-facing dashboards

I can deliver:

Custom UI based on this prototype, branded for your fleet

Full integration with your existing Crestron/AMX/Savant infrastructure

Onboard deployment (Docker, offline-first, touch-optimized)

Training and documentation for your technical team

📧 Contact me for commercial inquiries — this repository is a study prototype, not a product. The product is my integration expertise.

⚓ License
This project is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).

You are free to share and adapt this work for non-commercial purposes, provided appropriate credit is given.

🤝 Connect
Carmine D'Alise — Digital Systems Leader | Hospitality & AV Tech | Full Stack Developer

🔗 LinkedIn: carminedalise-digital
🌐 Website: https://www.cdalise.com
📧 Email: carmine@cdalise.com