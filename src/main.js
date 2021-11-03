import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components';

const App = () => {
  return (
    <Index />
  )
}

//要实现局部热更新，必须要添加此句
if (module.hot) {module.hot.accept()}

ReactDOM.render(<App />, document.getElementById('root'));