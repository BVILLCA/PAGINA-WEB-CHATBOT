 // Obtén los elementos necesarios
 const chatbox = document.getElementById('chatbox');
 const openBtn = document.querySelector('.btn-bot');
 const closeBtn = document.getElementById('close-btn');

 // Función para abrir la caja de chat
 function openChatbox() {
  chatbox.style.display = 'block';
 }

// Función para cerrar la caja de chat
 function closeChatbox() {
 chatbox.style.display = 'none';
 }

 // Asocia eventos de clic a los botones de abrir y cerrar
 openBtn.addEventListener('click', openChatbox);
 closeBtn.addEventListener('click', closeChatbox);

 function cambiarImagen(rutaImagen) {
  var catalogImage = document.getElementById('catalog-image');
  catalogImage.src = rutaImagen;
}

 function openChatbox() {
 chatbox.style.display = 'block';

     // Saludo del chatbot
      const chatboxBody = document.getElementById('chatbox-body');
     const chatMessage = document.createElement('div');
       chatMessage.classList.add('chat-message');
      chatMessage.textContent = '¡Hola! ¿En qué puedo ayudarte?';
      chatboxBody.appendChild(chatMessage);
     }
 





     const chatInput = document.getElementById('chat-input');
     const sendBtn = document.getElementById('send-btn');
     const chatboxBody = document.getElementById('chatbox-body');

     // Función para enviar el mensaje del usuario y obtener la respuesta del chatbot
     function sendMessage() {
      const userMessage = chatInput.value;
      displayUserMessage(userMessage);
    
      const lowercaseMessage = userMessage.toLowerCase();
    
      // Mostrar la ventana emergente del catálogo
      var catalogModal = document.getElementById('catalog-modal');
      catalogModal.style.display = 'block';
    
      // Cerrar la ventana emergente del catálogo al hacer clic en el botón "close"
      var closeBtn = document.getElementsByClassName('close')[0];
      closeBtn.addEventListener('click', function() {
        catalogModal.style.display = 'none';
      });
    
      // Permitir seguir escribiendo en el chatbot mientras la ventana emergente está abierta
      chatInput.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
          event.preventDefault();
          sendMessage();
        }
      });
    
      if (lowercaseMessage.includes('no') && lowercaseMessage.includes('entrar') && lowercaseMessage.includes('cuenta')) {
        displayChatbotMessage('No hay sistema');
      } else {
        displayChatbotMessage(' ');
      }
      
      if (lowercaseMessage === 'catalogo') 
      {
        cambiarImagen('img/Partes-internas-de-una-computadora.png')


        const menuCatalogo = 'Elige una opción:\n1. RAM\n2. Procesador\n3. GPU\n4. SSD';
        displayChatbotMessage(menuCatalogo);
        chatbotState = 'menuPrincipal';
      } else if (chatbotState === 'menuPrincipal') {
        if (lowercaseMessage === '1') {

          cambiarImagen('img/ram.png')
          const submenuRAM = 'Elige una marca de RAM:\n1. Corsair\n2. Kingston\n3. G.Skill\n\nEscribe "volver" para regresar al menú de catálogo.';
          
          displayChatbotMessage(submenuRAM);
          chatbotState = 'submenuRAM';
          previousState = 'menuPrincipal';
        } else if (lowercaseMessage === '2') {
          const submenuProcesador = 'Elige una marca de procesador:\n1. Intel\n2. AMD\n\nEscribe "volver" para regresar al menú de catálogo.';
          displayChatbotMessage(submenuProcesador);
          chatbotState = 'submenuProcesador';
          previousState = 'menuPrincipal';
        } else if (lowercaseMessage === '3') {
          const submenuGPU = 'Elige una marca de GPU:\n1. NVIDIA\n2. AMD\n\nEscribe "volver" para regresar al menú de catálogo.';
          displayChatbotMessage(submenuGPU);
          chatbotState = 'submenuGPU';
          previousState = 'menuPrincipal';
        } else if (lowercaseMessage === '4') {
          const submenuSSD = 'Elige una marca de SSD:\n1. Samsung\n2. Kingston\n3. Western Digital\n\nEscribe "volver" para regresar al menú de catálogo.';
          displayChatbotMessage(submenuSSD);
          chatbotState = 'submenuSSD';
          previousState = 'menuPrincipal';
        } else {
          displayChatbotMessage(' ');
        }
      } 
      
      
      
      else if (chatbotState === 'submenuRAM') {
        if (lowercaseMessage === '1') {
          // Lógica para la marca de RAM Corsair
          displayChatbotMessage('Has elegido la marca de RAM Corsair.');
        } else if (lowercaseMessage === '2') {
          // Lógica para la marca de RAM Kingston
          displayChatbotMessage('Has elegido la marca de RAM Kingston.');
        } else if (lowercaseMessage === '3') {
          // Lógica para la marca de RAM G.Skill
          displayChatbotMessage('Has elegido la marca de RAM G.Skill.');
        } else if (lowercaseMessage === 'volver') {
          displayChatbotMessage('Volviendo al menú anterior...');
          chatbotState = previousState;
          if (previousState === 'menuPrincipal') {
            const menuCatalogo = 'Elige una opción:\n1. RAM\n2. Procesador\n3. GPU\n4. SSD';
            displayChatbotMessage(menuCatalogo);
          }
        } else {
          
        }
    }
        
        else if (chatbotState === 'submenuProcesador') {
            if (lowercaseMessage === '1') {
              // Lógica para la marca de procesador Intel
              displayChatbotMessage('Has elegido la marca de procesador Intel.');
            } else if (lowercaseMessage === '2') {
              // Lógica para la marca de procesador AMD
              displayChatbotMessage('Has elegido la marca de procesador AMD.');
            } else if (lowercaseMessage === 'volver') {
              displayChatbotMessage('Volviendo al menú anterior...');
              chatbotState = previousState;
              if (previousState === 'menuPrincipal') {
                const menuCatalogo = 'Elige una opción:\n1. RAM\n2. Procesador\n3. GPU\n4. SSD';
                displayChatbotMessage(menuCatalogo);
              }
            } else {
              
            }
        
          } 
          
          else if (chatbotState === 'submenuGPU') {
            if (lowercaseMessage === '1') {
              const submenuGPUNVIDIA = 'Elige un modelo de GPU NVIDIA:\n1. RTX 3060\n2. RTX 3070\n3. RTX 3080\n\nEscribe "volver" para regresar al menú de catálogo.';
              displayChatbotMessage(submenuGPUNVIDIA);
              chatbotState = 'submenuGPUNVIDIA';
              previousState = 'submenuGPU';
            } else if (lowercaseMessage === '2') {
              const submenuGPUAMD = 'Elige un modelo de GPU AMD:\n1. Radeon RX 6700 XT\n2. Radeon RX 6800\n3. Radeon RX 6900 XT\n\nEscribe "volver" para regresar al menú de catálogo.';
              displayChatbotMessage(submenuGPUAMD);
              chatbotState = 'submenuGPUAMD';
              previousState = 'submenuGPU';
            } else if (lowercaseMessage === 'volver') {
              displayChatbotMessage('Volviendo al menú anterior...');
              chatbotState = previousState;
              if (previousState === 'menuPrincipal') {
                const menuCatalogo = 'Elige una opción:\n1. RAM\n2. Procesador\n3. GPU\n4. SSD';
                displayChatbotMessage(menuCatalogo);
              }
            } else {
              
            }
          }else if (chatbotState === 'submenuGPUNVIDIA') {
            if (lowercaseMessage === '1') {
              // Lógica para el modelo de GPU NVIDIA RTX 3060
              displayChatbotMessage('Has elegido el modelo de GPU NVIDIA RTX 3060.');
            } else if (lowercaseMessage === '2') {
              // Lógica para el modelo de GPU NVIDIA RTX 3070
              displayChatbotMessage('Has elegido el modelo de GPU NVIDIA RTX 3070.');
            } else if (lowercaseMessage === '3') {
              // Lógica para el modelo de GPU NVIDIA RTX 3080
              displayChatbotMessage('Has elegido el modelo de GPU NVIDIA RTX 3080.');
            } else if (lowercaseMessage === 'volver') {
              displayChatbotMessage('Volviendo al menú anterior...');
              chatbotState = previousState;
              if (previousState === 'submenuGPU') {
                const submenuGPU = 'Elige una marca de GPU:\n1. NVIDIA\n2. AMD\n\nEscribe "volver" para regresar al menú de catálogo.';
                displayChatbotMessage(submenuGPU);
              }
            } else {
              
            }
          } else if (chatbotState === 'submenuGPUAMD') {
            if (lowercaseMessage === '1') {
              // Lógica para el modelo de GPU AMD Radeon RX 6700 XT
              displayChatbotMessage('Has elegido el modelo de GPU AMD Radeon RX 6700 XT.');
            } else if (lowercaseMessage === '2') {
              // Lógica para el modelo de GPU AMD Radeon RX 6800
              displayChatbotMessage('Has elegido el modelo de GPU AMD Radeon RX 6800.');
            } else if (lowercaseMessage === '3') {
              // Lógica para el modelo de GPU AMD Radeon RX 6900 XT
              displayChatbotMessage('Has elegido el modelo de GPU AMD Radeon RX 6900 XT.');
            } else if (lowercaseMessage === 'volver') {
              displayChatbotMessage('Volviendo al menú anterior...');
              chatbotState = previousState;
              if (previousState === 'submenuGPU') {
                const submenuGPU = 'Elige una marca de GPU:\n1. NVIDIA\n2. AMD\n\nEscribe "volver" para regresar al menú de catálogo.';
                displayChatbotMessage(submenuGPU);
              }
            } else {
              
            }
          }
          
    
      chatInput.value = '';
    }






     // Función para mostrar el mensaje del usuario en el chat
     function displayUserMessage(message) {
       const chatMessage = document.createElement('div');
       chatMessage.classList.add('chat-message', 'user-message');
       chatMessage.textContent = message;
       chatboxBody.appendChild(chatMessage);
     }

     // Función para mostrar la respuesta del chatbot en el chat
     function displayChatbotMessage(message) {
       const chatMessage = document.createElement('div');
       chatMessage.classList.add('chat-message', 'chatbot-message');
       chatMessage.textContent = message;
       chatboxBody.appendChild(chatMessage);
     }

     // Asociar evento de clic al botón de enviar
     sendBtn.addEventListener('click', sendMessage);

     chatInput.addEventListener('keydown', function(event) {
       if (event.key === 'Enter') {
         sendMessage();
       }
     });