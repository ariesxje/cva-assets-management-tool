import React from 'react';
import { Paper, SelectField, MenuItem, TextField } from 'material-ui';

class AssetDetails extends React.Component {

  render() {
    const { styles } = this.props;
    return (
      <Paper style={styles.containerStyle}>
        <SelectField
          floatingLabelText={'Type'}
        >
          <MenuItem value={'IT'} primaryText={'IT'} />
          <MenuItem value={'TR'} primaryText={'Transport'} />
          <MenuItem value={'EQ'} primaryText={'Equipment'} />
        </SelectField><br/>
        <TextField
          floatingLabelText="Name"
        />
      </Paper>
    );
  }
}

AssetDetails.propTypes = {
  styles: React.PropTypes.object,
};

AssetDetails.defaultProps = {
  styles: {
    containerStyle: {
      marginLeft: '400px',
      padding: '20px',
    },
  },
  selectedItems: [],
};

export default AssetDetails;
