import React from 'react'
import Paginated from './Paginated'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'
import WithParams from './WithParams'
import Button from 'orionsoft-parts/lib/components/Button'
import CreateIcon from 'react-icons/lib/md/add'
import Container from 'orionsoft-parts/lib/components/Container'
import Breadcrumbs from 'App/components/Breadcrumbs'

@withRouter
export default class List extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    name: PropTypes.string,
    fields: PropTypes.array,
    title: PropTypes.string,
    basePath: PropTypes.string,
    singular: PropTypes.node,
    canCreate: PropTypes.bool,
    canUpdate: PropTypes.bool,
    allowSearch: PropTypes.bool,
    params: PropTypes.object,
    onSelect: PropTypes.func,
    setRef: PropTypes.func,
    queryFunctionName: PropTypes.string,
    extraFields: PropTypes.arrayOf(PropTypes.string),
    footer: PropTypes.any,
    centerContent: PropTypes.node,
    rightContent: PropTypes.node
  }

  static defaultProps = {
    title: 'List',
    fields: [{title: 'ID', name: '_id'}],
    basePath: '',
    params: {},
    setRef: () => {}
  }

  @autobind
  onSelect(item) {
    if (this.props.onSelect) {
      this.props.onSelect(item)
    } else {
      this.props.history.push(`${this.props.basePath}/${item._id}`)
    }
  }

  @autobind
  renderCenter() {
    if (this.props.centerContent) return this.props.centerContent
    if (!this.props.canCreate) return <span />
    return (
      <div>
        <Button
          icon={CreateIcon}
          onClick={() => this.props.history.push(`${this.props.basePath}/create`)}>
          Create {this.props.singular}
        </Button>
      </div>
    )
  }

  render() {
    return (
      <Container>
        <div className="paginated-list no-padding">
          <WithParams name={this.props.name} mutation={false}>
            {({params}) => (
              <Paginated
                ref={paginated => this.props.setRef(paginated)}
                headTitle={<Breadcrumbs>{this.props.title}</Breadcrumbs>}
                queryFunctionName={this.props.queryFunctionName}
                queryName={this.props.name}
                fields={this.props.fields}
                onPress={this.onSelect}
                params={params}
                variables={this.props.params}
                headCenterComponent={this.renderCenter}
                headRightComponent={
                  this.props.allowSearch
                    ? undefined
                    : this.props.rightContent
                    ? () => this.props.rightContent
                    : () => <span />
                }
                extraFields={this.props.extraFields}
                footer={this.props.footer}
              />
            )}
          </WithParams>
        </div>
      </Container>
    )
  }
}
