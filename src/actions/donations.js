export const addDonation = (donation) => {
  return {
    type: 'ADD_DONATION',
    donation
  }
}

export const validateDonation = (donationId) => {
  return {
    type: 'VALIDATE_DONATION',
    donationId
  }
}