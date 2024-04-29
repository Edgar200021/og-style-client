import { useSignInGithubMutation } from '@/store/auth/authApi'
import { showError } from '@/utils/showError'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useSearchParams } from 'react-router-dom'

export const GithubAutorizePage = () => {
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')
  const navigate = useNavigate()
  const [githubSignin, { isLoading }] = useSignInGithubMutation()

  useEffect(() => {
    if (!code) {
      toast.error('Что-то пошло не так. Повторите попытку позже')
      navigate('/')
      return
    }

    ;(async () => {
      try {
        await githubSignin({ code }).unwrap()

        //TODO:
        //navigate('/')
      } catch (error) {
        showError(error)
      }
    })()

    console.log('')
  }, [code, githubSignin])

  return <h1>ok</h1>
}
