'use server'
import { permanentRedirect, redirect } from 'next/navigation'

interface RedirectProps {
  path: string
  permanent?: boolean
}

const Redirect = ({ path, permanent = false }: RedirectProps) => {
  if (permanent) {
    return permanentRedirect(path)
  }
  return redirect(path)
}

export default Redirect