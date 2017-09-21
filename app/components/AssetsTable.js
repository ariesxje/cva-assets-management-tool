import React from 'react';
import { Paper,
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  FloatingActionButton,
} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionNoteAdd from 'material-ui/svg-icons/action/note-add';

class AssetsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRows: [],
      containerStyle: props.styles.containerStyle,
    };
    this.handleSelectRows = this.handleSelectRows.bind(this);
  }

  isSelected(index) {
    return this.state.selectedRows.indexOf(index) !== -1;
  }

  getContainerStyle() {
    if (this.props.selectedItems.length > 0) {
      return {...this.props.styles.containerStyle, width: '200px'};
    }
    return this.props.styles.containerStyle;
  }

  handleSelectRows(rows) {
    if (rows === 'all') {
      this.setState({
        ...this.state,
        selectedRows: this.props.items,
      });
      this.props.selectItems(this.props.items);
      return;
    }
    if (rows === 'none') {
      this.setState({
        ...this.state,
        selectedRows: [],
      });
      this.props.selectItems([]);
      return;
    }
    this.setState({
      ...this.state,
      selectedRows: rows,
    });
    this.props.selectItems(this.props.items.filter((item, index) => {
      return rows.includes(index);
    }));
  }

  render() {
    const { styles, items } = this.props;
    return (
      <Paper
        style={this.getContainerStyle()}
        zDepth={1}
      >
        <Table onRowSelection={this.handleSelectRows} multiSelectable>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Type</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody deselectOnClickaway={false}>
            {items.map((item, index) =>
              (<TableRow key={item.id} selected={this.isSelected(index)}>
                <TableRowColumn>{item.name}</TableRowColumn>
                <TableRowColumn>{item.type}</TableRowColumn>
                <TableRowColumn>{item.status}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
        <div style={styles.floatButtonsStyle}>
          <FloatingActionButton style={{marginBottom: '15px'}} secondary disabled={this.props.selectedItems.length === 0}>
            <ActionNoteAdd />
          </FloatingActionButton>
          <FloatingActionButton>
            <ContentAdd />
          </FloatingActionButton>
        </div>
      </Paper>
    );
  }
}

AssetsTable.propTypes = {
  styles: React.PropTypes.object,
  items: React.PropTypes.array,
  selectItems: React.PropTypes.func.required,
  selectedItems: React.PropTypes.array.required,
};

AssetsTable.defaultProps = {
  styles: {
    containerStyle: {
      marginLeft: '200px',
      position: 'fixed',
      minHeight: 'calc(100% - 64px)',
    },
    containerCollapseStyle: {
      width: '200px',
    },
    floatButtonsStyle: {
      position: 'absolute',
      bottom: '20px',
      right: '20px',
      display: 'flex',
      flexDirection: 'column',
    },
  },
  items: [
    { id: 'aaa', type: 'IT', name: 'iPhone 6s', status: 'new' },
    { id: 'bbb', type: 'TR', name: 'Digger 3000X', status: 'in use' },
    { id: 'ccc', type: 'EQ', name: 'hammer', status: 'archived' },
  ],
};

export default AssetsTable;
