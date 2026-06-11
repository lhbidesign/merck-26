// src/data/content.js
import iconShake from '../assets/images/icon-shake.svg?raw';
import iconChat from '../assets/images/icon-chat.svg?raw';
import iconGroup from '../assets/images/icon-group.svg?raw';
import iconQuestion from '../assets/images/icon-question.svg?raw';
import iconAuth from '../assets/images/icon-auth.svg?raw';
import iconLove from '../assets/images/icon-love.svg?raw';
import iconChoice from '../assets/images/icon-choice.svg?raw';
import iconFiles from '../assets/images/icon-files.svg?raw';
import iconOrganization from '../assets/images/icon-organization.svg?raw';
import iconPersonCheck from '../assets/images/icon-person-check.svg?raw';
import iconProtected from '../assets/images/icon-protected.svg?raw';
import iconRecipe from '../assets/images/icon-recipe.svg?raw';
import iconTrialsEnd from '../assets/images/icon-trial-end.svg?raw';
import iconWarning from '../assets/images/icon-warning.svg?raw';
import thumbTrustEn from '../assets/images/thumb-trust-en.jpg';
import thumbTrialsEn from '../assets/images/thumb-trials-en.jpg';
import imgEra1 from '../assets/images/image-era-1.jpg';
import imgEra2 from '../assets/images/image-era-2.jpg';
import imgEra3 from '../assets/images/image-era-3.jpg';
import imgEra4 from '../assets/images/image-era-4.jpg';

export const dashboardContent = {
  en: {
    title: "Resource Center",
    subtitle: "Select a module to explore",
    cards: {
      quiz: "Clinical Trials Quiz",
      care: "Care Partners Tips",
      timeline: "Interactive Timeline",
      faqs: "FAQs",
      videos: "Videos"
    }
  },
  es: {
    title: "Centro de Recursos",
    subtitle: "Seleccione un módulo para explorar",
    cards: {
      quiz: "Cuestionario de Ensayos Clínicos",
      care: "Consejos para Cuidadores",
      timeline: "Línea de Tiempo Interactiva",
      faqs: "Preguntas Frecuentes",
      videos: "Videos"
    }
  }
};

export const carePartnersContent = {
  en: {
    navTitle: "Care Partners",
    header: "Care Partners and Conversations That Move Us Forward",
    items: [
      { id: 1, title: "Care partners play a powerful role", text: "As a care partner, your support can make a world of difference...", icon: iconShake },
      { id: 2, title: "You can help start the conversation", text: "Talking about clinical trials isn't always easy. But asking, \"Have you ever discussed clinical trials with your doctor?\" or \"Would you want to learn more together?\" can help open the door. You don't need all the answers — just the desire to support them.", icon: iconChat },
      { id: 3, title: "You don't have to do it alone", text: "There are numerous resources and support groups available for care partners.", icon: iconGroup },
      { id: 4, title: "Questions are a good thing", text: "Always feel empowered to ask the medical team questions on behalf of your loved one.", icon: iconQuestion },
      { id: 5, title: "Every decision is personal", text: "Choosing to participate in a clinical trial is a highly personal decision made between the patient and their doctor.", icon: iconAuth },
      { id: 6, title: "You deserve care, too", text: "Remember to take time for your own physical and mental well-being.", icon: iconLove }
    ]
  },
  es: {
    navTitle: "Compañeros de Cuidado",
    header: "Compañeros de Cuidado y Conversaciones Que Nos Impulsan",
    items: [
      { id: 1, title: "Los compañeros de cuidado juegan un papel poderoso", text: "Como compañero de cuidado, su apoyo puede hacer un mundo de diferencia...", icon: iconShake },
      { id: 2, title: "Usted puede ayudar a iniciar la conversación", text: "Hablar de ensayos clínicos no siempre es fácil...", icon: iconChat },
      { id: 3, title: "No tienes que hacerlo solo", text: "Existen numerosos recursos y grupos de apoyo disponibles.", icon: iconGroup },
      { id: 4, title: "Las preguntas son algo bueno", text: "Siéntase siempre capacitado para hacer preguntas al equipo médico.", icon: iconQuestion },
      { id: 5, title: "Cada decisión es personal", text: "Elegir participar en un ensayo clínico es una decisión muy personal.", icon: iconAuth },
      { id: 6, title: "Usted también merece cuidado", text: "Recuerde tomar tiempo para su propio bienestar físico y mental.", icon: iconLove }
    ]
  }
};

