function criaProjeto() {
    let pjs = document.getElementById('listaProjetos');
    const codigoHtml =
        `
        <div class="card mt-3" onclick="editarProjeto()">
            <div class="card-header bg-dark text-light">
                <h3>Australia</h3>
            </div>
            <div class="card-body container bg-light">
                <div class="row">
                    <div class="col-md-6">
                        <div class="mb-2 text-center">
                            <label for="statusInput" class="form-label">Status</label>
                            <input type="text" id="statusInput" class="form-control" Disabled>
                        </div>
                        <div class="mb-2 text-center">
                            <label for="tipoInput" class="form-label">Tipo</label>
                            <input type="text" id="tipoInput" class="form-control" Disabled>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-2 text-center">
                            <label for="valorNecessarioInput" class="form-label">Valor Necessário</label>
                            <input type="text" id="valorNecessarioInput" class="form-control" Disabled>
                        </div>
                        <div class="mb-2 text-center">
                            <label for="valorGuardadoInput" class="form-label">Valor Guardado</label>
                            <input type="text" id="valorGuardadoInput" class="form-control " Disabled>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        `;
    pjs.innerHTML += codigoHtml;

}

function editarProjeto() {
    criaPasso()
    criaPasso()
    criaPasso()
    criaPasso()
    criaPasso()
}

var cont = 0;
function criaPasso() {
    let pjs = document.getElementById('editorProjeto');
    const codigoHtml =
        `
        <div class="accordion accordion-flush" id="accordionFlushExample${cont}">
            <div class="accordion-item mt-3 border rounded">
                <button class="accordion-header accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne${cont}" aria-expanded="false" aria-controls="flush-collapseOne${cont}">
                    <div class="input-group">
                        <div class="input-group-text rounded me-3">
                            <input class="form-check-input mt-0 " type="checkbox" value=""
                                aria-label="Checkbox for following text input">
                        </div>
                        <input type="text" class="border border-top-0 border-end-0 border-start-0 rounded-end" aria-label="Text input with checkbox">
                    </div>

                </button>
                <div id="flush-collapseOne${cont}" class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample${cont}">
                    <div class="accordion-body">
                        <div class="input-group mb-3">
                            <label class="me-3 d-flex align-items-center">Custo</label>
                            <span class="input-group-text rounded-start">R$</span>
                            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                        </div>
                        <div class="input-group mb-3">
                            <label class="me-3 d-flex align-items-center">Local</label>
                            <input type="text" class="form-control rounded"
                                aria-label="Amount (to the nearest dollar)">
                        </div>
                        <label class="me-3 d-flex align-items-center">Descrição</label>
                        <div class="input-group">
                            <textarea class="form-control" aria-label="With textarea"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    pjs.innerHTML += codigoHtml;
    cont++;
}

function statusInpt(oEvent) {
    let listaProjetos = document.getElementById('listaProjetos');
    let inputs = listaProjetos.querySelectorAll('input');

    inputs.forEach(input => {
        if (!oEvent.target.checked) {
            input.removeAttribute('disabled');
        } else {
            input.setAttribute('disabled', 'true');
        }
    });


}






