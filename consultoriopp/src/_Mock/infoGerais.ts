export type infoProps = {
    telefone: number;
    endereço: string;
    numero: number;
    bairro: string;
    cidade: string;
};

const Info: infoProps = {
    endereço: "R. Rodrigues da Cunha",
    numero: 574,
    telefone: 31933571090,
    bairro: "Contagem",
    cidade: "BH",
};

export type QualidadeProps = {
    title: string;
    description: string;
};

const Qualidade: Array<QualidadeProps> = [
    {
        title: " Dermatologia e estética",
        description:
            "Especializada em procedimentos cirúrgicos, estéticos e oncológicos realizados na pele ou no tecido celular subcutâneo, que têm por objetivo prevenir, restaurar e manter a saúde de sua pele, cabelo ou unhas.",
    },
    {
        title: "Atendimento Personalizado",
        description:
            "Queremos que até mesmo os minutos de espera sejam convertidos em agradáveis momentos para ouvir uma relaxante música ambiente enquanto degusta um delicioso café espresso com quitutes do dia. ",
    },
    {
        title: "Urgência Odontológica",
        description:
            "O atendimento é realizado a qualquer hora do dia de acordo com a ordem de chegada. Nossos pacientes são acompanhados e orientados pela equipe até a resolução dos problemas.",
    },
    {
        title: "Clínica Multidisciplina",
        description:
            "Nosso lema é a transformação do atendimento em uma sofisticada experiência. Dos mimos na recepção ao corpo clínico altamente qualificado, tudo foi pensado e padronizado nos mínimos detalhes para aliar resolutividade, conforto e bem-estar.",
    },
];

export type ContatoProps = {
    title: string;
    description: string;
};

const Contato: ContatoProps = {
    title: "Atendemos aqui",
    description: "Para urgências odontológicas. Entre em contato agora!",
};

export type TeamProps = {
    id: number;
    name: string;
    cro: number;
    info: Array<string>;
};

const Team: Array<TeamProps> = [
    {
        id: 1,
        name: "Polyana",
        cro: 53109,
        info: [
            "Graduado em Odontologia pela Universidade Federal dos Vales do Jequitinhonha e Mucuri (UFVJM)",
            "Especialista em Endodontia - Núcleo BH0",
            "Pós-graduado em Dentística e Prótese - Faculdade ✓ Ciências Médicas de Minas Gerais (FCMMG)",
        ],
    },
    {
        id: 2,
        name: "Polyana",
        cro: 53109,
        info: [
            "Graduado em  Vales do Jequitinhonha e Mucuri (UFVJM)",
            "Especialista - Núcleo BH0",
            "Pós-graduado em Dentística e Próas Médicas de Minas Gerais (FCMMG)",
        ],
    },
];

export { Info, Qualidade, Contato, Team };
