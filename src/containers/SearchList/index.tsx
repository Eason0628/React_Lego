import './style.scss';
import { Link } from 'react-router-dom';

const SearchList = () => {
  return (
    <div className="page search-list-page">
      <div className='search'>
        <Link to='/home' className='search-back-link'>
          <div className='search-back-icon iconfont'>&#xe601;</div>
        </Link>
        <div className='search-area'>
          <div className='search-icon iconfont'>&#xe64e;</div>
          <input
            className='search-input'
            placeholder='请输入商品名称'
          />
        </div>
        <div className='search-clear iconfont'>&#xe844;</div>
      </div>
      <div className='tab'>
        <div className='tab-item tab-item-active'>默认</div>
        <div className='tab-item'>默认</div>
        <div className='tab-item'>价格</div>
      </div>
      <div className='list'>
        <div className='item'>
          <img alt='' className='item-img' src='http://statics.dell-lee.com/shopping/fresh-4.png' />
          <div className='item-content'>
            <p className='item-title'>普罗旺斯西红柿 陕西泾阳生吃沙瓤西红柿农家自种时令生鲜 水果  ...</p>
            <div className='item-price'>
              <span className='item-price-yen'>&yen;</span>
              49.9
            </div>
            <div className='item-sales'>已售982</div>
          </div>
        </div>
        <div className='item'>
          <img alt='' className='item-img' src='http://statics.dell-lee.com/shopping/fresh-4.png' />
          <div className='item-content'>
            <p className='item-title'>普罗旺斯西红柿 陕西泾阳生吃沙瓤西红柿农家自种时令生鲜 水果  ...</p>
            <div className='item-price'>
              <span className='item-price-yen'>&yen;</span>
              49.9
            </div>
            <div className='item-sales'>已售982</div>
          </div>
        </div>
        <div className='item'>
          <img className='item-img' alt='' src='http://statics.dell-lee.com/shopping/fresh-4.png' />
          <div className='item-content'>
            <p className='item-title'>普罗旺斯西红柿 陕西泾阳生吃沙瓤西红柿农家自种时令生鲜 水果  ...</p>
            <div className='item-price'>
              <span className='item-price-yen'>&yen;</span>
              49.9
            </div>
            <div className='item-sales'>已售982</div>
          </div>
        </div>
      </div>
      <div className='bottom'>
        - 我是有底线的 -
      </div>
    </div>
  )
}

export default SearchList;