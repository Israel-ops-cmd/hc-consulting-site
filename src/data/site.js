// Todos os dados abaixo vêm do site atual (hcconsulting.com.br) e da bio do Instagram (@hcconsulting_).
// Para mudar telefone, textos ou depoimentos, edite só este arquivo.

const WHATSAPP_NUMBER = '5584998066117'

export const whatsappLink = (message = 'Olá! Vim pelo site da HC Consulting e quero conversar sobre a contabilidade da minha empresa.') =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

export const contact = {
  phoneDisplay: '(84) 99806-6117',
  phoneHref: 'tel:+5584998066117',
  instagram: 'https://www.instagram.com/hcconsulting_/',
  instagramHandle: '@hcconsulting_',
  address: 'Rua Dr. José Garcia da Rocha, 1481-B, Lagoa Seca, Natal/RN',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=Rua+Dr.+Jos%C3%A9+Garcia+da+Rocha+1481+Lagoa+Seca+Natal+RN',
}

export const nav = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#depoimentos', label: 'Clientes' },
  { href: '#duvidas', label: 'Dúvidas' },
]

export const stats = [
  { value: '+150', label: 'empresas atendidas no RN e em outros estados' },
  { value: '48h', label: 'para entregar o diagnóstico financeiro' },
  { value: '4h', label: 'úteis para responder sua dúvida' },
]

export const pains = [
  'Você paga imposto todo mês e não faz ideia se está no regime certo',
  'O faturamento sobe, mas o dinheiro some antes do fim do mês',
  'Folha, férias e rescisão viraram uma fonte de medo de processo',
  'Seu contador só aparece para mandar guia, nunca para conversar',
]

export const services = [
  {
    id: 'contabil',
    icon: 'Calculator',
    title: 'Análise contábil e planejamento tributário',
    text: 'Revisamos todo mês sua contabilidade e suas obrigações fiscais procurando onde dá para pagar menos, sempre dentro da lei, e você recebe um relatório que se lê em cinco minutos',
    tags: ['Planejamento tributário', 'Compliance fiscal', 'Relatório mensal'],
  },
  {
    id: 'diagnostico',
    icon: 'FileSearch',
    title: 'Diagnóstico financeiro em 48 horas',
    text: 'Olhamos fluxo de caixa, margem e custos para achar os vazamentos que ninguém viu, e em dois dias você tem plano de ação, projeção de 12 meses e uma reunião para entender tudo',
    tags: ['Fluxo de caixa', 'Rentabilidade', 'Plano de ação'],
  },
  {
    id: 'bpo',
    icon: 'Wallet',
    title: 'BPO financeiro',
    text: 'Assumimos o financeiro do dia a dia, de contas a pagar e receber à conciliação bancária, para sua equipe parar de apagar incêndio e voltar a cuidar do negócio',
    tags: ['Contas a pagar e receber', 'Conciliação', 'Relatórios automáticos'],
  },
  {
    id: 'pessoas',
    icon: 'Users',
    title: 'Departamento pessoal completo',
    text: 'Folha de pagamento, admissões, rescisões, ponto e obrigações trabalhistas feitos do jeito certo, com orientação para evitar dor de cabeça com a Justiça do Trabalho',
    tags: ['Folha de pagamento', 'Admissão e rescisão', 'Consultoria trabalhista'],
  },
]

export const extraServices = ['Auditoria', 'Controladoria', 'Perícia contábil']

export const steps = [
  {
    title: 'Diagnóstico',
    text: 'Entendemos como sua empresa funciona hoje: impostos, caixa, folha e processos',
  },
  {
    title: 'Plano',
    text: 'Você recebe um plano claro, com prioridades e quanto cada ajuste deve render',
  },
  {
    title: 'Execução',
    text: 'Colocamos o plano em prática junto com você, com acompanhamento e relatório todo mês',
  },
  {
    title: 'Ajuste fino',
    text: 'Os números mudam e a estratégia muda junto, por isso revisamos sempre que precisar',
  },
]

export const differentials = [
  {
    icon: 'Handshake',
    title: 'Acesso direto ao sócio',
    text: 'Quem cuida da sua empresa é o sócio, não uma fila de chamados',
  },
  {
    icon: 'MessageCircle',
    title: 'Atendimento pelo WhatsApp',
    text: 'Sua dúvida respondida em até 4 horas úteis',
  },
  {
    icon: 'CalendarCheck',
    title: 'Relatório até o 5º dia útil',
    text: 'Os números do mês na sua mão, em linguagem simples',
  },
  {
    icon: 'ShieldCheck',
    title: 'Auditoria e controladoria',
    text: 'Experiência que vai muito além de lançar nota e emitir guia',
  },
]

// Depoimentos publicados no site atual da HC Consulting.
export const testimonials = [
  {
    quote: 'A HC Consulting identificou R$ 180.000 em economia fiscal que nossa empresa não havia encontrado em 3 anos.',
    name: 'Maria Santos',
    role: 'CEO, Transportes Norte Ltda',
  },
  {
    quote: 'Com o diagnóstico financeiro, nossa margem de lucro saiu de 8% para 18% em seis meses.',
    name: 'Ana Costa',
    role: 'Sócia, Clínica Vida & Saúde',
  },
  {
    quote: 'Terceirizar a folha nos economiza R$ 8.000 por mês e acabou com os problemas trabalhistas.',
    name: 'Carlos Mendes',
    role: 'Gerente geral, Indústria Metalúrgica RN',
  },
  {
    quote: 'O BPO financeiro deixou nossa equipe livre para focar no crescimento. Os relatórios mensais são muito claros.',
    name: 'João Silva',
    role: 'Diretor financeiro, Construtora Horizonte',
  },
]

export const faqs = [
  {
    q: 'Para qual tamanho de empresa vocês trabalham?',
    a: 'Nosso foco são pequenas e médias empresas com faturamento anual entre R$ 500 mil e R$ 50 milhões, mas se a sua for menor montamos um pacote do tamanho dela',
  },
  {
    q: 'Quanto dá para economizar de verdade?',
    a: 'Depende de como a empresa está hoje. Nos nossos clientes, a redução de custos costuma ficar entre 15% e 40%, e o diagnóstico mostra o número da sua empresa antes de qualquer compromisso',
  },
  {
    q: 'Já tenho contador. Trocar dá muito trabalho?',
    a: 'Não para você. Cuidamos da transição com o escritório atual, pegamos os documentos e organizamos tudo sem parar a sua operação',
  },
  {
    q: 'Vocês atendem só em Natal?',
    a: 'Não. O escritório fica em Lagoa Seca, Natal/RN, mas atendemos empresas de todo o Brasil, quase tudo online e com reuniões por vídeo quando precisar',
  },
  {
    q: 'Como começo?',
    a: 'Mande uma mensagem no WhatsApp contando um pouco da sua empresa. Marcamos uma conversa rápida e, se fizer sentido, começamos pelo diagnóstico',
  },
]
