<header className="w-full px-4 py-2 flex flex-col items-center bg-black text-white md:flex-row md:justify-between">
  {/* Esquerda */}
  <div className="flex items-center justify-center gap-4 md:order-1">
    <a href="#linkedin">Linkedin</a>
    <a href="#github">Github</a>
  </div>

  {/* Centro (Logo + Theme Toggle abaixo) */}
  <div className="flex flex-col items-center md:order-2">
    <img src="/logo.png" alt="Logo" className="h-10" />
    <div className="mt-2">
      {/* BOTÃO DE TEMA AQUI */}
      <ThemeToggle />
    </div>
  </div>

  {/* Direita */}
  <div className="flex items-center gap-4 md:order-3">
    <a href="#contato">Contato</a>
    <a href="#curriculo">Currículo</a>
  </div>
</header>