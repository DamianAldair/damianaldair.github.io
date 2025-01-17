export interface Skill {
    name: string;
    r: number;
    g: number;
    b: number;
}

export const skills: Skill[] = [
    { name: 'Dart', r: 35, g: 89, b: 151 },
    { name: 'Flutter', r: 13, g: 61, b: 161 },
    { name: 'Dart Frog', r: 95, g: 206, b: 135 },
    { name: 'Hive', r: 100, g: 85, b: 225 },
    { name: 'Java', r: 245, g: 130, b: 25 },
    { name: 'SQL', r: 0, g: 188, b: 242 },
    { name: 'SQLite', r: 15, g: 128, b: 204 },
    { name: 'PostgreSQL', r: 51, g: 103, b: 145 },
    { name: 'Markdown', r: 0, g: 0, b: 0 },
    { name: 'Git', r: 222, g: 76, b: 54 },
];

export interface Project {
    img: string;
    name: string;
    description: string;
    skillImages: string[];
    url?: string;
}

export const projects: Project[] = [
    {
        img: 'just_transitions.webp',
        name: 'JustTransitions',
        description: 'Un paquete para usar con Flutter y facilitar la navegación entre rutas utilizando animaciones y personalizándolas con diferentes características.',
        skillImages: [
            'dart',
            'flutter',
        ],
        url: 'https://pub.dev/packages/just_transitions',
    },
    {
        img: 'qr_eu_covid.webp',
        name: 'QR - EU Digital COVID Certificate',
        description: 'Un paquete para usar con Flutter que analiza sintácticamente el texto plano cifrado contenido en los códigos QR del certificado europeo de vacunación contra COVID-19.',
        skillImages: [
            'dart',
            'flutter',
        ],
        url: 'https://pub.dev/packages/qr_eu_digital_covid_certificate',
    },
    {
        img: 'kb_checker.webp',
        name: 'KB Checker',
        description: 'Una aplicación de escritorio para probar las teclas del teclado y detectar fallas. Soporta distribuciones ANSI e ISO, de Estados Unidos, España y Latinoamérica.',
        skillImages: [
            'dart',
            'flutter',
        ],
        url: 'https://github.com/DamianAldair/kb_checker',
    },
];

export interface Experience {
    startYear: number;
    finishYear: number;
    title: string;
    description: string;
    url?: string;
}

export const experiences: Experience[] = [
    {
        startYear: 2021,
        finishYear: 2023,
        title: 'Proyecto Guatiní',
        description: 'Desarrollo de la versión 3.0 de la aplicación móvil para el proyecto Guatiní. Enciclopedia sobre seres vivos, principalmente offline y con posibilidades de acceder a información adicional gracias al consumo de APIs de enciclopedias libres. Rediseño de la base de datos utilizada. Diseño de la forma de despliegue y gestión  de la información local mediante la automatización de la compilación de aplicaciones móviles auxiliares con información personalizada.',
    },
    {
        startYear: 2024,
        finishYear: -1,
        title: 'Empresa de Tecnologías de la Información',
        description: 'Desarrollo de bibliotecas para facilitar la comunicación con dispositivos de autenticación biométrica de las marcas ZKTeco y Hikvision.\nDesarrollo de una aplicación móvil para facilitar la gestión de insumos en almacenes a partir del uso de dispositivos con lectores QR y consumo de API.',
    },
    {
        startYear: 2024,
        finishYear: -1,
        title: 'Code43W',
        description: 'Desarrollo de aplicaciones móviles para mejorar la experiencia de cálculos de agroproductividad de los suelos y el uso de fertilizantes sobre estos, a partir del uso de bases de datos locales en SQLite y actualizaciones periódicas de la información gracias al consumo de APIs.',
    },
];