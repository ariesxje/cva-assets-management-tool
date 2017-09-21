import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, Switch, BrowserHistory } from 'react-router';

import HeadBar from './HeadBar';
import SearchBar from './SearchBar';
import AssetsTable from './AssetsTable';
import AssetDetails from "./AssetDetails";

class App extends React.Component {
  // temporarily store state here
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [],
    };
    this.selectItems = this.selectItems.bind(this);
  }

  selectItems(items) {
    this.setState({
      ...this.state,
      selectedItems: items,
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <HeadBar />
          <SearchBar />
          <AssetsTable selectItems={this.selectItems} selectedItems={this.state.selectedItems}/>
          {
            this.state.selectedItems.length > 0 ?
              <AssetDetails selectItems={this.state.selectedItems} /> :
              null
          }
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
