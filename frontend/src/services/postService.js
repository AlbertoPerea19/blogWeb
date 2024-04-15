const API_URL = 'http://localhost:4000';

const postService = {
  createPost: async (postData) => {
    try {
      const response = await fetch(`${API_URL}/entry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      });

      if (response.status === 201) {
        return response;
      }else{
         throw new Error('Error al enviar la solicitud');
      }

    } catch (error) {
      throw new Error(`Error al enviar la solicitud: ${error.message}`);
    }
  }
};

export default postService;
