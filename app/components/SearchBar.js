import React from 'react';
import { Paper, SelectField, MenuItem } from 'material-ui';

class SearchBar extends React.Component {
  render() {
    const {styles} = this.props;
    return (
      <Paper
        style={styles}
        zDepth={1}
      >
        <SelectField
          fullWidth
          floatingLabelText={'Type'}
        >
          <MenuItem value={'IT'} primaryText={'IT'} />
          <MenuItem value={'TR'} primaryText={'Transport'} />
          <MenuItem value={'EQ'} primaryText={'Equipment'} />
        </SelectField>
      </Paper>
    );
  }
}

SearchBar.propTypes = {
  styles: React.PropTypes.object,
};

SearchBar.defaultProps = {
  styles: {
    position: 'fixed',
    height: '100%',
    padding: '10px',
    width: '200px',
  },
};

export default SearchBar;
