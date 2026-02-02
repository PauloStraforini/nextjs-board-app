import { ArchiveIcon, MessageCircleIcon, ThumbsUpIcon } from "lucide-react"
import { Section } from "@/components/section"
import { Card } from "@/components/card"
import { Button } from "@/components/button"

interface BoardProps {
  searchParams: Promise<{
    q?: string
  }>
}

export default async function Board({ searchParams }: BoardProps) {
  const { q } = await searchParams

  return (
    <div className="max-w-405 w-full mx-auto p-10 flex flex-col gap-8 h-dvh">
      <div></div>

      <main className="grid grid-cols-4 gap-5 flex-1 items-stretch">
        <Section.Root>
          {/* Header */}
          <Section.Header>
            <Section.Title>
              <ArchiveIcon className="size-3" />
              Backlog
            </Section.Title>

            <Section.IssueCount>10</Section.IssueCount>
          </Section.Header>

          {/* Content */}
          <Section.Content>
            <Card.Root>
              <Card.Header>
                <Card.Number>ECO-123</Card.Number>
                <Card.Title>Implementar cartao de credito</Card.Title>
                <Card.Footer>
                  <Button>
                    <ThumbsUpIcon className="size-3" />
                    <span className="text-sm">13</span>
                  </Button>

                  <Button>
                    <MessageCircleIcon className="size-3" />
                    <span className="text-sm">3</span>
                  </Button>

                </Card.Footer>
              </Card.Header>
            </Card.Root>
          </Section.Content>
        </Section.Root>
      </main>
    </div>
  )
}
