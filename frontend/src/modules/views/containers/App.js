import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from 'modules/core/utils/registerServiceWorker';

import IdeaAnalysis from 'modules/views/components/IdeaAnalysis';


class App extends Component {
  render() {
    return (
      <IdeaAnalysis />
    );
  }
}
export default App;
// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('id_idea_analysis')
// );