export const faqsContent = {
  en: {
    navTitle: "Frequently Asked Questions",
    header: "Navigating conversations:\nHow to talk about clinical trials",
    items: [
      { id: 1, title: "What are clinical trials?", text: "Clinical trials are research studies performed in people that are aimed at evaluating a medical, surgical, or behavioral intervention.", icon: iconRecipe },
      { id: 2, title: "Who can participate in a clinical trial?", text: "Every clinical trial has strict rules about who can and cannot participate, known as eligibility criteria.", icon: iconPersonCheck },
      { id: 3, title: "What is the importance of clinical trial participation?", text: "Participants help researchers find better ways to treat, prevent, and understand human diseases.", icon: iconWarning },
      { id: 4, title: "Why does representation in clinical trials matter?", text: "People of different ages, races, and ethnicities may react differently to the same medical treatments.", icon: iconOrganization },
      { id: 5, title: "What do people need to do if they decide they want to participate in a clinical trial?", text: "The first step is speaking with your healthcare provider to find trials that might be a good match.", icon: iconFiles },
      { id: 6, title: "How can people make an informed decision about participation in a clinical trial?", text: "Through the informed consent process, researchers must explain all risks, benefits, and alternatives.", icon: iconChoice },
      { id: 7, title: "How are clinical trial participants protected?", text: "Institutional Review Boards (IRBs) and strict ethical guidelines ensure participant safety and rights.", icon: iconProtected },
      { id: 8, title: "What happens after the trial ends?", text: "Researchers analyze the data to determine the next steps for the intervention being studied.", icon: iconTrialsEnd }
    ]
  },
  es: {
    navTitle: "Preguntas Frecuentes",
    header: "Navegando conversaciones:\nCómo hablar sobre ensayos clínicos",
    items: [
      { id: 1, title: "¿Qué son los ensayos clínicos?", text: "Los ensayos clínicos son estudios de investigación realizados en personas...", icon: iconRecipe },
      { id: 2, title: "¿Quién puede participar en un ensayo clínico?", text: "Cada ensayo clínico tiene reglas estrictas sobre quién puede participar...", icon: iconPersonCheck },
      { id: 3, title: "¿Cuál es la importancia de la participación en ensayos clínicos?", text: "Los participantes ayudan a los investigadores a encontrar mejores formas de tratar enfermedades...", icon: iconWarning },
      { id: 4, title: "¿Por qué es importante la representación en los ensayos clínicos?", text: "Personas de diferentes edades, razas y etnias pueden reaccionar de manera diferente a los mismos tratamientos médicos...", icon: iconOrganization },
      { id: 5, title: "¿Qué deben hacer las personas si deciden que quieren participar?", text: "El primer paso es hablar con su proveedor de atención médica...", icon: iconFiles },
      { id: 6, title: "¿Cómo pueden las personas tomar una decisión informada sobre la participación?", text: "A través del proceso de consentimiento informado...", icon: iconChoice },
      { id: 7, title: "¿Cómo se protege a los participantes de los ensayos clínicos?", text: "Las Juntas de Revisión Institucional (IRB) y las estrictas pautas éticas garantizan la seguridad...", icon: iconProtected },
      { id: 8, title: "¿Qué sucede después de que termina el ensayo?", text: "Los investigadores analizan los datos para determinar los próximos pasos...", icon: iconTrialsEnd }
    ]
  }
};

export const videosContent = {
  en: {
    navTitle: "Videos",
    watchNow: "Watch Now",
    copy: "Copyright © 2026 Merck & Co., Inc., Rahway, NJ, USA, and its affiliates. All rights reserved.",
    items: [
      {
        id: 1,
        title: "Building Trust",
        duration: "Approx. 1 min",
        thumbnail: thumbTrustEn,
        videoUrl: "/trust-en.mp4"
      },
      {
        id: 2,
        title: "Let's Talk Trials",
        duration: "Approx. 2 min",
        thumbnail: thumbTrialsEn,
        videoUrl: "/trials-en.mp4"
      }
    ]
  },
  es: {
    navTitle: "Videos",
    watchNow: "Ver Ahora",
    copy: "Copyright © 2026 Merck & Co., Inc., Rahway, NJ, USA, y sus filiales. Todos los derechos reservados.",
    items: [
      {
        id: 1,
        title: "Construyendo Confianza",
        duration: "Aprox. 5 min",
        thumbnail: thumbTrustEn,
        videoUrl: "/trust-es.mp4"
      },
      {
        id: 2,
        title: "Hablemos de Ensayos",
        duration: "Aprox. 3 min",
        thumbnail: thumbTrialsEn,
        videoUrl: "/trials-es.mp4"
      }
    ]
  }
};

