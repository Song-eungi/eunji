import React, { Component } from 'react';
import './main.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor } from '@ckeditor/ckeditor5-build-classic';


class write extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { contents, _getContents } = this.props;
    
    return (
        <div className='Write'>
          <div>
            <input type='text' autoComplete='off' id='title_txt' name='title' placeholder='제목'/>
          </div>

          <div>
            {/* <textarea id='content_txt' name='contents' placeholder='내용을 입력하세요.'></textarea> */}
            <div className='CKEditor'>
            <CKEditor
                editor={ ClassicEditor }
                data={ contents }
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
        </div>
    );
  }
}

export default write;
