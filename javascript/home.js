var header =           document.getElementById('header');
var linksDoHeader = document.getElementById('linksDoHeader');
var conteudo =         document.getElementById('conteudo');
var AbrirBarraLateral = false; /*Essa Variável define se a barra vai estar mostrando ou não
Portanto na versão de pc não queremos que ela apareça*/ 

function MoverBarraLateral() {
    AbrirBarraLateral =! AbrirBarraLateral; /*Com o evento definido no elemento do html, eu preciso que o usuário ao clicar no ícone 
    rode a animação da barra lateral. Desse jeito eu garanto que ao passar nessa função, a animação abra e feche, porque 
    a variável vai estar ao contrário do que ela entrou*/ 

    if(AbrirBarraLateral){ /* ele verfica se for verdade cai no if e aplica -10vw que já aparece na tela
    , caso não cai no else e aplica -100vw e tira a barra lateral da tela*/ 
        linksDoHeader.style.marginLeft = '-10vw';
        linksDoHeader.style.animationName = 'AbrirBarraLateral'; /*Se a variável AbrirBarraLateral for true ele
        aplica as seguintes modificações*/ 
        conteudo.style.filter = 'blur(2px)'; /**/ 
    }
    else{
        /*Se for false ele aplica as seguintes coisas*/ 
        linksDoHeader.style.marginLeft = '-100vw'; /*tira ele da tela*/
        linksDoHeader.style.animationName = ''; /*como não tem nada, retira a animação, e quando clicar no botão a 
        animação fuciona novamente, o que não acontecia antes*/
        conteudo.style.filter = ''; /*como não tem nada, tira o blur, caso não fizesse isso o blur iria continuar mesmo
       se fechasse */
    }
    }

 function FecharbarraLateral(){

    if(AbrirBarraLateral){ /*Quando colocamos apenas a variável o js verifica se a ela é true */
        MoverBarraLateral();/*primeiro eu verifico se está aberto, se sim ele roda a minha função novamente
        trocando o valor de true para false, fechando a barra Lateral*/ 
    }
 }

 window.addEventListener('resize', function(event) { /*Toda vez que redimencionar a tela roda isso */
    if(window.innerWidth>768 && AbrirBarraLateral ){
        MoverBarraLateral(); /**Quando alterar a dimensão da tela ele verifica se a barra lateral está aberta, se 
        estiver ele chama a função MoverBarraLateral que inverte os valores e fecha a barra lateral */
    }
   });
