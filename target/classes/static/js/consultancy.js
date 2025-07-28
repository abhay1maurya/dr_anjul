async function submitForm() {
    const formData = new FormData(consultForm);
    
    try {
        const response = await fetch('/api/book-consultation', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        const result = await response.json();
        
        if (response.ok) {
            showAlert('success', 'Booking successful! We will contact you shortly.');
            consultForm.reset();
        } else {
            showAlert('error', result.message || 'Submission failed. Please try again.');
        }
    } catch (error) {
        showAlert('error', 'Network error. Please check your connection and try again.');
    } finally {
        submitBtn.disabled = false;
        btnText.textContent = 'Book Consultation';
        btnIcon.className = 'fas fa-paper-plane';
    }
}