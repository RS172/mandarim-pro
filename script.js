var correctAnswer = "Casa"; // Substitua pela resposta correta em português
//https://hsk.academy/pt/hsk-1-vocabulary-list
//var ideogramas = ['爱', '八', '爸爸', '杯子', '北京', '本', '不客气', '不', '菜', '茶', '吃', '出租车', '打电话', '大']
//var significados = ['Amo', 'Oito', 'Papai', 'Copo', 'Pequim', 'Esta', 'Bem vindo', 'Não', 'Prato', 'Chá', 'Comer', 'Táxi', 'Ligar', 'Grande']
// Array de ideogramas chineses




var ideogramas = [
    "爱", "八", "爸爸", "杯子", "北京", "本", "不客气", "不", "菜", "茶", "吃", "出租车", "打电话", "大", "的", "点", "电脑",
    "电视", "电影", "东西", "都", "读", "对不起", "多", "多少", "儿子", "二", "饭店", "飞机", "分钟", "高兴", "个", "工作",
    "狗", "汉语", "好", "号", "喝", "和", "很", "后面", "回", "会", "几", "家", "叫", "今天", "九", "开", "看", "看见", "块",
    "来", "老师", "了", "冷", "里", "六", "吗", "妈妈", "买", "猫", "没关系", "没有", "米饭", "名字", "明天", "哪", "哪儿", "那",
    "呢", "能", "你", "年", "女儿", "朋友", "漂亮", "苹果", "七", "前面", "钱", "请", "去", "热", "人", "认识", "三", "商店", "上",
    "上午", "少", "谁", "什么", "十", "时候", "是", "书", "水", "水果", "睡觉", "说", "四", "岁", "他", "她", "太", "天气", "听",
    "同学", "喂", "我", "我们", "五", "喜欢", "下", "下午", "下雨", "先生", "现在", "想", "小", "小姐", "些", "写", "谢谢", "星期",
    "学生", "学习", "学校", "一", "一点儿", "医生", "医院", "衣服", "椅子", "有", "月", "再见", "在", "怎么", "怎么样", "这", "中国",
    "中午", "住", "桌子", "字", "昨天", "做", "坐"
  ];

  var ideogramas2 = [
    '的', '我', '你', '是', '了', '不', '在', '他', '我们', '好',
    '有', '这', '会', '吗', '什么', '说', '她', '想', '一', '很',
    '人', '那', '来', '都', '个', '能', '去', '和', '做', '上',
    '没有', '看', '怎么', '现在', '点', '呢', '太', '里', '听', '谁',
    '多', '时候', '下', '谢谢', '先生', '喜欢', '大', '东西', '小','叫', 
    '爱', '年', '请', '回', '工作', '钱', '吃', '开', '家','哪', 
    '朋友', '妈妈', '今天', '几', '爸爸', '些', '怎么样', '对不起','住', '三', 
    '高兴', '买', '医生', '哪儿', '名字','认识', '坐', '喝','写', 
    '月', '号', '狗', '岁', '看见', '打电话', '喂', '儿子', '漂亮','分钟', 
    '再见', '本', '明天', '多少', '块', '女儿', '小姐', '衣服', '水','学校', '电影', 
    '书', '四', '五', '医院', '少', '没关系', '飞机', '二','电视', '读', 
    '后面', '昨天', '睡觉', '六', '老师', '星期', '十', '猫', '电脑', '热', 
    '学生', '下午', '字', '学习', '冷', '前面', '八', '中国','七', '菜', 
    '桌子', '出租车', '天气', '茶', '九', '商店', '椅子', '同学', '一点儿', '苹果', 
    '饭店', '中午', '上午', '水果', '杯子', '下雨', '米饭', '北京', '汉语', '不客气'
  ];

