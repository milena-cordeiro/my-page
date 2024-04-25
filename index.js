document.addEventListener('DOMContentLoaded', function () {
    const skillsList = [
        {skill: 'communication-bar', progress: 60},
        {skill: 'teamwork-bar', progress: 70},
        {skill: 'problem-resolution-bar', progress: 60},
        {skill: 'proactivity-bar', progress: 70},
        {skill: 'html-bar', progress: 65},
        {skill: 'css-bar', progress: 60},
        {skill: 'js-bar', progress: 80},
        {skill: 'ts-bar', progress: 70},
        {skill: 'python-bar', progress: 40},
        {skill: 'node-bar', progress: 70},
        {skill: 'react-bar', progress: 60},
        {skill: 'c#-bar', progress: 50},
        {skill: 'time-bar', progress: 60},
        {skill: 'sql-bar', progress: 50},
    ];


    // Função para atualizar a barra de progresso
    function updateProgressBar(barId, progress) {
        let progressBar = document.getElementById(barId);
        progressBar.style.width = `${progress}%`;
    }

    for (let item of skillsList) {
        updateProgressBar(item.skill, item.progress);
    }

    // simular digitação
    const phrases = [
        "sou aspirante a programadora.",
        "sou apaixonada por animais.",
        "amante de música boa e livros.",
        "não recuso comida boa."
      ];
  
      let index = 0;
      let isDeleting = false;
      let text = '';
      let speed = 100;
  
      function type() {
        const currentPhrase = phrases[index];
        
        if (!isDeleting) {
          text = currentPhrase.substring(0, text.length + 1);
        } else {
          text = currentPhrase.substring(0, text.length - 1);
        }
        
        document.getElementById('text').innerHTML = text;
        
        let delta = 100;
        if (isDeleting) {
          delta /= 2;
        }
        
        if (!isDeleting && text === currentPhrase) {
          delta = 1500;
          isDeleting = true;
        } else if (isDeleting && text === '') {
          isDeleting = false;
          index = (index + 1) % phrases.length;
        }
        
        setTimeout(type, delta);
      }
  
      setTimeout(type, 500);
});

