import React from 'react'

import {renderItem} from '../../utils/renderList'

export default function ListRender({list=[]}) {

  // ...
  
  return list.length ? <ul>
    {list.map((item, index) => <li key={index}>{ renderItem(item) }</li>)}
  </ul> : null;
}