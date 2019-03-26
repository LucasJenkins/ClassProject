import React from 'react'
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

const data = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    created: `03/${i}/2019`
  })
}

export class _Table extends React.Component {
  constructor () {
    super()
    this.start = this.start.bind(this)
    this.onSelectChange = this.onSelectChange.bind(this)
    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      loading: false
    }
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
    const hasSelected = selectedRowKeys.length > 0
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          {/* <Button
            type='primary'
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
          >
            Reload
          </Button> */}
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

export default _Table
