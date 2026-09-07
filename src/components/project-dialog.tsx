'use client'

import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { XIcon } from '@phosphor-icons/react'

import { ProjectLinks } from './ui/project-links'

type ProjectDialogProps = {
  name: string
  description: string | null
  topics: string[]
  githubUrl: string
  imageUrl: string
}

export function ProjectDialog({
  name,
  description,
  topics,
  githubUrl,
  imageUrl
}: ProjectDialogProps) {
  // Formata o nome do repo (ex: "webhook-inspector" -> "Webhook Inspector")
  const formattedName = name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {/* Adicionado: flex flex-col h-full para forçar altura igual no grid */}
        <article className="group cursor-pointer flex flex-col h-full rounded-lg border border-zinc-800 bg-zinc-950 p-4 transition hover:border-zinc-700">
          <div className="mb-4 overflow-hidden rounded-md border border-zinc-800 shrink-0">
            <Image
              src={imageUrl}
              alt={formattedName}
              width={600}
              height={300}
              className="h-40 w-full object-cover transition group-hover:scale-105"
            />
          </div>

          <h3 className="text-sm font-medium text-zinc-100 line-clamp-1">
            {formattedName}
          </h3>

          {/* Adicionado: flex-1 (ocupa o espaço vazio) e line-clamp-2 (limita a 2 linhas) */}
          <p className="mt-2 text-sm text-zinc-400 leading-relaxed line-clamp-2 flex-1">
            {description}
          </p>

          {/* shrink-0 garante que as tags sempre fiquem presas ao final do card */}
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-500 shrink-0">
            {topics.map(topic => (
              <span key={topic}>{topic}</span>
            ))}
          </div>
        </article>
      </Dialog.Trigger>

      <Dialog.Portal>
        {/* Adicionado z-50 para evitar sobreposição de outros elementos da tela */}
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />

        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-lg border border-zinc-800 bg-zinc-950 p-6 focus:outline-none">
          <div className="flex items-start justify-between">
            <Dialog.Title className="flex items-center gap-2 text-lg font-medium text-zinc-100">
              {formattedName}
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500" />
            </Dialog.Title>

            <Dialog.Close className="text-zinc-400 hover:text-zinc-100">
              <XIcon className="h-5 w-5" />
            </Dialog.Close>
          </div>

          <div className="mt-4 overflow-hidden rounded-md border border-zinc-800">
            <Image
              src={imageUrl}
              alt={formattedName}
              width={800}
              height={400}
              className="w-full object-cover"
            />
          </div>

          <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
            {description}
          </p>

          <ul className="mt-4 space-y-2 text-sm text-zinc-400 list-disc list-inside">
            <li>Captura e armazenamento de webhooks em tempo real</li>
            <li>Visualização detalhada de payloads HTTP</li>
            <li>Geração automática de handlers com IA</li>
            <li>Arquitetura moderna e escalável</li>
          </ul>

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-500">
            {topics.map(topic => (
              <span key={topic}>{topic}</span>
            ))}
          </div>

          <div className="mt-6 flex justify-end">
            <ProjectLinks githubUrl={githubUrl} />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
