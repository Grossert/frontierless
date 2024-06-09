async function criaProjeto() {
    try {
        const novoProjeto = await fetch('/app/br.com.frontierless.view/perfil/projetoUsuario.html');
        const data = await novoProjeto.text();

        const startSectionIndex = data.indexOf('<section>');
        const endSectionIndex = data.indexOf('</section>', startSectionIndex);
        const primeiraSection = data.slice(startSectionIndex, endSectionIndex + '</section>'.length);

        const leftProjetosUsuario = document.getElementById('leftProjetosUsuario');
        const rightProjetosUsuario = document.getElementById('rightProjetosUsuario');

        limpaContainer(rightProjetosUsuario),
        leftProjetosUsuario.innerHTML += primeiraSection;  
        rightProjetosUsuario.innerHTML += data;
        setDataInicioProjeto()
        disabledLeftSecction();
    } catch (error) {
        console.error(error.message);
    }
};

async function criaPassoProjeto() {
    try {
        const passoProjeto = await fetch('/app/br.com.frontierless.view/perfil/passoProjeto.html');
        const data = await passoProjeto.text();
        const passoLista = document.getElementById('passos');
        passoLista.innerHTML += data;
    } catch (error) {
        console.error(error.message);
    }
};

function limpaContainer(container){
    container.innerHTML = '';
};

function expandeContainer(oEvent){
    const containerPasso = oEvent.currentTarget.parentElement;
    const hdr = containerPasso.querySelector("ol li header");
    const arw = hdr.querySelector(".rotA");

    containerPasso.classList.toggle("expandContainer");
    arw.classList.toggle("rotateArrow");
};

function setDataInicioProjeto(){
    const dataInicio = document.getElementById('dataInicio');
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    dataInicio.textContent = formattedDate;
};

function disabledLeftSecction(){
    const leftSection = document.getElementById('leftProjetosUsuario');
    const section = leftSection.querySelectorAll('section');
    for(let i = 0;i<section.length;i++){
        const inputsAndSelects = section[i].querySelectorAll('input, select');
        inputsAndSelects.forEach(element => {
            element.disabled = true;
        });
    }
};