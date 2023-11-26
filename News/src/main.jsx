import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import './index.css'
import ViewEditorsPick from './components/ViewEditorsPick/ViewEditorsPick'
import ViewAllAds from './components/Advertisement/ViewAllAds'
import ViewPopularFaces from './components/Popularfaces/ViewPopularFaces'
import ViewNewsOfWeek from './components/Newsoftheweek/ViewNewsOfWeek'
import ViewMustReadArticles from './components/Mustreadarticles/ViewMustReadArticles'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route  path='editorspick' element={<ViewEditorsPick />}/>
      <Route  path='ads' element={<ViewAllAds />}/>
      <Route  path='popularfaces' element={<ViewPopularFaces />}/>
      <Route  path='newsofweek' element={<ViewNewsOfWeek />}/>
      <Route  path='mustread' element={<ViewMustReadArticles />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
