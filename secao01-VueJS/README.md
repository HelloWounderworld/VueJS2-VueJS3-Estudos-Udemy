# Seção1 - Iniciando com VueJS:

## Aula 01 - Canais de comunicação:
O curso de Desenvolvimento Web Avançado com Vue possui um grupo no Facebook. A proposta do grupo é criar uma espaço colaborativo, possibilitando a troca de conhecimentos e experiências entre os alunos do curso, uma ótima oportunidade para conhecer pessoas com os mesmos objetivos profissionais que você!

Vale lembrar porém que o grupo não é dedicado ao suporte de dúvidas do curso, as dúvidas deverão ser postadas aqui no fórum da Udemy normalmente.

Link do grupo: 

https://www.facebook.com/groups/860310584664247

## Aula 02 - Introdução ao Vue.js:
Arquivo para visualização: secao1-aula02-introducao_ao_vuejs.pdf

### O que é framework vuejs?

- https://www.treinaweb.com.br/blog/o-que-e-o-vue-js

- https://rockcontent.com/br/talent-blog/vue-js/
    
### SPA - Single Page Application:

- https://www.treinaweb.com.br/blog/o-que-sao-aplicacoes-spa/

- https://www.devmedia.com.br/ja-ouviu-falar-em-single-page-applications/39009

Basicamente, o VueJS é um framework JavaScript de front-end.

### Vantagens de se usar VueJS:
https://blog.xpeducacao.com.br/vue-js-javascript/

## Aula 03 - Instalando as ferramentas de desenvolvimento local:
Conforme o arquivo pdf, secao1-aula03.

