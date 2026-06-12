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

export const quizContent = {
  en: {
    navTitle: "Clinical Trials Quiz",
    questionOf: "Question",
    of: "of",
    correctHeader: "Yes, that's correct!",
    incorrectHeader: "Sorry, that's incorrect.",
    didYouKnow: "Did you know?",
    nextBtn: "Next Question",
    finishBtn: "Finish",
    outroTitle: "Thank you for participating!",
    exitBtn: "Exit",
    modalText: "Are you sure? If you exit now, progress will be lost.",
    modalCancel: "Go Back",
    modalConfirm: "Exit",
    data: [
      {
        question: "What is a clinical trial?",
        options: [
          "A test to diagnose a medical condition",
          "A research study to evaluate the safety and effectiveness of new treatments or medicines",
          "A process required before a patient can access medical care",
          "A training course for future doctors and nurses",
        ],
        correctIndex: 1,
        mediFact: "All medicines and vaccines that are approved and available for patients are first studied in clinical trials to see if they are safe and effective. Each trial follows strict ethical guidelines to help protect participants' rights and safety.",
      },
      {
        question: "Which of the following is a common myth about clinical trials?",
        options: [
          "Patients who enroll in clinical trials may choose to leave the trial at any time, for any reason",
          "People should only consider clinical trials as a last resort",
          "Clinical trials aim to gather medical information by including participants at different stages of their illness",
          "Clinical trials are essential for advancing medical knowledge and improving patient care",
        ],
        correctIndex: 1,
        mediFact: "Misconceptions can hinder individuals and communities from participating in clinical research. If you're curious and would like to learn more about clinical trials, talk to your doctor about whether joining a clinical trial might be an option for you.",
      },
      {
        question: "What are some factors that can prevent people from participating in clinical trials?",
        options: [
          "Costs associated with study-related care",
          "Extra time and attention for study-related tasks and visits",
          "Difficulty traveling to trial sites",
          "All of the above",
        ],
        correctIndex: 3,
        mediFact: "There are barriers that may factor into whether people can participate in a clinical trial such as financial costs, travel challenges and safety concerns. In response to these challenges, Merck has developed programs that focus on enhancing access and increasing awareness of clinical trials.",
      },
      {
        question: "Why is representation in clinical trials important?",
        options: [
          "People may respond differently to medicines depending on their age, gender, weight, ethnicity and other factors",
          "When people from diverse backgrounds take part in clinical trials, it helps researchers understand whether investigational medicines are safe and effective for different communities",
          "Representation in clinical research helps to provide a more complete picture of how investigational medicines work across groups",
          "All of the above",
        ],
        correctIndex: 3,
        mediFact: "Only 24% of clinical trial participants today are from communities of color, despite making up more than 40% of the U.S. population and facing higher burdens of many diseases. When communities are underrepresented in research, the results may not reflect how investigational medicines work for those they're intended to help.",
      }
    ]
  },
  es: {
    navTitle: "Cuestionario de Ensayos Clínicos",
    questionOf: "Pregunta",
    of: "de",
    correctHeader: "¡Sí, eso es correcto!",
    incorrectHeader: "Lo siento, eso es incorrecto.",
    didYouKnow: "¿Sabías que...?",
    nextBtn: "Siguiente Pregunta",
    finishBtn: "Finalizar",
    outroTitle: "¡Gracias por participar!",
    exitBtn: "Salir",
    modalText: "¿Está seguro? Si sale ahora, se perderá todo el progreso.",
    modalCancel: "Volver",
    modalConfirm: "Salir",
    data: [
      {
        question: "¿Qué es un ensayo clínico?",
        options: [
          "Una prueba para diagnosticar una condición médica",
          "Un estudio de investigación para evaluar la seguridad y eficacia de nuevos tratamientos o medicamentos",
          "Un proceso requerido antes de que un paciente pueda acceder a la atención médica",
          "Un curso de capacitación para futuros médicos y enfermeras",
        ],
        correctIndex: 1,
        mediFact: "Todos los medicamentos y vacunas aprobados y disponibles para los pacientes se estudian primero en ensayos clínicos para verificar si son seguros y eficaces. Cada ensayo sigue estrictas pautas éticas para ayudar a proteger los derechos y la seguridad de los participantes.",
      },
      {
        question: "¿Cuál de los siguientes es un mito común sobre los ensayos clínicos?",
        options: [
          "Los pacientes que se inscriben en ensayos clínicos pueden optar por abandonar el ensayo en cualquier momento, por cualquier motivo",
          "Las personas solo deberían considerar los ensayos clínicos como último recurso",
          "Los ensayos clínicos tienen como objetivo recopilar información médica al incluir a participantes en diferentes etapas de su enfermedad",
          "Los ensayos clínicos son esenciales para avanzar en el conocimiento médico y mejorar la atención al paciente",
        ],
        correctIndex: 1,
        mediFact: "Las ideas erróneas pueden impedir que las personas y las comunidades participen en la investigación clínica. Si tiene curiosidad y desea obtener más información sobre los ensayos clínicos, hable con su médico sobre si unirse a un ensayo clínico podría ser una opción para usted.",
      },
      {
        question: "¿Cuáles son algunos factores que pueden impedir que las personas participen en ensayos clínicos?",
        options: [
          "Costos asociados con la atención relacionada con el estudio",
          "Tiempo y atención adicionales para tareas y visitas relacionadas con el estudio",
          "Dificultad para viajar a los sitios del ensayo",
          "Todas las anteriores",
        ],
        correctIndex: 3,
        mediFact: "Existen barreras que pueden influir en la participación en un ensayo clínico, como los costos financieros, los desafíos de viaje y las preocupaciones de seguridad. En respuesta a estos desafíos, Merck ha desarrollado programas que se enfocan en mejorar el acceso y aumentar la concientización sobre los ensayos clínicos.",
      },
      {
        question: "¿Por qué es importante la representación en los ensayos clínicos?",
        options: [
          "Las personas pueden responder de manera diferente a los medicamentos según su edad, género, peso, origen étnico y otros factores",
          "Cuando personas de diversos orígenes participan en ensayos clínicos, ayuda a los investigadores a comprender si los medicamentos de investigación son seguros y eficaces para diferentes comunidades",
          "La representación en la investigación clínica ayuda a proporcionar una imagen más completa de cómo funcionan los medicamentos de investigación en todos los grupos",
          "Todas las anteriores",
        ],
        correctIndex: 3,
        mediFact: "Solo el 24% de los participantes en ensayos clínicos en la actualidad pertenecen a comunidades de color, a pesar de que representan más del 40% de la población de los EE. UU. y enfrentan una mayor carga de muchas enfermedades. Cuando las comunidades están subrepresentadas en la investigación, es posible que los resultados no reflejen cómo funcionan los medicamentos de investigación para aquellos a quienes deben ayudar.",
      }
    ]
  }
};