import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components';
// import ZJL from 'zjl-react-zoom';
// //let ZJL =require('zjl-react-zoom')
// console.log(222,ZJL)
const App = () => {
  return (
    <div>
      {/*<Index />*/}
      {/*<ZJL>33333</ZJL>*/}
    </div>
  )
}

//要实现局部热更新，必须要添加此句
if (module.hot) {module.hot.accept()}

ReactDOM.render(<App />, document.getElementById('root'));