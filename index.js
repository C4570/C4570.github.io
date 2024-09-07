// Funcionalidad del Chatbot
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatbox = document.getElementById('chatbox');
    
    // Agregar mensaje del usuario
    chatbox.innerHTML += `<p><strong>Tú:</strong> ${userInput}</p>`;
    
    // Simular respuesta del chatbot (aquí conectarías con tu modelo real)
    setTimeout(() => {
        chatbox.innerHTML += `<p><strong>Chatbot:</strong> Esta es una respuesta simulada.</p>`;
    }, 1000);
    
    document.getElementById('user-input').value = '';
}

// Funcionalidad de Predicción de Lluvia
function predictRain() {
    const location = document.getElementById('location').value;
    const result = document.getElementById('prediction-result');
    
    // Simular predicción (aquí conectarías con tu modelo real)
    setTimeout(() => {
        result.textContent = `Predicción para ${location}: 70% de probabilidad de lluvia.`;
    }, 1000);
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