Vamos instalar os VSCode - Editor de texto de código fonte da Microsoft (https://code.visualstudio.com/download).

Extensões:

- Vetur

- Live Server

## Aula 04 - Iniciando o nosso primeiro front-end com Vue:
Primeiro de tudo, vamos baixar os devidos arquivos para essa aula.

Conforme o arquivo, secao1-aula04 em pdf, temos três caminhos para podermos iniciar o primeiro front-end com Vue:

    - Download - Podemos baixar nas versões de desenvolvimento e produção e baixado o mesmo podemos realizar a sua inclusão no seu projeto.

    - Link CDN (Content Delivery Network/Rede de Distribuição de Conteúdo):

        -- Prototipação ou aprendizado - Retorna a versão mais atual do framework

        -- Produção - versão fixo do framework, precisa-se informar qual versão do framework vamos querer utilizar.

    - CLI (Command Line Interface/Interface de Linha de Comando) - via vue cli.

Para essa aula, vamos aprender a trabalhar com Download e Link CDN do framework.

O CLI ficará mais para frente.

Vamos visitar o site: https://vuejs.org/

Isso irá fazer aparecer uma tela onde terá o texto "The Progressive JavaScript Framework".

Em seguida, vc pode colocar a página traduzida em português ou se quiser continuar no inglês, deixo no critério do estudante.

Em seguida, clicamos em começar/get Started.

Isso te encaminhará para uma tela: 

- https://vuejs.org/guide/introduction.html ou https://br.vuejs.org/v2/guide/index.html

Eu, no caso, estou usando o segundo link para esse estudo.

Vamos clicar na opção "Instalação", nela vc poderá ver as respectiva versões existentes para vuejs, em Guia.

Vimos que, em 2023, já temos uma versão mais recente que é 3.x. 
Mas, como a aula da Udemy em que estou assistindo faz o uso do Vuejs da versão 2.x, então iremos trabalhar em cima dele.

No caso, aprendendo bem o conceito dessa versão, para a versão mais nova, não haverá tantas dificuldades para realizar as mesmas implementações aprendidas nessas versão.

Note que, em "Inclusão Direta com <script>" nela temos a opção de realizarmos o download com a devida instrução da mesma.

E logo em baixo disso, temos tbm a opção CDN.

Assim, vamos começar por fazer o download do desenvolvimento:

    - Versão Desenvolvedor

Isso irá baixar um arquivo vue.js.

Vamos trazer esse arquivo para esse repositório.

Vamos, agora, criar um diretório para começarmos a desenvolver, no caso o diretório secao1-VueJS.

Dentro desse diretório, vamos colocar o arquivo vue.js, que foi baixado.
Bom, já temos o framework pronto dentro desse arquivo vue.js.

Dentro desse diretório, vamos criar um novo arquivo index.html e coloquemos o seguinte.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>

    </body>
    </html>

Um macete que podemos te falar, seria que basta digitar html que irá aparecer as opções de html's e vc escolhe :5 e dar o enter.

Agora, vamos implementar o vue.js para o nosso arquivo index.html, colocando o seguinte código no head.

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="./vue.js"></script>
        <title>Document</title>
    </head>

Vamos fazer um teste, colocando um texto Teste.

    <body>
        Teste
    </body>

Em seguida, vamos clicar com o botão direito do mouse sobre o arquivo index.html e escolher a opção "Open With Live Server", que vem graças à extensão Live Server que foi instalado em uma aula anterior.

Isso abrirá o seguinte link:

    http://127.0.0.1:5500/secao1-VueJS/index.html
    
Donde, o 127.0.0.1 indica o localhost e sendo aberto na porta 5500, cuja porta podemos ver pelo VSCode na parte inferior direito onde está escrito Port.

Com isso, vamos conseguir ver em real time, qualquer alteração que eu fizer no index.html, ao ser salvo, imediatamente, a alteração será exibida no broswer.

No caso, isso acaba sendo uma forma muito produtiva quando estivermos trabalhando com os testes de front-end.

Lembrando, que é fundamental utilizar o Live Server para possibilitar tais tipo de trabalho.

Para verificarmos se a aplicação front-end já está bem configurada, podemos ver via o navegador broswer abrindo o seu Console.

Nela, vamos colocar Vue e nisso será necessário aparecer a seguinte msg.

    ƒ Vue (options) {
        if (!(this instanceof Vue)
        ) {
        warn('Vue is a constructor and should be called with the `new` keyword');
        }
        this._init(options);
    }

Se apareceu essa msg, significa que o elemento Vue, está sendo reconhecido como objeto o que significa que o ambiente está pronto para realizamos as devidas implementações em Vue.

Agora, para usarmos o CDN, não tem segredo. No caso, criando o mesmo script como foi feito para a versão de download, será necessário realizar para o CDN tbm como o seguinte.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- <script src="./vue.js"></script> -->
        <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
        <title>Document</title>
    </head>
    <body>
        Teste Live Server.
    </body>
    </html>

Mas, tome cuidado, isso pode ser que não seja compatível com a versão com que está sendo mostrado na aula de VueJS.

## Aula 05 - Primeiro App em Vue (instância de Vue e o double mustache):
Arquivo para uma exibição básica de como que funciona em instanciar Vue, muito parecido com JQuery: secao1-aula05, arquivo pdf.

Documentação para leitura: 

https://br.vuejs.org/v2/guide/syntax.html#Interpolacoes

O Objetivo primário de Vue é criar interfaces reativas por meio de componentes.

Como estamos falando de interfaces, então trabalharemos com elementos HTML's.

E como estamos falando reatividade e componentes, estamos falando de um conjunto de lógica de programação que possibilita isso e escrita em linguagem JavaScript.

Logo, no arquivo index.html, vamos implementar a instância do Vue no body via script, de forma análoga feita quando realizamos implementações do código JavaScript em html.

    <body>
        Teste Live Server

        <div id="app">

        </div>

        <script>

            options = {
                el: '#app' // '#' para selecionar por id | '.' para selecionar por class. Muito similar ao JQuery.
            }

            const vm = new Vue(options); // vm = ViewModel. O const vm está sendo atribuído o new Vue para possibilitar a recuperação dessa instância.

            console.log(vm);

        </script>

    </body>

Note que, como está sendo feito na explicação dentre as tags acima, no console.log que está sendo chamado acima, ao olharmos no Console, já é exibido a tal instância em forma de objeto.

Dentro desse objeto, percebe-se que já tem o elemento "el" indicando que está capturando a div com id app que havíamos definido acima.
Isso indica que já estamos conectando uma instância Vue com um elemento html em específico.

Feito isso, podemos definir mais atributos dentro dessa instância Vue que será aplicado no html.

    <body>
        <div id="app">
            {{ mensagem }}
        </div>

        <script>

            options = {
                el: '#app', // '#' para selecionar por id | '.' para selecionar por class. Muito similar ao JQuery.
                data: { // o data ela guarda variáveis/atributos reativos. Além disso, isso possibilita tbm exibir na div marcada pelo elemento, as variáveis/atributos em forma de mustache "{{}}", como está sendo feito para a variável, mensagem.
                    mensagem: 'Primeiro template controlado pelo Vue'
                }
            }

            const vm = new Vue(options); // vm = ViewModel. O const vm está sendo atribuído o new Vue para possibilitar a recuperação dessa instância.

            console.log(vm);

        </script>

    </body>

Note que, acima colocamos o elemento data, donde tem por funcionalidade, guardar as variáveis/atributos reativas e que será trabalhado acima dela.
E usamos o mustache "{{}}", para mostrarmos que é possível exibirmos as variáveis/atributos na div em que foi marcada, app.

Só que, o usual do cotidiano do Vue, é que ela não seja divido na forma como está expressa acima, em options e em seguida sendo chamado dentro dela.

Mas, sim, todo o objeto em que foi definido no option, ser definido diretamente dentro do new Vue.

    <body>
        <div id="app">
            {{ mensagem }}
        </div>

        <script>

            // options = {
            //     el: '#app', // '#' para selecionar por id | '.' para selecionar por class. Muito similar ao JQuery.
            //     data: { // o data ela guarda variáveis/atributos reativos. Além disso, isso possibilita tbm exibir na div marcada pelo elemento, as variáveis/atributos em forma de mustache "{{}}", como está sendo feito para a variável, mensagem.
            //         mensagem: 'Primeiro template controlado pelo Vue'
            //     }
            // }

            // const vm = new Vue(options); // vm = ViewModel. O const vm está sendo atribuído o new Vue para possibilitar a recuperação dessa instância.
            const vm = new Vue({
                el: '#app', // '#' para selecionar por id | '.' para selecionar por class. Muito similar ao JQuery.
                data: { // o data ela guarda variáveis/atributos reativos. Além disso, isso possibilita tbm exibir na div marcada pelo elemento, as variáveis/atributos em forma de mustache "{{}}", como está sendo feito para a variável, mensagem.
                    mensagem: 'Primeiro template controlado pelo Vue'
                }
            });

            // console.log(vm);

        </script>

    </body>

Nessa aula, o objetivo foi apenas apresentar a instância do Vue, o new Vue, e os dois atributos principais e que são fundamentais para a aplicação do Vue, o "el" e "data", e tbm o uso da mustache para podermos exibir as variáveis/atributos reativos no html, na div marcada pelo el.

## Aula 06 - Iniciando projetos Vue com o JSFiddle e ou Codepen:
Vamos apresentar dois dos principais editores de código voltado para front-end, JSFiddle e CodePen.

O CodePen eu já estou familiarizado, pois usei muito ela nas criações de telas usando vue no meu trabalho!

No caso, os links dos respectivos editores de códigos:

    - https://jsfiddle.net/

    - https://codepen.io/

No caso, vamos experimentar em usar o CodePen, já que estou acostumado.

Até agora, construímos os arquivos index.html e nela instanciamos o Vue, depois que temos realizado o download desse framework.

Note que, ao abrirmos o CodePen, a área de código, depois que vc clica no Start Coding, irá aparecer três áreas para codificação, HTML, CSS e JavaScript.

Como foi dito no início, esse editor de Código é voltado para front-end e o que se espera seria que ela suporte quaisquer framework voltado para front-end advinda do código JavaScript, mas claro precisamos especificar qual framework é clicando na engrenagem ao lado da tela JS, pois precisaríamos adicionar um script externo, que será aberto uma modal onde terá uma área "Add External Scripts/Pens", donde vc pode pesquisar qual framework vc queira usar, no nosso caso é Vue2.

Logo, o que se esperaria, seria que se jogarmos na parte de html a div com mustache que colocamos no index.html e no JavaScript, jogarmos o código que instancia o Vue, o que se espera é o mesmo resultado em que podemos ver pelo live server.

## Aula 07 - Explorando um pouco mais a propriedade data:
Conteúdo para leitura: 

https://br.vuejs.org/v2/guide/instance.html#Criando-a-Instancia-Vue

Nessa aula, vamos explorar mais à fundo a funcionalidade do atributo "data" da instância vue.

Enquanto o "el" ele funciona para ligar uma div com uma instância Vue, o data ela tem por definição, determinar, outras propriedades que será possível acessar por meio de templates strings.

No caso, como exemplo, podemos colocar inúmeras propriedades de várias tipos dentro de data.

Entenda que o data ela define as propriedades padrões que serão apresentadas no momento em que será acessado a tela e que podem ser dinamizadas.

No index.html, onde instanciamos o Vue, colocamos mais propriedade na data para mostrarmos o que é possível colocar nela.

    const vm = new Vue({
        el: '#app', // '#' para selecionar por id | '.' para selecionar por class. Muito similar ao JQuery.
        data: { // o data ela guarda variáveis/atributos reativos. Além disso, isso possibilita tbm exibir na div marcada pelo elemento, as variáveis/atributos em forma de mustache "{{}}", como está sendo feito para a variável, mensagem.
            mensagem: 'Primeiro template controlado pelo Vue', // String
            valorTotal: 150.47, // número
            logado: false, // booleano
            hobbies: [
                'Dormir',
                'Estudar Matemática',
                'Correr',
                'Assistir animes'
            ], // array
            perfil: {
                nome: 'Leonardo Takashi Teramatsu',
                site: 'https://github.com/HelloWounderworld',
                idade: 26,
                cursos: [
                    { 
                        nome: 'Revisão JavaScript - Master',
                        cargaHoraria: '146 horas'
                    },
                    { 
                        nome: 'Revisão Python - Master',
                        cargaHoraria: '150 horas' 
                    }
                ]
            }
        }
    });

Uma vez definido a propriedade no data, podemos acessar ela dentro da div em que o el está apontando usando a chave mustaches, "{{}}".

    <div id="app">
        {{ mensagem }} <br>
        Valor total: {{ valorTotal }}<br>
        Logado: {{ logado }}<br>
        Hobbie: {{ hobbie[0] }}<br>
        Perfil: {{ perfil }}
    </div>

Agora, note que, a propriedade "perfil" exibdo acima não ela exibe um objeto, porque ele é um objeto que tem dentro dele um objeto.

Para isso, precisamos especificar qual elemento dentro desse objeto estamos acessando.

    <div id="app">
        {{ mensagem }} <br>
        Valor total: {{ valorTotal }}<br>
        Logado: {{ logado }}<br>
        Hobbie: {{ hobbies[0] }}<br>
        Perfil: {{ perfil.site }}, {{perfil.cursos[0].nome}}
    </div>

O nome do método que aplicamos para exibir as propriedades definidas no data usando o mustache se chama interpolação.

Obs: Na leitura sobre da documentação sobre data, tenho aqui uma abordagem sobre o teste que realizei sobre o Object.freeze.

    <body>
        <div id="app">
            {{ mensagem }} <br>
            Valor total: {{ valorTotal }}<br>
            Logado: {{ logado }}<br>
            Hobbie: {{ hobbies[0] }}<br>
            Perfil: {{ perfil.site }}, {{perfil.cursos[0].nome}}<br>

            Objeto que não irá se alterar: {{ Gela.congela }}<br>
            <button @click="Gela.congela === 'Mudou'">De Bar para Mudar</button><br>
            Note que, vc pode clicar quantas vezes quiser no botão "De Bar para Mudar", que o "Bar" não muda de jeito nenhum para Mudar.
        </div>

        <script>

            // options = {
            //     el: '#app', // '#' para selecionar por id | '.' para selecionar por class. Muito similar ao JQuery.
            //     data: { // o data ela guarda variáveis/atributos reativos. Além disso, isso possibilita tbm exibir na div marcada pelo elemento, as variáveis/atributos em forma de mustache "{{}}", como está sendo feito para a variável, mensagem.
            //         mensagem: 'Primeiro template controlado pelo Vue'
            //     }
            // }

            // const vm = new Vue(options); // vm = ViewModel. O const vm está sendo atribuído o new Vue para possibilitar a recuperação dessa instância.

            var Congela = {
                congela: 'Bar'
            }
            Object.freeze(Congela)
            const vm = new Vue({
                el: '#app', // '#' para selecionar por id | '.' para selecionar por class. Muito similar ao JQuery.
                data: { // o data ela guarda variáveis/atributos reativos. Além disso, isso possibilita tbm exibir na div marcada pelo elemento, as variáveis/atributos em forma de mustache "{{}}", como está sendo feito para a variável, mensagem.
                    mensagem: 'Primeiro template controlado pelo Vue', // String
                    valorTotal: 150.47, // número
                    logado: false, // booleano
                    hobbies: [
                        'Dormir',
                        'Estudar Matemática',
                        'Correr',
                        'Assistir animes'
                    ], // array
                    perfil: {
                        nome: 'Leonardo Takashi Teramatsu',
                        site: 'https://github.com/HelloWounderworld',
                        idade: 26,
                        cursos: [
                            { 
                                nome: 'Revisão JavaScript - Master',
                                cargaHoraria: '146 horas'
                            },
                            { 
                                nome: 'Revisão Python - Master',
                                cargaHoraria: '150 horas' 
                            }
                        ]
                    },
                    Gela: Congela
                }
            });

            // console.log(vm);

        </script>

    </body>


## Aula 08 - Methods - Adicionando os nossos primeiros métodos a instância Vue:
Arquivo pdf visual: 

seca1-aula08

Documentação da leitura:

    - https://medium.com/vue-js-o-manual-definitivo/aprenda-a-executar-a%C3%A7%C3%B5es-em-resposta-a-manipula%C3%A7%C3%A3o-de-eventos-m%C3%A9todos-no-vue-js-2-0-b15f0114371f#:~:text=Um%20m%C3%A9todo%20Vue%20%C3%A9%20uma%20fun%C3%A7%C3%A3o%20associada%20%C3%A0%20inst%C3%A2ncia%20Vue.&text=Os%20m%C3%A9todos%20s%C3%A3o%20especialmente%20%C3%BAteis,um%20elemento%20para%20manipular%20eventos.

    - https://br.vuejs.org/v2/guide/instance.html#Criando-a-Instancia-Vue

    - https://br.vuejs.org/v2/api/#methods

    - https://br.vuejs.org/v2/api/#Propriedades-de-Instancia

Vamos adicionar métodos na instância vue. No caso, o atributo que iremos aprender a mexer é "methods", de método.

Primeiro, vamos criar um diretório para guardar as coisas que temos feito até agora que aborda sobre o atributo data.

Criamos um diretório Aula01-07-el-data-mustache e dentro dela mandamos uma cópia do index.html.

Não se esqueça de atualizar o script em que está sendo feito a chamada vue.js.

    <script src="./../vue.js"></script>

Agora, vamos trabalhar em cima do index.html.
No caso, vamos acrescentar o atributo methods e nela definir uma função somar.

    <script>

        const vm = new Vue({
            el: '#app', // '#' para selecionar por id | '.' para selecionar por class. Muito similar ao JQuery.
            data: {},
            methods: {
                somar() {
                    
                }
            }
        });

    </script>

Note que, definido a função abaixo, ao realizarmos o mustache de forma típica para data

    <div id="app">
        {{ somar }}
    </div>

    <script>

        const vm = new Vue({
            el: '#app', // '#' para selecionar por id | '.' para selecionar por class. Muito similar ao JQuery.
            data: {},
            methods: {
                //somar: function somar() {
                    //return 4 + 2
                //}, // Forma alternativa de executar a função somar usando a sintaxe JavaScript.
                somar() {
                    return 4 + 2
                }
            }
        });

    </script>

Aparecerá a seguinte msg no broswer.

    function () { [native code] }

Para que seja possível executar um método é o mesmo como executamos as funções JavaScript ou Python, usando "()".

No caso, o somar ficaria "somar()" dentro do mustache.

    <div id="app">
        {{ somar() }}
    </div>

Podemos, tbm, chamar uma função anônima como seguinte.

    <div id="app">
        {{ somar() }}<br>
        {{ subtrair() }}
    </div>

    <script>

        const vm = new Vue({
            el: '#app', // '#' para selecionar por id | '.' para selecionar por class. Muito similar ao JQuery.
            data: {},
            methods: {
                //somar: function somar() {
                    //return 4 + 2
                //}, // Forma alternativa de executar a função somar usando a sintaxe JAvaScript.
                somar() {
                    return 4 + 2
                },
                subtrair: function() {
                    return 4 - 2
                }
            }
        });

    </script>

Ainda assim, tudo estará funcionando de forma correta.

Temos uma terceira forma de abordar as funções do método que é usando o arrow function.

    <div id="app">
        {{ somar() }}<br>
        {{ subtrair() }}<br>
        {{ multiplicar() }}
    </div>

    <script>

        const vm = new Vue({
            el: '#app', // '#' para selecionar por id | '.' para selecionar por class. Muito similar ao JQuery.
            data: {},
            methods: {
                //somar: function somar() {
                    //return 4 + 2
                //}, // Forma alternativa de executar a função somar usando a sintaxe JAvaScript.
                somar() {
                    return 4 + 2
                },
                subtrair: function() { //anônima
                    return 4 - 2
                },
                multiplicar: () => { // Arrow function
                    return 4 * 2
                }
            }
        });

    </script>

Agora, a forma mais enxuta de definir uma função seria o formato como está sendo executado o somar.

Vamos criar um método dividir com essa forma tbm.

    <div id="app">
        {{ somar() }}<br>
        {{ subtrair() }}<br>
        {{ multiplicar() }}<br>
        {{ dividir() }}
    </div>

    <script>

        const vm = new Vue({
            el: '#app', // '#' para selecionar por id | '.' para selecionar por class. Muito similar ao JQuery.
            data: {},
            methods: {
                //somar: function somar() {
                    //return 4 + 2
                //}, // Forma alternativa de executar a função somar usando a sintaxe JAvaScript.
                somar() { // forma mais enxuta de definir os pares de chaves/valor
                    return 4 + 2
                },
                subtrair: function() { //anônima
                    return 4 - 2
                },
                multiplicar: () => { // Arrow function
                    return 4 * 2
                },
                dividir() {
                    return 4 / 2
                }
            }
        });

    </script>

Basicamente, a forma mais enxuta está fazendo a referência à forma alternativa de somar que temos acima, em JavaScript.

Ou seja, ela só está definindo o nome da função com o mesmo nome em que é chamado dentro da função.

Mas, assim como foi visto nos outros exemplos da forma como definimos o método, sempre que formos executar um método que definimos, terá que ser chamado o nome do método e não o nome em que vai dentro da função, como podemos ver.

    <div id="app">
        {{ somar() }}<br>
        {{ subtrair() }}<br>
        {{ multiplicar() }}<br>
        {{ dividir() }}<br>
        {{ numeroAleatorio() }}
    </div>

    <script>

        const vm = new Vue({
            el: '#app', // '#' para selecionar por id | '.' para selecionar por class. Muito similar ao JQuery.
            data: {},
            methods: {
                //somar: function somar() {
                    //return 4 + 2
                //}, // Forma alternativa de executar a função somar usando a sintaxe JAvaScript.
                somar() { // forma mais enxuta de definir os pares de chaves/valor
                    return 4 + 2
                },
                subtrair: function() { //anônima
                    return 4 - 2
                },
                multiplicar: () => { // Arrow function
                    return 4 * 2
                },
                dividir() {
                    return 4 / 2
                },
                numeroAleatorio: function numero() {
                    return Math.random()
                }
            }
        });

    </script>

Acima, o método, numeroAleatorio, definido tem como função dentro dela definido com o nome numero.

Mas, para executar esse método devemos chamar pelo nome numeroAleatorio, e não o "numero".

## Aula 09 - Methods - Recuperando atributos do data:
Arquivo pdf para visualizaçao: 

secao1-aula09

Documentação para leitura na parte de ciclo de vida da instância:

    - https://br.vuejs.org/v2/guide/instance.html

Nessa aula, vamos aprender a como recuperar os atributos do data dentro do methods.

Logo, começamos, primeiro, por definir alguns atributos no data e tirarmos o método criado numeroAleatorio. 

    <div id="app">
        {{ somar() }}<br>
        {{ subtrair() }}<br>
        {{ multiplicar() }}<br>
        {{ dividir() }}
    </div>

    <script>

        const vm = new Vue({
            el: '#app', // '#' para selecionar por id | '.' para selecionar por class. Muito similar ao JQuery.
            data: {
                n1: 10,
                n2: 5
            },
            methods: {
                //somar: function somar() {
                    //return 4 + 2
                //}, // Forma alternativa de executar a função somar usando a sintaxe JAvaScript.
                somar() { // forma mais enxuta de definir os pares de chaves/valor
                    return 4 + 2
                },
                subtrair: function() { //anônima
                    return 4 - 2
                },
                multiplicar: () => { // Arrow function
                    return 4 * 2
                },
                dividir() {
                    return 4 / 2
                }
            }
        });

    </script>

Agora, para termos o acesso aos atributos definidos dentro do data para o methods, vamos usar um operador "this".

    <div id="app">
        {{ somar() }}<br>
        {{ subtrair() }}<br>
        {{ multiplicar() }}<br>
        {{ dividir() }}
    </div>

    <script>

        const vm = new Vue({
            el: '#app', // '#' para selecionar por id | '.' para selecionar por class. Muito similar ao JQuery.
            data: {
                n1: 10,
                n2: 5
            },
            methods: {
                //somar: function somar() {
                    //return 4 + 2
                //}, // Forma alternativa de executar a função somar usando a sintaxe JAvaScript.
                somar() { // forma mais enxuta de definir os pares de chaves/valor
                    return this.n1 + this.n2
                },
                subtrair: function() { //anônima
                    return this.n1 - this.n2
                },
                multiplicar: () => { // Arrow function
                    return this.n1 * this.n2
                },
                dividir() {
                    return this.n1 / this.n2
                }
            }
        });

    </script>

Repara que somente no método multiplicar retornou "NaN" (Not a Number), como podemos ver

    15
    5
    NaN
    2

Isso é devido por conta desse método ser um arrow function, devido ao contexto léxico.

## Aula 10 - Methods - O contexto léxico das arrow functions e o conflito de nomes:
Vimos que na aula anterior, as arrow functions temos alguns problemas de contexto léxico para se usar como método, vide o método "multiplicar" criado via arrow function e quando foi recuperado os atributos definidos no data dentro essas arrow functions, ocorreu como resultado "NaN".

Vamos tentar entender melhor a respeito. Para isso, damos um console log dentro desse método multiplicar para vermos o que lhe é retornado.

    const vm = new Vue({
        el: '#app', // '#' para selecionar por id | '.' para selecionar por class. Muito similar ao JQuery.
        data: {
            n1: 10,
            n2: 5
        },
        methods: {
            //somar: function somar() {
                //return 4 + 2
            //}, // Forma alternativa de executar a função somar usando a sintaxe JAvaScript.
            somar() { // forma mais enxuta de definir os pares de chaves/valor
                return this.n1 + this.n2
            },
            subtrair: function() { //anônima
                return this.n1 - this.n2
            },
            multiplicar: () => { // Arrow function
                console.log(this)
                return this.n1 * this.n2 // contexto léxico
            },
            dividir() {
                return this.n1 / this.n2
            }
        }
    });

Rodando o index.html, via Live Server, no broswer e analisamos o console, nela será exibido um conteúdo parecido como o seguinte.

    Window {window: Window, self: Window, document: document, name: '', location: Location, …}

No caso, o que isso significa?

Significa que o operador "this" não faz referência à instância de Vue, mas sim no Window, ou seja, o objeto global do navegador.

No caso, o que significa o problema léxico que está acontecendo na arrow function, seria que dentro dela o this.n1 e this.n2 não existe no escopo global Window. Diferentemente na outras formas de escrita dos métodos, sem ser a arrow function.

Por exemplo, se pegarmos o método enxuto, dividir, e darmos o console.log para o mesmo operador this dentro dele.

    const vm = new Vue({
        el: '#app', // '#' para selecionar por id | '.' para selecionar por class. Muito similar ao JQuery.
        data: {
            n1: 10,
            n2: 5
        },
        methods: {
            //somar: function somar() {
                //return 4 + 2
            //}, // Forma alternativa de executar a função somar usando a sintaxe JAvaScript.
            somar() { // forma mais enxuta de definir os pares de chaves/valor
                return this.n1 + this.n2
            },
            subtrair: function() { //anônima
                return this.n1 - this.n2
            },
            multiplicar: () => { // Arrow function
                console.log(this)
                return this.n1 * this.n2 // contexto léxico
            },
            dividir() {
                console.log(this)
                return this.n1 / this.n2
            }
        }
    });

Será devolvido a seguinte msg pelo console.

    Vue {_uid: 0, _isVue: true, $options: {…}, _renderProxy: Proxy, _self: Vue, …}

Ou seja, o que indica que, diferente do arrow function, as outras formas de definir a função método, o escopo em que o this ele observa está dentro da instância Vue.

Exametamente, por conta desse comportamento que as arrow functions não são indicadas para criarmos os métodos.

Para se aprofundar um pouco mais no conceito de problemas léxicos atrelado à arrow function siga o seguinte link:

- https://www.freecodecamp.org/news/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881/

Mas temos uma forma de burlar ou aproveitar esse comportamento da arrow function. No caso, vimos que definir um método via arrow function, não é tão eficaz por conta dela apontar para o escopo global Window, em vez do escopo da instância Vue. Mas, agora, se definirmos uma arrow function dentro do método, que foi definido de forma usual? Para qual escopo essa arrow function estaria apontando?

    const vm = new Vue({
        el: '#app', // '#' para selecionar por id | '.' para selecionar por class. Muito similar ao JQuery.
        data: {
            n1: 10,
            n2: 5
        },
        methods: {
            //somar: function somar() {
                //return 4 + 2
            //}, // Forma alternativa de executar a função somar usando a sintaxe JAvaScript.
            somar() { // forma mais enxuta de definir os pares de chaves/valor
                return this.n1 + this.n2
            },
            subtrair: function() { //anônima
                return this.n1 - this.n2
            },
            multiplicar: () => { // Arrow function
                console.log(this)
                return this.n1 * this.n2 // contexto léxico
            },
            dividir() {
                let f = () => {
                    return 'Teste';
                }
                console.log(f())
                console.log(this)
                return this.n1 / this.n2
            }
        }
    });

Note que, no método dividir definimos uma arrow function dentro dela e damos o console.log sobre essa arrow function que definimos.

Como resultado disso, o retorno que o console.log deu foi exatamente

    Teste

Ou seja, note que, essa arrow function não está apontando para o escopo global, Window, mas, sim, ela está apontando ao escopo do método dividir que foi definido. Para reforçar mais ainda essa afirmação, como uma prova definitiva, bastaria dar um console.log para o operador this dentro dessa arrow function para verificarmos em qual escopo ela está apontando.

    const vm = new Vue({
        el: '#app', // '#' para selecionar por id | '.' para selecionar por class. Muito similar ao JQuery.
        data: {
            n1: 10,
            n2: 5
        },
        methods: {
            //somar: function somar() {
                //return 4 + 2
            //}, // Forma alternativa de executar a função somar usando a sintaxe JAvaScript.
            somar() { // forma mais enxuta de definir os pares de chaves/valor
                return this.n1 + this.n2
            },
            subtrair: function() { //anônima
                return this.n1 - this.n2
            },
            multiplicar: () => { // Arrow function
                console.log(this)
                return this.n1 * this.n2 // contexto léxico
            },
            dividir() {
                let f = () => {
                    console.log('Dentro do f: ', this)
                    return 'Teste';
                }
                console.log(f())
                console.log(this)
                return this.n1 / this.n2
            }
        }
    });

No caso, o que é devolvido no console.log seria o seguinte.

    Dentro do f:  Vue {_uid: 0, _isVue: true, $options: {…}, _renderProxy: Proxy, _self: Vue, …}

Ou seja, note que, o escopo em que essa arrow function está dentro da instância Vue, pois ela está recuperando o escopo da função.

Agora, um outro detalhe que devemos nos atentar seria sobre as nomenclaturas que atribuímos. No caso, procure não definir nos atributos data o mesmo nome para os métodos em que será definido, e vice-versa.

Por exemplo, vamos definir o seguinte para verificarmos que tipo de erro é devolvido no console.

    const vm = new Vue({
        el: '#app', // '#' para selecionar por id | '.' para selecionar por class. Muito similar ao JQuery.
        data: {
            n1: 10,
            n2: 5,
            somar: 'teste'
        },
        methods: {
            //somar: function somar() {
                //return 4 + 2
            //}, // Forma alternativa de executar a função somar usando a sintaxe JAvaScript.
            somar() { // forma mais enxuta de definir os pares de chaves/valor
                return this.n1 + this.n2
            },
            subtrair: function() { //anônima
                return this.n1 - this.n2
            },
            multiplicar: () => { // Arrow function
                console.log(this)
                return this.n1 * this.n2 // contexto léxico
            },
            dividir() {
                return this.n1 / this.n2
            }
        }
    });

Se olharmos no console, será devolvido o seguinte.

    vue.js:634 [Vue warn]: Method "somar" has already been defined as a data property.

    vue.js:634 [Vue warn]: Error in render: "TypeError: somar is not a function"

    TypeError: somar is not a function
    at Proxy.eval (eval at createFunction (vue.js:11649:14), <anonymous>:3:69)

Retiremos apenas o atributo somar, definido em data.

     const vm = new Vue({
        el: '#app', // '#' para selecionar por id | '.' para selecionar por class. Muito similar ao JQuery.
        data: {
            n1: 10,
            n2: 5
        },
        methods: {
            //somar: function somar() {
                //return 4 + 2
            //}, // Forma alternativa de executar a função somar usando a sintaxe JAvaScript.
            somar() { // forma mais enxuta de definir os pares de chaves/valor
                return this.n1 + this.n2
            },
            subtrair: function() { //anônima
                return this.n1 - this.n2
            },
            multiplicar: () => { // Arrow function
                return this.n1 * this.n2 // contexto léxico
            },
            dividir() {
                return this.n1 / this.n2
            }
        }
    });

## Aula 11 - Diretiva v-bind - Realizando o bind de atributos de tags HTML:
Documentação para leitura:

    https://br.vuejs.org/v2/guide/syntax.html#Diretivas

No caso, vamos aprender a utilizar as diretivas. Existem vários tipos de diretivas. Nessa aula, vamos aprender a usar uma delas, a diretiva v-bind.

Antes de partirmos para o conteúdo, vamos deixar salvo os feitos de até a aula 10. No caso, criamos um diretório, Aula08-10-methods-lexical-context, e dentro dela salvamos uma cópia do index.html no formato em que se encontra no momento. E não se esqueça de arrumar o nível em que estamos importando o arquivo vue.js nos scripts.

    <script src="./../vue.js"></script>

Para melhor compreensão de como isso funciona, vamos ter que utilizar das tags HTML. No caso, em index.html, realizamos o seguinte.

    <div id="app">
        <a href="{{ site }}">Site</a>
        <p>Entendendo a diretiva v-bind</p>
        <input type="text">
        <input type="checkbox">
    </div>

    <script>

        const vm = new Vue({
            el: '#app', // '#' para selecionar por id | '.' para selecionar por class. Muito similar ao JQuery.
            data: {
                site: 'https://github.com/HelloWounderworld'
            },
            methods: {}
        });

    </script>

Note que, no formato como está acima, usando a interpolação, ao olharmos pelo console inspecionando o local em que estou chamando o site em que estou definindo, não irá aparecer o site do meu portifólio github.

    <a href="{{ site }}">Site</a>

Seria exatamente por conta disso que a diretiva v-bind é útil, pois ao colocarmos na seguinte forma, sem o mustache

     <div id="app">
        <a v-bind:href="site">Site</a>
        <p>Entendendo a diretiva v-bind</p>
        <input type="text">
        <input type="checkbox">
    </div>

E inspecionando a tag "a" para verificarmos o que é devolvido, conseguirmos ver o seguinte

    <a href="https://github.com/HelloWounderworld">Site</a>

Ou seja, a tag 'a' no href, está reconhecendo o conteúdo que foi definido dentro do atributo site em data.

Logo, sempre que for necessário em realizar uma atribuição de valores em atributos de elementos html, precisamos usar a diretiva v-bind para possibilitar o reconhecimento do atributo em que foi definido dentro da instância Vue, no data.

Essa diretiva v-bind, pode ser usado até para classes tbm. No caso, se definirmos o seguinte, veremos que o que atribuímos de valor no atributo cor está sendo aplicado no elemento atributo do html, p

    <div id="app">
        <a v-bind:href="site">Site</a>
        <p v-bind:class="cor">Entendendo a diretiva v-bind</p>
        <input type="text">
        <input type="checkbox">
    </div>

    <script>

        const vm = new Vue({
            el: '#app', // '#' para selecionar por id | '.' para selecionar por class. Muito similar ao JQuery.
            data: {
                site: 'https://github.com/HelloWounderworld',
                cor: 'vermelho'
            },
            methods: {}
        });

    </script>

Ao inspecionarmos a tag "p" vamos ver que, de fato, a classe está reconhecendo o que aparece na cor.

    <p class="vermelho">Entendendo a diretiva v-bind</p>

Assim, podemos definir essa classe no style para realmente aplicarmos o tal valor.

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="./vue.js"></script>
        <!-- <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script> -->
        <title>Document</title>
        <style>
            .vermelho {
                color: red;
            }
        </style>
    </head>
    <body>
        <div id="app">
            <a v-bind:href="site">Site</a>
            <p v-bind:class="cor">Entendendo a diretiva v-bind</p>
            <input type="text">
            <input type="checkbox">
        </div>

        <script>

            const vm = new Vue({
                el: '#app', // '#' para selecionar por id | '.' para selecionar por class. Muito similar ao JQuery.
                data: {
                    site: 'https://github.com/HelloWounderworld',
                    cor: 'vermelho'
                },
                methods: {}
            });

        </script>

    </body>

Note que, o que isso nos dá como um recurso interessante? Como o atributo color em que definimos no data podemos recuperar ela nos métodos, podemos personalizar a tela alternando em diferentes classes perante às reatividades em que ocorrer por parte do usuário.

    <div id="app">
        <a v-bind:href="site">Site</a>
        <button @click="alternar()">Alternando a cor</button>
        <p v-bind:class="cor">Entendendo a diretiva v-bind</p>
        <input type="text">
        <input type="checkbox">
    </div>

    <script>

        const vm = new Vue({
            el: '#app', // '#' para selecionar por id | '.' para selecionar por class. Muito similar ao JQuery.
            data: {
                site: 'https://github.com/HelloWounderworld',
                cor: 'vermelho'
            },
            methods: {
                alternar() {
                    if (this.cor === 'vermelho') {
                        this.cor = 'verde'
                    } else {
                        this.cor = 'vermelho'
                    }
                }
            }
        });

    </script>

É só um mero exemplo inicial. No caso, vamos ver que podemos iterar as classes com v-for, ou até mesmo manipular os valores das classes dentro dos métodos tbm.

Outro exemplos para praticarmos seria usando o atributo placeholder que podemos colocar no input.

    <div id="app">
        <a v-bind:href="site">Site</a>
        <p v-bind:class="cor">Entendendo a diretiva v-bind</p>
        <input type="text" v-bind:placeholder="InstrucaoDePreenchimento">
        <input type="checkbox">
    </div>

    <script>

        const vm = new Vue({
            el: '#app', // '#' para selecionar por id | '.' para selecionar por class. Muito similar ao JQuery.
            data: {
                site: 'https://github.com/HelloWounderworld',
                cor: 'vermelho',
                InstrucaoDePreenchimento: 'Placeholder - Diretiva v-bind'
            },
            methods: {}
        });

    </script>

Ou seja, podemos usar a diretiva v-bind até para placeholder tbm. 

### Obs: 
Reforço em dar uma lida mais à fundo sobre essa diretiva e explorar mais ainda sobre, pois, não somente a diretiva v-bind, as diretivas no geral, são ferramentas poderosíssimas para os recursos de front-end.

E não para por aí, na mesma tag, podemos aplicar mais as diretivas v-binds para outros atributos que podem ser usados na mesma tag html.

    <div id="app">
        <a v-bind:href="site">Site</a>
        <p v-bind:class="cor">Entendendo a diretiva v-bind</p>
        <input type="text" v-bind:placeholder="InstrucaoDePreenchimento" v-bind:value="valor">
        <input type="checkbox">
    </div>

    <script>

        const vm = new Vue({
            el: '#app', // '#' para selecionar por id | '.' para selecionar por class. Muito similar ao JQuery.
            data: {
                site: 'https://github.com/HelloWounderworld',
                cor: 'vermelho',
                InstrucaoDePreenchimento: 'Placeholder - Diretiva v-bind',
                valor: 'Entendendo a diretiva v-bind'
            },
            methods: {}
        });

    </script>

Com isso, podemos ver aqui que, na mesma tag html, usamos um outro v-bind, donde definimos o atributo valor em data e, pelo recurso value e v-bind aplicados, conseguimos definir um valor padrão de entrada na tag input do html.

Note que, na outra tag html, onde tem o checkbox, temos um atributo checked, que colocado nessa tag, por padrão, ela fica sinalizada.

    <div id="app">
        <a v-bind:href="site">Site</a>
        <p v-bind:class="cor">Entendendo a diretiva v-bind</p>
        <input type="text" v-bind:placeholder="InstrucaoDePreenchimento" v-bind:value="valor">
        <input type="checkbox" checked>
    </div>

Mas podemos, tbm, aplicar a diretiva v-bind sobre esse atributo html tbm.

    <div id="app">
        <a v-bind:href="site">Site</a>
        <p v-bind:class="cor">Entendendo a diretiva v-bind</p>
        <input type="text" v-bind:placeholder="InstrucaoDePreenchimento" v-bind:value="valor">
        <input type="checkbox" v-bind:checked="check">
    </div>

    <script>

        const vm = new Vue({
            el: '#app', // '#' para selecionar por id | '.' para selecionar por class. Muito similar ao JQuery.
            data: {
                site: 'https://github.com/HelloWounderworld',
                cor: 'vermelho',
                InstrucaoDePreenchimento: 'Placeholder - Diretiva v-bind',
                valor: 'Entendendo a diretiva v-bind',
                check: false
            },
            methods: {}
        });

    </script>

Repara que no atributo check que foi definido em data, podemos ficar alternando entre true e false para verificarmos que o checkbox fica alternando entre marcado e desmarcado.

## Aula 12 - Diretiva v-bind - Sintaxe sugar e a sobreposição/encademamento de valores:

## Aula 13 - Utilizando expressões no data binding:

## Aula 14 - Diretiva v-on - Manipulando eventos:

## Aula 15 - Methods - Passando parâmetros para os métodos:

## Aula 16 - Diretiva v-on - Capturando os dados do evento ($event):

## Aula 17 - Hands on - Praticando com data, methods, template string, v-bind e v-on:

## Aula 18 - Diretiva v-on - Implemenando modificadores:

## Aula 19 - Selecionando elementos HTML e suas propriedades por ID:

## Aula 20 - Diretiva v-if - Renderiazação condicional de elementos HTML:

## Aula 21 - Diretiva v-show - Exibição condicional de elementos HTML:

## Aula 22 - Diretiva v-html - Injetando elementos HTML:

## Aula 23 - Diretiva v-text - Injetando textos:

## Aula 24 - Diretiva v-once - Evitando que elementos HTML sejam renderizados novamente:

## Aula 25 - Diretiva v-for - Implementando laços de repetição parte 1:

## Aula 26 - Diretiva v-for - Implementando laços de repetição parte 2:

## Aula 27 - Renderização de listas com o atributo-key:

## Aula 28 - Diretiva v-for - Implementando laços de reptição parte 3:

## Aula 29 - Diretiva v-for - Implementando laços de repetição parte 4:

## Aula 30 - Trabalhando com a tag Template para renderização condicional e listas:

## Aula 31 - Trabalhando com propriedades computadas (computed) parte 1:

## Aula 32 - Trabalhando com propriedades computadas (computed) parte 2:

## Aula 33 - Diretiva V-Model - Sincronizando inputs com atributos (two-way-data binding):

## Aula 34 - Diretiva V-Model - Praticando um pouco mais o two-way-data binding:

## Aula 35 - Trabalhando com propriedades observadoras (watch):