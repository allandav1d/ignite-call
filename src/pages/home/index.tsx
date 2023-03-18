import { Button, Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from '@/pages/home/styles'
import Image from 'next/image'

import previewImage from '@/assets/images/app-preview.png'
import { ClaimUsernameForm } from '@/pages/home/components/ClaimUsernameForm'

export default function Home() {
  return (
    <>
      <Container>
        <Hero>
          <Heading as={'h1'} size={'4xl'}>
            Agendamento descomplicado
          </Heading>
          <Text size={'xl'}>
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>
          <ClaimUsernameForm />
        </Hero>
        <Preview>
          <Image
            src={previewImage}
            height={400}
            quality={100}
            priority
            alt={'Calendario simbolizando aplicação em funcionamento'}
          />
        </Preview>
      </Container>
    </>
  )
}
