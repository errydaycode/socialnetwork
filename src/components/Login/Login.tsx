import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "utils/valitators/validators";
import {connect, useSelector} from "react-redux";
import {loginTC} from "redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "redux/redux-store";
import s from '../common/FormsControls/FormControls.module.css'

type FormDataType = {
  login: string
  password: string
  rememberMe: boolean
  captchaUrl: string
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {

  const captchaUrl = useSelector<AppRootStateType, string>(state => state.auth.captchaUrl)

  return (
    <form onSubmit={handleSubmit}>
      <div><Field placeholder={'login'} name={'login'} component={Input} validate={[required]}/></div>
      <div><Field placeholder={'password'} name={'password'} type={'password'} component={Input} validate={[required]}/>
      </div>
      <div>
        <Field type="checkbox" name={'rememberMe'} component={Input}/>
        Remember me
      </div>
      {captchaUrl && <img src={captchaUrl} alt={'captcha'} />}
      {captchaUrl &&  <div><Field placeholder={'Enter symbols from image'} name={'captcha'}  component={Input} validate={[required]}/></div> }

      {error && <div className={s.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};


const LoginReduxForm = reduxForm<FormDataType>({
  // a unique name for the form
  form: 'login'
})(LoginForm)


type LoginMDTPtype = {
  loginTC: (email: string, password: string, rememberMe: boolean, captchaUrl: string) => void
}

type LoginMSTPtype = {
  isAuth: boolean
  captchaUrl: string
}

type LoginType = LoginMDTPtype & LoginMSTPtype

const Login = ({loginTC, isAuth}: LoginType) => {
  // const dispatch = useDispatch()
  const onSubmit = (formData: FormDataType) => {
    const {login, password, rememberMe, captchaUrl} = formData
    loginTC(login, password, rememberMe, captchaUrl)
  }

  if (isAuth) {
    return <Redirect to={'/profile'}/>
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit}  />
    </div>

  );
};


const mapStateToProps = (state: AppRootStateType): LoginMSTPtype => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
})
export default connect(mapStateToProps, {loginTC})(Login)