var significados2 = ["Indica Posse", "Eu", "Você", "Ser", "Conclusão(Mudança)", "Não", "Presente em (Local)", "Ele", "Nós", 
   "Bem(Bom)", "Tem", "Isto(Este)", "União ou Compreensão", "Indica Pergunta", " O que é?", "Fala(Diz)", "Ela", "Sinto ou Penso", "1", "Muito(Bastante)", "Pessoa", "Que", "Vou", "Todos", "Classificador De Quantidade", "Pode", "Ir", 
   "E", "Faço", "Acima , A frente ou Aula", "Não tem ou Não há", "Ver(Olhar)", "Como fazer", "Agora", 
   "Classificador de tempo e local", "Indica curiosidade", "Muito", "Dentro e Milha(unidade)", "Ouvir", "Quem?", 
   "Quantidade", "Tempo", "Abaixo", "Obrigado", "Senhor", "Gosto", "Grande", "Coisa", "Pequeno", "Chamar ou Designar", 
   "Amor", "Ano", "Pedir(Gentil)", "Retornar", "Trabalho", "Dinheiro", "Comer", "Abrir", "Família", "Indica pergunta", 
   "Amigo", "Mãe", "Hoje", "Quantos", "Pai", "Alguns", "Como é?", "Desculpa", "Moro", "3", "Feliz", "Comprar", "Médico", 
   "Onde", "Nome", "Conheço", "Sentar", "Beber", "Escrever", "Lua ou Mês", "Classificador de nome, número ou data", 
   "Cachorro", "Anos(Idade)", "Ver", "Ligação(Telefone)", "Alô de telefone", "Filho", "Bonito(a)", "Minuto", "Tchau", 
   "Essência da natureza ou livro", "Amanhã", "Quantos", "Yuan ou pedaço", "Filha", "Senhorita", "Roupa", "Água", 
   "Escola", "Filme", 'Livro', '4', '5', 'Hospital', 'Pouco', 'Não tem problema', 'Avião', '2', 'Televisão', 'Ler', 
   'Atrás', 'Ontem', 'Dormir', '6', 'Professor(a)', 'Semana', '10', 'Gato', 'Computador', 'Calor', 'Estudante', 
   'Tarde', 'Letra(Caractere)', 'Aprender', 'Frio', 'Á frente', '8', 'China', '7', 'Vegetal ou Prato', 'Mesa', 
   'Táxi', 'Clima', 'Chá', '9', 'Loja', 'Cadeira', 'Colega de estudo','Um pouquinho', 'Maçã', 'Restaurante', 
   'Meio-dia', 'Manhã', 'Fruta', 'Copo', 'Chuva', 'Arroz', 'Pequim','Lingua chinesa', 'De nada'
    ];
  
  

// Array de significados em português
var significados = [
    "Amo", "Oito", "Pai", "Copo", "Pequim", "Esta", "seja bem-vindo", "não", "prato", "chá", "comer", "táxi", "ligar",
    "grande", "do", "ponto", "computador", "televisão", "o filme", "coisa", "todos", "ler", "desculpe", "muitos",
    "quantos", "filho", "dois", "restaurante", "aeronave", "minuto", "feliz", "uma", "empregos", "cão", "chinês",
    "é bom", "número", "bebida", "com", "muito", "atrás", "de volta a", "encontro", "um pouco", "família", "ligar",
    "hoje em dia", "nove", "abrir", "veja", "vejo", "peça", "venha", "professor", "acima", "frio", "no", "seis", "é isso",
    "mamãe", "comprar", "gato", "está certo", "não", "arroz", "primeiro nome", "amanhã", "onde", "onde", "aquele", "o que",
    "pode", "vocês", "ano", "filha", "amigo", "bonita", "maçã", "sete", "frente", "dinheiro", "por favor", "ir com",
    "calor", "pessoas", "compreensão", "três", "loja", "em", "manhã", "menos", "who", "o que", "dez", "tempo",
    "sim", "livro", "água", "fruta", "ir para a cama", "dizer", "quatro", "ano de idade", "ele", "ela era", "também",
    "o clima", "ouço", "colega de classe", "oi (interjeição)", "eu", "nós", "fives", "gostar", "sob", "meio dia",
    "chuva", "sr", "agora mesmo", "saudades", "pequeno", "senhorita", "alguns", "escrever", "obrigado", "semana",
    "aluna", "aprender", "escola", "1", "um pouco", "doutores", "Hospital", "Roupas", "Cadeira", "Ter", "Mês", "Adeus",
    "No", "Como", "Que tal isso", "Isto", "China", "Meio Dia", "Viver", "Tabela", "Palavra", "Ontem", "Faz", "Sentar"
];

function checkAnswer(element) {
    var selectedOption = element.innerText;


    if (selectedOption === correctAnswer) {
        alert("Resposta correta!");
        reinicia()
    } else {
        alert("Resposta incorreta. Tente novamente.");
    }

}

