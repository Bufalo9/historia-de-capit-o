function makeChoice(choice) {
    const story = document.getElementById('story');
    const buttons = document.querySelectorAll('button');

    if (choice === 'treino') {
        story.textContent = 'Você treinou duro e levou seu time à vitória no campeonato regional! Parabéns, Capitão!';
        buttons[0].textContent = 'Continuar Treinando';
        buttons[1].textContent = 'Celebrar';
        buttons[0].onclick = () => makeChoice('continuarTreinando');
        buttons[1].onclick = () => makeChoice('celebrar');
    } else if (choice === 'descanso') {
        story.textContent = 'Você descansou e perdeu a oportunidade de treinar. Seu time perdeu o próximo jogo.';
        buttons[0].textContent = 'Treinar mais';
        buttons[1].textContent = 'Desistir';
        buttons[0].onclick = () => makeChoice('treino');
        buttons[1].onclick = () => makeChoice('desistir');
    } else if (choice === 'continuarTreinando') {
        story.textContent = 'Seu esforço contínuo fez de você uma lenda no futebol! Você foi convocado para a seleção nacional!';
        buttons[0].style.display = 'none';
        buttons[1].style.display = 'none';
    } else if (choice === 'celebrar') {
        story.textContent = 'Você celebrou demais e perdeu o foco. Seu time começou a perder e você foi substituído como capitão.';
        buttons[0].style.display = 'none';
        buttons[1].style.display = 'none';
    } else if (choice === 'desistir') {
        story.textContent = 'Você desistiu e deixou o futebol. Uma carreira promissora interrompida.';
        buttons[0].style.display = 'none';
        buttons[1].style.display = 'none';
    }
}