export const timelineContent = {
  en: {
    navTitle: "Interactive Timeline",
    disclaimer: "Merck is committed to reducing barriers and increasing access to clinical trials for communities that have historically been underrepresented in research.",
    sources: "Sources: FDA; NIH; CDC; HHS; Belmont Report; FDORA",
    copy: "Copyright © 2026 Merck & Co., Inc., Rahway, NJ, USA, and its affiliates. All rights reserved.",
    eras: [
      {
        id: 'era1', year: "1932-1972", title: "Protections and Inclusion Take Shape", subtitle: "Over time, new rules were put in place.",
        bullets: [
          "Participants must give clear, informed consent",
          "Independent review boards oversee every study",
          "NIH Revitalization Act (1993) helped ensure trials include women and diverse populations",
          "FDA guidance (2016) strengthened how race and ethnicity are collected in research"
        ],
        image: imgEra1
      },
      {
        id: 'era2', year: "1979-2016", title: "Protections and Inclusion Take Shape", subtitle: "Over time, new rules were put in place.",
        bullets: [
          "Participants must give clear, informed consent",
          "Independent review boards oversee every study",
          "NIH Revitalization Act (1993) helped ensure trials include women and diverse populations",
          "FDA guidance (2016) strengthened how race and ethnicity are collected in research"
        ],

        image: imgEra2
      },
      {
        id: 'era3', year: "2020-2022", title: "Protections and Inclusion Take Shape", subtitle: "Over time, new rules were put in place.",
        bullets: [
          "Participants must give clear, informed consent",
          "Independent review boards oversee every study",
          "NIH Revitalization Act (1993) helped ensure trials include women and diverse populations",
          "FDA guidance (2016) strengthened how race and ethnicity are collected in research"
        ],
        image: imgEra3
      },
      {
        id: 'era4', year: "2024-Today", title: "Protections and Inclusion Take Shape", subtitle: "Over time, new rules were put in place.",
        bullets: [
          "Participants must give clear, informed consent",
          "Independent review boards oversee every study",
          "NIH Revitalization Act (1993) helped ensure trials include women and diverse populations",
          "FDA guidance (2016) strengthened how race and ethnicity are collected in research"
        ],
        image: imgEra4
      }
    ]
  },
  es: {
    navTitle: "Línea de Tiempo Interactiva",
    disclaimer: "Merck se compromete a reducir las barreras...",
    sources: "Fuentes: FDA; NIH; CDC; HHS; Informe Belmont; FDORA",
    copy: "Copyright © 2026 Merck & Co., Inc., Rahway, NJ, USA, y sus filiales. Todos los derechos reservados.",
    eras: [
      {
        id: 'era1', year: "1932-1972", title: "Las protecciones y la inclusión toman forma", subtitle: "Con el tiempo, se implementaron nuevas reglas.",
        bullets: [
          "Los participantes deben dar un consentimiento claro e informado",
          "Juntas de revisión independientes supervisan cada estudio",
          "La Ley de Revitalización de los NIH (1993) ayudó a asegurar...",
          "La guía de la FDA (2016) fortaleció cómo se recopila la raza..."
        ],
        image: imgEra1
      },
      {
        id: 'era2', year: "1932-1972", title: "Las protecciones y la inclusión toman forma", subtitle: "Con el tiempo, se implementaron nuevas reglas.",
        bullets: [
          "Los participantes deben dar un consentimiento claro e informado",
          "Juntas de revisión independientes supervisan cada estudio",
          "La Ley de Revitalización de los NIH (1993) ayudó a asegurar...",
          "La guía de la FDA (2016) fortaleció cómo se recopila la raza..."
        ],
        image: imgEra2
      },
      {
        id: 'era3', year: "1932-1972", title: "Las protecciones y la inclusión toman forma", subtitle: "Con el tiempo, se implementaron nuevas reglas.",
        bullets: [
          "Los participantes deben dar un consentimiento claro e informado",
          "Juntas de revisión independientes supervisan cada estudio",
          "La Ley de Revitalización de los NIH (1993) ayudó a asegurar...",
          "La guía de la FDA (2016) fortaleció cómo se recopila la raza..."
        ],
        image: imgEra3
      },
      {
        id: 'era4', year: "1932-1972", title: "Las protecciones y la inclusión toman forma", subtitle: "Con el tiempo, se implementaron nuevas reglas.",
        bullets: [
          "Los participantes deben dar un consentimiento claro e informado",
          "Juntas de revisión independientes supervisan cada estudio",
          "La Ley de Revitalización de los NIH (1993) ayudó a asegurar...",
          "La guía de la FDA (2016) fortaleció cómo se recopila la raza..."
        ],
        image: imgEra4
      }
    ]
  }
};