import { useEffect } from 'react';

export default function PoliticaPrivacidade() {
  useEffect(() => {
    document.title = 'Política de Privacidade — Hazzin';
  }, []);

  return (
    <article className="bg-white">
      <section className="bg-gradient-to-b from-hazzin-navy-deep to-hazzin-navy text-white">
        <div className="mx-auto w-full max-w-site px-5 sm:px-6 lg:px-16 py-16 sm:py-20 lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
            Documento legal
          </span>
          <h1 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-[-0.025em]">
            Política de Privacidade
          </h1>
          <p className="mt-5 max-w-[60ch] text-[15px] leading-[1.7] text-white/70">
            Esta política descreve como a Hazzin coleta, usa, armazena e protege seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
          </p>
          <p className="mt-3 text-[12.5px] uppercase tracking-[0.18em] text-white/55">
            Última atualização: 16 de junho de 2026
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-5 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-hazzin-ink">
        <div className="space-y-12 text-[15.5px] leading-[1.75]">
          <div>
            <h2 className="font-display text-2xl font-bold text-hazzin-navy-deep">1. Quem somos</h2>
            <p className="mt-4 text-hazzin-ink/80">
              <strong className="text-hazzin-navy-deep">Hazzin Indústria e Comércio de Tintas e Resinas Ltda.</strong>, inscrita no CNPJ sob nº 34.668.821/0001-12, com sede na R. Gertrüdes da Silva Simas, 65, Itaipava, Itajaí — SC, é a controladora dos dados pessoais coletados por meio deste site (<em>guiadeuso.hazzin.com.br</em>) e demais canais oficiais Hazzin.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-hazzin-navy-deep">2. Dados que coletamos</h2>
            <p className="mt-4 text-hazzin-ink/80">
              Coletamos somente as informações necessárias pra cumprir nossas finalidades comerciais e legais:
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-6 text-hazzin-ink/80 marker:text-hazzin-field-green">
              <li><strong>Dados de contato:</strong> nome, telefone, e-mail e cidade, fornecidos voluntariamente em formulários, WhatsApp ou e-mail.</li>
              <li><strong>Dados técnicos:</strong> endereço IP, navegador, sistema operacional, páginas visitadas e tempo de navegação, coletados automaticamente via cookies e ferramentas de analytics.</li>
              <li><strong>Dados comerciais:</strong> histórico de pedidos, preferências de produto e interações com nosso atendimento técnico.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-hazzin-navy-deep">3. Como usamos seus dados</h2>
            <p className="mt-4 text-hazzin-ink/80">Utilizamos seus dados pessoais para:</p>
            <ul className="mt-4 space-y-2 list-disc pl-6 text-hazzin-ink/80 marker:text-hazzin-field-green">
              <li>Responder solicitações de orçamento, dúvidas técnicas e suporte pós-venda.</li>
              <li>Enviar guias técnicos, fichas de dosagem e materiais relacionados aos produtos consultados.</li>
              <li>Melhorar a experiência de navegação, identificar erros e otimizar conteúdo.</li>
              <li>Cumprir obrigações legais, fiscais e regulatórias.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-hazzin-navy-deep">4. Base legal</h2>
            <p className="mt-4 text-hazzin-ink/80">
              O tratamento dos seus dados se baseia em: (i) <strong>consentimento</strong>, quando você fornece dados via formulário; (ii) <strong>execução de contrato</strong>, quando há relação comercial; (iii) <strong>legítimo interesse</strong>, para suporte técnico e melhoria de produto; e (iv) <strong>cumprimento de obrigação legal</strong>, quando exigido por autoridade competente.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-hazzin-navy-deep">5. Compartilhamento</h2>
            <p className="mt-4 text-hazzin-ink/80">
              A Hazzin <strong>não comercializa</strong> dados pessoais. Compartilhamos informações somente com: operadores logísticos para envio de produto, plataformas de pagamento, ferramentas de analytics (Google Analytics, Meta Pixel) e autoridades quando legalmente exigido.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-hazzin-navy-deep">6. Cookies</h2>
            <p className="mt-4 text-hazzin-ink/80">
              Usamos cookies essenciais (necessários ao funcionamento do site) e cookies de desempenho (analytics anônimo). Você pode desativar cookies não essenciais nas configurações do seu navegador, ciente de que isso pode limitar funcionalidades.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-hazzin-navy-deep">7. Armazenamento e segurança</h2>
            <p className="mt-4 text-hazzin-ink/80">
              Seus dados são armazenados em servidores no Brasil e em provedores cloud com certificação ISO 27001. Aplicamos criptografia em trânsito (TLS), controle de acesso por perfil e backups periódicos. Em caso de incidente de segurança, comunicaremos titulares e ANPD nos prazos legais.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-hazzin-navy-deep">8. Retenção</h2>
            <p className="mt-4 text-hazzin-ink/80">
              Mantemos seus dados pelo período necessário ao cumprimento das finalidades descritas ou conforme exigido por lei (ex.: cinco anos para documentos fiscais). Após esse prazo, os dados são eliminados ou anonimizados de forma segura.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-hazzin-navy-deep">9. Seus direitos como titular</h2>
            <p className="mt-4 text-hazzin-ink/80">A LGPD garante a você os seguintes direitos:</p>
            <ul className="mt-4 space-y-2 list-disc pl-6 text-hazzin-ink/80 marker:text-hazzin-field-green">
              <li>Confirmar o tratamento e acessar seus dados.</li>
              <li>Corrigir dados incompletos ou desatualizados.</li>
              <li>Solicitar anonimização, bloqueio ou eliminação.</li>
              <li>Portabilidade pra outro fornecedor.</li>
              <li>Revogar consentimento a qualquer momento.</li>
            </ul>
            <p className="mt-4 text-hazzin-ink/80">
              Para exercer seus direitos, entre em contato pelo e-mail <a className="text-hazzin-blue-700 font-semibold hover:underline" href="mailto:contato@hazzin.com.br">contato@hazzin.com.br</a>.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-hazzin-navy-deep">10. Alterações</h2>
            <p className="mt-4 text-hazzin-ink/80">
              Esta política pode ser atualizada a qualquer momento. A data da última revisão estará sempre no topo. Mudanças relevantes serão comunicadas pelos canais oficiais.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-hazzin-navy-deep">11. Contato — encarregado de dados (DPO)</h2>
            <p className="mt-4 text-hazzin-ink/80">
              Dúvidas sobre proteção de dados? Fale com nosso encarregado:<br />
              <strong>E-mail:</strong> <a className="text-hazzin-blue-700 font-semibold hover:underline" href="mailto:contato@hazzin.com.br">contato@hazzin.com.br</a><br />
              <strong>Endereço:</strong> R. Gertrüdes da Silva Simas, 65, Itaipava, Itajaí — SC.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
