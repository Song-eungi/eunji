import React, { Component } from 'react';
import './list.css';

import queryString from 'query-string';

import { Link } from 'react-router-dom';

import axios from 'axios';

class list extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data : [],
      page : 1,
      limit : 10,
      all_page : [],
      search : "",
    }
  }


  componentWillMount() {
    this._getListData();
    this._setPage();

  }

  // componentDidMount() {
  //   this._getCategoryData();
  // }



  _getListData = async function() {
    const { limit } = this.state;
    const page = this._setPage();
    
    let search = queryString.parse(this.props.location.search);
    if(search) {
      search = search.search;
    }

    // Board 테이블 데이터 전체 수
    const total_cnt = await axios('/get/board_cnt', {
      method : 'POST',
      headers: new Headers(),
      data : { search : search }
    });

    // 데이터 가져오기
    const total_list = await axios('/get/board', {
      method : 'POST',
      headers: new Headers(),
      data : { limit : limit, page : page, search : search }
    })

    // 전체 페이지 수 구하기
    let page_arr = [];

    for(let i = 1; i <= Math.ceil(total_cnt.data.cnt / limit); i++) {
      page_arr.push(i);
    }

    this.setState({ data : total_list, 
                    all_page : page_arr, 
                    search : search })
  }

  _changePage = function(el) {
    this.setState({ page : el })
    sessionStorage.setItem('page', el);

    return this._getListData();
  }

  _setPage = function() {
    if(sessionStorage.page) {
      this.setState({ page : Number(sessionStorage.page) })
      return Number(sessionStorage.page);
    }

    this.setState({ page : 1 })
    return 1;
  }

  //카테고리 
  // _getCategoryData = async function() {
  //   const getData = await axios('/get/category');

  //   this.setState({ category : getData.data })
  // }

  render() {
    // const {category} = this.state;
    // console.log(category);

    const list = this.state.data.data
    const { all_page, page } = this.state;
    //  const { all_page, page, search } = this.state;
    //serch.js에 작성 되어야 했던 것
    const { search } = this.props;
    if(search) {
      document.getElementsByName('search')[0].value = search
    }
    //
    
    return (
      <div className='List'>
        <div className='Mains-left'>
            sss

        </div>

        <div className='list_grid list_tit'>
          <div> 제목 </div>
          <div> 조회수 </div>
          <div className='acenter'> 날짜 </div>
        </div>

          {list && list.length > 0 ? list.map( (el, key) => {
            const view_url = '/view/' + el.board_id; 
            
            return(
              <div className='list_grid list_data' key={key}>
                <div> <Link to={view_url}> {el.title} </Link> </div>
                <div> </div>
                <div className='acenter'> {el.date.slice(0, 10)} </div>
              </div>
            )
          })
            : <div className='not_data acenter'>
              {search !== "" ? <div> 검색된 결과가 없습니다. </div> // 검색 사용
                            : <div> 데이터가 없습니다. </div> // 검색 사용 X
              }
              </div>
            }

          <div className='paging_div'>
            <div> </div>
            <div>
              <ul>
                {all_page ? all_page.map( (el, key) => {
                  return(
                    el === page ? <li key={key} className='page_num'> <b> {el} </b> </li>
                                : <li key={key} className='page_num' onClick={() => this._changePage(el)}> {el} </li>
                  )
                })
                
                : null }
              </ul>
               
                


            </div>
            <div> </div>
          </div>

          < div>
            <form>
              <input type='text' maxLength='20' className='search_input' name='search' placeholder='검색어를 입력해주세요.'/>
              <input type='submit' value='검색' className='serach_submit'/>
            </form>
        </div>

      </div>
    );
  }
}

export default list;
