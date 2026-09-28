export interface Project {
  slug: string;
  title: string;
  category: string;
  image: string;
  techStack: string[];
  shortDesc: string;
  problem: string;
  solution: string;
  features: string[];
  deployment: string;
  studentInvolvement: string;
}

export const projects: Project[] = [
  {
    slug: "automatic-gate-system",
    title: "Automatic Gate System",
    category: "Security Automation",
    image: "/images/projects/gate-system.jpg",
    techStack: ["ESP32", "IR Sensor", "Ultrasonic", "RFID", "MQTT"],
    shortDesc:
      "Automated gate control using sensors and microcontroller logic for residential and industrial entrances.",
    problem:
      "Manual gate operation is inconvenient and poses security risks. Traditional systems lack vehicle detection, remote operation, and integration with security panels.",
    solution:
      "A sensor-driven automatic gate system with vehicle detection, remote operation via mobile app, and safety interlocks. Integrates with existing security automation panels.",
    features: [
      "IR + ultrasonic vehicle detection",
      "RFID access control for authorised vehicles",
      "Remote operation via mobile app",
      "Safety interlocks to prevent accidents",
      "Integration with security panels",
      "Event logging and alerts",
    ],
    deployment:
      "Deployed in residential societies, commercial complexes, and industrial facilities.",
    studentInvolvement:
      "5 final-year ECE students contributed to sensor calibration, firmware development, and field testing as part of their capstone project.",
  },
  {
    slug: "home-automation",
    title: "Home Automation Hub",
    category: "IoT Solutions",
    image: "/images/projects/home-automation.jpg",
    techStack: ["ESP32", "MQTT", "Node-RED", "Alexa", "React"],
    shortDesc:
      "Smart home hub controlling lighting, HVAC, security, and appliances.",
    problem:
      "Homeowners want centralised control of lighting, HVAC, security, and appliances, but existing solutions are fragmented and expensive.",
    solution:
      "ESP32-based smart home hub with MQTT dashboard, voice assistant integration, and mobile app control for all home devices.",
    features: [
      "Control lights, fans, AC, and appliances",
      "Voice control via Alexa / Google Assistant",
      "Mobile app with real-time status",
      "Scene scheduling and automation",
      "Energy monitoring",
      "Offline fallback",
    ],
    deployment: "Installed in 50+ homes and apartments in Tamil Nadu.",
    studentInvolvement:
      "3 students developed the mobile app and MQTT dashboard as part of an internship programme.",
  },
  {
    slug: "security-automation",
    title: "Security Automation Panel",
    category: "Security Automation",
    image: "/images/projects/security-panel.jpg",
    techStack: ["STM32", "PIR Sensors", "GSM", "Camera", "SCADA"],
    shortDesc:
      "Integrated security systems with access control, surveillance, and alarm management.",
    problem:
      "Campuses and industrial facilities need integrated security, but often use disconnected systems for access, surveillance, and alarms.",
    solution:
      "A unified security automation panel integrating access control, surveillance triggering, alarm management, and automated response protocols.",
    features: [
      "Access control with RFID/biometric",
      "Surveillance camera triggering on motion",
      "Automated alarm and SMS alerts",
      "Central SCADA monitoring",
      "Incident logging and reports",
      "Battery backup",
    ],
    deployment: "Deployed in 3 college campuses and 2 industrial plants.",
    studentInvolvement:
      "6 students across two batches contributed to panel wiring, firmware, and SCADA integration.",
  },
  {
    slug: "mushroom-farming",
    title: "Mushroom Farming Automation",
    category: "Agriculture IoT",
    image: "/images/projects/mushroom-farming.jpg",
    techStack: ["ESP32", "DHT22", "CO2 Sensor", "MQTT", "Firebase"],
    shortDesc:
      "IoT-enabled mushroom cultivation monitoring temperature, humidity, CO₂, and soil moisture.",
    problem:
      "Mushroom farming requires precise environmental control, but manual monitoring is error-prone and labour-intensive.",
    solution:
      "An IoT-based system monitoring temperature, humidity, CO₂, and soil moisture with automated control of humidifiers, fans, and lighting.",
    features: [
      "Real-time environment monitoring",
      "Automated humidifier and fan control",
      "Cloud dashboard for remote monitoring",
      "Alert on out-of-range conditions",
      "Historical data logging",
      "Aligned with Indian agro-climatic requirements",
    ],
    deployment:
      "Deployed in 12 mushroom farms across Tamil Nadu and Karnataka.",
    studentInvolvement:
      "4 agriculture engineering students collaborated on sensor calibration and field validation.",
  },
  {
    slug: "water-level-indicator",
    title: "Water Level Indicator System",
    category: "IoT Solutions",
    image: "/images/projects/water-level.jpg",
    techStack: ["ESP8266", "Ultrasonic", "MQTT", "Blynk"],
    shortDesc:
      "IoT-based water level monitoring with mobile alerts and pump automation.",
    problem:
      "Manual water tank monitoring leads to overflow, wastage, and dry-run pump damage.",
    solution:
      "An IoT water level monitoring system with mobile alerts, automatic pump control, and historical data logging.",
    features: [
      "Continuous water level sensing",
      "Mobile alerts at thresholds",
      "Automatic pump on/off",
      "Historical consumption data",
      "Overflow prevention",
      "Low-cost retrofit design",
    ],
    deployment: "Installed in 200+ residential societies and farms.",
    studentInvolvement:
      "2 students developed the mobile app and calibration routines.",
  },
  {
    slug: "edge-ai-camera",
    title: "Edge AI Camera",
    category: "AI / Embedded",
    image: "/images/projects/edge-ai.jpg",
    techStack: ["Raspberry Pi", "TensorFlow Lite", "OpenCV", "Camera Module"],
    shortDesc:
      "On-device AI camera for real-time object detection and classification.",
    problem:
      "Cloud-based vision systems are expensive and slow for real-time industrial use.",
    solution:
      "An edge AI camera running TensorFlow Lite on Raspberry Pi for real-time object detection without cloud dependency.",
    features: [
      "On-device object detection",
      "No cloud dependency",
      "Real-time alerts",
      "Custom model training",
      "Low power consumption",
      "Industrial enclosure",
    ],
    deployment:
      "Deployed in manufacturing quality control and traffic monitoring.",
    studentInvolvement:
      "3 students trained custom models and optimised inference speed.",
  },
    {
    slug: "sericulture-farming",
    title: "Sericulture Farming Automation",
    category: "Agriculture IoT",
    image: "/images/projects/sericulture-farming.svg",
    techStack: ["ESP32", "DHT22", "Humidity Sensor", "MQTT", "Relay"],
    shortDesc:
      "Smart silkworm rearing system with automated temperature, humidity, and light control for optimal cocoon production.",
    problem:
      "Silkworm rearing requires precise environmental conditions — temperature between 24-28°C, humidity at 70-85%, and controlled light cycles. Manual monitoring leads to crop loss and inconsistent cocoon quality.",
    solution:
      "An IoT-enabled sericulture automation system that continuously monitors temperature, humidity, and light, automatically adjusting humidifiers, heaters, and ventilation to maintain optimal rearing conditions across all larval stages.",
    features: [
      "Multi-stage climate control (24-28°C optimal)",
      "Automated humidity management (70-85% RH)",
      "Light cycle control for larval development",
      "Real-time alerts on mobile app",
      "Cloud dashboard for remote monitoring",
      "Historical data logging per rearing batch",
    ],
    deployment:
      "Deployed in 8 sericulture units across Tamil Nadu and Karnataka, improving cocoon yield by 25%.",
    studentInvolvement:
      "4 agriculture engineering students contributed sensor calibration and field validation as part of their final-year project.",
  },
  {
    slug: "pwm-simulation",
    title: "PWM Simulation & Control",
    category: "Embedded Control",
    image: "/images/projects/pwm-simulation.svg",
    techStack: ["ESP32", "Arduino", "Timer", "Oscilloscope", "C++"],
    shortDesc:
      "Pulse Width Modulation simulation and control system for motor speed, LED dimming, and power regulation.",
    problem:
      "Engineering students and hobbyists struggle to understand PWM principles visually. Traditional hardware testing is expensive and slow, requiring oscilloscopes and dedicated setups.",
    solution:
      "A web-based and hardware-based PWM simulation platform that lets users configure duty cycle, frequency, and waveforms in real time — with visual output on screen and physical output via LED/motor for verification.",
    features: [
      "Interactive duty cycle control (0-100%)",
      "Frequency range: 1 Hz to 40 kHz",
      "Real-time waveform visualisation",
      "LED dimming and motor speed demo",
      "Preset modes for servos and motor drivers",
      "Educational mode for students",
    ],
    deployment:
      "Used by 500+ engineering students across partner colleges for learning PWM concepts.",
    studentInvolvement:
      "3 ECE students developed the simulation web app and hardware demo kit as part of a training workshop.",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}