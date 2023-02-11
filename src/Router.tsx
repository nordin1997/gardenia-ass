import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as reactRouterDom from 'react-router-dom'
import { getSuperTokensRoutesForReactRouterDom } from 'supertokens-auth-react'

import Home from 'app/pages/Home'
import Issues from 'app/pages/Issues'
import IssuesUpdate from 'app/pages/IssuesUpdate'

const Router = () => {
  return (
        <div className='w-full h-full'>
          <BrowserRouter>
            <Routes>
              {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
              <Route path='/' element={<Home/>}/>
              <Route path='/issues' element={<Issues/>}/>
              <Route path='/issues/new' element={<></>}/>
              <Route path='/issues/:id' element={<IssuesUpdate/>}/>
            </Routes>
          </BrowserRouter>
        </div>
  )
}

export default Router