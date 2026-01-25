// This is a temporary helper script to add the missing translations
// Run this to update i18n.tsx with Spanish and German nav + footer translations

const spanishNav = {
    welcome: 'Bienvenida',
    customized: 'Soluciones',
    solutions: 'Servicios',
    whyUs: 'Por Qué Nosotros',
    mission: 'Misión',
    careers: 'Carreras',
    portal: 'Portal Cliente',
    login: 'Acceso Portal'
};

const germanNav = {
    welcome: 'Willkommen',
    customized: 'Lösungen',
    solutions: 'Dienstleistungen',
    whyUs: 'Warum Wir',
    mission: 'Mission',
    careers: 'Karriere',
    portal: 'Kundenportal',
    login: 'Portal Login'
};

const arabicFooter = {
    tagline: 'الاتصال الذي يدفع للنجاح',
    scan: 'امسح للزيارة',
    scanDesc: 'زيارة موقعنا',
    followUs: 'تابعنا',
    quickLinks: 'روابط سريعة',
    home: 'الرئيسية',
    company: 'الشركة',
    services: 'خدماتنا',
    contact: 'اتصل بنا',
    medicalSupport: 'الدعم الطبي',
    customerService: 'خدمة العملاء',
    appointmentScheduling: 'جدولة المواعيد',
    support247: 'دعم 24/7',
    email: 'البريد الإلكتروني',
    website: 'الموقع الإلكتروني',
    copyright: '© 2026 سيناي كونكت. جميع الحقوق محفوظة.',
    privacy: 'سياسة الخصوصية',
    terms: 'شروط الخدمة',
    poweredBy: 'مدعوم بواسطة'
};

const spanishFooter = {
    tagline: 'La Conexión Que Impulsa El Éxito',
    scan: 'Escanear para visitar',
    scanDesc: 'Visita nuestro sitio',
    followUs: 'Síguenos',
    quickLinks: 'Enlaces Rápidos',
    home: 'Inicio',
    company: 'Compañía',
    services: 'Nuestros Servicios',
    contact: 'Contáctanos',
    medicalSupport: 'Soporte Médico',
    customerService: 'Servicio al Cliente',
    appointmentScheduling: 'Programación de Citas',
    support247: 'Soporte 24/7',
    email: 'Correo',
    website: 'Sitio Web',
    copyright: '© 2026 Sinai Connect. Todos los derechos reservados.',
    privacy: 'Política de Privacidad',
    terms: 'Términos de Servicio',
    poweredBy: 'Desarrollado por'
};

const germanFooter = {
    tagline: 'Die Verbindung Die Zum Erfolg Führt',
    scan: 'Scannen zum Besuchen',
    scanDesc: 'Besuchen Sie unsere Website',
    followUs: 'Folgen Sie Uns',
    quickLinks: 'Schnelllinks',
    home: 'Startseite',
    company: 'Unternehmen',
    services: 'Unsere Dienstleistungen',
    contact: 'Kontakt',
    medicalSupport: 'Medizinische Unterstützung',
    customerService: 'Kundenservice',
    appointmentScheduling: 'Terminplanung',
    support247: '24/7 Support',
    email: 'E-Mail',
    website: 'Webseite',
    copyright: '© 2026 Sinai Connect. Alle Rechte vorbehalten.',
    privacy: 'Datenschutz',
    terms: 'Nutzungsbedingungen',
    poweredBy: 'Unterstützt von'
};

console.log('Translations ready to be added to i18n.tsx');
