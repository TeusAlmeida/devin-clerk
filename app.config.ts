export type Feature = {
  title: string;
  description: string;
};

export const appConfig = {
  name: "Incompetência",
  description: "Recomendar os funcionários mais inúteis de uma empresa",
  emoji: "🦥",
  accent: "#ea580c",
  upcomingFeatures: [
    {
      title: "Cadastro de funcionários",
      description: "Adicione colegas com nome, cargo e equipe.",
    },
    {
      title: "Ranking de inutilidade",
      description: "Veja a lista de funcionários ordenada pela pontuação de inutilidade.",
    },
    {
      title: "Votação anônima",
      description: "Colegas votam anonimamente em quem menos contribui.",
    },
    {
      title: "Relatório de reuniões inúteis",
      description: "Registre as reuniões que poderiam ter sido um e-mail.",
    },
    {
      title: "Indicação semanal",
      description: "Receba toda semana a recomendação automática do inútil da semana.",
    },
  ] satisfies Feature[],
};
