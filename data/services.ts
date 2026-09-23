export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  icon: string;
  overview: string;
  capabilities: string[];
  process: string[];
  deliverables: string[];
  technologies: string[];
  faq: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: "embedded-systems",
    title: "Embedded Systems Development",
    shortDesc: "ARM, RTOS, and microcontroller-based product development.",
    icon: "Cpu",
    overview:
      "We design and develop embedded systems from concept to production. Our team specialises in ARM Cortex-M, ESP32, and AVR platforms, delivering robust firmware for industrial, consumer, and IoT applications. Whether you need a bare-metal solution or a full RTOS-based system, we handle architecture, development, testing, and certification support.",
    capabilities: [
      "ARM Cortex-M / AVR / ESP32 firmware development",
      "RTOS integration (FreeRTOS, Zephyr)",
      "Bootloader and OTA update systems",
      "Low-power design and power management",
      "Communication protocols: UART, I²C, SPI, CAN, BLE",
      "Hardware-software co-design and debugging",
    ],
    process: [
      "Requirement gathering and feasibility study",
      "System architecture and component selection",
      "Firmware development with unit testing",
      "Hardware integration and bring-up",
      "Field testing and validation",
      "Production handover and documentation",
    ],
    deliverables: [
      "Complete firmware source code",
      "Hardware schematics and BOM",
      "Technical documentation",
      "Test reports and validation data",
      "Post-delivery support (3 months)",
    ],
    technologies: [
      "STM32",
      "ESP32",
      "Arduino",
      "FreeRTOS",
      "Zephyr",
      "PlatformIO",
      "STM32CubeIDE",
      "KiCad",
    ],
    faq: [
      {
        q: "What microcontrollers do you work with?",
        a: "We work with ARM Cortex-M (STM32, nRF), ESP32/ESP8266, AVR (ATmega), and PIC families.",
      },
      {
        q: "Do you provide hardware design too?",
        a: "Yes, we offer full-stack hardware + firmware development including PCB design.",
      },
      {
        q: "What is the typical project timeline?",
        a: "Simple projects take 4–6 weeks; complex systems take 3–6 months.",
      },
    ],
  },
  {
    slug: "iot-solutions",
    title: "IoT Solutions",
    shortDesc: "Connected devices, sensor networks, and cloud dashboards.",
    icon: "Wifi",
    overview:
      "We build end-to-end IoT solutions — from sensor nodes to cloud dashboards. Our systems are designed for reliability, security, and scalability, suitable for smart homes, agriculture, industrial monitoring, and smart cities.",
    capabilities: [
      "Sensor network design and deployment",
      "MQTT, HTTP, CoAP communication",
      "Cloud platform integration (AWS IoT, Azure, ThingsBoard)",
      "Custom mobile and web dashboards",
      "Edge computing and local processing",
      "OTA firmware updates",
    ],
    process: [
      "Use-case analysis and sensor selection",
      "Network architecture design",
      "Firmware and gateway development",
      "Cloud backend and dashboard setup",
      "Deployment and calibration",
      "Monitoring and maintenance",
    ],
    deliverables: [
      "IoT device firmware",
      "Gateway software",
      "Cloud dashboard access",
      "API documentation",
      "Deployment guide",
    ],
    technologies: [
      "ESP32",
      "Raspberry Pi",
      "MQTT",
      "Node-RED",
      "AWS IoT",
      "ThingsBoard",
      "Firebase",
    ],
    faq: [
      {
        q: "Can you integrate with our existing systems?",
        a: "Yes, we support standard protocols (MQTT, REST, Modbus) for integration.",
      },
      {
        q: "Do you handle cloud hosting?",
        a: "We can deploy on your cloud or manage hosting on AWS/Azure.",
      },
    ],
  },
  {
    slug: "control-panels",
    title: "Control Panel Design & Manufacturing",
    shortDesc: "Industrial control systems and SCADA integration.",
    icon: "Settings",
    overview:
      "We design and manufacture industrial control panels for automation, gate control, security, and process management. Our panels are built to IEC standards with proper documentation, wiring diagrams, and SCADA integration.",
    capabilities: [
      "PLC and HMI programming",
      "SCADA system integration",
      "Panel layout and wiring design",
      "Safety interlock systems",
      "Custom operator interfaces",
      "On-site installation and commissioning",
    ],
    process: [
      "Site survey and requirement analysis",
      "Electrical schematics and panel layout",
      "Component procurement",
      "Panel assembly and wiring",
      "FAT (Factory Acceptance Test)",
      "On-site installation and SAT",
    ],
    deliverables: [
      "Electrical schematics",
      "Panel layout drawings",
      "PLC/HMI programs",
      "Operation manuals",
      "Warranty and support",
    ],
    technologies: [
      "Siemens PLC",
      "Allen-Bradley",
      "Delta HMI",
      "Schneider",
      "SCADA (WinCC, Ignition)",
    ],
    faq: [
      {
        q: "Do you provide on-site installation?",
        a: "Yes, we provide installation and commissioning across India.",
      },
      {
        q: "What standards do you follow?",
        a: "We follow IEC 61439 and IS standards for panel design.",
      },
    ],
  },
  {
    slug: "pcb-design",
    title: "PCB Design & Development",
    shortDesc: "Schematic capture, multilayer layout, DFM, and prototyping.",
    icon: "CircuitBoard",
    overview:
      "Full-cycle PCB design services from schematic capture to fabrication liaison. We design 2–8 layer boards for consumer, industrial, and IoT applications with a strong focus on signal integrity, EMI/EMC, and manufacturability.",
    capabilities: [
      "Schematic capture and netlist verification",
      "Multilayer PCB layout (up to 8 layers)",
      "Signal integrity and impedance control",
      "DFM/DFA checks",
      "Fabrication and assembly liaison",
      "Prototype and small-batch production",
    ],
    process: [
      "Requirement and component selection",
      "Schematic design and review",
      "PCB layout and routing",
      "Design rule checks and simulation",
      "Gerber generation and fab handoff",
      "Prototype assembly and testing",
    ],
    deliverables: [
      "Schematic files (KiCad/Altium)",
      "Gerber and drill files",
      "BOM with sourcing info",
      "Assembly drawings",
      "3D STEP model",
    ],
    technologies: ["KiCad", "Altium Designer", "Eagle", "LTspice", "EasyEDA"],
    faq: [
      {
        q: "What is the minimum order for PCB prototyping?",
        a: "We support single-piece prototypes and small batches.",
      },
      {
        q: "Do you handle component sourcing?",
        a: "Yes, we provide sourcing and BOM optimisation.",
      },
    ],
  },
  {
    slug: "firmware",
    title: "Custom Firmware Development",
    shortDesc: "Bare-metal and RTOS firmware for ARM, ESP32, and AVR.",
    icon: "Code",
    overview:
      "We develop production-grade firmware for embedded systems. From bootloader development to communication stacks and power management, our firmware is tested, documented, and ready for certification.",
    capabilities: [
      "Bare-metal and RTOS firmware",
      "Bootloader and OTA update systems",
      "Power management and low-power design",
      "Communication protocol stacks",
      "Device drivers and HAL development",
      "Unit testing and CI/CD for embedded",
    ],
    process: [
      "Firmware requirement analysis",
      "Architecture and module design",
      "Development with version control",
      "Hardware-in-loop testing",
      "Field validation",
      "Release and documentation",
    ],
    deliverables: [
      "Firmware source code",
      "Binary releases",
      "API and integration docs",
      "Test reports",
      "Version history",
    ],
    technologies: [
      "C",
      "C++",
      "FreeRTOS",
      "Zephyr",
      "STM32Cube",
      "ESP-IDF",
      "PlatformIO",
    ],
    faq: [
      {
        q: "Can you take over an existing codebase?",
        a: "Yes, we can audit, refactor, and extend existing firmware.",
      },
      {
        q: "Do you sign NDAs?",
        a: "Yes, we work under NDA for all client projects.",
      },
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    shortDesc: "Full-stack applications, dashboards, and IoT front-ends.",
    icon: "Globe",
    overview:
      "We build fast, modern web applications — from marketing sites to complex IoT dashboards. Our stack includes Next.js, React, Node.js, and cloud services, with a focus on performance, SEO, and accessibility.",
    capabilities: [
      "Next.js / React frontend development",
      "Node.js / Python backend APIs",
      "Database design (PostgreSQL, MongoDB)",
      "Real-time dashboards (WebSocket, MQTT)",
      "Authentication and authorisation",
      "Cloud deployment (Vercel, AWS)",
    ],
    process: [
      "Discovery and requirement analysis",
      "UI/UX design and prototyping",
      "Frontend and backend development",
      "Integration and testing",
      "Deployment and monitoring",
      "Post-launch support",
    ],
    deliverables: [
      "Production web application",
      "Source code and documentation",
      "Deployment and CI/CD setup",
      "Admin dashboard",
      "Training handover",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Vercel",
    ],
    faq: [
      {
        q: "Do you build custom dashboards?",
        a: "Yes, including real-time IoT dashboards with live data.",
      },
      {
        q: "Can you maintain the site after launch?",
        a: "Yes, we offer monthly maintenance packages.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}