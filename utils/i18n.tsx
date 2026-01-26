import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'ar' | 'es' | 'de' | 'fr';

export const translations = {
  en: {
    brandName: 'Sinai Connect',
    nav: {
      welcome: 'Welcome',
      customized: 'Solutions',
      solutions: 'Services',
      whyUs: 'Why Us',
      mission: 'Mission',
      careers: 'Careers',
      portal: 'Client Portal',
      login: 'Client Portal Login',
      about: 'About Us',
      blog: 'Insights & Blog',
      faq: 'FAQ'
    },
    hero: {
      tag: 'Medical Support & Business Customer Service',
      welcome: 'Welcome To Sinai Connect',
      headlineStart: 'Your Bridge',
      headlineEnd: 'To Success',
      subhead: 'Behind every call is a team that listens, understands, and cares. We go beyond communication to build trust, comfort, and lasting relationships through respect, dedication, and excellence.',
      cta: "Let's Connect",
      services: 'View Services',
      statLabel: 'Client Satisfaction',
      statSub: 'Consistent quality service'
    },
    welcome: {
      tag: 'Welcome to Sinai Connect',
      title: 'Welcome to Sinai Connect',
      paragraph1: 'At Sinai Connect, we believe every organization deserves a partner who truly listens. We offer more than call center services. We offer real human connection. Our team supports clinics, hospitals, and businesses across different industries with care, clarity, and consistency.',
      paragraph2: 'We help communication run smoothly so your teams stay focused and your operations stay efficient. We take care of the conversations that matter, so you can focus on what you do best. Together, we build trust and long term success.',
      cards: {
        philosophy: 'Our Philosophy',
        commitment: 'Our Commitment'
      },
      values: [
        'Care & Compassion',
        'Human Connection',
        'Precision & Focus',
        'Excellence',
        'Growth Oriented',
        'Trust & Security'
      ],
      stats: {
        availability: 'Availability',
        languages: 'Languages Supported',
        satisfaction: 'Client Satisfaction'
      }
    },
    customized: {
      tag: 'Customized Solutions',
      title: 'Customized Solutions for Every Organization',
      paragraph1: 'Every organization works differently. A small clinic, a growing practice, a large hospital network, or a business in another industry all have unique needs and priorities. Sinai Connect takes the time to understand how you operate before offering support.',
      paragraph2: 'Our solutions are tailored to fit your workflow. From appointment scheduling and follow ups to handling inquiries and ongoing communication, our team integrates seamlessly into your daily operations. By handling day to day communication, we help you save time and focus on what truly matters, whether that is providing exceptional care or growing your business with confidence.',
      features: [
        'Tailored Workflow',
        'Scalable Growth',
        'Time Efficiency',
        'Seamless Integration'
      ]
    },
    services: {
      tag: 'Comprehensive Care',
      title: 'Support Services',
      tabs: {
        medical: 'Medical Support',
        customer: 'Customer Service'
      },
      medical: [
        'Schedule and confirm patient appointments.',
        'Manage inbound and outbound calls through your clinic system.',
        'Reschedule missed visits and fill open slots.',
        'Book follow ups and verify insurance.',
        'Provide after hours support and reassurance.',
        'Run outreach campaigns to grow and engage patients.',
        'Gather feedback and share insights to improve care and efficiency.'
      ],
      customer: [
        'Handle customer inquiries and resolve issues efficiently.',
        'Provide product support and troubleshooting assistance.',
        'Process orders, returns, and account management requests.',
        'Deliver multilingual support in English, Spanish, and Arabic.',
        'Offer 24/7 availability with extended hours coverage.',
        'Conduct follow ups to ensure customer satisfaction.',
        'Generate detailed reports and performance analytics.'
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
        state: 'State',
        message: 'Cover Letter / Message'
      },
      submit: 'Submit Application',
      submitting: 'Submitting...',
      success: 'Application Received!',
      successDesc: 'Thank you for your interest. Our HR team will review your application shortly.',
      reset: 'Submit another application'
    },
    footer: {
      tagline: 'The Connection That Drives Success',
      scan: 'Scan to Chat',
      scanDesc: 'Chat on WhatsApp',
      followUs: 'Follow Us',
      quickLinks: 'Quick Links',
      home: 'Home',
      company: 'Company',
      services: 'Our Services',
      contact: 'Contact Us',
      medicalSupport: 'Medical Support',
      customerService: 'Customer Service',
      appointmentScheduling: 'Appointment Scheduling',
      support247: '24/7 Support',
      claims: 'Claims Processing',
      outbound: 'Outbound Campaigns',
      multilingual: 'Multilingual Support',
      email: 'Email',
      website: 'Website',
      copyright: '© 2026 Sinai Connect. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      poweredBy: 'Designed & Developed by'
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
      welcome: 'مرحباً',
      customized: 'الحلول',
      solutions: 'الخدمات',
      whyUs: 'لماذا نحن',
      mission: 'رسالتنا',
      careers: 'الوظائف',
      portal: 'بوابة العملاء',
      login: 'دخول بوابة العملاء',
      about: 'معلومات عنا',
      blog: 'المدونة والرؤى',
      faq: 'الأسئلة الشائعة'
    },
    hero: {
      tag: 'دعم طبي وخدمة عملاء',
      welcome: 'مرحباً بكم في سيناي كونكت',
      headlineStart: 'جسركم',
      headlineEnd: 'نحو النجاح',
      subhead: 'خلف كل مكالمة فريق يستمع، يفهم، ويهتم. نحن نتجاوز مجرد التواصل لنبني الثقة والراحة وعلاقات تدوم.',
      cta: 'تواصل معنا',
      services: 'عرض الخدمات',
      statLabel: 'رضا العملاء',
      statSub: 'خدمة عالية الجودة'
    },
    welcome: {
      tag: 'مرحباً بكم في سيناي كونكت',
      title: 'مرحباً بكم في سيناي كونكت',
      paragraph1: 'في سيناي كونكت، نؤمن أن كل مؤسسة تحتاج إلى شريك يستمع ويفهم قبل أن يقدّم الحلول. نحن لا نقدّم خدمات مركز اتصال فقط، بل نركّز على بناء تواصل إنساني حقيقي. فريقنا يعمل مع العيادات والمستشفيات والشركات في مختلف القطاعات، ويقدّم دعماً منظماً وواضحاً يساعد على تحسين التواصل واستقرار نظام العمل.',
      paragraph2: 'نحن نتولى إدارة التواصل اليومي حتى تتمكنوا من التركيز على أعمالكم وتحقيق أفضل النتائج. معاً، نبني ثقة حقيقية ونجاحاً طويل الأمد.',
      cards: {
        philosophy: 'فلسفتنا',
        commitment: 'التزامنا'
      },
      values: [
        'الرعاية والتعاطف',
        'التواصل الإنساني',
        'الدقة والتركيز',
        'التميّز',
        'موجّه نحو النمو',
        'الثقة والأمان'
      ],
      stats: {
        availability: 'التوفر',
        languages: 'اللغات المدعومة',
        satisfaction: 'رضا العملاء'
      }
    },
    customized: {
      tag: 'حلول مخصصة',
      title: 'حلول مخصصة لكل مؤسسة',
      paragraph1: 'كل مؤسسة لها طبيعة عمل مختلفة. سواء كانت عيادة صغيرة، أو منشأة في مرحلة نمو، أو شبكة مستشفيات كبيرة، أو شركة تعمل في أي قطاع آخر، فلكل منها احتياجاتها وأولوياتها الخاصة. في سيناي كونكت، نبدأ دائماً بفهم طريقة عملكم بشكل دقيق قبل تقديم أي دعم.',
      paragraph2: 'حلولنا مصممة لتتناسب مع نظام العمل لديكم. من تنظيم وجدولة المواعيد والمتابعة، إلى التعامل مع الاستفسارات وإدارة التواصل المستمر، يندمج فريقنا بسلاسة مع العمل اليومي لديكم. من خلال تولي مهام التواصل اليومي، نساعدكم على توفير الوقت والتركيز على ما هو أهم، سواء كان تقديم رعاية أفضل للمرضى أو تطوير أعمالكم بثقة واستقرار.',
      features: [
        'سير عمل مخصص',
        'نمو قابل للتوسع',
        'كفاءة الوقت',
        'تكامل سلس'
      ]
    },
    services: {
      tag: 'رعاية شاملة',
      title: 'خدمات الدعم',
      tabs: {
        medical: 'الدعم الطبي',
        customer: 'خدمة العملاء'
      },
      medical: [
        'جدولة وتأكيد مواعيد المرضى.',
        'إدارة المكالمات الواردة والصادرة عبر نظام عيادتك.',
        'إعادة جدولة الزيارات الفائتة وملء الأوقات المفتوحة.',
        'حجز المتابعة والتحقق من التأمين.',
        'تقديم الدعم والطمأنينة خارج ساعات العمل.',
        'إجراء حملات للتواصل لنمو وإشراك المرضى.',
        'جمع الملاحظات ومشاركة الأفكار لتحسين الرعاية والكفاءة.'
      ],
      customer: [
        'التعامل مع استفسارات العملاء وحل المشكلات بكفاءة.',
        'تقديم دعم المنتجات والمساعدة في استكشاف الأخطاء وإصلاحها.',
        'معالجة الطلبات والمرتجعات وطلبات إدارة الحسابات.',
        'تقديم دعم متعدد اللغات بالإنجليزية والإسبانية والعربية.',
        'توفر على مدار الساعة طوال أيام الأسبوع مع تغطية ساعات ممتدة.',
        'إجراء متابعة لضمان رضا العملاء.',
        'إنشاء تقارير مفصلة وتحليلات الأداء.'
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
        state: 'المنطقة/المحافظة',
        message: 'رسالة / خطاب تغطية'
      },
      submit: 'إرسال الطلب',
      submitting: 'جاري الإرسال...',
      success: 'تم استلام الطلب!',
      successDesc: 'شكراً لاهتمامك. سيقوم فريق الموارد البشرية بمراجعة طلبك قريباً.',
      reset: 'تقديم طلب آخر'
    },
    footer: {
      tagline: 'الاتصال الذي يدفع للنجاح',
      scan: 'امسح للمحادثة',
      scanDesc: 'تواصل عبر واتساب',
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
      claims: 'معالجة المطالبات',
      outbound: 'حملات الاتصال الصادر',
      multilingual: 'دعم متعدد اللغات',
      email: 'البريد الإلكتروني',
      website: 'الموقع الإلكتروني',
      copyright: '© 2026 سيناي كونكت. جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      poweredBy: 'تصميم وتطوير'
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
      welcome: 'Bienvenida',
      customized: 'Soluciones',
      solutions: 'Servicios',
      whyUs: 'Por Qué Nosotros',
      mission: 'Misión',
      careers: 'Carreras',
      portal: 'Portal Cliente',
      login: 'Acceso Portal',
      about: 'Sobre Nosotros',
      blog: 'Blog e Ideas',
      faq: 'Preguntas Frecuentes'
    },
    hero: {
      tag: 'Soporte Médico y Servicio al Cliente',
      welcome: 'Bienvenidos a Sinai Connect',
      headlineStart: 'Tu Puente',
      headlineEnd: 'Hacia El Éxito',
      subhead: 'Detrás de cada llamada hay un equipo que escucha, entiende y se preocupa. Vamos más allá de la comunicación para construir confianza.',
      cta: 'Conectemos',
      services: 'Ver Servicios',
      statLabel: 'Satisfacción del Cliente',
      statSub: 'Servicio de calidad constante'
    },
    welcome: {
      tag: 'Bienvenidos a Sinai Connect',
      title: 'Bienvenidos a Sinai Connect',
      paragraph1: 'En Sinai Connect creemos que toda organización merece un socio que realmente escuche. Ofrecemos más que servicios de call center. Ofrecemos una conexión humana auténtica. Nuestro equipo apoya a clínicas, hospitales y empresas de distintos sectores con atención, claridad y constancia.',
      paragraph2: 'Facilitamos una comunicación fluida para que sus equipos se mantengan enfocados y sus operaciones funcionen con eficiencia. Nos ocupamos de las conversaciones importantes para que usted pueda concentrarse en lo que mejor sabe hacer. Juntos construimos confianza y un crecimiento sostenible.',
      cards: {
        philosophy: 'Nuestra Filosofía',
        commitment: 'Nuestro Compromiso'
      },
      values: [
        'Cuidado y Compasión',
        'Conexión Humana',
        'Precisión y Enfoque',
        'Excelencia',
        'Orientado al Crecimiento',
        'Confianza y Seguridad'
      ],
      stats: {
        availability: 'Disponibilidad',
        languages: 'Idiomas Soportados',
        satisfaction: 'Satisfacción del Cliente'
      }
    },
    customized: {
      tag: 'Soluciones Personalizadas',
      title: 'Soluciones personalizadas para cada organización',
      paragraph1: 'Cada organización funciona de manera diferente. Una clínica pequeña, una práctica en crecimiento, una gran red hospitalaria o una empresa de otro sector tienen necesidades y prioridades únicas. En Sinai Connect nos tomamos el tiempo para entender cómo trabaja su organización antes de ofrecer apoyo.',
      paragraph2: 'Nuestras soluciones se adaptan a su flujo de trabajo. Desde la programación de citas y los seguimientos hasta la gestión de consultas y la comunicación continua, nuestro equipo se integra de forma natural en sus operaciones diarias. Al encargarnos de la comunicación del día a día, le ayudamos a ahorrar tiempo y a enfocarse en lo que realmente importa, ya sea brindar una atención excepcional o hacer crecer su negocio con confianza.',
      features: [
        'Flujo de Trabajo Adaptado',
        'Crecimiento Escalable',
        'Eficiencia de Tiempo',
        'Integración Perfecta'
      ]
    },
    services: {
      tag: 'Atención Integral',
      title: 'Servicios de Apoyo',
      tabs: {
        medical: 'Soporte Médico',
        customer: 'Servicio al Cliente'
      },
      medical: [
        'Programar y confirmar citas de pacientes.',
        'Gestionar llamadas entrantes y salientes a través del sistema de su clínica.',
        'Reprogramar visitas perdidas y llenar espacios abiertos.',
        'Reservar seguimientos y verificar seguros.',
        'Proporcionar apoyo y tranquilidad fuera de horario.',
        'Ejecutar campañas de divulgación para crecer e involucrar pacientes.',
        'Recopilar comentarios y compartir ideas para mejorar la atención y eficiencia.'
      ],
      customer: [
        'Atender consultas de clientes y resolver problemas de manera eficiente.',
        'Brindar soporte de productos y asistencia de resolución de problemas.',
        'Procesar pedidos, devoluciones y solicitudes de gestión de cuentas.',
        'Ofrecer soporte multilingüe en inglés, español y árabe.',
        'Disponibilidad 24/7 con cobertura de horario extendido.',
        'Realizar seguimientos para garantizar la satisfacción del cliente.',
        'Generar informes detallados y análisis de rendimiento.'
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
        state: 'Estado',
        message: 'Carta de Presentación / Mensaje'
      },
      submit: 'Enviar Solicitud',
      submitting: 'Enviando...',
      success: '¡Solicitud Recibida!',
      successDesc: 'Gracias por su interés. Nuestro equipo de RRHH revisará su solicitud pronto.',
      reset: 'Enviar otra solicitud'
    },
    footer: {
      tagline: 'La Conexión Que Impulsa El Éxito',
      scan: 'Escanear para chatear',
      scanDesc: 'Chatear en WhatsApp',
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
      claims: 'Procesamiento de Reclamaciones',
      outbound: 'Campañas Salientes',
      multilingual: 'Soporte Multilingüe',
      email: 'Correo',
      website: 'Sitio Web',
      copyright: '© 2026 Sinai Connect. Todos los derechos reservados.',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      poweredBy: 'Diseñado y Desarrollado por'
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
      welcome: 'Willkommen',
      customized: 'Lösungen',
      solutions: 'Dienstleistungen',
      whyUs: 'Warum Wir',
      mission: 'Mission',
      careers: 'Karriere',
      portal: 'Kundenportal',
      login: 'Portal Login',
      about: 'Über Uns',
      blog: 'Blog & Einblicke',
      faq: 'Häufige Fragen'
    },
    hero: {
      tag: 'Medizinische Unterstützung & Kundenservice',
      welcome: 'Willkommen Bei Sinai Connect',
      headlineStart: 'Ihre Brücke',
      headlineEnd: 'Zum Erfolg',
      subhead: 'Hinter jedem Anruf steht ein Team, das zuhört und versteht. Wir bauen Vertrauen und dauerhafte Beziehungen auf.',
      cta: 'Verbinden',
      services: 'Dienste Ansehen',
      statLabel: 'Kundenzufriedenheit',
      statSub: 'Konsistente Servicequalität'
    },
    welcome: {
      tag: 'Willkommen bei Sinai Connect',
      title: 'Willkommen bei Sinai Connect',
      paragraph1: 'Bei Sinai Connect sind wir überzeugt, dass jede Organisation einen Partner verdient, der wirklich zuhört. Wir bieten mehr als Callcenter Dienstleistungen. Wir bieten echte menschliche Verbindung. Unser Team unterstützt Kliniken, Krankenhäuser und Unternehmen aus verschiedenen Branchen mit Sorgfalt, Klarheit und Verlässlichkeit.',
      paragraph2: 'Wir sorgen für reibungslose Kommunikation, damit Ihre Teams fokussiert arbeiten und Ihre Abläufe effizient bleiben. Wir kümmern uns um die wichtigen Gespräche, damit Sie sich auf das konzentrieren können, was Sie am besten können. Gemeinsam schaffen wir Vertrauen und langfristigen Erfolg.',
      cards: {
        philosophy: 'Unsere Philosophie',
        commitment: 'Unser Engagement'
      },
      values: [
        'Fürsorge & Mitgefühl',
        'Menschliche Verbindung',
        'Präzision & Fokus',
        'Exzellenz',
        'Wachstumsorientiert',
        'Vertrauen & Sicherheit'
      ],
      stats: {
        availability: 'Verfügbarkeit',
        languages: 'Unterstützte Sprachen',
        satisfaction: 'Kundenzufriedenheit'
      }
    },
    customized: {
      tag: 'Maßgeschneiderte Lösungen',
      title: 'Individuelle Lösungen für jede Organisation',
      paragraph1: 'Jede Organisation arbeitet anders. Eine kleine Praxis, eine wachsende Einrichtung, ein großes Krankenhausnetzwerk oder ein Unternehmen aus einer anderen Branche hat eigene Anforderungen und Prioritäten. Sinai Connect nimmt sich die Zeit, Ihre Arbeitsweise zu verstehen, bevor Unterstützung angeboten wird.',
      paragraph2: 'Unsere Lösungen passen sich Ihren Abläufen an. Von Terminplanung und Nachfassgesprächen bis hin zur Bearbeitung von Anfragen und laufender Kommunikation integriert sich unser Team nahtlos in Ihren Arbeitsalltag. Durch die Übernahme der täglichen Kommunikation helfen wir Ihnen, Zeit zu sparen und sich auf das Wesentliche zu konzentrieren, sei es eine exzellente Patientenversorgung oder das Wachstum Ihres Unternehmens mit Zuversicht.',
      features: [
        'Angepasster Workflow',
        'Skalierbares Wachstum',
        'Zeiteffizienz',
        'Nahtlose Integration'
      ]
    },
    services: {
      tag: 'Umfassende Pflege',
      title: 'Unterstützungsdienste',
      tabs: {
        medical: 'Medizinische Unterstützung',
        customer: 'Kundenservice'
      },
      medical: [
        'Patiententermine planen und bestätigen.',
        'Eingehende und ausgehende Anrufe über Ihr Kliniksystem verwalten.',
        'Verpasste Besuche neu planen und offene Zeitfenster füllen.',
        'Nachsorgetermine buchen und Versicherungen überprüfen.',
        'Support und Beruhigung außerhalb der Geschäftszeiten bieten.',
        'Outreach-Kampagnen durchführen, um Patienten zu gewinnen und einzubinden.',
        'Feedback sammeln und Erkenntnisse teilen, um Pflege und Effizienz zu verbessern.'
      ],
      customer: [
        'Kundenanfragen bearbeiten und Probleme effizient lösen.',
        'Produktunterstützung und Fehlerbehebungshilfe bereitstellen.',
        'Bestellungen, Rücksendungen und Kontoverwaltungsanfragen bearbeiten.',
        'Mehrsprachigen Support in Englisch, Spanisch und Arabisch anbieten.',
        'Verfügbarkeit rund um die Uhr mit erweiterter Abdeckung.',
        'Nachverfolgungen durchführen, um Kundenzufriedenheit sicherzustellen.',
        'Detaillierte Berichte und Leistungsanalysen erstellen.'
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
        state: 'Bundesland',
        message: 'Anschreiben / Nachricht'
      },
      submit: 'Bewerbung Absenden',
      submitting: 'Wird gesendet...',
      success: 'Bewerbung Empfangen!',
      successDesc: 'Vielen Dank für Ihr Interesse. Unser HR-Team wird Ihre Bewerbung bald prüfen.',
      reset: 'Weitere Bewerbung senden'
    },
    footer: {
      tagline: 'Die Verbindung Die Zum Erfolg Führt',
      scan: 'Scannen zum Chatten',
      scanDesc: 'Chat auf WhatsApp',
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
      claims: 'Schadensbearbeitung',
      outbound: 'Outbound-Kampagnen',
      multilingual: 'Mehrsprachiger Support',
      email: 'E-Mail',
      website: 'Webseite',
      copyright: '© 2026 Sinai Connect. Alle Rechte vorbehalten.',
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
      poweredBy: 'Entworfen & Entwickelt von'
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
  },
  fr: {
    brandName: 'Sinai Connect',
    nav: {
      welcome: 'Accueil',
      customized: 'Solutions',
      solutions: 'Services',
      whyUs: 'Pourquoi Nous',
      mission: 'Mission',
      careers: 'Carrières',
      portal: 'Portail Client',
      login: 'Connexion Portail',
      about: 'À Propos',
      blog: 'Blog & Infos',
      faq: 'FAQ'
    },
    hero: {
      tag: 'Support Médical & Service Client',
      welcome: 'Bienvenue à Sinai Connect',
      headlineStart: 'Votre Pont',
      headlineEnd: 'Vers Le Succès',
      subhead: 'Derrière chaque appel se trouve une équipe qui écoute, comprend et se soucie. Nous allons au-delà de la communication pour bâtir la confiance.',
      cta: 'Connectons-nous',
      services: 'Voir Services',
      statLabel: 'Satisfaction Client',
      statSub: 'Qualité de service constante'
    },
    welcome: {
      tag: 'Bienvenue à Sinai Connect',
      title: 'Bienvenue à Sinai Connect',
      paragraph1: "Chez Sinai Connect, nous croyons que chaque organisation mérite un partenaire qui écoute vraiment. Nous offrons plus que des services de centre d'appels. Nous offrons une véritable connexion humaine.",
      paragraph2: 'Nous aidons la communication à se dérouler sans heurts afin que vos équipes restent concentrées. Nous prenons soin des conversations qui comptent.',
      cards: {
        philosophy: 'Notre Philosophie',
        commitment: 'Notre Engagement'
      },
      values: [
        'Soin & Compassion',
        'Connexion Humaine',
        'Précision & Focus',
        'Excellence',
        'Orienté Croissance',
        'Confiance & Sécurité'
      ],
      stats: {
        availability: 'Disponibilité',
        languages: 'Langues Supportées',
        satisfaction: 'Satisfaction Client'
      }
    },
    customized: {
      tag: 'Solutions Personnalisées',
      title: 'Solutions personnalisées pour chaque organisation',
      paragraph1: "Chaque organisation fonctionne différemment. Une petite clinique, une pratique en croissance ou un grand réseau hospitalier ont des besoins uniques. Sinai Connect prend le temps de comprendre comment vous fonctionnez.",
      paragraph2: "Nos solutions sont adaptées à votre flux de travail. De la planification des rendez-vous au suivi et à la gestion des demandes, notre équipe s'intègre parfaitement à vos opérations quotidiennes.",
      features: [
        'Flux de travail adapté',
        'Croissance évolutive',
        'Efficacité temporelle',
        'Intégration transparente'
      ]
    },
    services: {
      tag: 'Soins Complets',
      title: 'Services de Support',
      tabs: {
        medical: 'Support Médical',
        customer: 'Service Client'
      },
      medical: [
        'Planifier et confirmer les rendez-vous des patients.',
        'Gérer les appels entrants et sortants via votre système clinique.',
        'Reprogrammer les visites manquées.',
        'Réserver des suivis et vérifier les assurances.',
        'Fournir un soutien après les heures de bureau.',
        'Mener des campagnes de sensibilisation.',
        'Recueillir des commentaires pour améliorer les soins.'
      ],
      customer: [
        'Traiter les demandes des clients et résoudre les problèmes.',
        'Fournir un support produit et une assistance au dépannage.',
        'Traiter les commandes, les retours et la gestion des comptes.',
        'Offrir un support multilingue en anglais, espagnol et arabe.',
        'Disponibilité 24/7 avec couverture étendue.',
        'Effectuer des suivis pour assurer la satisfaction.',
        'Générer des rapports détaillés.'
      ]
    },
    why: {
      tag: 'La Différence Sinai',
      title: 'Pourquoi Partenaire avec',
      subtitle: "Nous sommes plus qu'un centre d'appels. Nous sommes une extension de votre pratique.",
      ctaTitle: 'Prêt à élever votre expérience ?',
      ctaDesc: 'Rejoignez les organisations qui nous font confiance.',
      ctaButton: 'Commencer',
      cards: [
        "Expérience prouvée avec des organisations professionnelles.",
        "Communication multilingue.",
        "Scénarios d'appels personnalisés.",
        "Rapports fiables avec suivi constant.",
        "Partenaire de confiance assurant des opérations fluides.",
        "Support personnalisé travaillant comme partie de votre équipe.",
        "Choisi par des organisations qui valorisent le soin."
      ]
    },
    mission: {
      purpose: 'But',
      missionTitle: 'Notre Mission',
      missionDesc: 'Offrir des expériences client significatives grâce à une communication experte et une technologie intelligente.',
      future: 'Futur',
      visionTitle: 'Notre Vision',
      visionDesc: 'Devenir le partenaire de confiance connu pour son excellence et son intégrité, créant des interactions humaines significatives.',
      cardTitle: 'La Connexion Qui Mène au Succès',
      cardDesc: 'Nous créons un environnement où vos patients se sentent écoutés.'
    },
    careers: {
      tag: 'Rejoignez Notre Équipe',
      title: 'Construisez Votre Avenir chez',
      desc: 'Nous recherchons toujours des personnes talentueuses et empathiques.',
      hiring: 'Nous embauchons : Spécialiste du Support Client',
      growth: 'Croissance Professionnelle',
      growthDesc: 'Parcours de carrière structurés et formation continue.',
      culture: 'Grande Culture',
      cultureDesc: "Un lieu de travail qui valorise le respect et l'innovation.",
      formTitle: 'Formulaire de Candidature',
      secure: 'SÉCURISÉ SSL',
      labels: {
        date: 'Date de Candidature',
        name: 'Nom Complet',
        dob: 'Date de Naissance',
        phone: 'Numéro de Téléphone',
        email: 'Adresse Email',
        address: 'Adresse',
        city: 'Ville',
        state: 'État',
        message: 'Lettre de Motivation / Message'
      },
      submit: 'Envoyer la Candidature',
      submitting: 'Envoi en cours...',
      success: 'Candidature Reçue !',
      successDesc: "Merci de votre intérêt. Notre équipe RH examinera votre candidature bientôt.",
      reset: 'Envoyer une autre candidature'
    },
    footer: {
      tagline: 'La Connexion Qui Mène au Succès',
      scan: 'Scanner pour discuter',
      scanDesc: 'Discuter sur WhatsApp',
      followUs: 'Suivez-nous',
      quickLinks: 'Liens Rapides',
      home: 'Accueil',
      company: 'Société',
      services: 'Nos Services',
      contact: 'Contactez-nous',
      medicalSupport: 'Support Médical',
      customerService: 'Service Client',
      appointmentScheduling: 'Prise de Rendez-vous',
      support247: 'Support 24/7',
      claims: 'Traitement des Réclamations',
      outbound: 'Campagnes Sortantes',
      multilingual: 'Support Multilingue',
      email: 'Email',
      website: 'Site Web',
      copyright: '© 2026 Sinai Connect. Tous droits réservés.',
      privacy: 'Politique de Confidentialité',
      terms: "Conditions d'Utilisation",
      poweredBy: 'Conçu et Développé par'
    },
    portal: {
      dashboard: 'Aperçu du Tableau de Bord',
      welcome: "Bon retour ! Voici ce qui se passe aujourd'hui.",
      updated: "Dernière mise à jour : À l'instant",
      stats: {
        calls: "Total d'Appels",
        answer: 'Taux de Réponse',
        handle: 'Temps Moyen de Traitement',
        appt: 'Rendez-vous Fixés'
      },
      chart: 'Volume d\'Appels & Métriques',
      reports: 'Rapports Récents',
      viewAll: 'Voir Tout',
      request: 'Demander un Rapport Personnalisé'
    },
    login: {
      title: 'Portail Client',
      subtitle: 'Accès sécurisé à vos métriques de performance.',
      email: 'Adresse Email',
      password: 'Mot de passe',
      button: 'Accéder au Tableau de Bord',
      forgot: 'Mot de passe oublié ?',
      secure: 'Protégé par cryptage SSL 256 bits'
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
  de: 'https://flagcdn.com/w40/de.png',
  fr: 'https://flagcdn.com/w40/fr.png'
};

export const languageNames = {
  en: 'English',
  ar: 'العربية',
  es: 'Español',
  de: 'Deutsch',
  fr: 'Français'
};