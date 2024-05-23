import { useSignInGithubMutation } from '@/store/auth/authApi'
import { showError } from '@/utils/showError'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useSearchParams } from 'react-router-dom'

export const GithubAuthorizePage = () => {
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')
  const navigate = useNavigate()
  const [githubSignIn] = useSignInGithubMutation()

  useEffect(() => {
    if (!code) {
      toast.error('Что-то пошло не так. Повторите попытку позже')
      navigate('/')
      return
    }

    const cb = async () => {
      try {
        await githubSignIn({ code }).unwrap()
        navigate('/')
      } catch (error) {
        showError(error)
      }
    }

    cb()
  }, [code, githubSignIn])

  return <h1>ok</h1>
}
