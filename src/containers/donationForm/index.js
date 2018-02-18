import { connect } from 'react-redux';
import DonationForm from '../../components/DonationForm';

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const donationForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(DonationForm)

export default donationForm;