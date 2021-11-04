import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components';
// import ZJL from 'zjl-react-zoom/lib/index';
// console.log(111,ZJL,Index)
const App = () => {
  return (
    <div>
      {/*<Index />*/}
      <ZJL>33333</ZJL>
    </div>
  )
}

//要实现局部热更新，必须要添加此句
if (module.hot) {module.hot.accept()}

ReactDOM.render(<App />, document.getElementById('root'));