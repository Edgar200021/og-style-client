import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { SignUpSchema, signUpSchema } from '../../schemas/signUpSchema.ts'
import { useSignUpMutation } from '../../store/auth/authApi.ts'
import { showError } from '../../utils/showError.ts'
import { Collapsible } from '../Collapsible/Collapsible.tsx'
import { Oauth } from '../Oauth/Oauth.tsx'
import { Button } from '../ui/Button.tsx'

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  })
  const [signUp, { isLoading }] = useSignUpMutation()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<SignUpSchema> = async (data: SignUpSchema) => {
    try {
      await signUp({ email: data.email, password: data.password }).unwrap()
      reset({ email: '', password: '', passwordConfirm: '' })
      navigate('/auth/sign-in')
    } catch (e) {
      console.log(e)
      showError(e)
    }
  }

  return (
    <div className="flex min-h-full flex-1">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="mt-8 text-3xl font-bold leading-9 tracking-tight text-gray-900">
              Регистрация
            </h2>
          </div>

          <div className="mt-10">
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset
                  disabled={isLoading}
                  className="b-0 p-0 m-0 space-y-6"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Эл.адрес
                    </label>
                    <div className="mt-2">
                      <input
                        {...register('email')}
                        id="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <Collapsible collapsed={!!errors.email?.message}>
                      <span className="text-red">{errors.email?.message}</span>
                    </Collapsible>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Пароль
                    </label>
                    <div className="mt-2">
                      <input
                        {...register('password')}
                        id="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <Collapsible collapsed={!!errors.password?.message}>
                      <span className="text-red">
                        {errors.password?.message}
                      </span>
                    </Collapsible>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Подтвердите пароль
                    </label>
                    <div className="mt-2">
                      <input
                        {...register('passwordConfirm')}
                        id="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <Collapsible collapsed={!!errors.passwordConfirm?.message}>
                      <span className="text-red">
                        {errors.passwordConfirm?.message}
                      </span>
                    </Collapsible>
                  </div>

                  <div className="">
                    <div className="text-sm leading-6">
                      <Link
                        to="/auth/sign-in"
                        className="font-semibold text-dark  hover:text-indigo-500"
                      >
                        Уже есть аккаунт?
                      </Link>
                    </div>
                  </div>

                  <div>
                    <Button className="shadow-sm text-sm p-3  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">
                      {isLoading ? 'Загрузка...' : 'Регистрация'}
                    </Button>
                  </div>
                </fieldset>
              </form>
            </div>

            <Oauth className="mt-10" />
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block bg-grad1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
      </div>
    </div>
  )
}
