export class Data {
    constructor() {
    }
    get dataSkills() {
        return [
            {
                title: 'TypeScript',
                logoName: 'skill_ts',
                description: `Typescript é uma linguaguem de programação cujo a mesma é um superconjunto sintático estrito de 
                    JavaScript e adiciona tipagem estática opcional à linguagem.`,
                viewMoreURL: 'www.tecnoblog.net/responde/o-que-e-typescript-guia-para-iniciantes/'
            },
            {
                title: 'JavaScript',
                logoName: 'skill_js',
                description: `JavaScript é uma linguagem de programação interpretada estruturada, de script em alto 
                    nível com tipagem dinâmica fraca e multiparadigma.`,
                viewMoreURL: 'www.hostinger.com.br/tutoriais/o-que-e-javascript'
            },
            {
                title: 'Scrumban',
                logoName: 'skill_scrumban',
                description: `Scrumban é uma abordagem alinhada ao Agile para entrega de produtos, que é um híbrido de Scrum e 
                    Kanban. O Scrumban foi originalmente projetado como uma forma de transição do Scrum para o Kanban.`,
                viewMoreURL: 'blog.pmtech.com.br/scrumban/'
            },
            {
                title: 'HTML',
                logoName: 'skill_html',
                description: `HTML (HyperText Markup Language) é uma linguagem de marcação utilizada na construção de páginas na Web. 
                    Documentos HTML podem ser interpretados por navegadores.`,
                viewMoreURL: 'www.hostinger.com.br/tutoriais/o-que-e-html-conceitos-basicos'
            },
            {
                title: 'CSS',
                logoName: 'skill_css',
                description: `CSS (Cascading Style Sheets) é um mecanismo para adicionar estilos a uma página web, 
                    adicionando um link para um arquivo CSS que contém os estilos ou dentre outras formas.`,
                viewMoreURL: 'www.hostinger.com.br/tutoriais/o-que-e-css-guia-basico-de-css'
            },
            {
                title: 'Git',
                logoName: 'skill_git',
                description: `Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de 
                    software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.`,
                viewMoreURL: 'www.atlassian.com/br/git/tutorials/what-is-git'
            },
        ];
    }
    get dataTestimonies() {
        return [
            {
                id: 5,
                name: 'Diego Zimmermann',
                company: 'TOTVS',
                role: 'Team Coordinator & Squad Leader',
                testimony: `Victor é um profissional dedicado e que tem muito interesse pela aprendizagem.
                    Com pouco tempo de carreira, já se identificou com uma área, onde vem se especializando 
                    como Desenvolvedor Front-end. Tem um perfil curioso, colaborativo e comunicativo. 
                    Qualidades muito importantes para um trabalho em equipe.`
            },
            {
                id: 2,
                name: 'Neto Jacinto',
                company: 'TOTVS',
                role: 'Senior Product Designer',
                testimony: `O Victor tem um perfil comunicativo, proativo, sempre em busca de atender os 
                    requisitos de interface definidos em protótipo, além de criativo e ágil na 
                    execução das atividades de front end.  Em relação ao produto, sempre se demonstrou 
                    preocupado em realizar entregas que entregue valor ao cliente e a empresa.`
            },
            {
                id: 1,
                name: 'Yuri Cabral',
                company: 'TOTVS',
                role: 'Analista l de qualidade',
                testimony: `Um profissional inspirador, sempre buscando 
                    novos conhecimentos e com uma capacidade de 
                    aprendizado muito rápida. Questionador e idealizador, 
                    características essenciais para o mercado de tecnologia.`
            },
            {
                id: 4,
                name: 'Bruno Quadrotti',
                company: 'TOTVS',
                role: 'Engenheiro Front end',
                testimony: `Victor é um profissional completo. Sempre foi proativo e disposto a aprender. 
                    Sabe lidar com facilidade com demandas complexas e possui uma qualidade elevada 
                    naquilo que entrega. Victor tem um potencial de crescimento acima da média por 
                    isso recomendo ele.`
            },
            {
                id: 3,
                name: 'Anderson Simões',
                company: 'TOTVS',
                role: 'Agile Master',
                testimony: `O Victor apesar da pouca idade é um profissional fora de série. 
                    Destoa-se na busca por conhecimento, onde está sempre disposto a 
                    aprender e superar desafios. Possui uma excelente comunição, qualidade 
                    ténica e se trata de uma pessoa muito colaborativa, estando sempre disposto 
                    a ajudar.`
            },
        ];
    }
}
;
