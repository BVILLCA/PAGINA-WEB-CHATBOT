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
      
      if (lowercaseMessage === 'catalogo') {
        cambiarImagen('img/MENUS/menuCatalogo.png');
        const menuPrincipal = 'Elige una opción:\n1. PC\n2. CELULARES';


        const opcionesMenu = menuPrincipal.split('\n');
        for (let opcion of opcionesMenu) {
          displayChatbotMessage(opcion);
        }


        chatbotState = 'menuPrincipal';
      }
      //------------------MENU PRINCIPAL
      else if (chatbotState === 'menuPrincipal') {
        if (lowercaseMessage === '1') {
          cambiarImagen('img/MENUS/PC/menuPc.jpg');
          const menuPC = 'Elige una opción para PC:\n1. RAM\n2. VOLVER AL MENU PRINCIPAL';
          
          const opcionesMenu = menuPC.split('\n');
          for (let opcion of opcionesMenu) {
          displayChatbotMessage(opcion);
          }

          chatbotState = 'menuPC';
        }
        else if (lowercaseMessage === '2') {
          cambiarImagen('img/CELULARES.png');
          const menuCELULARES = 'Elige una opción:\n1. HUAWEI\n2. VOLVER AL MENU PRINCIPAL';
          
          const opcionesMenu = menuCELULARES.split('\n');
          for (let opcion of opcionesMenu) {
          displayChatbotMessage(opcion);
          }



          chatbotState = 'menuCELULARES';
        }


//------------------MENU PC

      } else if (chatbotState === 'menuPC') {
        if (lowercaseMessage === '1') {
          const menuRAM = 'Elige una opción para RAM:\n1. CRUCIAL\n2. VOLVER AL MENU PC';
          
          const opcionesMenu = menuRAM.split('\n');
          for (let opcion of opcionesMenu) {
          displayChatbotMessage(opcion);
          }



          chatbotState = 'menuRAM';
        } else if (lowercaseMessage === '2') {
          cambiarImagen('img/PC.png');
          const menuPrincipal = 'Elige una opción:\n1. PC\n2. CELULARES';

          const opcionesMenu = menuPrincipal.split('\n');
          for (let opcion of opcionesMenu) {
          displayChatbotMessage(opcion);
          }

          chatbotState = 'menuPrincipal';
        }
      }


//------------------MENU RAM



else if (chatbotState === 'menuRAM') {
  if (lowercaseMessage === '1') {
    const menuCRUCIAL = 'Elige una opción para RAM:\n1. 18GB\n2. VOLVER AL MENU PC';
    const opcionesMenu = menuCRUCIAL.split('\n');
    for (let opcion of opcionesMenu) {
    displayChatbotMessage(opcion);
    }
    chatbotState = 'menuCRUCIAL';
  } else if (lowercaseMessage === '2') {
    cambiarImagen('img/PC.png');
    const menuPC = 'Elige una opción para PC:\n1. RAM\n2. VOLVER AL MENU PRINCIPAL';
    displayChatbotMessage(menuPC);
    chatbotState = 'menuPC';
  }
}


//-------------menuCELULARES

 else if (chatbotState === 'menuCELULARES') {
  if (lowercaseMessage === '1') {
    const menuHUAWEI = 'Elige una opción para HUAWEI:\n1. P50\n2. VOLVER AL MENU PC';
    displayChatbotMessage(menuHUAWEI);
    chatbotState = 'menuHUAWEI';
  } else if (lowercaseMessage === '2') {
    cambiarImagen('img/PC.png');
    const menuPrincipal = 'Elige una opción:\n1. PC\n2. CELULARES';
    displayChatbotMessage(menuPrincipal);
    chatbotState = 'menuPrincipal';
  }
}
//---------------menuHUAWEI

else if (chatbotState === 'menuHUAWEI') {
  if (lowercaseMessage === '1') {
    const menuP50 = 'EL MODELO P50 ES UN CELULAR COSTO BENEFICIO';
    displayChatbotMessage(menuP50);
    chatbotState = 'menuHUAWEI';
  } else if (lowercaseMessage === '2') {
    cambiarImagen('img/PC.png');
    const menuHUAWEI = 'Elige una opción para HUAWEI:\n1. P50\n2. VOLVER AL MENU PC';
    displayChatbotMessage(menuHUAWEI);
    chatbotState = 'menuHUAWEI';
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