import useRouter from './useRouter'
import useUserId from './useUserId'

export default function() {
  const userId = useUserId()
  const {history} = useRouter()

  if (!userId) {
    throw new Promise(resolve => {
      history.replace({
        pathname: '/login',
        state: {nextPathname: window.location.pathname}
      })
      resolve()
    })
  }
}
