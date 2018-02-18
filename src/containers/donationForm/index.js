import { connect } from 'react-redux';
import {
  addDonation
} from '../../actions/donations';
import DonationForm from '../../components/DonationForm';

const mapStateToProps = state => {
  return {};
}

const mapDispatchToProps = dispatch => {
  return {
    onFormSubmit: function(donation){
      dispatch(addDonation(donation))
    }
  }
}

const donationForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(DonationForm)

export default donationForm;