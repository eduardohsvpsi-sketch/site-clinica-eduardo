import React, { useState, useEffect } from 'react';

const WHATSAPP_NUMBER = '5513981216248';
const EMAIL_ADDRESS = 'eduardohsv.psi@gmail.com';
const INSTAGRAM_HANDLE = 'culturaehistoriapsi';
const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

const PHOTO_URL = './eduardo-foto.jpg';
const PHOTO_2_URL = './eduardo-foto-2.jpg';
const PHOTO_3_URL = './eduardo-foto-3.jpg';
const PHC_IMAGE_URL = './phc-ilustracao.png';

/* Bandeira dividida Brasil / Portugal (SVG nítido em qualquer sistema operacional) */
function FlagBrPt({ className = 'w-5 h-3.5', uid = 'd' }) {
  const clipBr = `clip-br-${uid}`;
  const clipPt = `clip-pt-${uid}`;
  return (
    <svg
      viewBox="0 0 28 20"
      className={`${className} rounded-[3px] shadow-sm shrink-0 overflow-hidden border border-white/20`}
      aria-hidden="true"
    >
      <defs>
        <clipPath id={clipBr}>
          <polygon points="0,0 28,0 0,20" />
        </clipPath>
        <clipPath id={clipPt}>
          <polygon points="28,0 28,20 0,20" />
        </clipPath>
      </defs>

      {/* Metade Superior-Esquerda: Brasil */}
      <g clipPath={`url(#${clipBr})`}>
        <rect width="28" height="20" fill="#009B3A" />
        <polygon points="14,2.2 25.5,10 14,17.8 2.5,10" fill="#FEDF00" />
        <circle cx="14" cy="10" r="4.2" fill="#002776" />
      </g>

      {/* Metade Inferior-Direita: Portugal */}
      <g clipPath={`url(#${clipPt})`}>
        <rect x="0" y="0" width="11.2" height="20" fill="#006600" />
        <rect x="11.2" y="0" width="16.8" height="20" fill="#FF0000" />
        <circle cx="11.2" cy="10" r="3.4" fill="#FFE600" />
        <rect x="9.6" y="8.4" width="3.2" height="3.2" rx="0.8" fill="#FFFFFF" />
        <rect x="10.1" y="8.9" width="2.2" height="2.2" rx="0.5" fill="#FF0000" />
      </g>

      {/* Linha divisória diagonal */}
      <line x1="0" y1="20" x2="28" y2="0" stroke="#27292A" strokeWidth="1.1" />
    </svg>
  );
}

/* Bandeira dividida EUA / Reino Unido (SVG nítido em qualquer sistema operacional) */
function FlagUsUk({ className = 'w-5 h-3.5', uid = 'd' }) {
  const clipUs = `clip-us-${uid}`;
  const clipUk = `clip-uk-${uid}`;
  return (
    <svg
      viewBox="0 0 28 20"
      className={`${className} rounded-[3px] shadow-sm shrink-0 overflow-hidden border border-white/20`}
      aria-hidden="true"
    >
      <defs>
        <clipPath id={clipUs}>
          <polygon points="0,0 28,0 0,20" />
        </clipPath>
        <clipPath id={clipUk}>
          <polygon points="28,0 28,20 0,20" />
        </clipPath>
      </defs>

      {/* Metade Superior-Esquerda: Estados Unidos */}
      <g clipPath={`url(#${clipUs})`}>
        <rect width="28" height="20" fill="#FFFFFF" />
        <rect y="0" width="28" height="2.2" fill="#B22234" />
        <rect y="4.4" width="28" height="2.2" fill="#B22234" />
        <rect y="8.8" width="28" height="2.2" fill="#B22234" />
        <rect y="13.2" width="28" height="2.2" fill="#B22234" />
        <rect y="17.6" width="28" height="2.4" fill="#B22234" />
        <rect x="0" y="0" width="13" height="11" fill="#3C3B6E" />
        <circle cx="3" cy="2.8" r="0.8" fill="#FFFFFF" />
        <circle cx="6.5" cy="2.8" r="0.8" fill="#FFFFFF" />
        <circle cx="10" cy="2.8" r="0.8" fill="#FFFFFF" />
        <circle cx="4.7" cy="5.5" r="0.8" fill="#FFFFFF" />
        <circle cx="8.2" cy="5.5" r="0.8" fill="#FFFFFF" />
        <circle cx="3" cy="8.2" r="0.8" fill="#FFFFFF" />
        <circle cx="6.5" cy="8.2" r="0.8" fill="#FFFFFF" />
      </g>

      {/* Metade Inferior-Direita: Reino Unido */}
      <g clipPath={`url(#${clipUk})`}>
        <rect width="28" height="20" fill="#012169" />
        <line x1="0" y1="0" x2="28" y2="20" stroke="#FFFFFF" strokeWidth="3.8" />
        <line x1="28" y1="0" x2="0" y2="20" stroke="#FFFFFF" strokeWidth="3.8" />
        <line x1="0" y1="0" x2="28" y2="20" stroke="#C8102E" strokeWidth="1.8" />
        <line x1="28" y1="0" x2="0" y2="20" stroke="#C8102E" strokeWidth="1.8" />
        <rect x="11.2" y="0" width="5.6" height="20" fill="#FFFFFF" />
        <rect x="0" y="7.2" width="28" height="5.6" fill="#FFFFFF" />
        <rect x="12.3" y="0" width="3.4" height="20" fill="#C8102E" />
        <rect x="0" y="8.3" width="28" height="3.4" fill="#C8102E" />
      </g>

      {/* Linha divisória diagonal */}
      <line x1="0" y1="20" x2="28" y2="0" stroke="#27292A" strokeWidth="1.1" />
    </svg>
  );
}

