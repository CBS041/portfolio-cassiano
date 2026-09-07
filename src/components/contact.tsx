import {
  GithubLogoIcon as Github,
  LinkedinLogoIcon as Linkedin,
  EnvelopeSimpleIcon as Mail,
  WhatsappLogoIcon as MessageCircle
} from '@phosphor-icons/react'

const CONTACT = {
  name: process.env.NEXT_PUBLIC_AUTHOR_NAME,
  email: process.env.NEXT_PUBLIC_AUTHOR_EMAIL,
  githubUser: process.env.NEXT_PUBLIC_AUTHOR_GITHUB,
  linkedinUser: process.env.NEXT_PUBLIC_AUTHOR_LINKEDIN,
  whatsappNumber: process.env.NEXT_PUBLIC_AUTHOR_WHATSAPP, // formato: 55 + DDD + número, só dígitos
  siteDomain: process.env.NEXT_PUBLIC_URL
}

export function Contact() {
  const emailSubject = encodeURIComponent(`Contato via ${CONTACT.siteDomain}`)
  const emailBody = encodeURIComponent(
    `Olá, ${CONTACT.name}!\n\nVi seu portfólio (${CONTACT.siteDomain}) e gostei bastante do que você tem construído. Gostaria de conversar sobre uma oportunidade na área.\n\nFico à disposição para trocarmos uma ideia.\n\nAbraços!`
  )

  const whatsappMessage = encodeURIComponent(
    `Olá, ${CONTACT.name}! Tudo bem?\nVi seu portfólio (${CONTACT.siteDomain}) e curti bastante o que você tem construído. Gostaria de conversar sobre uma oportunidade na área 😊`
  )

  const emailHref = `mailto:${CONTACT.email}?subject=${emailSubject}&body=${emailBody}`
  const whatsappHref = `https://wa.me/${CONTACT.whatsappNumber}?text=${whatsappMessage}`
  const githubHref = `https://github.com/${CONTACT.githubUser}`
  const linkedinHref = `https://www.linkedin.com/in/${CONTACT.linkedinUser}/`

  return (
    <section
      id="contato"
      className="mt-16 scroll-mt-24 grid gap-8 md:grid-cols-2"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          Contato
        </h2>

        <p className="text-zinc-400 leading-relaxed">
          Se quiser conversar sobre projetos, oportunidades ou trocar ideias
          sobre desenvolvimento, é só me chamar.
        </p>

        <div className="flex flex-col gap-3 mt-2">
          <a
            href={githubHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-zinc-400 hover:text-zinc-100 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 transition-colors"
          >
            <Github size={18} aria-hidden />
            <span>github.com/{CONTACT.githubUser}</span>
          </a>

          <a
            href={linkedinHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-zinc-400 hover:text-zinc-100 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 transition-colors"
          >
            <Linkedin size={18} aria-hidden />
            <span>linkedin.com/in/{CONTACT.linkedinUser}</span>
          </a>
        </div>
      </div>

      <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col justify-between">
        <div className="space-y-2">
          <p className="text-zinc-200 font-medium">Vamos conversar?</p>
          <p className="text-sm text-zinc-400">
            Estou em busca da minha primeira oportunidade na área — aberto a
            estágio, CLT e projetos para ganhar experiência.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <a
            href={emailHref}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-800 px-4 py-2 text-sm text-zinc-100 hover:bg-zinc-800 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 transition-colors"
          >
            <Mail size={16} aria-hidden />
            Email
          </a>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-800 px-4 py-2 text-sm text-zinc-100 hover:bg-zinc-800 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 transition-colors"
          >
            <MessageCircle size={16} aria-hidden />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
