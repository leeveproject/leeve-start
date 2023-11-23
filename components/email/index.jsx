import { Hr } from "@react-email/hr";
import { Html } from "@react-email/html";
import { Head } from "@react-email/head";
import { Text } from "@react-email/text";
import { Button } from "@react-email/button";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";

export const anchor = {
  color: "#fff",
  padding: "5px",
  borderRadius: "5px",
  backgroundColor: "#115126"
}

export function Email() {
  return (
    <Html>
      <Container>
        <Head>
          <Text>Oi, tudo bem? &#x1F44B;</Text>
          <Text>
            Convidamos você para de forma exclusiva,
            ter acesso por tempo indeterminado em nosso sistema.
          </Text>
        </Head>
        <Hr />
        <Section>
          <Container>
            <Text>
              Temos a solução ideal para seu negócio. <br />
              Elaboramos um produto para você gerenciar todo seu empreendimento de forma simples e organizada.
            </Text>
            <Text>
              Com o leeve, você terá controle de entrada e saida de produtos,
              folha de pagamentos, gestão de funcionários e controle de gastos e lucros mensais.
            </Text>
            <Text>
              Registre sua empresa no sistema, teste. E nos envie seu feedback.
              Juntos podemos sanar suas dores e realizar novas atualizações.
            </Text>
          </Container>
        </Section>
        <Section>
          <Button>
            <a
              style={anchor}
              target="_blank"
              href="https://leeve.vercel.app"
            >
              Registre-se
            </a>
          </Button>
        </Section>
      </Container>
    </Html>
  )
}