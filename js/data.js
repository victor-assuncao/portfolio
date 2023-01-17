export class Data {

    constructor() {

    }

    get dataSkills() {

        return [

            {
                title: 'HTML',
                logoName: 'skill_html',
                description: 
                    `Lorem ipsum dolor sit amet consectetur adipisicing elit, 
                    Voluptatem delectus minus explicabo mollitia praesentium.`,
                viewMoreURL: 'www.google.com'
            },

            {
                title: 'CSS',
                logoName: 'skill_css',
                description: 
                    `Lorem ipsum dolor sit amet consectetur adipisicing elit, 
                    Voluptatem delectus minus explicabo mollitia praesentium.`,
                viewMoreURL: 'www.google.com'
            },

            {
                title: 'Java Script',
                logoName: 'skill_js',
                description: 
                    `Lorem ipsum dolor sit amet consectetur adipisicing elit, 
                    Voluptatem delectus minus explicabo mollitia praesentium.`,
                viewMoreURL: 'www.google.com'
            },

            {
                title: 'Type Script',
                logoName: 'skill_ts',
                description: 
                    `Lorem ipsum dolor sit amet consectetur adipisicing elit, 
                    Voluptatem delectus minus explicabo mollitia praesentium.`,
                viewMoreURL: 'www.google.com'
            },

            {
                title: 'Git',
                logoName: 'skill_git',
                description: 
                    `Lorem ipsum dolor sit amet consectetur adipisicing elit, 
                    Voluptatem delectus minus explicabo mollitia praesentium.`,
                viewMoreURL: 'www.google.com'
            },
        ]
    }

    get dataTestimonies() {

        return [

            {
                id: 1,
                name: 'Yuri Cabral',
                company: 'TOTVS',
                role: 'Analista l de qualidade',
                testimony: 
                    `Um profissional inspirador, sempre buscando 
                    novos conhecimentos e com uma capacidade de 
                    aprendizado muito rápida. Questionador e idealizador, 
                    características essenciais para o mercado de tecnologia.`
            },

            {
                id: 2,
                name: 'Anderson Simões',
                company: 'TOTVS',
                role: 'Agile Master',
                testimony: 
                    `O Victor apesar da pouca idade é um profissional fora de série. 
                    Destoa-se na busca por conhecimento, onde está sempre disposto a 
                    aprender e superar desafios. Possui uma excelente comunição, qualidade 
                    ténica e se trata de uma pessoa muito colaborativa, estando sempre disposto 
                    a ajudar.`
            },

            {
                id: 3,
                name: 'Bruno Quadrotti',
                company: 'TOTVS',
                role: 'Engenheiro de Software',
                testimony: 
                    `Sempre foi um profissional proativo e disposto a aprender. Lidava com facilidade 
                    com as demandas que eram passadas para ele e sempre estava disposto a entregar da 
                    melhor forma possível. Do meu ponto de vista, o Victor teve um desenvolvimento 
                    acima da média em comparação com outros profissionais que trabalhei, por isso recomendo ele.`
            }
        ]
    }
};
