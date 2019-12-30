import useSession from './useSession'

export default function useUserId() {
  const session = useSession()
  return session.roles || []
}
