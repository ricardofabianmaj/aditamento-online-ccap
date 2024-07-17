document.addEventListener('DOMContentLoaded', () => {
    const tarefas = [
        "CB da Vila dos Oficiais",
        "Guarda da Vila dos Oficiais",
        "CB da Vila dos S Ten/Sgt",
        "Guarda da Vila dos S Ten/Sgt",
        "Oficial de Dia",
        "Adj a Oficial de Dia",
        "Sgt de Dia a CCAP",
        "Radiotelegrafista Est Rad PB/3",
        "Dentista sobre aviso",
        "Médico sobre aviso",
        "Bombeiro sobre aviso",
        "Eletricista sobre aviso",
        "Cmt da Guarda do Quartel",
        "Cb da Guarda do Quartel",
        "Guarda do Quartel",
        "Cabo de Dia a CCAP",
        "Plantões",
        "Armeiro",
        "Motorista",
        "Gradiente de Dia ao Rancho",
        "Cozinheiro",
        "Cassineiro"
    ];

    const responsaveis = [
        "Responsável 1", //CB VO
        "Responsável 2", // VO
        "Responsável 3", //CB VS
        "Responsável 4", //VS
        "Responsável 5", //OF DIA
        "Responsável 6", // ADJ OF
        "Responsável 7", // SGT DE DIA
        "Responsável 8", // RADIO EST RAD
        "Responsável 9", // DENTISTA SA
        "Responsável 10", // MEDICO SA
        "Responsável 11", // BOMBEIRO SA
        "Responsável 12", // ELETRICISTA SA
        "Responsável 13", // CMT GUARDA
        "Responsável 14", // CB GUARDA
        "Responsável 15", // GUARDA
        "Responsável 16", // CB DE DIA CCAP
        "Responsável 17", // PLANTOES
        "Responsável 18", // ARMEIRO
        "Responsável 19", // MOTORISTA DE DIA
        "Responsável 20", // GRADIENTE DE DIA AO RANCHO
        "Responsável 21", // COZINHEIRO
        "Responsável 22" // CASSINEIRO
    ];

    const tabela = document.getElementById('planilha').getElementsByTagName('tbody')[0];

    tarefas.forEach((tarefa, index) => {
        let row = tabela.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.textContent = tarefa;
        cell2.textContent = responsaveis[index] || '';
    });
});
