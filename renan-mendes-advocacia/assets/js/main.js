// Menu do celular: abre/fecha a navegação do header.
(() => {
  const botao = document.querySelector('.header__abrir-menu');
  const navegacao = document.getElementById('navegacao');
  if (!botao || !navegacao) return;

  const definirAberto = (aberto) => {
    botao.setAttribute('aria-expanded', String(aberto));
    botao.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    navegacao.classList.toggle('esta-aberta', aberto);
  };

  botao.addEventListener('click', () => {
    definirAberto(botao.getAttribute('aria-expanded') !== 'true');
  });

  // Fecha ao escolher um link ou apertar Esc
  navegacao.addEventListener('click', (e) => {
    if (e.target.closest('a')) definirAberto(false);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && botao.getAttribute('aria-expanded') === 'true') {
      definirAberto(false);
      botao.focus();
    }
  });
})();
