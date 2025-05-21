import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/packages/')({
  component: PackagesIndexComponent,
})

function PackagesIndexComponent() {
  return <div>Select a package.</div>
}
