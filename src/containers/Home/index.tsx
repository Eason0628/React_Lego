import 'swiper/css';
import './style.scss';
import type { ResponseType } from './types';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useRequest from '../../hooks/useRequest';

const localLocation = localStorage.getItem('location');
const locationHistory = localLocation ? JSON.parse(localLocation): null;

// 默认请求数据
// 默认请求数据
const a1 = 'APP-UvygAWn-4519950447516193282-2';
const a2 = 'KEY035UvyhbsvXDuoopaM2b3H4jRRnjnBpt53gOXsdbj3';
const t1 = new Date().getTime();
const defaultRequestData = {
  url: 'https://open.datadex.com.cn/dexserver/dex-api/v1/home',
  method: 'POST',
  data: {
    a1: a1,
    a2: a2,
    t1: t1,
    latitude: locationHistory ? locationHistory.latitude : 37.7304167,
    longitude: locationHistory ? locationHistory.longitude : -122.384425,
  }
}

const Home = () => {
  const [ requestData, setRequestData ] = useState(defaultRequestData);
  const { data } = useRequest<ResponseType>(requestData);

  // 获取经纬度信息
  useEffect(() => {
    if(navigator.geolocation && !locationHistory) {
      console.log('get location');
      navigator.geolocation.getCurrentPosition((position) => {
        const { coords } = position;
        const { latitude, longitude } = coords;
        localStorage.setItem('location', JSON.stringify({
          latitude, longitude
        }));
        setRequestData({
          ...defaultRequestData,
          data: { a1, a2, t1, latitude, longitude } 
        });
      }, (error) => {
        console.log(error);
      }, {timeout: 500})
    }
  }, []);

  const [ page, setPage ] = useState(1);
  return (
    <div className='page home-page'>
      <div className='banner'>
        <h3 className='location'>
          <span className='iconfont'>&#xe67c;</span>
          {data?.data.location.address || ''}
        </h3>
        <div className='search'>
          <span className='iconfont'>
            &#xe64e;
          </span>
          请输入你需要搜索的内容
        </div>
        <div className='swiper-area'>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={(e) => setPage(e.activeIndex + 1)}
          >
            {
              (data?.data.banners || []).map(item => {
                return (
                  <SwiperSlide key={item.id}>
                    <div className='swiper-item'>
                      <img className='swiper-item-img' src={item.url} alt='轮播图'/>
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
          <div className='pagination'>{page}/{data?.data.banners.length || 0}</div>
        </div>
      </div>
      <div className='category'>
        <div className='category-item'>
          <img
            className='category-item-img'
            alt='新鲜蔬菜'
            src='http://statics.dell-lee.com/shopping/category-1.png'
          />
          <p className='category-item-desc'>新鲜蔬菜</p>
        </div>
        <div className='category-item'>
          <img
            className='category-item-img'
            alt='新鲜蔬菜'
            src='http://statics.dell-lee.com/shopping/category-1.png'
          />
          <p className='category-item-desc'>新鲜蔬菜</p>
        </div>
        <div className='category-item'>
          <img
            className='category-item-img'
            alt='新鲜蔬菜'
            src='http://statics.dell-lee.com/shopping/category-1.png'
          />
          <p className='category-item-desc'>新鲜蔬菜</p>
        </div>
        <div className='category-item'>
          <img
            className='category-item-img'
            alt='新鲜蔬菜'
            src='http://statics.dell-lee.com/shopping/category-1.png'
          />
          <p className='category-item-desc'>新鲜蔬菜</p>
        </div>
        <div className='category-item'>
          <img
            className='category-item-img'
            alt='新鲜蔬菜'
            src='http://statics.dell-lee.com/shopping/category-1.png'
          />
          <p className='category-item-desc'>新鲜蔬菜</p>
        </div>
        <div className='category-item'>
          <img
            className='category-item-img'
            alt='新鲜蔬菜'
            src='http://statics.dell-lee.com/shopping/category-1.png'
          />
          <p className='category-item-desc'>新鲜蔬菜</p>
        </div>
        <div className='category-item'>
          <img
            className='category-item-img'
            alt='新鲜蔬菜'
            src='http://statics.dell-lee.com/shopping/category-1.png'
          />
          <p className='category-item-desc'>新鲜蔬菜</p>
        </div>
        <div className='category-item'>
          <img
            className='category-item-img'
            alt='新鲜蔬菜'
            src='http://statics.dell-lee.com/shopping/category-1.png'
          />
          <p className='category-item-desc'>新鲜蔬菜</p>
        </div>
      </div>
      <div className='card'>
        <h3 className='card-title'>
          <img
            alt='新品尝鲜'
            className='card-title-img'
            src='http://statics.dell-lee.com/shopping/hot.png'
          />
          新品尝鲜
          <div className='card-title-more'>更多<span className='iconfont'>&#xe613;</span></div>
        </h3>
        <div className='card-content'>
          <div className='card-content-item'>
            <img
              alt=''
              className='card-content-item-img'
              src='http://statics.dell-lee.com/shopping/hot.png'
            />
            <p className='card-content-item-desc'>金锣 国产猪肉 去皮猪五花肉块 …</p>
            <p className='card-content-item-price'>
              <span className='card-content-item-yen'>&yen;</span>
              66.9
              <div className='iconfont'>&#xe7e0;</div>
            </p>
          </div>
          <div className='card-content-item'>
            <img
              alt=''
              className='card-content-item-img'
              src='http://statics.dell-lee.com/shopping/hot.png'
            />
            <p className='card-content-item-desc'>金锣 国产猪肉 去皮猪五花肉块 …</p>
            <p className='card-content-item-price'>
              <span className='card-content-item-yen'>&yen;</span>
              66.9
              <div className='iconfont'>&#xe7e0;</div>
            </p>
          </div>
          <div className='card-content-item'>
            <img
              alt=''
              className='card-content-item-img'
              src='http://statics.dell-lee.com/shopping/hot.png'
            />
            <p className='card-content-item-desc'>金锣 国产猪肉 去皮猪五花肉块 …</p>
            <p className='card-content-item-price'>
              <span className='card-content-item-yen'>&yen;</span>
              66.9
              <div className='iconfont'>&#xe7e0;</div>
            </p>
          </div>
          <div className='card-content-item'>
            <img
              alt=''
              className='card-content-item-img'
              src='http://statics.dell-lee.com/shopping/hot.png'
            />
            <p className='card-content-item-desc'>金锣 国产猪肉 去皮猪五花肉块 …</p>
            <p className='card-content-item-price'>
              <span className='card-content-item-yen'>&yen;</span>
              66.9
              <div className='iconfont'>&#xe7e0;</div>
            </p>
          </div>
          <div className='card-content-item'>
            <img
              alt=''
              className='card-content-item-img'
              src='http://statics.dell-lee.com/shopping/hot.png'
            />
            <p className='card-content-item-desc'>金锣 国产猪肉 去皮猪五花肉块 …</p>
            <p className='card-content-item-price'>
              <span className='card-content-item-yen'>&yen;</span>
              66.9
              <div className='iconfont'>&#xe7e0;</div>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;