document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('upload-form');
    const successMessage = document.getElementById('upload-success-message');
    if(uploadForm) {
      uploadForm.addEventListener('submit', (event) => {  
        event.preventDefault();
        successMessage.style.display = 'block';
          
        setTimeout(() => {
          uploadForm.reset();
        }, 3000);
        setTimeout(() => {
          successMessage.style.display = 'none';
        }, 5000);
      });
    }
  });
