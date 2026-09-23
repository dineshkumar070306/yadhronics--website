export interface Course {
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  mode: "Online" | "Offline" | "Hybrid";
  certification: string;
  price: string;
  modules: string[];
  tools: string[];
  projects: string[];
  instructor: string;
}

export const courses: Course[] = [
  {
    slug: "web-development",
    title: "Full-Stack Web Development",
    subtitle: "Build modern web apps with React, Node.js, and databases",
    duration: "12 weeks",
    level: "Intermediate",
    mode: "Hybrid",
    certification: "Yadhronics Certified Full-Stack Developer",
    price: "₹24,999",
    modules: [
      "HTML5, CSS3, and responsive design",
      "JavaScript ES6+ fundamentals",
      "React and component architecture",
      "Node.js and Express APIs",
      "Databases (PostgreSQL, MongoDB)",
      "Authentication and security",
      "Deployment and DevOps basics",
      "Capstone project",
    ],
    tools: ["VS Code", "Git", "React", "Node.js", "PostgreSQL", "Vercel"],
    projects: [
      "Personal portfolio website",
      "E-commerce product catalogue",
      "Real-time chat application",
    ],
    instructor: "Senior Full-Stack Engineer with 8+ years experience",
  },
  {
    slug: "cyber-security",
    title: "Cyber Security (Ethical Hacking)",
    subtitle: "Learn penetration testing and security fundamentals",
    duration: "8 weeks",
    level: "Intermediate",
    mode: "Online",
    certification: "Yadhronics Certified Ethical Hacker",
    price: "₹19,999",
    modules: [
      "Networking and security fundamentals",
      "Linux and command-line tools",
      "Reconnaissance and scanning",
      "Vulnerability assessment",
      "Web application security (OWASP Top 10)",
      "Wireless security",
      "Incident response basics",
      "Capstone: penetration test report",
    ],
    tools: ["Kali Linux", "Wireshark", "Burp Suite", "Nmap", "Metasploit"],
    projects: [
      "Network vulnerability scan",
      "Web app security audit",
      "CTF challenge completion",
    ],
    instructor: "Certified Ethical Hacker (CEH) with 6+ years experience",
  },
  {
    slug: "embedded-systems",
    title: "Embedded Systems (ARM, RTOS)",
    subtitle: "Master ARM Cortex-M and RTOS-based firmware development",
    duration: "10 weeks",
    level: "Advanced",
    mode: "Offline",
    certification: "Yadhronics Certified Embedded Engineer",
    price: "₹29,999",
    modules: [
      "Embedded C and microcontroller fundamentals",
      "ARM Cortex-M architecture",
      "GPIO, timers, and interrupts",
      "Communication protocols (UART, I²C, SPI)",
      "FreeRTOS: tasks, queues, semaphores",
      "Power management and low-power design",
      "Bootloader and OTA",
      "Capstone: RTOS-based product",
    ],
    tools: [
      "STM32CubeIDE",
      "Keil",
      "FreeRTOS",
      "Logic Analyser",
      "Oscilloscope",
    ],
    projects: [
      "Blinking LED with RTOS tasks",
      "I²C sensor data logger",
      "BLE-based IoT device",
    ],
    instructor: "Embedded systems architect with 10+ years industry experience",
  },
  {
    slug: "pcb-design",
    title: "PCB Design",
    subtitle: "Design professional PCBs from schematic to fabrication",
    duration: "6 weeks",
    level: "Beginner",
    mode: "Hybrid",
    certification: "Yadhronics Certified PCB Designer",
    price: "₹14,999",
    modules: [
      "PCB design fundamentals",
      "Schematic capture in KiCad",
      "Component selection and footprints",
      "PCB layout and routing",
      "Design rule checks and DFM",
      "Gerber generation and fab handoff",
      "Capstone: 2-layer PCB design",
    ],
    tools: ["KiCad", "Altium", "LTspice", "Gerber viewer"],
    projects: [
      "Simple LED driver board",
      "ESP32 breakout board",
      "2-layer sensor board",
    ],
    instructor: "PCB design engineer with 7+ years experience",
  },
  {
    slug: "iot-robotics",
    title: "IoT & Robotics",
    subtitle: "Build connected robots and IoT devices",
    duration: "8 weeks",
    level: "Beginner",
    mode: "Hybrid",
    certification: "Yadhronics Certified IoT Developer",
    price: "₹18,999",
    modules: [
      "IoT fundamentals and architecture",
      "ESP32 programming",
      "Sensors and actuators",
      "MQTT and cloud dashboards",
      "Robotics: motors, drivers, control",
      "Autonomous navigation basics",
      "Capstone: IoT robot",
    ],
    tools: ["Arduino IDE", "ESP32", "MQTT", "Node-RED", "Raspberry Pi"],
    projects: [
      "Smart home sensor node",
      "Obstacle-avoiding robot",
      "IoT weather station",
    ],
    instructor: "Robotics engineer with 5+ years experience",
  },
  {
    slug: "data-science",
    title: "Data Science",
    subtitle: "Learn Python, ML, and data analytics",
    duration: "12 weeks",
    level: "Intermediate",
    mode: "Online",
    certification: "Yadhronics Certified Data Scientist",
    price: "₹27,999",
    modules: [
      "Python for data science",
      "NumPy, Pandas, Matplotlib",
      "Statistics and probability",
      "Machine learning fundamentals",
      "Supervised and unsupervised learning",
      "Model evaluation and deployment",
      "Capstone: real-world dataset project",
    ],
    tools: ["Python", "Jupyter", "scikit-learn", "TensorFlow", "Pandas"],
    projects: [
      "Sales forecasting model",
      "Customer segmentation",
      "Image classification",
    ],
    instructor: "Data scientist with 6+ years industry experience",
  },
];

export function getCourse(slug: string) {
  return courses.find((c) => c.slug === slug);
}