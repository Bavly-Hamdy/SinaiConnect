import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'ar' | 'es' | 'de';

export const translations = {
  en: {
    brandName: 'Sinai Connect',
    nav: {
      solutions: 'Solutions',
      whyUs: 'Why Us',
      mission: 'Mission',
      careers: 'Careers',
      portal: 'Client Portal',
      login: 'Client Portal Login'
    },
    hero: {
      tag: 'Medical & Clinic Support Services',
      headlineStart: 'Your Bridge',
      headlineEnd: 'to Success',
      subhead: 'Behind every call is a team that listens, understands, and cares. We go beyond communication to build trust, comfort, and lasting relationships through respect, dedication, and excellence.',
      cta: "Let's Connect",
      services: 'View Services',
      statLabel: 'Patient Satisfaction',
      statSub: 'Consistent quality care'
    },
    services: {
      tag: 'Comprehensive Care',
      title: 'Support Services',
      tabs: {
        medical: 'Medical Support'
      },
      medical: [
        'Schedule and confirm patient appointments.',
        'Manage inbound and outbound calls through your clinic system.',
        'Reschedule missed visits and fill open slots.',
        'Book follow ups and verify insurance.',
        'Provide after hours support and reassurance.',
        'Run outreach campaigns to grow and engage patients.',
        'Gather feedback and share insights to improve care and efficiency.'
      ]
    },
    why: {
      tag: 'The Sinai Difference',
      title: 'Why Partner with',
      subtitle: 'We are more than a call center. We are an extension of your practice.',
      ctaTitle: 'Ready to elevate your experience?',
      ctaDesc: 'Join the organizations that trust us with their most valuable connections.',
      ctaButton: 'Get Started Today',
      cards: [
        "Proven experience with professional and result driven organizations.",
        "Multilingual communication in English, Spanish, and Arabic.",
        "Custom call scripts reflecting your brand and values.",
        "Reliable reports with consistent performance tracking.",
        "Trusted partner ensuring seamless operations and quality.",
        "Personalized support that works as part of your team.",
        "Chosen by organizations that value care, respect, and professionalism."
      ]
    },
    mission: {
      purpose: 'Purpose',
      missionTitle: 'Our Mission',
      missionDesc: 'To deliver meaningful customer experiences through skilled communication, smart technology, and intelligent soulutions. Our focus on helping every partner connect, engage, and grow with confidence.',
      future: 'Future',
      visionTitle: 'Our Vision',
      visionDesc: 'To become the trusted communication partner known for excellence, integrity, and care, not just answering calls, but creating meaningful human interactions with warm connection.',
      cardTitle: 'The Connection That Drives Success',
      cardDesc: 'We create the environment where your patients feel heard.'
    },
    careers: {
      tag: 'Join Our Team',
      title: 'Build Your Future at',
      desc: 'We are always looking for talented, empathetic individuals to join our growing family.',
      hiring: 'Currently hiring for Customer Support Specialist',
      growth: 'Professional Growth',
      growthDesc: 'Structured career paths and continuous training.',
      culture: 'Great Culture',
      cultureDesc: 'A workplace that values respect, diversity, and innovation.',
      formTitle: 'Application Form',
      secure: 'SECURE SSL',
      labels: {
        date: 'Application Date',
        name: 'Full Name',
        dob: 'Birthday',
        phone: 'Phone Number',
        email: 'Email Address',
        address: 'Address',
        city: 'City',
        state: 'State'
      },
      submit: 'Submit Application',
      submitting: 'Submitting...',
      success: 'Application Received!',
      successDesc: 'Thank you for your interest. Our HR team will review your application shortly.',
      reset: 'Submit another application'
    },
    footer: {
      tag: 'The Connection That Drives Success.',
      scan: 'Scan here',
      company: 'Company',
      services: 'Services',
      connect: "Let's Connect",
      rights: '© 2026 Sinai Connect. All rights reserved.'
    },
    portal: {
      dashboard: 'Dashboard Overview',
      welcome: "Welcome back! Here's what's happening with your practice today.",
      updated: 'Last updated: Just now',
      stats: {
        calls: 'Total Calls Today',
        answer: 'Answer Rate',
        handle: 'Avg. Handle Time',
        appt: 'Appointments Set'
      },
      chart: 'Call Volume & Response Metrics',
      reports: 'Recent Reports',
      viewAll: 'View All',
      request: 'Request Custom Report'
    },
    login: {
      title: 'Client Portal',
      subtitle: 'Secure access to your performance metrics and reports.',
      email: 'Email Address',
      password: 'Password',
      button: 'Access Dashboard',
      forgot: 'Forgot password?',
      secure: 'Protected by 256-bit SSL Encryption'
    }
  },
  ar: {
    brandName: 'سايناي كونكت',
    nav: {
      solutions: 'الحلول',
      whyUs: 'لماذا نحن',
      mission: 'مهمتنا',
      careers: 'وظائف',
      portal: 'بوابة العملاء',
      login: 'دخول بوابة العملاء'
    },
    hero: {
      tag: 'دعم طبي وعيادات',
      headlineStart: 'جسركم',
      headlineEnd: 'نحو النجاح',
      subhead: 'خلف كل مكالمة فريق يستمع، يفهم، ويهتم. نحن نتجاوز مجرد التواصل لنبني الثقة والراحة وعلاقات تدوم.',
      cta: 'تواصل معنا',
      services: 'عرض الخدمات',
      statLabel: 'رضا المرضى',
      statSub: 'رعاية عالية الجودة'
    },
    services: {
      tag: 'رعاية شاملة',
      title: 'خدمات الدعم',
      tabs: {
        medical: 'الدعم الطبي'
      },
      medical: [
        'جدولة وتأكيد مواعيد المرضى.',
        'إدارة المكالمات الواردة والصادرة عبر نظام عيادتك.',
        'إعادة جدولة الزيارات الفائتة وملء الأوقات المفتوحة.',
        'حجز المتابعة والتحقق من التأمين.',
        'تقديم الدعم والطمأنينة خارج ساعات العمل.',
        'إجراء حملات للتواصل لنمو وإشراك المرضى.',
        'جمع الملاحظات ومشاركة الأفكار لتحسين الرعاية والكفاءة.'
      ]
    },
    why: {
      tag: 'تميز سيناء',
      title: 'لماذا الشراكة مع',
      subtitle: 'نحن أكثر من مجرد مركز اتصال. نحن امتداد لعيادتك.',
      ctaTitle: 'جاهز للارتقاء بتجربتك؟',
      ctaDesc: 'انضم إلى المؤسسات التي تثق بنا في أغلى اتصالاتها.',
      ctaButton: 'ابدأ اليوم',
      cards: [
        "خبرة مثبتة مع منظمات مهنية وموجهة نحو النتائج.",
        "تواصل متعدد اللغات بالإنجليزية والإسبانية والعربية.",
        "نصوص مكالمات مخصصة تعكس علامتك التجارية وقيمك.",
        "تقارير موثوقة مع تتبع مستمر للأداء.",
        "شريك موثوق يضمن سلاسة العمليات والجودة.",
        "دعم شخصي يعمل كجزء من فريقك.",
        "اختيار المنظمات التي تقدر الرعاية والاحترام والمهنية."
      ]
    },
    mission: {
      purpose: 'الهدف',
      missionTitle: 'مهمتنا',
      missionDesc: 'تقديم تجارب عملاء هادفة من خلال التواصل الماهر والتكنولوجيا الذكية والحلول المبتكرة.',
      future: 'المستقبل',
      visionTitle: 'رؤيتنا',
      visionDesc: 'أن نصبح شريك التواصل الموثوق المعروف بالتميز والنزاهة والرعاية، ليس فقط للرد على المكالمات، بل لخلق تفاعلات إنسانية هادفة مع اتصال دافئ.',
      cardTitle: 'التواصل الذي يقود النجاح',
      cardDesc: 'نخلق البيئة التي يشعر فيها مرضاك بأنهم مسموعون.'
    },
    careers: {
      tag: 'انضم لفريقنا',
      title: 'ابنِ مستقبلك في',
      desc: 'نحن نبحث دائمًا عن أفراد موهوبين ومتعاطفين للانضمام إلى عائلتنا المتنامية.',
      hiring: 'نحن نوظف حالياً أخصائي دعم عملاء',
      growth: 'نمو مهني',
      growthDesc: 'مسارات وظيفية منظمة وبرامج تدريب مستمرة.',
      culture: 'ثقافة رائعة',
      cultureDesc: 'بيئة عمل تقدر الاحترام والتنوع والابتكار.',
      formTitle: 'نموذج التقديم',
      secure: 'آمن SSL',
      labels: {
        date: 'تاريخ التقديم',
        name: 'الاسم الكامل',
        dob: 'تاريخ الميلاد',
        phone: 'رقم الهاتف',
        email: 'البريد الإلكتروني',
        address: 'العنوان',
        city: 'المدينة',
        state: 'المنطقة/المحافظة'
      },
      submit: 'إرسال الطلب',
      submitting: 'جاري الإرسال...',
      success: 'تم استلام الطلب!',
      successDesc: 'شكراً لاهتمامك. سيقوم فريق الموارد البشرية بمراجعة طلبك قريباً.',
      reset: 'تقديم طلب آخر'
    },
    footer: {
      tag: 'التواصل الذي يقود النجاح.',
      scan: 'امسح هنا',
      company: 'الشركة',
      services: 'الخدمات',
      connect: 'تواصل معنا',
      rights: '© ٢٠٢٦ سيناء كونكت. جميع الحقوق محفوظة.'
    },
    portal: {
      dashboard: 'نظرة عامة على اللوحة',
      welcome: "مرحباً بعودتك! إليك ما يحدث في عيادتك اليوم.",
      updated: 'آخر تحديث: الآن',
      stats: {
        calls: 'إجمالي المكالمات',
        answer: 'معدل الرد',
        handle: 'متوسط زمن التعامل',
        appt: 'المواعيد المحجوزة'
      },
      chart: 'حجم المكالمات ومقاييس الاستجابة',
      reports: 'التقارير الأخيرة',
      viewAll: 'عرض الكل',
      request: 'طلب تقرير مخصص'
    },
    login: {
      title: 'بوابة العملاء',
      subtitle: 'وصول آمن لمقاييس الأداء والتقارير الخاصة بك.',
      email: 'البريد الإلكتروني',
      password: 'كلمة المرور',
      button: 'دخول اللوحة',
      forgot: 'نسيت كلمة المرور؟',
      secure: 'محمي بتشفير 256-bit SSL'
    }
  },
  es: {
    brandName: 'Sinai Connect',
    nav: {
      solutions: 'Soluciones',
      whyUs: 'Nosotros',
      mission: 'Misión',
      careers: 'Carreras',
      portal: 'Portal Cliente',
      login: 'Acceso Portal'
    },
    hero: {
      tag: 'Soporte Médico y Clínico',
      headlineStart: 'Tu Puente',
      headlineEnd: 'hacia el Éxito',
      subhead: 'Detrás de cada llamada hay un equipo que escucha, entiende y se preocupa. Vamos más allá de la comunicación para construir confianza.',
      cta: 'Conectemos',
      services: 'Ver Servicios',
      statLabel: 'Satisfacción del Paciente',
      statSub: 'Atención de calidad constante'
    },
    services: {
      tag: 'Atención Integral',
      title: 'Servicios de Apoyo',
      tabs: {
        medical: 'Soporte Médico'
      },
      medical: [
        'Programar y confirmar citas de pacientes.',
        'Gestionar llamadas entrantes y salientes a través del sistema de su clínica.',
        'Reprogramar visitas perdidas y llenar espacios abiertos.',
        'Reservar seguimientos y verificar seguros.',
        'Proporcionar apoyo y tranquilidad fuera de horario.',
        'Ejecutar campañas de divulgación para crecer e involucrar pacientes.',
        'Recopilar comentarios y compartir ideas para mejorar la atención y eficiencia.'
      ]
    },
    why: {
      tag: 'La Diferencia Sinai',
      title: '¿Por qué asociarse con',
      subtitle: 'Somos más que un call center. Somos una extensión de su práctica.',
      ctaTitle: '¿Listo para elevar su experiencia?',
      ctaDesc: 'Únase a las organizaciones que confían en nosotros.',
      ctaButton: 'Empezar Hoy',
      cards: [
        "Experiencia probada con organizaciones profesionales.",
        "Comunicación multilingüe en inglés, español y árabe.",
        "Guiones de llamadas personalizados.",
        "Informes fiables con seguimiento constante.",
        "Socio de confianza que garantiza operaciones fluidas.",
        "Soporte personalizado que trabaja como parte de su equipo.",
        "Elegido por organizaciones que valoran el cuidado."
      ]
    },
    mission: {
      purpose: 'Propósito',
      missionTitle: 'Nuestra Misión',
      missionDesc: 'Ofrecer experiencias significativas a través de comunicación experta y tecnología inteligente.',
      future: 'Futuro',
      visionTitle: 'Nuestra Visión',
      visionDesc: 'Convertirnos en el socio de comunicación de confianza conocido por la excelencia, integridad y cuidado, no solo respondiendo llamadas, sino creando interacciones humanas significativas con conexión cálida.',
      cardTitle: 'La Conexión que Impulsa el Éxito',
      cardDesc: 'Creamos el entorno donde sus pacientes se sienten escuchados.'
    },
    careers: {
      tag: 'Únete al Equipo',
      title: 'Construye tu Futuro en',
      desc: 'Siempre buscamos personas talentosas y empáticas para unirse a nuestra familia.',
      hiring: 'Contratando Especialista en Atención al Cliente',
      growth: 'Crecimiento Profesional',
      growthDesc: 'Trayectorias profesionales estructuradas.',
      culture: 'Gran Cultura',
      cultureDesc: 'Un lugar de trabajo que valora el respeto y la innovación.',
      formTitle: 'Formulario de Solicitud',
      secure: 'SSL SEGURO',
      labels: {
        date: 'Fecha de Solicitud',
        name: 'Nombre Completo',
        dob: 'Fecha de Nacimiento',
        phone: 'Número de Teléfono',
        email: 'Correo Electrónico',
        address: 'Dirección',
        city: 'Ciudad',
        state: 'Estado'
      },
      submit: 'Enviar Solicitud',
      submitting: 'Enviando...',
      success: '¡Solicitud Recibida!',
      successDesc: 'Gracias por su interés. Nuestro equipo de RRHH revisará su solicitud pronto.',
      reset: 'Enviar otra solicitud'
    },
    footer: {
      tag: 'La Conexión que Impulsa el Éxito.',
      scan: 'Escanear aquí',
      company: 'Empresa',
      services: 'Servicios',
      connect: 'Conectar',
      rights: '© 2026 Sinai Connect. Todos los derechos reservados.'
    },
    portal: {
      dashboard: 'Resumen del Panel',
      welcome: "¡Bienvenido de nuevo! Esto es lo que está pasando hoy.",
      updated: 'Última actualización: Ahora',
      stats: {
        calls: 'Llamadas Totales',
        answer: 'Tasa de Respuesta',
        handle: 'Tiempo Promedio',
        appt: 'Citas Fijadas'
      },
      chart: 'Métricas de Volumen y Respuesta',
      reports: 'Informes Recientes',
      viewAll: 'Ver Todo',
      request: 'Solicitar Informe Personalizado'
    },
    login: {
      title: 'Portal del Cliente',
      subtitle: 'Acceso seguro a sus métricas de rendimiento.',
      email: 'Correo Electrónico',
      password: 'Contraseña',
      button: 'Acceder al Panel',
      forgot: '¿Olvidó su contraseña?',
      secure: 'Protegido por Encriptación SSL de 256 bits'
    }
  },
  de: {
    brandName: 'Sinai Connect',
    nav: {
      solutions: 'Lösungen',
      whyUs: 'Warum Wir',
      mission: 'Mission',
      careers: 'Karriere',
      portal: 'Kundenportal',
      login: 'Portal Login'
    },
    hero: {
      tag: 'Medizinische & Klinikunterstützung',
      headlineStart: 'Ihre Brücke',
      headlineEnd: 'zum Erfolg',
      subhead: 'Hinter jedem Anruf steht ein Team, das zuhört und versteht. Wir bauen Vertrauen und dauerhafte Beziehungen auf.',
      cta: 'Verbinden',
      services: 'Dienste Ansehen',
      statLabel: 'Patientenzufriedenheit',
      statSub: 'Konsistente Qualitätspflege'
    },
    services: {
      tag: 'Umfassende Pflege',
      title: 'Unterstützungsdienste',
      tabs: {
        medical: 'Medizinische Unterstützung'
      },
      medical: [
        'Patiententermine planen und bestätigen.',
        'Eingehende und ausgehende Anrufe über Ihr Kliniksystem verwalten.',
        'Verpasste Besuche neu planen und offene Zeitfenster füllen.',
        'Nachsorgetermine buchen und Versicherungen überprüfen.',
        'Support und Beruhigung außerhalb der Geschäftszeiten bieten.',
        'Outreach-Kampagnen durchführen, um Patienten zu gewinnen und einzubinden.',
        'Feedback sammeln und Erkenntnisse teilen, um Pflege und Effizienz zu verbessern.'
      ]
    },
    why: {
      tag: 'Der Sinai Unterschied',
      title: 'Warum Partner von',
      subtitle: 'Wir sind mehr als ein Callcenter. Wir sind eine Erweiterung Ihrer Praxis.',
      ctaTitle: 'Bereit, Ihre Erfahrung zu verbessern?',
      ctaDesc: 'Schließen Sie sich den Organisationen an, die uns vertrauen.',
      ctaButton: 'Heute Starten',
      cards: [
        "Bewährte Erfahrung mit professionellen Organisationen.",
        "Mehrsprachige Kommunikation in Englisch, Spanisch und Arabisch.",
        "Benutzerdefinierte Anrufskripte.",
        "Zuverlässige Berichte mit konsistenter Leistungsverfolgung.",
        "Vertrauenswürdiger Partner für reibungslose Abläufe.",
        "Personalisierter Support als Teil Ihres Teams.",
        "Gewählt von Organisationen, die Pflege schätzen."
      ]
    },
    mission: {
      purpose: 'Zweck',
      missionTitle: 'Unsere Mission',
      missionDesc: 'Bedeutungsvolle Kundenerlebnisse durch kompetente Kommunikation und intelligente Lösungen liefern.',
      future: 'Zukunft',
      visionTitle: 'Unsere Vision',
      visionDesc: 'Der vertrauenswürdige Kommunikationspartner für Exzellenz, Integrität und Pflege zu werden, nicht nur Anrufe zu beantworten, sondern bedeutungsvolle menschliche Interaktionen mit warmer Verbindung zu schaffen.',
      cardTitle: 'Die Verbindung, die Erfolg treibt',
      cardDesc: 'Wir schaffen die Umgebung, in der sich Ihre Patienten gehört fühlen.'
    },
    careers: {
      tag: 'Komm in unser Team',
      title: 'Bau deine Zukunft bei',
      desc: 'Wir suchen immer nach talentierten, einfühlsamen Personen.',
      hiring: 'Wir stellen ein: Kundendienstspezialist',
      growth: 'Berufliches Wachstum',
      growthDesc: 'Strukturierte Karrierewege und fortlaufende Schulungen.',
      culture: 'Großartige Kultur',
      cultureDesc: 'Ein Arbeitsplatz, der Respekt und Innovation schätzt.',
      formTitle: 'Bewerbungsformular',
      secure: 'SICHER SSL',
      labels: {
        date: 'Bewerbungsdatum',
        name: 'Vollständiger Name',
        dob: 'Geburtsdatum',
        phone: 'Telefonnummer',
        email: 'E-Mail-Adresse',
        address: 'Adresse',
        city: 'Stadt',
        state: 'Bundesland'
      },
      submit: 'Bewerbung Absenden',
      submitting: 'Wird gesendet...',
      success: 'Bewerbung Empfangen!',
      successDesc: 'Vielen Dank für Ihr Interesse. Unser HR-Team wird Ihre Bewerbung bald prüfen.',
      reset: 'Weitere Bewerbung senden'
    },
    footer: {
      tag: 'Die Verbindung, die Erfolg treibt.',
      scan: 'Hier scannen',
      company: 'Unternehmen',
      services: 'Dienstleistungen',
      connect: 'Verbinden',
      rights: '© 2026 Sinai Connect. Alle Rechte vorbehalten.'
    },
    portal: {
      dashboard: 'Dashboard-Übersicht',
      welcome: "Willkommen zurück! Hier ist, was heute passiert.",
      updated: 'Zuletzt aktualisiert: Gerade eben',
      stats: {
        calls: 'Anrufe Heute',
        answer: 'Antwortrate',
        handle: 'Durchschn. Bearbeitungszeit',
        appt: 'Termine Festgelegt'
      },
      chart: 'Anrufvolumen & Antwortmetriken',
      reports: 'Aktuelle Berichte',
      viewAll: 'Alle Anzeigen',
      request: 'Benutzerdefinierten Bericht anfordern'
    },
    login: {
      title: 'Kundenportal',
      subtitle: 'Sicherer Zugriff auf Ihre Leistungskennzahlen.',
      email: 'E-Mail-Adresse',
      password: 'Passwort',
      button: 'Dashboard Aufrufen',
      forgot: 'Passwort vergessen?',
      secure: 'Geschützt durch 256-Bit-SSL-Verschlüsselung'
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations['en'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Handle RTL
    if (language === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = language;
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Use CDN for flags to ensure cross-platform compatibility (Windows doesn't render flag emojis well)
export const flags = {
  en: 'https://flagcdn.com/w40/us.png',
  ar: 'https://flagcdn.com/w40/eg.png',
  es: 'https://flagcdn.com/w40/es.png',
  de: 'https://flagcdn.com/w40/de.png'
};

export const languageNames = {
  en: 'English',
  ar: 'العربية',
  es: 'Español',
  de: 'Deutsch'
};