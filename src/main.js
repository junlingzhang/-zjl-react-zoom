import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components';
import ZJL from '../dist/index';
console.log(111,ZJL,Index)
const App = () => {
  return (
    <Index />
  )
}

//要实现局部热更新，必须要添加此句
if (module.hot) {module.hot.accept()}

ReactDOM.render(<App />, document.getElementById('root'));