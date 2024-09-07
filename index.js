// Funcionalidad del Chatbot (sin cambios)
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatbox = document.getElementById('chatbox');
    
    chatbox.innerHTML += `<p><strong>Tú:</strong> ${userInput}</p>`;
    
    setTimeout(() => {
        chatbox.innerHTML += `<p><strong>Chatbot:</strong> Esta es una respuesta simulada.</p>`;
    }, 1000);
    
    document.getElementById('user-input').value = '';
}

// Funcionalidad de Predicción de Lluvia actualizada
async function predictRain() {
    const location = document.getElementById('location').value;
    const result = document.getElementById('prediction-result');
    
    result.textContent = 'Calculando predicción...';
    
    try {
        // Aquí debes reemplazar la URL con la de tu servicio real
        const response = await fetch('https://tu-servicio-de-prediccion.com/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ location: location }),
        });
        
        if (!response.ok) {
            throw new Error('Error en la predicción');
        }
        
        const data = await response.json();
        result.textContent = `Predicción para ${location}: ${data.prediction}`;
    } catch (error) {
        result.textContent = 'Error al obtener la predicción. Por favor, intenta de nuevo.';
        console.error('Error:', error);
    }
}

// Cargar interfaces cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const chatbotSection = document.getElementById('chatbot');
    chatbotSection.innerHTML += `
        <div id="chatbox"></div>
        <input type="text" id="user-input" placeholder="Escribe tu mensaje...">
        <button onclick="sendMessage()">Enviar</button>
    `;
    
    const rainPredictionSection = document.getElementById('rain-prediction');
    rainPredictionSection.innerHTML += `
        <input type="text" id="location" placeholder="Ingresa una ubicación">
        <button onclick="predictRain()">Predecir</button>
        <p id="prediction-result"></p>
    `;
});