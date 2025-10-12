import type { RegisterResponseType } from './types';
import { useState } from 'react';
import useRequest from '../../hooks/useRequest';
import { message } from '../../utils/message';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  // 处理页面跳转相关的逻辑
  const navigate = useNavigate();
  const [ userName, setUserName ] = useState('');
  const [ phoneNumber, setPhoneNumber ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ checkPassword, setCheckPassword ] = useState('');
  
  const { request } = useRequest<RegisterResponseType>({manual: true});
  // 点击注册按钮时的操作
  function handleSubmitBtnClick() {
    if(!userName) {
      message('用户不得为空！');
      return;
    }
    if(!phoneNumber) {
      message('手机号码不得为空！');
      return;
    }
    if(!password) {
      message('密码不得为空！');
      return;
    }
    if(password.length < 6) {
      message('密码至少为六位！');
      return;
    }
    if(password !== checkPassword) {
      message('两次输入密码不一致！');
      return;
    }
    request({
      url: '/register.json',
      method: 'POST',
      data: {
        user: userName,
        phone: phoneNumber,
        password: password,
      }
    }).then((data) => {
      console.log(data);
      if(data?.success) {
        navigate('/account/login')
      }
    }).catch((e: any) => {
      message(e?.message);
    });
  }

  return (
    <>
      <div className="form">
        <div className='form-item'>
          <div className='form-item-title'>用户名</div>
          <input
            value={userName}
            className='form-item-content'
            placeholder='请输入用户名'
            onChange={(e) => { setUserName(e.target.value) }}
          />
        </div>
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
        <div className='form-item'>
          <div className='form-item-title'>确认密码</div>
          <input
            value={checkPassword}
            type="password"
            className='form-item-content'
            placeholder='请输入确认密码'
            onChange={(e) => { setCheckPassword(e.target.value) }}
          />
        </div>
      </div>
      <div className="submit" onClick={handleSubmitBtnClick}>
        注册
      </div>
    </>
  )
}

export default Register;