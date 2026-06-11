// src/data/content.js
import iconShake from '../assets/images/icon-shake.svg?raw';
import iconChat from '../assets/images/icon-chat.svg?raw';
import iconGroup from '../assets/images/icon-group.svg?raw';
import iconQuestion from '../assets/images/icon-question.svg?raw';
import iconAuth from '../assets/images/icon-auth.svg?raw';
import iconLove from '../assets/images/icon-love.svg?raw';

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