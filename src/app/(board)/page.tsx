import { ArchiveIcon, MessageCircleIcon, ThumbsUpIcon } from "lucide-react"
import { Section } from "@/components/section"
import { Card } from "@/components/card"
import { Button } from "@/components/button"
import { Metadata } from "next"
import { listIssues } from "@/http/list-issues"

export const metadata: Metadata = {
  title: "Board",

}
interface BoardProps {
  searchParams: Promise<{
    q?: string
  }>
}

export default async function Board({ searchParams }: BoardProps) {
  const { q } = await searchParams

  const issues = await listIssues()

  return (
    <div className="max-w-405 w-full mx-auto p-10 flex flex-col gap-8 h-dvh">
      <div></div>

      <main className="grid grid-cols-4 gap-5 flex-1 items-stretch">

        {/* Backlog */}
        <Section.Root>
          {/* Header */}
          <Section.Header>
            <Section.Title>
              <ArchiveIcon className="size-3" />
              Backlog
            </Section.Title>

            <Section.IssueCount>{issues.backlog.length}</Section.IssueCount>
          </Section.Header>

          {/* Content */}
          <Section.Content>
            {issues.backlog.map(issue => {
              return (
                <Card.Root key={issue.id} >
                  <Card.Header>
                    <Card.Number>ISS-{issue.id}</Card.Number>
                    <Card.Title>{issue.title}</Card.Title>
                    <Card.Footer>
                      <Button>
                        <ThumbsUpIcon className="size-3" />
                        <span className="text-sm">13</span>
                      </Button>

                      <Button>
                        <MessageCircleIcon className="size-3" />
                        <span className="text-sm">{issue.comments}</span>
                      </Button>

                    </Card.Footer>
                  </Card.Header>
                </Card.Root>
              )
            })}
          </Section.Content>
        </Section.Root>

        {/* To-do */}
        <Section.Root>
          {/* Header */}
          <Section.Header>
            <Section.Title>
              <ArchiveIcon className="size-3" />
              To-do
            </Section.Title>

            <Section.IssueCount>{issues.todo.length}</Section.IssueCount>
          </Section.Header>

          {/* Content */}
          <Section.Content>
            {issues.todo.map(issue => {
              return (
                <Card.Root key={issue.id} >
                  <Card.Header>
                    <Card.Number>ISS-{issue.id}</Card.Number>
                    <Card.Title>{issue.title}</Card.Title>
                    <Card.Footer>
                      <Button>
                        <ThumbsUpIcon className="size-3" />
                        <span className="text-sm">13</span>
                      </Button>

                      <Button>
                        <MessageCircleIcon className="size-3" />
                        <span className="text-sm">{issue.comments}</span>
                      </Button>

                    </Card.Footer>
                  </Card.Header>
                </Card.Root>
              )
            })}
          </Section.Content>
        </Section.Root>

        {/* In Pogress */}
        <Section.Root>
          {/* Header */}
          <Section.Header>
            <Section.Title>
              <ArchiveIcon className="size-3" />
              In pogress
            </Section.Title>

            <Section.IssueCount>{issues.in_progress.length}</Section.IssueCount>
          </Section.Header>

          {/* Content */}
          <Section.Content>
            {issues.in_progress.map(issue => {
              return (
                <Card.Root key={issue.id} >
                  <Card.Header>
                    <Card.Number>ISS-{issue.id}</Card.Number>
                    <Card.Title>{issue.title}</Card.Title>
                    <Card.Footer>
                      <Button>
                        <ThumbsUpIcon className="size-3" />
                        <span className="text-sm">13</span>
                      </Button>

                      <Button>
                        <MessageCircleIcon className="size-3" />
                        <span className="text-sm">{issue.comments}</span>
                      </Button>

                    </Card.Footer>
                  </Card.Header>
                </Card.Root>
              )
            })}
          </Section.Content>
        </Section.Root>

        {/* Done */}
        <Section.Root>
          {/* Header */}
          <Section.Header>
            <Section.Title>
              <ArchiveIcon className="size-3" />
              Done
            </Section.Title>

            <Section.IssueCount>{issues.done.length}</Section.IssueCount>
          </Section.Header>

          {/* Content */}
          <Section.Content>
            {issues.done.map(issue => {
              return (
                <Card.Root key={issue.id} >
                  <Card.Header>
                    <Card.Number>ISS-{issue.id}</Card.Number>
                    <Card.Title>{issue.title}</Card.Title>
                    <Card.Footer>
                      <Button>
                        <ThumbsUpIcon className="size-3" />
                        <span className="text-sm">13</span>
                      </Button>

                      <Button>
                        <MessageCircleIcon className="size-3" />
                        <span className="text-sm">{issue.comments}</span>
                      </Button>

                    </Card.Footer>
                  </Card.Header>
                </Card.Root>
              )
            })}
          </Section.Content>
        </Section.Root>
      </main>
    </div>
  )
}
