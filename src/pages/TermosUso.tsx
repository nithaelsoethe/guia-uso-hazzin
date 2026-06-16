import { useEffect } from 'react';

export default function TermosUso() {
  useEffect(() => {
    document.title = 'Termos de Uso — Hazzin';
  }, []);

  return (
    <article className="bg-white">
      <section className="bg-gradient-to-b from-hazzin-navy-deep to-hazzin-navy text-white">
        <div className="mx-auto w-full max-w-site px-5 sm:px-6 lg:px-16 py-16 sm:py-20 lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
            Documento legal
          </span>
          <h1 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-[-0.025em]">
            Termos de Uso
          </h1>
          <p className="mt-5 max-w-[60ch] text-[15px] leading-[1.7] text-white/70">
            Ao acessar e utilizar o site <em>guiadeuso.hazzin.com.br</em>, você concorda com estes Termos de Uso. Recomendamos a leitura integral antes de utilizar nossos conteúdos e serviços.
          </p>
          <p className="mt-3 text-[12.5px] uppercase tracking-[0.18em] text-white/55">
            Última atualização: 16 de junho de 2026
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-5 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-hazzin-ink">
        <div className="space-y-12 text-[15.5px] leading-[1.75]">
          <div>
            <h2 className="font-display text-2xl font-bold text-hazzin-navy-deep">1. Aceitação</h2>
            <p className="mt-4 text-hazzin-ink/80">
              O uso deste site implica concordância integral com estes Termos e com a nossa Política de Privacidade. Caso não concorde com qualquer disposição, por favor não utilize o site.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-hazzin-navy-deep">2. Identificação</h2>
            <p className="mt-4 text-hazzin-ink/80">
              Site mantido por <strong className="text-hazzin-navy-deep">Hazzin Indústria e Comércio de Tintas e Resinas Ltda.</strong>, CNPJ 34.668.821/0001-12, sede na R. Gertrüdes da Silva Simas, 65, Itaipava, Itajaí — SC, contato <a className="text-hazzin-blue-700 font-semibold hover:underline" href="mailto:contato@hazzin.com.br">contato@hazzin.com.br</a>.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-hazzin-navy-deep">3. Finalidade do site</h2>
            <p className="mt-4 text-hazzin-ink/80">
              Este site reúne <strong>guias de uso, fichas técnicas e materiais informativos</strong> dos produtos Hazzin. O conteúdo tem caráter <strong>orientativo</strong> e não substitui inspeção técnica em obra, análise de substrato ou consultoria de profissional qualificado.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-hazzin-navy-deep">4. Uso aceitável</h2>
            <p className="mt-4 text-hazzin-ink/80">Você concorda em <strong>não</strong>:</p>
            <ul className="mt-4 space-y-2 list-disc pl-6 text-hazzin-ink/80 marker:text-hazzin-field-green">
              <li>Utilizar o site para fins ilícitos, fraudulentos ou que violem direitos de terceiros.</li>
              <li>Reproduzir, copiar ou redistribuir conteúdos sem autorização escrita.</li>
              <li>Realizar engenharia reversa, raspagem automatizada (scraping) ou tentativas de acesso não autorizado.</li>
              <li>Inserir vírus, malware ou códigos maliciosos.</li>
              <li>Usar marca, nome ou imagem Hazzin de forma indevida.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-hazzin-navy-deep">5. Propriedade intelectual</h2>
            <p className="mt-4 text-hazzin-ink/80">
              Todo o conteúdo — textos, imagens, vídeos, marcas, logotipos, código, layout, ícones e materiais técnicos — é de propriedade exclusiva da Hazzin ou de licenciantes autorizados, protegido pela Lei de Direitos Autorais (Lei nº 9.610/98) e Lei da Propriedade Industrial (Lei nº 9.279/96). Qualquer uso não autorizado é vedado.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-hazzin-navy-deep">6. Produtos e aplicação</h2>
            <p className="mt-4 text-hazzin-ink/80">
              Os produtos Hazzin são bicomponentes técnicos para <strong>aplicação profissional</strong>. Garantias e desempenho dependem de: armazenamento adequado, preparação correta do substrato, dosagem precisa, condições ambientais especificadas em ficha técnica e mão de obra qualificada. A Hazzin não se responsabiliza por aplicações realizadas fora dos parâmetros indicados.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-hazzin-navy-deep">7. Limitação de responsabilidade</h2>
            <p className="mt-4 text-hazzin-ink/80">
              O site e seus conteúdos são fornecidos <em>“como estão”</em>. A Hazzin se empenha em manter informações precisas, mas não garante exatidão absoluta, ausência de erros ou disponibilidade ininterrupta. Não nos responsabilizamos por danos indiretos, perda de lucros ou prejuízos decorrentes do uso ou impossibilidade de uso do site.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-hazzin-navy-deep">8. Links externos</h2>
            <p className="mt-4 text-hazzin-ink/80">
              O site pode conter links pra páginas de terceiros (ex.: marketplace, redes sociais, plataformas de pagamento). A Hazzin não controla esses conteúdos e não se responsabiliza por práticas, políticas ou segurança de sites externos.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-hazzin-navy-deep">9. Privacidade</h2>
            <p className="mt-4 text-hazzin-ink/80">
              O tratamento de dados pessoais coletados via este site é regido pela nossa <a href="/politica-de-privacidade" className="text-hazzin-blue-700 font-semibold hover:underline">Política de Privacidade</a>, parte integrante destes Termos.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-hazzin-navy-deep">10. Modificações</h2>
            <p className="mt-4 text-hazzin-ink/80">
              A Hazzin pode revisar estes Termos a qualquer momento. A versão vigente é a publicada nesta página, com data no topo. O uso continuado do site após alterações implica aceitação dos novos termos.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-hazzin-navy-deep">11. Foro</h2>
            <p className="mt-4 text-hazzin-ink/80">
              Fica eleito o foro da Comarca de Itajaí — SC para dirimir quaisquer questões decorrentes destes Termos, com renúncia a qualquer outro, por mais privilegiado que seja.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-hazzin-navy-deep">12. Contato</h2>
            <p className="mt-4 text-hazzin-ink/80">
              Dúvidas sobre estes Termos? Escreva pra <a className="text-hazzin-blue-700 font-semibold hover:underline" href="mailto:contato@hazzin.com.br">contato@hazzin.com.br</a>.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
