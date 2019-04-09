import {useContext} from 'react'
import SessionContext from 'App/helpers/auth/SessionContext'

export default function useSession() {
  return useContext(SessionContext)
}
