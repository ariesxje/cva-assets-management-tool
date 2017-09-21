import React from 'react';
import { Paper, SelectField, MenuItem, TextField } from 'material-ui';

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
        </SelectField><br/>
        <TextField
          floatingLabelText="Name"
        /><br/>
        <SelectField
          fullWidth
          floatingLabelText={'Location'}
        >
          <MenuItem value={'IT'} primaryText={'Melbourne'} />
          <MenuItem value={'TR'} primaryText={'Brisbane'} />
          <MenuItem value={'EQ'} primaryText={'Perth'} />
          <MenuItem value={'EQ'} primaryText={'Tasmania'} />
        </SelectField><br/>
        <SelectField
          fullWidth
          floatingLabelText={'Status'}
        >
          <MenuItem value={'IT'} primaryText={'NEW'} />
          <MenuItem value={'TR'} primaryText={'IN USE'} />
          <MenuItem value={'EQ'} primaryText={'IN MAINTENANCE'} />
          <MenuItem value={'EQ'} primaryText={'NOT IN USE'} />
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
