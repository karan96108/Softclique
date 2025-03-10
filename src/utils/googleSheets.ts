interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const submitToGoogleSheets = async (formData: FormData) => {
  try {
    const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwrvqEMQbrR6lQChuhQhdeO2XDlf5AW5NPHyMeFSAPlg4e58_nDqK3sOFk1tw4WGCGIFg/exec';
    
    // Convert form data to URL-encoded string
    const formDataUrlEncoded = new URLSearchParams();
    Object.keys(formData).forEach(key => {
      formDataUrlEncoded.append(key, formData[key as keyof FormData]);
    });
    formDataUrlEncoded.append('timestamp', new Date().toISOString());

    // Log the data being sent
    console.log('Sending form data:', Object.fromEntries(formDataUrlEncoded));

    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formDataUrlEncoded.toString()
    });

    // Log the response
    console.log('Response status:', response.status);
    console.log('Response type:', response.type);

    // With no-cors, we can't access the response body
    // but if we got here without an error, assume success
    return { success: true };

  } catch (error) {
    console.error('Error submitting form:', error);
    throw new Error(`Form submission failed: ${error.message}`);
  }
}; 