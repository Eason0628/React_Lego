import 'swiper/css';
import './style.scss';
import type { ResponseType } from './types';
import { useEffect, useState } from 'react';
import useRequest from '../../hooks/useRequest';
import Banner from './components/Banner';
import Category from './components/Category';
import Card from './components/Card';

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
    latitude: 37.7304167,
    longitude: -122.384425,
  }
}

const Home = () => {
  const localLocation = localStorage.getItem('location');
  const locationHistory = localLocation ? JSON.parse(localLocation) : null;

  if (locationHistory) {
    defaultRequestData.data.latitude = locationHistory.latitude;
    defaultRequestData.data.longitude = locationHistory.longitude;
  }

  const [requestData, setRequestData] = useState(defaultRequestData);
  const { data } = useRequest<ResponseType>(requestData);

  // 获取经纬度信息
  useEffect(() => {
    if (navigator.geolocation && !locationHistory) {
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
      }, { timeout: 500 })
    }
  }, [locationHistory]);

  let location, banners, categories, freshes = undefined;
  const dataResult = data?.data;
  if (dataResult) {
    location = dataResult.location;
    banners = dataResult.banners;
    categories = dataResult.categories;
    freshes = dataResult.freshes;
  }

  return (
    <div className='page home-page'>
      <Banner location={location} banners={banners} />
      <Category categories={categories} />
      <Card title='新品尝鲜' list={freshes} />
      <div className='bottom'>
        - 我是有底线的 -
      </div>
      <div className='docker'>
        <div className='docker-item docker-item-active'>
          <p className='iconfont docker-item-icon'>&#xe600;</p>
          <p className='docker-item-title'>首页</p>
        </div>
        <div className='docker-item'>
          <p className='iconfont docker-item-icon'>&#xe60d;</p>
          <p className='docker-item-title'>分类</p>
        </div>
        <div className='docker-item'>
          <p className='iconfont docker-item-icon'>&#xe6af;</p>
          <p className='docker-item-title'>购物车</p>
        </div>
        <div className='docker-item'>
          <p className='iconfont docker-item-icon'>&#xe660;</p>
          <p className='docker-item-title'>我的</p>
        </div>
      </div>
    </div>
  )
}

export default Home;