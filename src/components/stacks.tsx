import { CardStack } from './card-stack'
import { StackSection } from './stack-section'
import { StackAccordion } from './stack-accordion'

import { FaReact } from 'react-icons/fa6'

import { CubeIcon } from '@phosphor-icons/react'
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiGo,
  SiZod,
  SiNginx,
  SiGit,
  SiGithub,
  SiPython,
  SiPm2,
  SiGithubactions,
  SiMysql,
  SiFigma
} from 'react-icons/si'

export function Stacks() {
  return (
    <StackAccordion>
      <div className="grid gap-4 sm:grid-cols-2">
        <StackSection title="Frontend" defaultOpen>
          <CardStack icon={FaReact} label="React" />
          <CardStack icon={SiNextdotjs} label="Next.js" />
          <CardStack icon={SiTypescript} label="TypeScript" />
          <CardStack icon={SiTailwindcss} label="Tailwind CSS" />
        </StackSection>

        <StackSection title="Backend">
          <CardStack icon={SiNodedotjs} label="Node.js" />
          <CardStack icon={SiExpress} label="Express" />
          <CardStack icon={CubeIcon} label="REST APIs" />
          <CardStack icon={SiPrisma} label="Prisma" />
          <CardStack icon={SiZod} label="Zod" />
        </StackSection>

        <StackSection title="Database">
          <CardStack icon={SiPostgresql} label="PostgreSQL" />
          <CardStack icon={SiMysql} label="MySQL" />
          <CardStack icon={SiRedis} label="Redis" />
        </StackSection>

        <StackSection title="DevOps & Tools">
          <CardStack icon={SiDocker} label="Docker" />
          <CardStack icon={SiGithubactions} label="GitHub Actions" />
          <CardStack icon={SiGit} label="Git" />
          <CardStack icon={SiGithub} label="GitHub" />
          <CardStack icon={SiNginx} label="Nginx" />
          <CardStack icon={SiPm2} label="PM2" />
        </StackSection>

        <StackSection title="Learning">
          <CardStack icon={SiGo} label="Go (Golang)" />
          <CardStack icon={SiPython} label="Python" />
          <CardStack icon={SiFigma} label="Figma" />
        </StackSection>
      </div>
    </StackAccordion>
  )
}