function inicio() {
    

    var element = document.createElement("div");
    element.className="option"
    element.id="option1"
    element.appendChild(document.createTextNode('Casa'));
    document.getElementById('quiz-container').appendChild(element);
    element.onclick = function() { checkAnswer(element); };

    var element2 = document.createElement("div");
    element2.className="option"
    element2.id="option2"
    element2.appendChild(document.createTextNode('The man who mistook his wife for a hat'));
    document.getElementById('quiz-container').appendChild(element2);
    element2.onclick = function() { checkAnswer(element2); };


    var element3 = document.createElement("div");
    element3.className="option"
    element3.id="option3"
    element3.appendChild(document.createTextNode('The man who mistook his wife for a hat'));
    document.getElementById('quiz-container').appendChild(element3);
    element3.onclick = function() { checkAnswer(element3); };

    var el = document.getElementById( 'Inicio' );
    el.parentNode.removeChild( el );

    numero_de_perguntas = ideogramas2.length

    var aleatorio = Math.floor(Math.random() * numero_de_perguntas)
    var aleatorio2 = Math.floor(Math.random() * numero_de_perguntas)
    var aleatorio3 = Math.floor(Math.random() * numero_de_perguntas)

    if (aleatorio2 == aleatorio) {
        aleatorio2 = Math.floor(Math.random() * numero_de_perguntas)
    }

    if (aleatorio3 == aleatorio) {
        aleatorio3 = Math.floor(Math.random() * numero_de_perguntas)
    }

    if (aleatorio3 == aleatorio2) {
        aleatorio3 = Math.floor(Math.random() * numero_de_perguntas)
    }

    var local = Math.floor(Math.random() * 3 + 1)

    if (local == 1) {
        document.getElementById("ideogram").innerHTML = ideogramas2[aleatorio];
        document.getElementById("ideogram").className=`${aleatorio+1}`
        document.getElementById("option1").innerHTML = significados2[aleatorio];
        document.getElementById("option2").innerHTML = significados2[aleatorio2];
        document.getElementById("option3").innerHTML = significados2[aleatorio3];
    }
    if (local == 2) {
        document.getElementById("ideogram").innerHTML = ideogramas2[aleatorio];
        document.getElementById("ideogram").className=`${aleatorio+1}`
        document.getElementById("option1").innerHTML = significados2[aleatorio2];
        document.getElementById("option2").innerHTML = significados2[aleatorio];
        document.getElementById("option3").innerHTML = significados2[aleatorio3];
    }
    if (local == 3) {
        document.getElementById("ideogram").innerHTML = ideogramas2[aleatorio];
        document.getElementById("ideogram").className=`${aleatorio+1}`
        document.getElementById("option1").innerHTML = significados2[aleatorio2];
        document.getElementById("option2").innerHTML = significados2[aleatorio3];
        document.getElementById("option3").innerHTML = significados2[aleatorio];
    }

    correctAnswer = significados2[aleatorio];

    
    
}
function reinicia() {

    numero_de_perguntas = ideogramas2.length

    var aleatorio = Math.floor(Math.random() * numero_de_perguntas)
    var aleatorio2 = Math.floor(Math.random() * numero_de_perguntas)
    var aleatorio3 = Math.floor(Math.random() * numero_de_perguntas)

    if (aleatorio2 == aleatorio) {
        aleatorio2 = Math.floor(Math.random() * numero_de_perguntas)
    }

    if (aleatorio3 == aleatorio) {
        aleatorio3 = Math.floor(Math.random() * numero_de_perguntas)
    }

    if (aleatorio3 == aleatorio2) {
        aleatorio3 = Math.floor(Math.random() * numero_de_perguntas)
    }

    var local = Math.floor(Math.random() * 3 + 1)

    if (local == 1) {
        document.getElementById("ideogram").innerHTML = ideogramas2[aleatorio];
        document.getElementById("ideogram").className=`${aleatorio+1}`
        document.getElementById("option1").innerHTML = significados2[aleatorio];
        document.getElementById("option2").innerHTML = significados2[aleatorio2];
        document.getElementById("option3").innerHTML = significados2[aleatorio3];
    }
    if (local == 2) {
        document.getElementById("ideogram").innerHTML = ideogramas2[aleatorio];
        document.getElementById("ideogram").className=`${aleatorio+1}`
        document.getElementById("option1").innerHTML = significados2[aleatorio2];
        document.getElementById("option2").innerHTML = significados2[aleatorio];
        document.getElementById("option3").innerHTML = significados2[aleatorio3];
    }
    if (local == 3) {
        document.getElementById("ideogram").innerHTML = ideogramas2[aleatorio];
        document.getElementById("ideogram").className=`${aleatorio+1}`
        document.getElementById("option1").innerHTML = significados2[aleatorio2];
        document.getElementById("option2").innerHTML = significados2[aleatorio3];
        document.getElementById("option3").innerHTML = significados2[aleatorio];
    }

    correctAnswer = significados2[aleatorio];
}


function pressionada(){
    const elemento = document.getElementById('ideogram');
    var nome=elemento.className

    var audio2 = `Audios/${nome}.mp3`;
    const audio = new Audio(audio2);
    audio.play();
  }
