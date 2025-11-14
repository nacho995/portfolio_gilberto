export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      expertise: 'Expertise',
      teaching: 'Teaching',
      experience: 'Experience',
      globalImpact: 'Global Impact',
      research: 'Research',
      contact: 'Contacto',
    },
    hero: {
      name: 'Gilberto Dalesio Delpini',
      subtitle: 'Global Executive Leader | Life Sciences & MedTech Transformation',
      tagline: '30+ años impulsando transformación, crecimiento y creación de valor sostenible en farmacéuticas y ciencias de la vida a nivel global',
      ctaPrimary: 'Conectar en LinkedIn',
      ctaSecondary: 'Consultoría Ejecutiva',
      stats: {
        years: 'Años de Experiencia',
        continents: 'Continentes',
        companies: 'Empresas Transformadas',
        mna: 'M&A Lideradas',
      },
    },
    valueProposition: {
      title: 'Propuesta de Valor',
      subtitle: 'Cuatro décadas de liderazgo ejecutivo transformando organizaciones globales en ciencias de la vida',
      pillars: {
        transformation: {
          title: 'Transformación Estratégica',
          description: 'Liderazgo en procesos de cambio organizacional que generan valor sostenible y alinean personas con objetivos de negocio.',
        },
        mna: {
          title: 'Liderazgo en M&A',
          description: 'Experiencia comprobada en fusiones, adquisiciones e integración post-fusión en sectores altamente regulados.',
        },
        expansion: {
          title: 'Expansión Global',
          description: 'Gestión de operaciones internacionales en 4 continentes con responsabilidad P&L y desarrollo de nuevos mercados.',
        },
        governance: {
          title: 'Gobernanza Corporativa',
          description: 'Asesoría estratégica a juntas directivas y alta dirección en toma de decisiones críticas y gobierno empresarial.',
        },
      },
    },
    contact: {
      title: 'Consultoría Ejecutiva',
      subtitle: '¿Su organización enfrenta desafíos estratégicos en expansión, transformación o M&A? Conversemos sobre cómo mi experiencia puede aportar valor a su junta directiva o equipo ejecutivo.',
      connectTitle: 'Conectar',
      connectText: 'Disponible para asesoría estratégica a juntas directivas, consultoría en transformación empresarial y oportunidades de liderazgo ejecutivo en ciencias de la vida.',
      form: {
        name: 'Nombre Completo',
        namePlaceholder: 'Nombre y apellido',
        email: 'Email Corporativo',
        emailPlaceholder: 'email@empresa.com',
        message: 'Consulta',
        messagePlaceholder: 'Describa brevemente el desafío estratégico o la oportunidad de consultoría...',
        submit: 'Enviar Consulta',
        sending: 'Enviando...',
        success: '¡Mensaje enviado exitosamente! Te contactaré pronto.',
        error: 'Error al enviar. Por favor intenta de nuevo o contacta directamente por LinkedIn.',
      },
      footer: '© 2024 Gilberto Dalesio Delpini. Executive Consulting & Board Advisory.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      expertise: 'Expertise',
      teaching: 'Teaching',
      experience: 'Experience',
      globalImpact: 'Global Impact',
      research: 'Research',
      contact: 'Contact',
    },
    hero: {
      name: 'Gilberto Dalesio Delpini',
      subtitle: 'Global Executive Leader | Life Sciences & MedTech Transformation',
      tagline: '30+ years driving transformation, growth and sustainable value creation in pharmaceuticals and life sciences at a global level',
      ctaPrimary: 'Connect on LinkedIn',
      ctaSecondary: 'Executive Consulting',
      stats: {
        years: 'Years of Experience',
        continents: 'Continents',
        companies: 'Transformed Companies',
        mna: 'M&A Led',
      },
    },
    valueProposition: {
      title: 'Value Proposition',
      subtitle: 'Four decades of executive leadership transforming global organizations in life sciences',
      pillars: {
        transformation: {
          title: 'Strategic Transformation',
          description: 'Leadership in organizational change processes that generate sustainable value and align people with business objectives.',
        },
        mna: {
          title: 'M&A Leadership',
          description: 'Proven experience in mergers, acquisitions and post-merger integration in highly regulated sectors.',
        },
        expansion: {
          title: 'Global Expansion',
          description: 'Management of international operations across 4 continents with P&L responsibility and new market development.',
        },
        governance: {
          title: 'Corporate Governance',
          description: 'Strategic advisory to boards of directors and senior management in critical decision-making and corporate governance.',
        },
      },
    },
    contact: {
      title: 'Executive Consulting',
      subtitle: 'Does your organization face strategic challenges in expansion, transformation or M&A? Let\'s discuss how my experience can add value to your board or executive team.',
      connectTitle: 'Connect',
      connectText: 'Available for strategic board advisory, business transformation consulting and executive leadership opportunities in life sciences.',
      form: {
        name: 'Full Name',
        namePlaceholder: 'First and last name',
        email: 'Corporate Email',
        emailPlaceholder: 'email@company.com',
        message: 'Inquiry',
        messagePlaceholder: 'Briefly describe the strategic challenge or consulting opportunity...',
        submit: 'Send Inquiry',
        sending: 'Sending...',
        success: 'Message sent successfully! I will contact you soon.',
        error: 'Error sending. Please try again or contact directly via LinkedIn.',
      },
      footer: '© 2024 Gilberto Dalesio Delpini. Executive Consulting & Board Advisory.',
    },
  },
}

export type Language = 'es' | 'en'
export type TranslationKey = keyof typeof translations.es

