const profileSummaries = {
  D: {
    profileName: "Realizador",
    overview:
      "Tende a agir com rapidez, assertividade e foco em resultados. Sente-se confortável perante desafios, procura autonomia para decidir e costuma avançar com determinação quando identifica um objetivo claro. Pode beneficiar de equilibrar velocidade e exigência com escuta, análise e atenção ao impacto das suas decisões nas outras pessoas.",
    integrationNotes: null,
  },

  I: {
    profileName: "Mobilizador",
    overview:
      "Tende a ganhar energia através das relações, da comunicação e da possibilidade de envolver outras pessoas. Costuma demonstrar entusiasmo, espontaneidade e facilidade para promover ideias e criar conexões. Pode beneficiar de equilibrar otimismo e dinamismo com organização, foco, análise de factos e conclusão consistente do que inicia.",
    integrationNotes: null,
  },

  S: {
    profileName: "Estabilizador",
    overview:
      "Tende a valorizar estabilidade, confiança, cooperação e relações consistentes. Costuma agir com calma, ouvir antes de reagir e contribuir para ambientes mais harmoniosos e previsíveis. Pode beneficiar de desenvolver maior iniciativa, adaptação à mudança e disponibilidade para assumir riscos calculados quando a situação exige maior velocidade.",
    integrationNotes: null,
  },

  C: {
    profileName: "Estruturador",
    overview:
      "Tende a procurar precisão, lógica, qualidade e consistência antes de agir. Costuma analisar detalhes, valorizar critérios claros e trabalhar melhor quando compreende o processo e o padrão esperado. Pode beneficiar de equilibrar rigor e análise com flexibilidade, velocidade de decisão e tolerância a situações em que não existe informação perfeita.",
    integrationNotes: null,
  },

  DI: {
    profileName: "Impulsionador",
    overview:
      "Combina orientação para resultados com elevada capacidade de comunicação e influência. Tende a avançar rapidamente, envolver outras pessoas e defender ideias com energia, confiança e persuasão. Esta combinação favorece contextos que exigem iniciativa, decisão e mobilização, podendo beneficiar de maior atenção aos detalhes, à escuta e à consistência na execução.",
    integrationNotes: [
      "A rapidez para agir pode ser reforçada pelo entusiasmo para envolver outras pessoas, aumentando a capacidade de mobilização.",
      "Pode alternar entre decidir diretamente e procurar adesão através da comunicação e da persuasão.",
      "A combinação de velocidade, confiança e entusiasmo pode levar a avançar antes de aprofundar detalhes ou consequências.",
    ],
  },

  DS: {
    profileName: "Realizador Consistente",
    overview:
      "Combina determinação para alcançar resultados com uma tendência para estabilidade, cooperação e continuidade. Pode assumir a frente quando necessário sem perder completamente a preocupação com as pessoas e com a manutenção do equilíbrio. Tende a beneficiar de contextos onde seja possível produzir resultados de forma sustentada, devendo observar possíveis tensões entre a urgência para avançar e a necessidade de segurança e previsibilidade.",
    integrationNotes: [
      "Pode sentir simultaneamente vontade de avançar rapidamente e necessidade de garantir estabilidade antes de consolidar uma decisão.",
      "A firmeza orientada para resultados pode coexistir com preocupação em preservar relações e evitar ruturas desnecessárias.",
      "Em alguns contextos pode assumir a iniciativa com rapidez e, noutros, preferir continuidade, previsibilidade e menor exposição ao risco.",
    ],
  },

  DC: {
    profileName: "Executor Estratégico",
    overview:
      "Combina foco em resultados com análise, rigor e atenção à qualidade. Tende a procurar soluções objetivas, tomar decisões com base em critérios e manter padrões elevados de execução. Esta combinação pode favorecer desafios complexos que exigem simultaneamente rapidez e precisão, embora possa aumentar a exigência, a rigidez ou a impaciência quando pessoas ou processos não acompanham o padrão esperado.",
    integrationNotes: [
      "Pode existir tensão entre a vontade de decidir rapidamente e a necessidade de analisar informação suficiente antes de avançar.",
      "O foco em resultados tende a ser acompanhado por padrões elevados de qualidade e precisão.",
      "A combinação pode aumentar a exigência consigo próprio, com outras pessoas e com a qualidade das entregas.",
    ],
  },

  IS: {
    profileName: "Conector Harmonizador",
    overview:
      "Combina facilidade de comunicação e criação de relações com paciência, empatia e procura de harmonia. Tende a aproximar pessoas, promover colaboração e contribuir para ambientes socialmente positivos e acolhedores. Pode beneficiar de desenvolver maior assertividade perante conflitos, mais disciplina na execução e maior rapidez em decisões que exigem posicionamento firme.",
    integrationNotes: [
      "A facilidade para criar relações tende a combinar-se com uma preocupação genuína em preservar confiança e harmonia.",
      "Pode procurar resolver tensões através do diálogo e da aproximação, evitando confrontos mais diretos.",
      "O desejo de agradar e manter boas relações pode dificultar posicionamentos firmes ou decisões que possam desagradar a outras pessoas.",
    ],
  },

  IC: {
    profileName: "Comunicador Estruturado",
    overview:
      "Combina capacidade de comunicação e influência com organização, análise e preocupação com a qualidade. Tende a apresentar ideias de forma envolvente sem abandonar completamente a necessidade de lógica, clareza e estrutura. Esta combinação pode favorecer situações que exigem criatividade com organização, devendo equilibrar espontaneidade e entusiasmo com profundidade, foco e consistência.",
    integrationNotes: [
      "Pode combinar persuasão e entusiasmo com necessidade de sustentar ideias através de lógica, dados e estrutura.",
      "A espontaneidade social pode coexistir com elevada preocupação com qualidade e correção.",
      "Pode existir tensão entre comunicar rapidamente uma ideia e querer refiná-la antes de a considerar suficientemente sólida.",
    ],
  },

  SC: {
    profileName: "Planeador Consistente",
    overview:
      "Combina estabilidade, paciência e cooperação com organização, precisão e atenção aos detalhes. Tende a trabalhar de forma metódica, confiável e consistente, valorizando processos claros e ambientes previsíveis. Pode apresentar elevada capacidade para manter padrões e continuidade, embora mudanças rápidas, riscos ou decisões com pouca informação possam exigir maior esforço de adaptação.",
    integrationNotes: [
      "A procura de estabilidade tende a ser reforçada pela preferência por estrutura, regras e previsibilidade.",
      "Pode apresentar elevada consistência, atenção ao detalhe e compromisso com processos bem definidos.",
      "Mudanças repentinas ou decisões com pouca informação podem gerar resistência tanto pela necessidade de segurança como pela necessidade de precisão.",
    ],
  },

  DIS: {
    profileName: "Mobilizador Equilibrado",
    overview:
      "Combina orientação para resultados, capacidade de influência e preocupação com relações e estabilidade. Tende a alternar entre avançar, envolver pessoas e preservar o equilíbrio do grupo, podendo adaptar o estilo conforme a situação. É uma combinação multifacetada, com potencial para mobilizar e executar sem perder completamente a dimensão relacional, embora possa sentir tensão entre velocidade, entusiasmo e necessidade de consenso ou segurança.",
    integrationNotes: [
      "Pode alternar entre assumir a liderança, mobilizar pessoas e procurar preservar a harmonia do grupo.",
      "A vontade de avançar rapidamente pode entrar em tensão com a necessidade de manter relações estáveis e obter adesão das pessoas.",
      "Pode adaptar bastante o comportamento ao contexto, mostrando maior firmeza, sociabilidade ou paciência conforme a situação.",
      "A multiplicidade de tendências pode tornar menos previsível qual delas aparecerá primeiro perante pressão, conflito ou mudança.",
    ],
  },

  DIC: {
    profileName: "Estratega Persuasivo",
    overview:
      "Combina determinação, influência e pensamento analítico. Tende a procurar resultados, comunicar ideias com convicção e sustentar decisões através de lógica, dados ou critérios claros. Pode destacar-se em situações que exigem persuasão com direção e estrutura, embora a combinação de exigência, rapidez e convicção possa tornar importante desenvolver escuta, flexibilidade e abertura a perspetivas diferentes.",
    integrationNotes: [
      "Pode combinar capacidade para decidir, persuadir e fundamentar ideias através de argumentos e informação.",
      "A rapidez para avançar pode entrar em tensão com a necessidade de analisar dados e garantir qualidade.",
      "Convicção, capacidade verbal e rigor podem tornar a comunicação particularmente forte, mas também aumentar resistência a perspetivas contrárias.",
      "Pode procurar simultaneamente impacto, reconhecimento e excelência naquilo que executa.",
    ],
  },

  DSC: {
    profileName: "Executor Consistente",
    overview:
      "Combina orientação para resultados com estabilidade, disciplina e atenção à qualidade. Tende a procurar execução segura, estruturada e consistente, mantendo simultaneamente preocupação com objetivos e padrões elevados. Pode ser particularmente eficaz em contextos que exigem responsabilidade e continuidade, embora possa existir tensão entre a vontade de acelerar, a necessidade de segurança e a procura de precisão.",
    integrationNotes: [
      "Pode procurar resultados rápidos sem abdicar facilmente de segurança, continuidade e qualidade.",
      "A iniciativa para avançar pode ser moderada pela necessidade de analisar riscos e preservar estabilidade.",
      "Tende a valorizar execução consistente e padrões elevados, podendo sentir tensão quando velocidade e precisão entram em conflito.",
      "Pode demonstrar firmeza na direção dos objetivos e, simultaneamente, cautela na forma como mudanças são implementadas.",
    ],
  },

  ISC: {
    profileName: "Integrador Consistente",
    overview:
      "Combina capacidade de relacionamento e comunicação com estabilidade, cooperação e organização. Tende a integrar pessoas, informação e processos de forma cuidadosa, procurando manter boas relações sem perder completamente a necessidade de estrutura e qualidade. Pode favorecer ambientes colaborativos e organizados, embora situações de conflito intenso, elevada pressão ou decisões muito rápidas possam exigir maior assertividade e velocidade.",
    integrationNotes: [
      "Pode combinar facilidade relacional com uma atuação cuidadosa, organizada e orientada para estabilidade.",
      "A necessidade de preservar boas relações tende a coexistir com preocupação por qualidade, regras e consistência.",
      "Pode comunicar bem sem necessariamente procurar confronto, preferindo influência, cooperação e argumentação estruturada.",
      "Situações que exigem decisões muito rápidas ou elevada exposição ao risco podem criar tensão entre relacionamento, segurança e precisão.",
    ],
  },
};

module.exports = { profileSummaries };
