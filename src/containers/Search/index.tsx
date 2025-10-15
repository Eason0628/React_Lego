import type { ResponseType } from './types';
import './style.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useRequest from '../../hooks/useRequest';

// 默认请求数据
const a1 = 'APP-UvygAWn-4519950447516193282-2';
const a2 = 'KEY035UvyhbsvXDuoopaM2b3H4jRRnjnBpt53gOXsdbj3';
const t1 = new Date().getTime();
const defaultRequestData = {
  url: 'https://open.datadex.com.cn/dexserver/dex-api/v1/search',
  method: 'POST',
  data: {
    a1: a1,
    a2: a2,
    t1: t1
  }
}

const Search = () => {
  const localSearchList = localStorage.getItem('search-list');
  const seachListHistory: string[] = localSearchList ? JSON.parse(localSearchList) : [];

  const [historyList, setHistoryList] = useState(seachListHistory);
  const [keyword, setKeyword] = useState('');

  const { data } = useRequest<ResponseType>(defaultRequestData);
  const hotList = data?.data || [];

  function handleKeyDown(key: string) {
    if (key === 'Enter') {
      const newHistoryList = [...historyList];
      newHistoryList.unshift(keyword);
      if (newHistoryList.length > 20) {
        newHistoryList.length = 20;
      }
      setHistoryList(newHistoryList);
      setKeyword('');
      localStorage.setItem('search-list', JSON.stringify(newHistoryList))
    }
  }

  function handleHistoryListClean() {
    setHistoryList([]);
    localStorage.setItem('search-list', JSON.stringify([]))
  }

  return (
    <div className="page search-page">
      <div className='search'>
        <Link to='/home' className='search-back-link'>
          <div className='search-back-icon iconfont'>&#xe601;</div>
        </Link>
        <div className='search-area'>
          <div className='search-icon iconfont'>&#xe64e;</div>
          <input
            className='search-input'
            placeholder='请输入商品名称'
            value={keyword}
            onChange={(e) => { setKeyword(e.target.value) }}
            onKeyDown={(e) => { handleKeyDown(e.key) }}
          />
        </div>
      </div>
      {
        historyList.length ? (
          <>
            <div className='title'>
              历史搜索
              <div
                onClick={handleHistoryListClean}
                className='iconfont title-close'
              >&#xe844;</div>
            </div>
            <ul className='list'>
              {
                historyList.map((item, index) => {
                  return <li className='list-item' key={item + index}>{item}</li>
                })
              }
            </ul>
          </>
        ) : null
      }
      {
        hotList.length ? (
          <>
            <div className='title'>
              热门搜索
            </div>
            <ul className='list'>
              {
                hotList.map(item => (
                  <li className='list-item' key={item.id}>{item.keyword}</li>
                ))
              }
            </ul>
          </>
        ) : null
      }
    </div>
  )
}

export default Search;