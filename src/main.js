import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components';
// import ZJL from 'zjl-react-zoom';
const App = () => {
  return (
    <div>
      111
    </div>
  )
}

//要实现局部热更新，必须要添加此句
if (module.hot) {module.hot.accept()}

ReactDOM.render(<App />, document.getElementById('root'));