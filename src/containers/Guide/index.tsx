import './style.css';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const useRefAnimation = () => {
  // 处理动画相关的逻辑,页面加载完成后，guide-page添加opacity 动画 0 -> 1
  const ref = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    ref.current.style.opacity = '1';
  }, [])
  return ref;
}

const Guide = () => {
  const ref = useRefAnimation();

  // 处理页面跳转相关的逻辑
  const navigate = useNavigate();
  function handleIconClick() {
    navigate('/login');
  }

  return (
    <div ref={ref} className="page guide-page">
      <img
        alt="欢乐购"
        className="main-pic"
        src={require('../../images/halg_logo_icon_@2x.png')}
      />
      <p className='title'>欢乐购</p>
      <img
        alt="欢乐购"
        className="sub-pic"
        src={require('../../images/slogn_word_icon_@2x.png')}
      />
      <div className="iconfont arrow-icon" onClick={handleIconClick}>&#xe60c;</div>
    </div>
  )
}

export default Guide;