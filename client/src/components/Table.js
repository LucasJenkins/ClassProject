import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getAllFiles } from '../async-actions/getAllFiles'
import { Table } from 'antd'
import DeleteButton from './DeleteButton'
import FileInfo from './FileInfo'
import DownloadButton from './DownloadButton'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: text => (
      <a href='javascript:;'>
        <FileInfo value={text}>{text}</FileInfo>
      </a>
    )
  },
  {
    title: 'Created',
    dataIndex: 'created'
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <a href='javascript:;'>
          <DeleteButton />
        </a>
        <a href='javascript:;'>
          <DownloadButton />
        </a>
      </div>
    )
  }
]

export class _Table extends React.Component {
  constructor (props) {
    super(props)
    this.start = this.start.bind(this)
    this.onSelectChange = this.onSelectChange.bind(this)

    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      loading: false
    }
  }

  // componentDidMount () {
  //   console.log(this.props)
  //   this.props.getAllFiles()
  // }

  loadData () {
    const allFiles = this.props.files
    const data = []
    if (this.props.files) {
      for (let i = 0; i < allFiles.length; i++) {
        data.push({
          key: i,
          name: allFiles[i].id,
          created: allFiles[i].created
        })
      }
    }

    return data
  }

  start () {
    this.setState({ loading: true })

    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false
      })
    }, 1000)
  }

  onSelectChange (selectedRowKeys) {
    console.log('selectedRowKeys changed: ', selectedRowKeys)
    this.setState({ selectedRowKeys })
  }

  render () {
    const { selectedRowKeys } = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    }
    const data = this.loadData()
    const hasSelected = selectedRowKeys.length > 0
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
        />
      </div>
    )
  }
}

_Table.propTypes = {
  // getAllFiles: PropTypes.func,
  files: PropTypes.array
}

const mapStateToProps = state => ({
  files: state.home.fileList,
  getAllFiles
})

const mapDispatchToProps = {
  getAllFiles
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(_Table)
