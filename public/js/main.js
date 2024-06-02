async function criaProjeto() {
    try {
        const novoProjeto = await fetch('/app/br.com.frontierless.view/projetoUsuario.html');
        const data = await novoProjeto.text();

        const startSectionIndex = data.indexOf('<section>');
        const endSectionIndex = data.indexOf('</section>', startSectionIndex);
        const primeiraSection = data.slice(startSectionIndex, endSectionIndex + '</section>'.length);

        const leftProjetosUsuario = document.getElementById('leftProjetosUsuario');
        const rightProjetosUsuario = document.getElementById('rightProjetosUsuario');

        limpaContainer(rightProjetosUsuario),
        leftProjetosUsuario.innerHTML += primeiraSection;
        rightProjetosUsuario.innerHTML += data;
    } catch (error) {
        console.error(error.message);
    }
}

function limpaContainer(rightProjetosUsuario){
    const sectionToRemove = rightProjetosUsuario.querySelectorAll('section');
    sectionToRemove.forEach(section => rightProjetosUsuario.removeChild(section));   
}

function expandeContainer(oEvent){
    const containerPasso = oEvent.currentTarget.parentElement;
    const arw = containerPasso.querySelector("header div");
    containerPasso.classList.toggle("expandContainer");
    arw.classList.toggle("rotateArrow");

    console.log(oEvent)
}