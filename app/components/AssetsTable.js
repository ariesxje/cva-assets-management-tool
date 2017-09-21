import React from 'react';
import { Paper,
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  FloatingActionButton
} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';

class AssetsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRows: [],
    };
    this.handleSelectRows = this.handleSelectRows.bind(this);
  }

  handleSelectRows(rows) {
    this.setState({
      ...this.state,
      selectedRows: rows,
    });
    this.props.selectItems(this.props.items.filter((item, index) => {
      return rows.includes(index);
    }));
  }

  isSelected(index) {
    return this.state.selectedRows.indexOf(index) !== -1;
  }

  render() {
    const { styles, items } = this.props;
    return (
      <Paper
        style={styles.containerStyle}
        zDepth={1}
      >
        <Table onRowSelection={this.handleSelectRows}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Type</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item, index) =>
              (<TableRow key={item.id} selected={this.isSelected(index)}>
                <TableRowColumn>{item.name}</TableRowColumn>
                <TableRowColumn>{item.type}</TableRowColumn>
                <TableRowColumn>{item.status}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
        <FloatingActionButton style={styles.addButtonStyle}>
          <ContentAdd />
        </FloatingActionButton>
      </Paper>
    );
  }
}

AssetsTable.propTypes = {
  styles: React.PropTypes.object,
  items: React.PropTypes.array,
  selectItems: React.PropTypes.func.required,
};

AssetsTable.defaultProps = {
  styles: {
    containerStyle: {
      paddingLeft: '200px',
    },
    addButtonStyle: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
    },
  },
  items: [
    { id: 'aaa', type: 'IT', name: 'iPhone 6s', status: 'new' },
    { id: 'bbb', type: 'TR', name: 'Digger 3000X', status: 'in use' },
    { id: 'ccc', type: 'EQ', name: 'hammer', status: 'archived' },
  ],
};

export default AssetsTable;