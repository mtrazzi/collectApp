import { connect } from 'react-redux';

import Dashboard from '../../components/Dashboard';

const mapStateToProps = state => {
  return {
    donations: state.donations
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const dashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

export default dashboard;