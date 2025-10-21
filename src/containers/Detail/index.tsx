import './style.scss';


const Detail = () => {
 
  return (
    <div className="page detail-page">
      <div className='title'>
        <div className='iconfont'>&#xe601;</div>
        商品详情
      </div>
      <img className='image' src='http://statics.dell-lee.com/shopping/detail.png' alt=''/>
      <div className='main'>
        <div className='main-price'><span  className='main-price-yen'>&yen;</span>39.9</div>
        <div className='main-sales'>已售546</div>
        <div className='main-content'>
          <div className='main-content-title'>山东海阳普罗旺斯西红柿自然熟沙瓢番茄新鲜水果蔬菜健康轻食 严选彩箱5斤装</div>
          <p className='main-content-subtitle'>山东海阳普罗旺斯西红柿自然熟沙瓢番茄新鲜水果蔬菜健康轻食 严选彩箱5斤装</p>
        </div>
      </div>
      <div className='spec'>
        <div className='spec-title'>规格信息</div>
        <div className='spec-content'>
          <div className='spec-content-left'>
            <p className='spec-content-item'>产地</p>
            <p className='spec-content-item'>规格</p>
          </div>
          <div className='spec-content-right'>
            <p className='spec-content-item'>以实际购买商品批次为准</p>
            <p className='spec-content-item'>2kg</p>
          </div>
        </div>
      </div>
      <div className='detail'>
        <div className='detail-title'>商品详情</div>
        <div className='detail-content'>
          普罗旺斯西红柿不同于别的西红柿品种，它的表面有沟有棱，不像高粉西红柿那样表面光滑饱满，看起来更像秋天的软柿子或者甜椒，正因为有沟有棱，所以它里面显得很空，草莓心，尤其是第一二层最为明显，第三四层就会好很多，第五层基本不会存在这种情况。
        </div>
      </div>
      <div className='docker'>
        <div className='cart-icon'>
          <div className='iconfont'>&#xe611;</div>
          <div className='icon-text'>购物车</div>
        </div>
        <div className='cart-button'>加入购物车</div>
      </div>
    </div>
  )
}

export default Detail;