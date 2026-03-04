# 🛥️ Nexus-XPanel — Integrated Yacht Control System

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Crestron](https://img.shields.io/badge/Crestron-Compatible-00ADEF?style=flat)
![IPTV](https://img.shields.io/badge/IPTV-HLS%2FM3U8-red?style=flat)
![License](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey?style=flat)

![Nexus-XPanel Landing Page](assets/image/landing-page.svg)

**Nexus-XPanel** is a high-end, integrated dashboard for luxury yacht management, optimized for touch-screen displays such as Microsoft Surface, iPads, and industrial marine monitors.

🌐 **Live Demo (GitHub):** [https://iacreatorcar.github.io/Nexus-XPanel/](https://iacreatorcar.github.io/Nexus-XPanel/)
🚀 **Mirror Link (Vercel):** [https://nexus-xpanel.vercel.app/](https://nexus-xpanel.vercel.app/)

---

## 🌊 Real World Background

This project was born from 20+ years of hands-on experience managing AV and digital systems aboard cruise ships and luxury yachts — including **MSC Cruises**, **Aroya Cruises**, and **Custom Line 106** superyacht commissioning (Ferretti Group, Adriatic shipyard).

Nexus-XPanel translates that operational knowledge into a deployable interface prototype, designed around real problems faced by onboard technical teams daily:

- Crew needed a **single unified interface** to control AV, lighting, HVAC, and navigation data
- Existing solutions were **proprietary, expensive, and inflexible**
- Onboard environments demand **offline-first, low-latency** systems that work without stable internet

Nexus-XPanel addresses all three challenges with a lightweight, browser-based architecture compatible with Crestron/AMX processors and IPTV satellite encoders.

---

## 👨‍💻 About the Author

**Carmine D'Alise**
*Senior Digital Systems Leader | Hospitality & AV Tech | Full Stack Developer*

After 20+ years of on-board operations as **Field Technician**, **Multimedia & Technical Manager**, and **Digital Experience Lead** at MSC Cruises, Celebrity Cruises,Aroya Cruises, and luxury yacht shipyards, I translate field experience into innovative digital solutions.

Certified: **Crestron DMC-E-4K** · **CTI-TCT-C** · **CTI-TCT-R** · **Dante Level 2** · **Cisco ICND2**

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

---

## 📂 Project Structure
```
Nexus-XPanel/
├── index.html          # Main gateway with tactile feedback
├── music.html          # Universal multimedia hub
├── domotica.html       # HVAC and RGB lighting control
├── nav.html            # Tactical radar bridge
├── iptv.html           # HLS streaming television system
└── assets/
    ├── image/          # UI assets and landing page SVG
    └── css/            # Custom stylesheets
```

---

## 🗺️ Roadmap

- [ ] WebSocket integration for real Crestron/AMX processor connection
- [ ] Docker containerization for onboard deployment
- [ ] Mobile PWA version for crew tablets
- [ ] Integration with Samsung MagicInfo API
- [ ] Multi-language support (AR / EN / IT / ES)
- [ ] REST API backend for persistent yacht state management
- [ ] Integration with Peplink/Starlink connectivity dashboard

---

## ⚓ License

This project is licensed under **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)**.

You are free to share and adapt this work for non-commercial purposes, provided appropriate credit is given.

---

## 🤝 Connect

**Carmine D'Alise** — Digital Systems Leader | Hospitality & AV Tech | Full Stack Developer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=flat&logo=linkedin)](https://linkedin.com/in/carmine-d-alise-3b25024b)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-black?style=flat&logo=vercel)](https://carminedalise-portfolio.vercel.app)
[![Email](https://img.shields.io/badge/Email-Contact-D14836?style=flat&logo=gmail)](mailto:c.dalise@live.com)

---

*Built with passion from 20+ years at sea — now bringing maritime digital expertise ashore.*