import React from 'react';
import { AppBar } from 'material-ui';

class HeadBar extends React.Component {
  render() {
    return (
      <AppBar
        title="CVA Assets Manage Tool"
        showMenuIconButton={false}
      />
    );
  }
}

export default HeadBar;
