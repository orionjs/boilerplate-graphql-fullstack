import {useContext} from 'react'
import ShowMessageContext from 'orionsoft-parts/lib/contexts/ShowMessageContext'

export default function useMessage() {
  const showMessage = useContext(ShowMessageContext)
  return showMessage
}