const CONTENT = {
  pt: {
    pageTitle: 'Eduardo Vieira | Psicólogo Clínico Online',
    whatsappMessage:
      'Olá, Eduardo! Vi a sua página e gostaria de saber mais sobre como agendar uma sessão de psicoterapia online.',
    emailSubject: 'Contato - Agendamento de Sessão de Psicoterapia Online',
    emailBody:
      'Olá, Eduardo!\n\nVi a sua página e gostaria de saber mais informações sobre o agendamento de uma sessão de psicoterapia online.\n\nAtenciosamente,',
    headerRole: 'Psicólogo Clínico • 100% Online',
    nav: [
      { label: 'Início', href: '#inicio' },
      { label: 'Como Funciona a Terapia', href: '#como-funciona-terapia' },
      { label: 'Para Quem É', href: '#para-quem' },
      { label: 'Sobre Mim', href: '#sobre' },
    ],
    ctaSchedule: 'Agendar uma sessão',
    ctaScheduleMobile: 'Agendar',
    heroBadge: 'Psicoterapia 100% Online • Sem Barreiras Geográficas',
    heroTitleStart: 'Um espaço seguro para compreender suas angústias e ',
    heroTitleHighlight: 'ressignificar sua história.',
    heroDescription:
      'Atendimento psicológico 100% online, sem barreiras geográficas. Uma escuta estratégica, humana e acolhedora para adultos, idosos e pessoas LGBTQIAPN+ que buscam direção prática e profundidade emocional no conforto e sigilo do seu espaço.',
    heroHowItWorksBtn: 'Entender como funciona ↓',
    metaModalityTitle: 'Modalidade',
    metaModalityValue: '100% Online • Atendimentos em português e inglês',
    metaAudienceTitle: 'Públicos',
    metaAudienceValue: 'Adultos, Idosos e LGBTQIAPN+',
    metaEthicsTitle: 'Ética & Sigilo',
    metaEthicsValue: 'Atendimento Individual',
    roleTitle: 'Psicólogo Clínico',
    heroCardFooter: 'Atendimentos em português e inglês • 100% Online',
    therapyBadge: 'Base Histórico-Cultural • A Abordagem Clínica',
    therapyTitle: 'Como Funciona a Terapia',
    therapyImageCaption: 'Clínica Histórico-Cultural & TCC',
    therapyImageAlt: 'Ilustração Base Histórico-Cultural',
    therapyP1Before: 'Minha prática é fundamentada na ',
    therapyP1Bold: 'Clínica Histórico-Cultural',
    therapyP1After:
      ', um espaço seguro de escuta sensível e de recriação de si e da sua realidade, que valida e respeita a sua história, suas raízes e o contexto social em que você está inserido. Entendo que o adoecimento, o sofrimento e a forma como vemos o mundo não são falhas puramente individuais, mas profundamente moldados pelas nossas vivências, identidades e pelo meio social.',
    therapyP2Before:
      'Por isso, conduzo a terapia com o foco em ampliar a sua consciência sobre si mesmo, ajudando a ressignificar sentimentos cristalizados e promovendo o desenvolvimento do autodomínio da conduta para que você possa assumir o protagonismo da sua vida. Para complementar essa visão sistêmica e acolhedora, integro recursos e estratégias da ',
    therapyP2Bold: 'Terapia Cognitivo-Comportamental (TCC)',
    therapyP2After:
      '. Na prática, isso significa que, além de compreendermos o seu lugar no mundo, trabalharemos juntos com ferramentas pragmáticas para identificar padrões de pensamento disfuncionais, manejar sintomas de ansiedade e promover mudanças reais e estruturadas na sua rotina.',
    audienceBadge: 'Públicos Atendidos',
    audienceTitle: 'Para Quem É',
    audiences: [
      {
        num: '01',
        title: 'Adultos',
        desc: 'Psicoterapia focada no autoconhecimento profundo, no manejo pragmático de sintomas e na reorganização consciente da rotina e das relações.',
        items: [
          'Manejo de ansiedade, estresse e esgotamento',
          'Conflitos afetivos, familiares e profissionais',
          'Mudança de padrões e autodomínio da conduta',
        ],
      },
      {
        num: '02',
        title: 'Idosos',
        desc: 'Escuta acolhedora e respeitosa às memórias, transições de vida e novos papéis sociais, promovendo saúde emocional, autonomia e qualidade de vida.',
        items: [
          'Adaptação a mudanças, aposentadoria e lutos',
          'Fortalecimento de vínculos e prevenção da solidão',
          'Valorização da biografia e novos projetos de sentido',
        ],
      },
      {
        num: '03',
        title: 'Pessoas LGBTQIAPN+',
        desc: 'Um espaço clínico ético, afirmativo e livre de julgamentos, que compreende os impactos sociais e históricos sobre a sua subjetividade e valida suas vivências.',
        items: [
          'Acolhimento afirmativo de identidade e sexualidade',
          'Manejo do estresse de minoria e vivências sociais',
          'Fortalecimento da autoestima, relações e autonomia',
        ],
      },
    ],
    /* Carrossel de Painéis Cinza em Sobre Mim */
    aboutPanelTabs: ['01 • Apresentação & Formação', '02 • Clínica, Arte & Histórias'],
    prevPanelLabel: 'Painel anterior',
    nextPanelLabel: 'Próximo painel',
    aboutBadge: 'Sobre Mim',
    aboutTitle: 'Presença humana, visão estratégica e compromisso com a sua transformação',
    aboutP1Start: 'Olá! Sou ',
    aboutP1Name: 'Eduardo Vieira',
    aboutP1Middle:
      ', psicólogo clínico graduado pela Universidade Católica de Santos (UniSantos) e pós-graduado pelo ',
    aboutP1End:
      '. Minha atuação é 100% dedicada ao atendimento online (em português e inglês) de adultos, idosos e pessoas LGBTQIAPN+, conectando rigor técnico, sensibilidade histórico-cultural e praticidade para acolher você onde quer que esteja.',
    aboutP2:
      'Acredito em uma psicologia ativa, dinâmica e sem posturas engessadas: um trabalho construído lado a lado com você, que valida a sua história com profundidade enquanto oferece ferramentas claras para lidar com os desafios reais do presente.',
    /* Fotos do Carrossel 1 (Apenas no Slide 1 do painel cinza) */
    carouselPhotos: [
      { src: PHOTO_2_URL, alt: 'Eduardo Vieira - Formatura em Psicologia' },
      { src: PHOTO_URL, alt: 'Eduardo Vieira - Psicólogo Clínico' },
    ],
    /* Slide 2 do Painel Cinza: Clínica & Arte com Foto 3 estática (sem carrossel na foto) */
    artBadge: 'Sobre Mim • Clínica & Arte',
    artTitle: 'Onde a psicologia encontra o cinema, a literatura e os quadrinhos',
    artP1:
      'Para mim, a clínica e a arte sempre caminham juntas. Fora dos atendimentos, sou um grande apaixonado por cinema, livros e quadrinhos, e essa paixão é muito mais do que um passatempo: é uma extensão da forma como compreendo a complexidade do ser humano. Entendo que a arte tem o poder de reunir e conectar elementos que muitas vezes parecem distantes ou fragmentados na nossa vida cotidiana. Vejo na prática como se tornam instrumentos valiosos para a criação de novos sentidos.',
    artP2:
      'Acredito profundamente que as boas histórias nos humanizam e nos conectam. As aflições, os medos e as alegrias vividas por personagens e os sentimentos que experimentamos através deles são inteiramente reais. Gosto de pensar que a psicoterapia, assim como uma grande obra cinematográfica ou uma saga em quadrinhos, é um espaço seguro para vivenciar emoções, compreender o roteiro da sua própria vida e, principalmente, assumir a autoria da sua história.',
    artPhoto: { src: PHOTO_3_URL, alt: 'Eduardo Vieira - Cinema, livros e quadrinhos' },
    prevPhotoLabel: 'Foto anterior',
    nextPhotoLabel: 'Próxima foto',
    contactsLabel: 'Contatos & Redes',
    footerSubtitle:
      'Psicoterapia 100% Online (Português e Inglês) • Adultos, Idosos e Pessoas LGBTQIAPN+',
    footerRights: 'Todos os direitos reservados.',
    footerCrisis:
      'Atenção: Este site não oferece atendimento de urgência. Em caso de crise, ligue 188 (CVV) ou procure o serviço de saúde mais próximo.',
  },
  en: {
    pageTitle: 'Eduardo Vieira | Online Clinical Psychologist',
    whatsappMessage:
      'Hello, Eduardo! I visited your website and would like to know more about scheduling an online psychotherapy session.',
    emailSubject: 'Contact - Online Psychotherapy Session Inquiry',
    emailBody:
      'Hello, Eduardo!\n\nI visited your website and would like more information about scheduling an online psychotherapy session.\n\nBest regards,',
    headerRole: 'Clinical Psychologist • 100% Online',
    nav: [
      { label: 'Home', href: '#inicio' },
      { label: 'How Therapy Works', href: '#como-funciona-terapia' },
      { label: 'Who It Is For', href: '#para-quem' },
      { label: 'About Me', href: '#sobre' },
    ],
    ctaSchedule: 'Book a session',
    ctaScheduleMobile: 'Book',
    heroBadge: '100% Online Psychotherapy • No Geographic Barriers',
    heroTitleStart: 'A safe space to understand your distress and ',
    heroTitleHighlight: 'reframe your story.',
    heroDescription:
      '100% online psychological care, without geographic barriers. Strategic, human, and welcoming listening for adults, older adults, and LGBTQIAPN+ individuals seeking practical direction and emotional depth in the comfort and privacy of their own space.',
    heroHowItWorksBtn: 'Learn how it works ↓',
    metaModalityTitle: 'Modality',
    metaModalityValue: '100% Online • Sessions in Portuguese and English',
    metaAudienceTitle: 'Audience',
    metaAudienceValue: 'Adults, Seniors & LGBTQIAPN+',
    metaEthicsTitle: 'Ethics & Privacy',
    metaEthicsValue: 'Individual Sessions',
    roleTitle: 'Clinical Psychologist',
    heroCardFooter: 'Sessions in Portuguese & English • 100% Online',
    therapyBadge: 'Historical-Cultural Foundation • Clinical Approach',
    therapyTitle: 'How Therapy Works',
    therapyImageCaption: 'Historical-Cultural Clinic & CBT',
    therapyImageAlt: 'Historical-Cultural Foundation Illustration',
    therapyP1Before: 'My practice is grounded in the ',
    therapyP1Bold: 'Historical-Cultural Clinic',
    therapyP1After:
      ', a safe space for sensitive listening and for recreating yourself and your reality—validating and respecting your history, your roots, and the social context in which you live. I understand that emotional distress, suffering, and the way we see the world are not purely individual flaws, but are deeply shaped by our lived experiences, identities, and social environment.',
    therapyP2Before:
      'Therefore, I guide therapy with a focus on expanding your self-awareness, helping you reframe crystallized feelings, and fostering self-regulation so that you can become the protagonist of your own life. To complement this systemic and welcoming perspective, I integrate tools and strategies from ',
    therapyP2Bold: 'Cognitive Behavioral Therapy (CBT)',
    therapyP2After:
      '. In practice, this means that beyond understanding your place in the world, we will work together with pragmatic tools to identify dysfunctional thought patterns, manage anxiety symptoms, and promote real, structured changes in your daily routine.',
    audienceBadge: 'Who I Work With',
    audienceTitle: 'Who It Is For',
    audiences: [
      {
        num: '01',
        title: 'Adults',
        desc: 'Psychotherapy focused on deep self-knowledge, pragmatic symptom management, and the conscious reorganization of your routine and relationships.',
        items: [
          'Management of anxiety, stress, and burnout',
          'Affective, family, and professional conflicts',
          'Changing patterns and developing self-mastery',
        ],
      },
      {
        num: '02',
        title: 'Older Adults (Seniors)',
        desc: 'Welcoming and respectful listening to memories, life transitions, and new social roles, promoting emotional health, autonomy, and quality of life.',
        items: [
          'Adaptation to life changes, retirement, and grief',
          'Strengthening bonds and preventing loneliness',
          'Valuing personal biography and new meaningful projects',
        ],
      },
      {
        num: '03',
        title: 'LGBTQIAPN+ Individuals',
        desc: 'An ethical, affirmative, and judgment-free clinical space that understands social and historical impacts on your subjectivity and validates your lived experiences.',
        items: [
          'Affirmative support for identity and sexuality',
          'Managing minority stress and social experiences',
          'Strengthening self-esteem, relationships, and autonomy',
        ],
      },
    ],
    /* Gray Panel Carousel in About Me */
    aboutPanelTabs: ['01 • Background & Practice', '02 • Clinic, Art & Stories'],
    prevPanelLabel: 'Previous panel',
    nextPanelLabel: 'Next panel',
    aboutBadge: 'About Me',
    aboutTitle: 'Human presence, strategic vision, and commitment to your transformation',
    aboutP1Start: 'Hello! I am ',
    aboutP1Name: 'Eduardo Vieira',
    aboutP1Middle:
      ', a clinical psychologist graduated from the Catholic University of Santos (UniSantos) with a postgraduate specialization from ',
    aboutP1End:
      '. My practice is 100% dedicated to online psychotherapy (in Portuguese and English) for adults, older adults, and LGBTQIAPN+ individuals—combining technical rigor, historical-cultural sensitivity, and practicality to welcome you wherever you are.',
    aboutP2:
      'I believe in an active, dynamic psychology free of rigid postures: a collaborative process built side by side with you, validating your story with depth while offering clear tools to deal with real-life challenges in the present.',
    /* Photos for Slide 1 photo carousel */
    carouselPhotos: [
      { src: PHOTO_2_URL, alt: 'Eduardo Vieira - Psychology Graduation' },
      { src: PHOTO_URL, alt: 'Eduardo Vieira - Clinical Psychologist' },
    ],
    /* Slide 2 of Gray Panel: Clinic & Art with static Photo 3 (no photo carousel) */
    artBadge: 'About Me • Clinic & Art',
    artTitle: 'Where psychology meets cinema, literature, and comic books',
    artP1:
      'For me, clinical practice and art always walk hand in hand. Outside of sessions, I am deeply passionate about cinema, books, and comic books—and this passion is much more than a hobby: it is an extension of how I understand human complexity. I see that art has the power to bring together and connect elements that often seem distant or fragmented in our everyday lives. In practice, I witness how they become valuable instruments for creating new meanings.',
    artP2:
      'I deeply believe that great stories humanize and connect us. The struggles, fears, and joys experienced by characters—and the emotions we feel through them—are entirely real. I like to think that psychotherapy, much like a great film or a comic book saga, is a safe space to experience emotions, understand the script of your own life, and above all, claim authorship of your own story.',
    artPhoto: { src: PHOTO_3_URL, alt: 'Eduardo Vieira - Cinema, books, and comic books' },
    prevPhotoLabel: 'Previous photo',
    nextPhotoLabel: 'Next photo',
    contactsLabel: 'Contact & Social Media',
    footerSubtitle:
      '100% Online Psychotherapy (Portuguese & English) • Adults, Seniors & LGBTQIAPN+',
    footerRights: 'All rights reserved.',
    footerCrisis:
      'Note: This website does not provide emergency care. In case of crisis in Brazil, call 188 (CVV) or seek the nearest healthcare service.',
  },
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('pt');
  /* Slide das fotos dentro do Painel 1 */
  const [currentSlide, setCurrentSlide] = useState(0);
  /* Slide do Carrossel de Painéis Cinza em Sobre Mim (0 = Formação, 1 = Clínica & Arte) */
  const [aboutPanelSlide, setAboutPanelSlide] = useState(0);

  const t = CONTENT[lang];
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    t.whatsappMessage
  )}`;
  const emailUrl = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
    t.emailSubject
  )}&body=${encodeURIComponent(t.emailBody)}`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.title = t.pageTitle;
  }, [lang, t.pageTitle]);

  const totalSlides = t.carouselPhotos.length;
  const safeSlide = currentSlide % totalSlides;
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % totalSlides);

  const totalPanels = 2;
  const prevPanel = () =>
    setAboutPanelSlide((prev) => (prev - 1 + totalPanels) % totalPanels);
  const nextPanel = () =>
    setAboutPanelSlide((prev) => (prev + 1) % totalPanels);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F5F6] text-[#353839] font-sans antialiased selection:bg-[#B08D57]/20 selection:text-[#353839]">
      {/* Header / Navbar com TODAS as informações visíveis tanto no Mobile quanto no Desktop */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full max-w-full overflow-hidden transition-all duration-300 ${
          scrolled
            ? 'bg-[#353839]/95 backdrop-blur-md shadow-md py-2 sm:py-3'
            : 'bg-[#353839] py-2.5 sm:py-4'
        } border-b border-white/10`}
      >
        <div className="max-w-6xl mx-auto px-3 sm:px-8">
          {/* Linha Principal do Header (Desktop: tudo em 1 linha | Mobile: Identidade completa + Switch PT/EN + Agendar dentro do quadro) */}
          <div className="flex items-center justify-between gap-1.5 sm:gap-4 w-full">
            <a
              href="#inicio"
              className="flex items-center gap-2 sm:gap-3.5 group min-w-0 flex-1 md:flex-initial"
            >
              <img
                src={PHOTO_URL}
                alt="Eduardo Vieira"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover object-top border border-[#B08D57] shrink-0 group-hover:opacity-90 transition-opacity duration-300"
              />
              <div className="min-w-0">
                <span className="block text-white font-serif text-[15px] sm:text-xl font-medium tracking-wide leading-tight">
                  Eduardo Vieira
                </span>
                <span className="block text-[#D1D5DB] text-[8.5px] sm:text-[11px] uppercase tracking-[0.04em] sm:tracking-[0.18em] leading-tight">
                  {t.headerRole}
                </span>
              </div>
            </a>

            {/* Navegação Desktop (md e acima) */}
            <nav className="hidden md:flex items-center gap-5 lg:gap-7 shrink-0">
              {t.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-normal text-[#E5E7EB] hover:text-[#C5A572] transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}

              {/* Language Switcher PT (BR/PT) / EN (US/UK) */}
              <div
                className="inline-flex items-center rounded-lg bg-[#27292A] p-0.5 text-xs font-medium text-[#D1D5DB]"
                role="group"
                aria-label="Selecionar idioma / Select language"
              >
                <button
                  type="button"
                  onClick={() => setLang('pt')}
                  title="Português (Brasil / Portugal)"
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all ${
                    lang === 'pt'
                      ? 'bg-[#B08D57] text-white font-semibold'
                      : 'text-[#D1D5DB] hover:text-white'
                  }`}
                >
                  <FlagBrPt uid="desk" />
                  <span>PT</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  title="English (USA / UK)"
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all ${
                    lang === 'en'
                      ? 'bg-[#B08D57] text-white font-semibold'
                      : 'text-[#D1D5DB] hover:text-white'
                  }`}
                >
                  <FlagUsUk uid="desk" />
                  <span>EN</span>
                </button>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-[#B08D57] hover:bg-[#C5A572] text-white font-medium text-sm transition-all duration-300"
              >
                {t.ctaSchedule}
              </a>
            </nav>

            {/* Controles Superiores Mobile: Switch PT/EN com Bandeiras + Botão Agendar ajustado ao quadro */}
            <div className="flex md:hidden items-center gap-1.5 shrink-0">
              <div
                className="inline-flex items-center rounded-lg bg-[#27292A] p-0.5 text-[10px] font-medium text-[#D1D5DB]"
                role="group"
                aria-label="Selecionar idioma / Select language"
              >
                <button
                  type="button"
                  onClick={() => setLang('pt')}
                  title="Português (Brasil / Portugal)"
                  className={`inline-flex items-center gap-1 px-1.5 py-1 rounded-md transition-all ${
                    lang === 'pt'
                      ? 'bg-[#B08D57] text-white font-semibold'
                      : 'text-[#D1D5DB] hover:text-white'
                  }`}
                >
                  <FlagBrPt className="w-3.5 h-2.5" uid="mob" />
                  <span>PT</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  title="English (USA / UK)"
                  className={`inline-flex items-center gap-1 px-1.5 py-1 rounded-md transition-all ${
                    lang === 'en'
                      ? 'bg-[#B08D57] text-white font-semibold'
                      : 'text-[#D1D5DB] hover:text-white'
                  }`}
                >
                  <FlagUsUk className="w-3.5 h-2.5" uid="mob" />
                  <span>EN</span>
                </button>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-[#B08D57] hover:bg-[#C5A572] text-white font-semibold text-[11px] tracking-wide transition-all whitespace-nowrap"
              >
                <span className="sm:hidden">{t.ctaScheduleMobile}</span>
                <span className="hidden sm:inline">{t.ctaSchedule}</span>
              </a>
            </div>
          </div>

          {/* Segunda Linha do Header no Mobile: Todos os links de navegação sempre visíveis dentro do quadro */}
          <nav
            aria-label="Navegação principal mobile"
            className="flex md:hidden flex-wrap items-center justify-between gap-x-2 gap-y-1 mt-2 pt-1.5 border-t border-white/10 w-full"
          >
            {t.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[10.5px] sm:text-xs font-normal text-[#E5E7EB] hover:text-[#C5A572] transition-colors whitespace-nowrap py-0.5"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content (padding-top ajustado para o Header de 2 linhas no mobile e 1 linha no desktop) */}
      <main className="flex-grow pt-24 sm:pt-28 md:pt-20">
        {/* 1. HERO SECTION (Primeira Dobra) */}
        <section
          id="inicio"
          className="relative bg-[#353839] text-white overflow-hidden py-12 sm:py-24 border-b border-[#B08D57]/40"
        >
          <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Coluna de Texto da Hero */}
              <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                <div className="inline-flex items-center gap-2 text-[#C5A572] text-[11px] sm:text-sm uppercase tracking-[0.16em] sm:tracking-[0.2em] font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#B08D57] shrink-0" />
                  <span>{t.heroBadge}</span>
                </div>

                <h1 className="font-serif text-3xl sm:text-5xl lg:text-[52px] font-semibold text-white leading-[1.15] tracking-tight">
                  {t.heroTitleStart}
                  <span className="text-[#C5A572] italic font-normal">
                    {t.heroTitleHighlight}
                  </span>
                </h1>

                <p className="text-[#E5E7EB] text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-light">
                  {t.heroDescription}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-[#B08D57] hover:bg-[#C5A572] active:bg-[#8C6D3F] text-white font-semibold text-base sm:text-lg shadow-lg shadow-black/20 transition-all duration-300 transform hover:-translate-y-0.5 text-center"
                  >
                    <span>{t.ctaSchedule}</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>

                  <a
                    href="#como-funciona-terapia"
                    className="inline-flex items-center justify-center px-6 py-3 sm:py-4 text-[#E5E7EB] hover:text-[#C5A572] text-sm sm:text-base font-medium transition-colors duration-200 text-center"
                  >
                    {t.heroHowItWorksBtn}
                  </a>
                </div>

                <div className="pt-5 sm:pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 border-t border-white/10 text-xs sm:text-sm text-[#D1D5DB]">
                  <div>
                    <span className="block text-[#C5A572] font-medium">
                      {t.metaModalityTitle}
                    </span>
                    <span>{t.metaModalityValue}</span>
                  </div>
                  <div>
                    <span className="block text-[#C5A572] font-medium">
                      {t.metaAudienceTitle}
                    </span>
                    <span>{t.metaAudienceValue}</span>
                  </div>
                  <div>
                    <span className="block text-[#C5A572] font-medium">
                      {t.metaEthicsTitle}
                    </span>
                    <span>{t.metaEthicsValue}</span>
                  </div>
                </div>
              </div>

              {/* Coluna da Foto Clean */}
              <div className="lg:col-span-5">
                <div className="mx-auto max-w-xs sm:max-w-sm lg:max-w-md">
                  <div className="rounded-2xl bg-[#27292A] border border-white/10 overflow-hidden shadow-xl">
                    <div className="relative aspect-[4/4.3] w-full overflow-hidden bg-[#353839]">
                      <img
                        src={PHOTO_URL}
                        alt="Eduardo Vieira"
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#27292A] via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-5 right-5">
                        <span className="block text-[#C5A572] text-xs uppercase tracking-[0.18em] font-medium">
                          {t.roleTitle}
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl text-white font-medium leading-tight">
                          Eduardo Vieira
                        </h2>
                      </div>
                    </div>

                    <div className="p-4 sm:p-5 bg-[#27292A] flex items-center justify-between text-xs text-[#D1D5DB]">
                      <span>{t.heroCardFooter}</span>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#C5A572] hover:text-white font-medium transition-colors shrink-0 ml-2"
                      >
                        WhatsApp →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. COMO FUNCIONA A TERAPIA (Base Histórico-Cultural com Ilustração) */}
        <section
          id="como-funciona-terapia"
          className="scroll-mt-28 md:scroll-mt-20 py-14 sm:py-24 bg-[#F4F5F6] text-[#353839] border-b border-[#E5E7EB]"
        >
          <div id="abordagem" className="max-w-5xl mx-auto px-5 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <span className="inline-block text-xs uppercase tracking-[0.22em] text-[#8C6D3F] font-semibold mb-2">
                {t.therapyBadge}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#353839]">
                {t.therapyTitle}
              </h2>
              <div className="w-12 h-0.5 bg-[#B08D57] mx-auto mt-4" />
            </div>

            <div className="rounded-2xl bg-white border border-[#E5E7EB] border-l-4 border-l-[#B08D57] shadow-sm p-6 sm:p-11 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Coluna da Imagem (Ilustração na Base Histórico-Cultural) */}
                <div className="lg:col-span-4 flex flex-col items-center justify-center">
                  <div className="w-48 sm:w-60 lg:w-full max-w-[260px] aspect-square rounded-2xl bg-[#F4F5F6] border border-[#E5E7EB] p-5 sm:p-6 flex items-center justify-center">
                    <img
                      src={PHC_IMAGE_URL}
                      alt={t.therapyImageAlt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="mt-3 text-[11px] uppercase tracking-[0.18em] text-[#8C6D3F] font-medium text-center">
                    {t.therapyImageCaption}
                  </span>
                </div>

                {/* Coluna do Texto Mesclado em Primeira Pessoa */}
                <div className="lg:col-span-8 space-y-5 text-[#353839] text-base sm:text-lg leading-relaxed sm:leading-[1.85] font-normal">
                  <p>
                    {t.therapyP1Before}
                    <strong>{t.therapyP1Bold}</strong>
                    {t.therapyP1After}
                  </p>
                  <p>
                    {t.therapyP2Before}
                    <strong>{t.therapyP2Bold}</strong>
                    {t.therapyP2After}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. PARA QUEM É (01, 02 e 03) */}
        <section
          id="para-quem"
          className="scroll-mt-28 md:scroll-mt-20 py-14 sm:py-24 bg-[#353839] text-white"
        >
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <span className="inline-block text-xs uppercase tracking-[0.22em] text-[#C5A572] font-semibold mb-2">
                {t.audienceBadge}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white">
                {t.audienceTitle}
              </h2>
              <div className="w-12 h-0.5 bg-[#B08D57] mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.audiences.map((aud) => (
                <div
                  key={aud.num}
                  className="rounded-2xl bg-[#27292A] border border-white/10 p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A572]">
                      {aud.num}
                    </span>
                    <h3 className="font-serif text-2xl font-semibold text-white mt-1 mb-3">
                      {aud.title}
                    </h3>
                    <p className="text-sm text-[#E5E7EB]/90 leading-relaxed mb-5 font-light">
                      {aud.desc}
                    </p>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#D1D5DB] border-t border-white/10 pt-4">
                    {aud.items.map((it, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B08D57] shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. SOBRE MIM (Painéis Cinza Juntos como um Único Carrossel) */}
        <section
          id="sobre"
          className="scroll-mt-28 md:scroll-mt-20 py-14 sm:py-24 bg-[#F4F5F6] text-[#353839]"
        >
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <div className="relative rounded-2xl bg-[#353839] text-white p-6 sm:p-12 shadow-xl">
              {/* Barra Superior do Carrossel de Painéis Cinza (Abas + Setas ‹ ›) */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-white/10">
                <div className="flex flex-wrap items-center gap-2">
                  {t.aboutPanelTabs.map((tabLabel, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setAboutPanelSlide(idx)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-all ${
                        aboutPanelSlide === idx
                          ? 'bg-[#B08D57] text-white shadow-sm'
                          : 'bg-[#27292A] text-[#D1D5DB] hover:text-white'
                      }`}
                    >
                      {tabLabel}
                    </button>
                  ))}
                </div>

                {/* Setas de Navegação entre os 2 Painéis Cinza */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prevPanel}
                    aria-label={t.prevPanelLabel}
                    className="w-9 h-9 rounded-full bg-[#27292A] hover:bg-[#B08D57] text-white flex items-center justify-center transition-colors border border-white/10 text-lg"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={nextPanel}
                    aria-label={t.nextPanelLabel}
                    className="w-9 h-9 rounded-full bg-[#27292A] hover:bg-[#B08D57] text-white flex items-center justify-center transition-colors border border-white/10 text-lg"
                  >
                    ›
                  </button>
                </div>
              </div>

              {/* SLIDE 1 DO PAINEL CINZA: Formação & Prática (Com carrossel de 2 fotos: foto 2 e foto 1) */}
              {aboutPanelSlide === 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Coluna da Foto com Carrossel (Fotos 2 e 1) */}
                  <div className="lg:col-span-5 flex flex-col items-center text-center">
                    <div className="relative w-full max-w-[260px] sm:w-72 aspect-[4/4.5] rounded-2xl overflow-hidden border border-[#B08D57] shadow-lg bg-[#27292A] mb-4 group">
                      <img
                        src={t.carouselPhotos[safeSlide].src}
                        alt={t.carouselPhotos[safeSlide].alt}
                        className="w-full h-full object-cover object-center transition-all duration-500"
                      />

                      {/* Botão Anterior da Foto */}
                      <button
                        type="button"
                        onClick={prevSlide}
                        aria-label={t.prevPhotoLabel}
                        className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#27292A]/80 hover:bg-[#B08D57] text-white flex items-center justify-center transition-colors shadow-md"
                      >
                        ‹
                      </button>

                      {/* Botão Próximo da Foto */}
                      <button
                        type="button"
                        onClick={nextSlide}
                        aria-label={t.nextPhotoLabel}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#27292A]/80 hover:bg-[#B08D57] text-white flex items-center justify-center transition-colors shadow-md"
                      >
                        ›
                      </button>

                      {/* Indicadores da Foto */}
                      <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
                        {t.carouselPhotos.map((_, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setCurrentSlide(idx)}
                            aria-label={`Foto ${idx + 1}`}
                            className={`h-2 rounded-full transition-all ${
                              safeSlide === idx
                                ? 'w-6 bg-[#B08D57]'
                                : 'w-2 bg-white/60 hover:bg-white'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <span className="text-xs uppercase tracking-[0.2em] text-[#C5A572] font-medium">
                      {t.roleTitle}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white mt-1">
                      Eduardo Vieira
                    </h2>
                  </div>

                  {/* Coluna da Mini-Biografia + Contatos */}
                  <div className="lg:col-span-7 space-y-4">
                    <span className="inline-block text-xs uppercase tracking-[0.2em] text-[#C5A572] font-semibold">
                      {t.aboutBadge}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white leading-snug">
                      {t.aboutTitle}
                    </h3>
                    <p className="text-[#E5E7EB] text-base sm:text-lg leading-relaxed font-light">
                      {t.aboutP1Start}
                      <strong className="text-white font-medium">{t.aboutP1Name}</strong>
                      {t.aboutP1Middle}
                      <em>CBI of Miami</em>
                      {t.aboutP1End}
                    </p>
                    <p className="text-[#E5E7EB] text-base sm:text-lg leading-relaxed font-light">
                      {t.aboutP2}
                    </p>

                    {/* Bloco de Contatos */}
                    <div className="pt-3 border-t border-white/10">
                      <span className="block text-xs uppercase tracking-[0.18em] text-[#C5A572] font-medium mb-2.5">
                        {t.contactsLabel}
                      </span>
                      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 text-sm text-[#E5E7EB]">
                        <a
                          href={emailUrl}
                          className="inline-flex items-center gap-2 hover:text-[#C5A572] underline-offset-4 hover:underline transition-colors break-all"
                        >
                          <span className="text-[#C5A572] font-medium shrink-0">E-mail:</span>
                          <span>{EMAIL_ADDRESS}</span>
                        </a>
                        <a
                          href={INSTAGRAM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 hover:text-[#C5A572] underline-offset-4 hover:underline transition-colors"
                        >
                          <span className="text-[#C5A572] font-medium shrink-0">Instagram:</span>
                          <span>@{INSTAGRAM_HANDLE}</span>
                        </a>
                      </div>
                    </div>

                    <div className="pt-3">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#B08D57] hover:bg-[#C5A572] text-white font-semibold text-sm sm:text-base transition-all duration-300"
                      >
                        <span>{t.ctaSchedule}</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                /* SLIDE 2 DO PAINEL CINZA: Clínica, Arte, Cinema, Livros e Quadrinhos (Foto 3 Estática, SEM carrossel na foto) */
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Coluna da Foto 3 Estática (Sem setas de carrossel na foto) */}
                  <div className="lg:col-span-5 flex flex-col items-center text-center">
                    <div className="relative w-full max-w-[260px] sm:w-72 aspect-[4/4.5] rounded-2xl overflow-hidden border border-[#B08D57] shadow-lg bg-[#27292A] mb-4">
                      <img
                        src={t.artPhoto.src}
                        alt={t.artPhoto.alt}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    <span className="text-xs uppercase tracking-[0.2em] text-[#C5A572] font-medium">
                      {t.roleTitle}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white mt-1">
                      Eduardo Vieira
                    </h2>
                  </div>

                  {/* Coluna do Texto sobre Clínica, Arte, Cinema, Livros e Quadrinhos + Contatos */}
                  <div className="lg:col-span-7 space-y-4">
                    <span className="inline-block text-xs uppercase tracking-[0.2em] text-[#C5A572] font-semibold">
                      {t.artBadge}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white leading-snug">
                      {t.artTitle}
                    </h3>
                    <p className="text-[#E5E7EB] text-base sm:text-lg leading-relaxed font-light">
                      {t.artP1}
                    </p>
                    <p className="text-[#E5E7EB] text-base sm:text-lg leading-relaxed font-light">
                      {t.artP2}
                    </p>

                    {/* Bloco de Contatos */}
                    <div className="pt-3 border-t border-white/10">
                      <span className="block text-xs uppercase tracking-[0.18em] text-[#C5A572] font-medium mb-2.5">
                        {t.contactsLabel}
                      </span>
                      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 text-sm text-[#E5E7EB]">
                        <a
                          href={emailUrl}
                          className="inline-flex items-center gap-2 hover:text-[#C5A572] underline-offset-4 hover:underline transition-colors break-all"
                        >
                          <span className="text-[#C5A572] font-medium shrink-0">E-mail:</span>
                          <span>{EMAIL_ADDRESS}</span>
                        </a>
                        <a
                          href={INSTAGRAM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 hover:text-[#C5A572] underline-offset-4 hover:underline transition-colors"
                        >
                          <span className="text-[#C5A572] font-medium shrink-0">Instagram:</span>
                          <span>@{INSTAGRAM_HANDLE}</span>
                        </a>
                      </div>
                    </div>

                    <div className="pt-3">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#B08D57] hover:bg-[#C5A572] text-white font-semibold text-sm sm:text-base transition-all duration-300"
                      >
                        <span>{t.ctaSchedule}</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Indicadores Inferiores do Carrossel de Painéis Cinza */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-center gap-3">
                {[0, 1].map((idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setAboutPanelSlide(idx)}
                    aria-label={t.aboutPanelTabs[idx]}
                    className={`h-2.5 rounded-full transition-all ${
                      aboutPanelSlide === idx
                        ? 'w-8 bg-[#B08D57]'
                        : 'w-2.5 bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* RODAPÉ DEFINITIVO (Footer) - Único local com a credencial CRP 06/200229 */}
      <footer className="bg-[#353839] text-[#E5E7EB] border-t border-[#B08D57]/40 py-10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div className="flex items-center gap-4">
              <img
                src={PHOTO_URL}
                alt="Eduardo Vieira"
                className="w-11 h-11 rounded-full object-cover object-top border border-[#B08D57]"
              />
              <div>
                <span className="font-serif text-xl text-white font-medium block">
                  Eduardo Vieira • {t.roleTitle}
                </span>
                <p className="text-xs sm:text-sm text-[#D1D5DB] mt-0.5">
                  {t.footerSubtitle}
                </p>
                <p className="mt-1 text-sm font-semibold text-[#C5A572]">
                  CRP 06/200229
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:items-end gap-2 w-full md:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#B08D57] hover:bg-[#C5A572] text-white font-semibold text-sm transition-all duration-300 text-center"
              >
                WhatsApp: +55 (13) 98121-6248
              </a>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#D1D5DB] pt-1">
                <a
                  href={emailUrl}
                  className="hover:text-[#C5A572] underline-offset-4 hover:underline transition-colors"
                >
                  E-mail: {EMAIL_ADDRESS}
                </a>
                <span className="hidden sm:inline">•</span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C5A572] underline-offset-4 hover:underline transition-colors"
                >
                  Instagram: @{INSTAGRAM_HANDLE}
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D1D5DB]">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} Eduardo Vieira — {t.roleTitle} (CRP 06/200229). {t.footerRights}
            </p>
            <p className="text-center sm:text-right text-[11px] text-[#D1D5DB]/80">
              {t.footerCrisis}
            </p>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante do WhatsApp (Conversão Mobile & Desktop em todas as dobras) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.ctaSchedule}
        className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 flex items-center gap-2 sm:gap-2.5 px-4 py-3 sm:px-5 sm:py-4 rounded-full bg-[#B08D57] hover:bg-[#C5A572] text-white shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 fill-current shrink-0"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.126.556 4.124 1.529 5.857l-1.529 5.583 5.716-1.5c1.688.918 3.621 1.44 5.684 1.44 6.627 0 12-5.373 12-12s-5.373-12-11.4-11.38z" />
        </svg>
        <span className="font-semibold text-xs sm:text-sm tracking-wide pr-1">
          {t.ctaSchedule}
        </span>
      </a>
    </div>
  );
}
