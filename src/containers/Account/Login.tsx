import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useRequest from '../../utils/useRequest';
import Modal, { ModalInterfaceType } from '../../components/Modal';

// 返回内容类型
type ResponseType = {
  sussess: boolean;
  data: {
    token: string;
  }
}

const Login = () => {
  const modalRef = useRef<ModalInterfaceType>(null!);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { request } = useRequest<ResponseType>();
  // 点击登录按钮时的操作
  function handleSubmitBtnClick() {
    if (!phoneNumber) {
      modalRef.current.showMessage('手机号码不得为空！');
      return;
    }
    if (!password) {
      modalRef.current.showMessage('密码不得为空！');
      return;
    }


    const a1 = 'APP-UvygAWn-4519950447516193282-2';
    const a2 = 'KEY035UvyhbsvXDuoopaM2b3H4jRRnjnBpt53gOXsdbj3';
    const t1 = new Date().getTime();
    request({
      url: 'https://open.datadex.com.cn/dexserver/dex-api/v1/login',
      method: 'POST',
      data: {
        a1: a1,
        a2: a2,
        t1: t1,
        phone: phoneNumber,
        password: password,

      }
    }).then((data) => {
      debugger;
      const { data: { token } } = data;
      if (token) {
        localStorage.setItem('token', token);
        navigate('/home');
      }
    }).catch((e: any) => {
      modalRef.current?.showMessage(e?.message || '未知异常');
    });
  }

  return (
    <>
      <div className="form">
        <div className='form-item'>
          <div className='form-item-title'>手机号</div>
          <input
            value={phoneNumber}
            className='form-item-content'
            placeholder='请输入手机号码'
            onChange={(e) => { setPhoneNumber(e.target.value) }}
          />
        </div>
        <div className='form-item'>
          <div className='form-item-title'>密码</div>
          <input
            value={password}
            type="password"
            className='form-item-content'
            placeholder='请输入密码'
            onChange={(e) => { setPassword(e.target.value) }}
          />
        </div>
      </div>
      <div className="submit" onClick={handleSubmitBtnClick}>
        登陆
      </div>
      <p className="notice">
        *登录即表示您赞同使用条款及隐私政策
      </p>
      <Modal ref={modalRef} />
    </>
  )
}

export default Login;