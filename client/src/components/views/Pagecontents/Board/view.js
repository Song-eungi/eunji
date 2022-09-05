import React, { Component } from 'react';
import './main.css';

import axios from 'axios';
import cookie from 'react-cookies'
import { Link } from 'react-router-dom';

class view extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data : [],
      date : "",
      none_like : "https://cdns.iconmonstr.com/wp-content/releases/preview/2013/240/iconmonstr-thumb-10.png",
      like : 'https://cdns.iconmonstr.com/wp-content/releases/preview/2013/240/iconmonstr-thumb-9.png'


    }
  }

  componentWillMount() {
    const board_id = this.props.match.params.data;

    this._getData(board_id);
    this._addViewCnt(board_id);
  }

  _getData = async function(board_id) {
    const getData = await axios('/get/board_data', {
      method : 'POST',
      headers: new Headers(),
      data : { id : board_id }
    });

    // 날짜 구하기
    const date = getData.data[0].date.slice(0, 10) + ' ' + getData.data[0].date.slice(11, 16);

    return this.setState({ data : getData, date : date })
  }

  _addViewCnt = async function(board_id) {
    const addView = await axios('/update/view_cnt', {
      method : 'POST',
      headers: new Headers(),
      data : { id : board_id }
    })
  }
  //삭제
  _removeView = async function() {
    if(window.confirm('해당 게시물을 삭제하시겠습니까?\n삭제된 데이터는 복구할 수 없습니다.')) {
      const board_id = this.props.match.params.data;
      
      await axios('/delete/board', {
        method : 'POST',
        headers: new Headers(),
        data : { board_id : board_id }
      })

      alert('게시물이 삭제되었습니다.')
      return window.location.href = '/list'
    }
  }

  _toggleLike = async function() {
    alert('좋아요 버튼 클릭');
  }






  render() {
    const { data, date } = this.state;
    const { none_like } = this.state;

    
  // if(data.data) {
  //   var modify_url = '/write/modify/' + data[0].board_id;
  // }


    return (
        <div className='Write'>
          {data.data 
          ? <div>

              <div className='top_title'>
                <input type='text' id='title_txt' name='title' defaultValue={data.data[0].title} readOnly/>

                <div className='date_div'>
                  {date}
                </div>
              </div>
              
              <div id='contents_div' 
                   dangerouslySetInnerHTML={ { __html : data.data[0].contents }}
              >
              </div>
                {/* <textarea id='content_txt' name='contents' defaultValue={data.data[0].contents} readOnly></textarea> */}
        
                <div className='other_div'>
                  <div> {/* left empty*/} </div>
                  <div className='Like'>
                      <img src={none_like} onClick={() => this._toggleLike()}/>
                      <h5> 좋아요 </h5>
                  </div>
                  <div> {/* right empty*/} </div>
                </div>

              <div className='write_option_div'>
            <input type='button' value='수정' /> 
              <input type='button' value='삭제' onClick={() => this._removeView()} />
              <input type='button' value='목록' id='view_list_button'
                    onClick={() => window.location.href = '/list'}
              />

            </div>
            </div>
          : null}
        </div>
    );
  }
}

export default view;