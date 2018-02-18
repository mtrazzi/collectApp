import { connect } from 'react-redux';
import {
  validateDonation
} from '../../actions/donations';
import DonationsValidation from '../../components/DonationsValidation';

const mapStateToProps = state => {
  return {
    donations: state.donations
  }
}

const mapDispatchToProps = dispatch => {
  return {
    validateDonation: function(donationId) {
      dispatch(validateDonation(donationId))
    }
  }
}

const donationsValidation = connect(
  mapStateToProps,
  mapDispatchToProps
)(DonationsValidation)

export default donationsValidation;