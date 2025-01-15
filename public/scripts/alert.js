// replacing the default alert function
const showAlert = (message) => {
  // set the modal's message dynamically
  $('#alertModal .modal-body').text(message);
  // show the Bootstrap modal
  const modal = new bootstrap.Modal(document.getElementById('alertModal'));
  modal.show();
}

document.addEventListener('DOMContentLoaded', () => {
  const shareButton = document.getElementById('share-btn');

  shareButton.addEventListener('click', () => {
    // Get the current page URL
    const url = window.location.href;

    // Copy URL to clipboard
    navigator.clipboard.writeText(url).then(() => {
      // Display a confirmation message
      showAlert('URL copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy URL: ', err);
      showAlert('Failed to copy URL. Please try again.');
    });
  });
});
