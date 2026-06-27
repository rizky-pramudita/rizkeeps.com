import { redirect } from 'next/navigation'

// The old "thoughts" page is now the Work / case-studies section.
export default function ThoughtsRedirect() {
  redirect('/work')
}
