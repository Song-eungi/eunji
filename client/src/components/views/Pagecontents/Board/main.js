import React, { Component } from 'react';
import './main.css';
import axios from 'axios';

import { Route, Link, Switch } from 'react-router-dom';


import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class main extends Component {
  constructor(props) {
    super(props)
    this.state = {
        title : "",
        contents : "",
      }
    }
    //
    _getContents = (val) => {
      const contents = val.trim();
  
      this.setState({ contents : contents })
  }

  // _withProps = function (Component, props) {
  //   return function(matchProps) {
  //     return <Component {...props} {...matchProps} />
  //   } 
  // } 





    _submitBoard = async function() {
        const title = document.getElementsByName('title')[0].value.trim();
        // const contents = document.getElementsByName('contents')[0].value.trim();
        const contents = this.state.contents;

        if(title === "") {
          return alert('제목을 입력해주세요.');
    
        } else if(contents === "") {
          return alert('내용을 입력해주세요.');
        }
    
        const data = { title : title, contents : contents };
        const res = await axios('/add/board', {
          method : 'POST',
          data : data,
          // headers: new Headers()
        })
    
        if(res.data) {
          alert('글 등록이 완료되었습니다.');
          return window.location.replace('/list')
        }
      }

  render() {
    
  
    const { _getContents } = this;
    const { contents } = this.state;
    // alert(contents)
      

    return (
        <div className='Write'>
          
          <div id='title'>
            <input type='text' autoComplete='off' id='title_txt' name='title' placeholder='제목'/>
          </div>

          <div>
            {/* <textarea id='content_txt' name='contents' placeholder='내용을 입력하세요.'></textarea> */}
            <div className="CKEditor">
                <CKEditor
                    editor={ ClassicEditor }
                    data= {contents}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                      const data = editor.getData();
          
                      _getContents(data);
                    } }

                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }

                   
                  
                />
            </div>
          </div>

        <div>
        <div id='post_submit'>
        <button onClick={() => this._submitBoard()}> 포스트 등록 </button>
        </div>
        </div>
    

        </div>


    );
  }
}

export default main;
