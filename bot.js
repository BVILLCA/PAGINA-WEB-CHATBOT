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
       displayChatbotMessage('¡HOLA! ¿EN QUÉ PUEDO AYUDARTE?');
       
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


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




if (lowercaseMessage.includes('hola')||lowercaseMessage.includes('opcion')) {
  cambiarImagen('img/SALUDO/INICIO.jpg');
  const menuInicio = 'ELIGE UNA OPCIÓN: \n1. CATALOGO\n2. CONSULTOR';

  const opcionesMenu = menuInicio.split('\n');
 for (let opcion of opcionesMenu) {
   displayChatbotMessage(opcion);
 }
 chatbotState = 'menuInicio';
}
        //                                    
      //                                       ░█████╗░░█████╗░████████╗░█████╗░██╗░░░░░░█████╗░░██████╗░░█████╗░
      //                                       ██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗██║░░░░░██╔══██╗██╔════╝░██╔══██╗
      //                                       ██║░░╚═╝███████║░░░██║░░░███████║██║░░░░░██║░░██║██║░░██╗░██║░░██║
      //                                       ██║░░██╗██╔══██║░░░██║░░░██╔══██║██║░░░░░██║░░██║██║░░╚██╗██║░░██║
      //                                       ╚█████╔╝██║░░██║░░░██║░░░██║░░██║███████╗╚█████╔╝╚██████╔╝╚█████╔╝
      //                                       ░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝╚══════╝░╚════╝░░╚═════╝░░╚════╝░
 
else if (chatbotState === 'menuInicio') {
    if (lowercaseMessage.includes('1')||lowercaseMessage.includes('catalogo')) {
           cambiarImagen('img/SALUDO/MENUS/CATALOGO.jpg');
           const menuCATALOGO = 'ELIGE UNA OPCIÓN:\n1. PC\n2. VOLVER AL MENU inicio';

           const opcionesMenu = menuCATALOGO.split('\n');
          for (let opcion of opcionesMenu) {
            displayChatbotMessage(opcion);
          }
          chatbotState = 'menuCATALOGO';

      }else if (lowercaseMessage.includes('2')||lowercaseMessage.includes('consultor')) {
        cambiarImagen('img/SALUDO/MENUS/CONSULTOR.jpg');
        const menuConsultor = 'cual es tu consulta';

        const opcionesMenu = menuConsultor.split('\n');
       for (let opcion of opcionesMenu) {
         displayChatbotMessage(opcion);
       }
       chatbotState = 'menuConsultor';

   }
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    }





      else if (chatbotState === 'menuCATALOGO') {
        if (lowercaseMessage.includes('1')||lowercaseMessage.includes('pc')) {
          cambiarImagen('img/SALUDO/MENUS/PC/PC.jpg');
          const menuPC = 'ELIGE UNA OPCIÓN PARA PC:\n1. RAM\n2.PROCESADOR\n3. MOTHERBOARD\n4 VOLVER AL MENU CATALOGO';
          
          const opcionesMenu = menuPC.split('\n');
          for (let opcion of opcionesMenu) {
          displayChatbotMessage(opcion);
          }
          chatbotState = 'menuPC';
        }
    else if (lowercaseMessage.includes('2')||lowercaseMessage.includes('celulares')) {
      cambiarImagen('img/SALUDO/MENUS/CELULARES/CELULARES.jpg');
      const menuCELULARES = 'ELIGE UNA OPCIÓN:\n1. HUAWEI\n2. XIAOMI\n3. SAMSUNG\n4. VOLVER AL MENU CATALOGO';
      
      const opcionesMenu = menuCELULARES.split('\n');
      for (let opcion of opcionesMenu) {
      displayChatbotMessage(opcion);
      }
      chatbotState = 'menuCELULARES';
    }
        else if (lowercaseMessage.includes( '3')) {
          
          
          cambiarImagen('img/SALUDO/INICIO.jpg');
              const menuInicio = 'ELIGE UNA OPCIÓN: \n1. CATALOGO\n2. CONSULTOR';

              const opcionesMenu = menuInicio.split('\n');
             for (let opcion of opcionesMenu) {
               displayChatbotMessage(opcion);
             }
             chatbotState = 'menuInicio';
        }
}


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



//                                                  █▀█ █▀▀
//                                                  █▀▀ █▄▄
//                                                  ░░░ ░░░



 else if (chatbotState === 'menuPC') {
  if (lowercaseMessage.includes( '1')) {
    cambiarImagen('img/SALUDO/MENUS/PC/RAM/RAM.jpg');
    const menuRAM = 'ELIGE UNA OPCIÓN PARA RAM:\n1. CRUCIAL\n2. TRIDENT Z\n3. CORSAIR\n4. KINGSTON\n5. VOLVER AL MENU PC';
    
    const opcionesMenu = menuRAM.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuRAM';
  } 
  
  
  else if (lowercaseMessage.includes( '2')) {
    cambiarImagen('img/SALUDO/MENUS/PC/PROCESADOR/PROCESADOR.jpg');
    const menuPROCESADOR = 'ELIGE UNA OPCIÓN PARA PROCESADOR:\n1. AMD\n2. INTEL\n3. VOLVER AL MENU PC';
    
    const opcionesMenu = menuPROCESADOR.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
    
    chatbotState = 'menuPROCESADOR';
  } 
  
  
  else if (lowercaseMessage.includes( '3')) {
    cambiarImagen('img/SALUDO/MENUS/PC/MOTHERBOARD/MOTHERBOARD.jpg');
    const menuMOTHERBOARD = 'ELIGE UNA OPCIÓN PARA MOTHERBOARD:\n1. ASUS\n2. AORUS\n3. VOLVER AL MENU PC';

    const opcionesMenu = menuMOTHERBOARD.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  
    chatbotState = 'menuMOTHERBOARD';
  } 
  else if (lowercaseMessage.includes( '4')) {
    cambiarImagen('img/SALUDO/MENUS/CATALOGO.jpg');
           const menuCATALOGO = 'ELIGE UNA OPCIÓN:\n1. PC\n2. CELULARES\n3. VOLVER AL MENU inicio';

           const opcionesMenu = menuCATALOGO.split('\n');
          for (let opcion of opcionesMenu) {
            displayChatbotMessage(opcion);
          }
          chatbotState = 'menuCATALOGO';

      }
        
}

//----------------------------------------------------------
//------------------------------------------------------------








//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                    █▀█ ▄▀█ █▀▄▀█
//                                                    █▀▄ █▀█ █░▀░█
//                                                    ░░░ ░░░ ░░░░░






else if (chatbotState === 'menuRAM') {
  if (lowercaseMessage.includes( '1') ){
    cambiarImagen('img/SALUDO/MENUS/PC/RAM/CRUCIAL/CRUCIAL.jpg');
    const menuCRUCIAL = 'ELIGE UNA OPCIÓN PARA CRUCIAL:\n1. 16 GB\n2. 32 GB\n3. VOLVER AL MENU RAM';
    
    const opcionesMenu = menuCRUCIAL.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuCRUCIAL';
  } 
  
  
  else if (lowercaseMessage.includes( '2') ){
    cambiarImagen('img/SALUDO/MENUS/PC/RAM/TRIDENT Z/TRIDENTZ.jpg');
    const menuTRIDENTZ = 'ELIGE UNA OPCIÓN PARA TRIDENT Z:\n1. 16 GB\n2. 32 GB\n3. VOLVER AL MENU RAM';
    
    const opcionesMenu = menuTRIDENTZ.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
    
    chatbotState = 'menuTRIDENTZ';
  } 
  
  
  else if (lowercaseMessage.includes( '3')) {
    cambiarImagen('img/SALUDO/MENUS/PC/RAM/CORSAIR/CORSAIR.jpg');
    const menuCORSAIR = 'ELIGE UNA OPCIÓN PARA CORSAIR:\n1. 16 GB\n2. 32 GB\n3. VOLVER AL MENU RAM';
    
    const opcionesMenu = menuCORSAIR.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  
    chatbotState = 'menuCORSAIR';
  } 
  
  
  else if (lowercaseMessage.includes( '4') ){
    cambiarImagen('img/SALUDO/MENUS/PC/RAM/KINGSTON/KINGSTON.jpg');
    const menuKINGSTON = 'ELIGE UNA OPCIÓN PARA KINGSTON:\n1. 16 GB\n2. 32 GB\n3. VOLVER AL MENU RAM';
    
    const opcionesMenu = menuKINGSTON.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuKINGSTON';
  } 
  
  
  else if (lowercaseMessage.includes( '5') ){
    cambiarImagen('img/SALUDO/MENUS/PC/PC.jpg');
    const menuPC = 'ELIGE UNA OPCIÓN PARA PC:\n1. RAM\n2.PROCESADOR\n3. MOTHERBOARD\n4 VOLVER AL MENU CATALOGO';
    
    const opcionesMenu = menuPC.split('\n');
    for (let opcion of opcionesMenu) {
    displayChatbotMessage(opcion);
    }
    chatbotState = 'menuPC';
  }
}

//-----------------------------------------------------------------------------------------------------------------


else if (chatbotState === 'menuCRUCIAL') {
  if (lowercaseMessage.includes( '1')) {
    cambiarImagen('img/SALUDO/MENUS/PC/RAM/CRUCIAL/16GB/DETALLE.jpg');
    const menuCRU16GB = ' CRUCIAL 16 GB: PUEDES VUSIALIZAR EN LA IMAGEN LOS DETALLES DEL PRODUCTO\n1.VOLVER AL MENU CRUCIAL';
    
    const opcionesMenu = menuCRU16GB.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  chatbotState = 'menuCRU16GB';
}
    

  else if (lowercaseMessage.includes( '2') ){
    cambiarImagen('img/SALUDO/MENUS/PC/RAM/CRUCIAL/32GB/DETALLE.jpg');
    const menuCRU32GB = ' CRUCIAL 32 GB: PUEDES VUSIALIZAR EN LA IMAGEN LOS DETALLES DEL PRODUCTO\n1.VOLVER AL MENU CRUCIAL';
    
    const opcionesMenu = menuCRU32GB.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  chatbotState = 'menuCRU32GB';
}
  
  

  
  else if (lowercaseMessage.includes( '3') ){
    cambiarImagen('img/SALUDO/MENUS/PC/RAM/RAM.jpg');
    const menuRAM = 'ELIGE UNA OPCIÓN PARA RAM:\n1. CRUCIAL\n2. TRIDENT Z\n3. CORSAIR\n4. KINGSTON\n5. VOLVER AL MENU PC';
    
    const opcionesMenu = menuRAM.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuRAM';
  } 
}



else if (chatbotState === 'menuCRU16GB') {
  if (lowercaseMessage.includes( 'volver') ){
    cambiarImagen('img/SALUDO/MENUS/PC/RAM/CRUCIAL/CRUCIAL.jpg');
    const menuCRUCIAL = 'ELIGE UNA OPCIÓN PARA CRUCIAL:\n1. 16 GB\n2. 32 GB\n3. VOLVER AL MENU RAM';
    
    const opcionesMenu = menuCRUCIAL.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuCRUCIAL';
  } 

}

else if (chatbotState === 'menuCRU32GB') {
  if (lowercaseMessage.includes( 'volver') ){
    cambiarImagen('img/SALUDO/MENUS/PC/RAM/CRUCIAL/CRUCIAL.jpg');
    const menuCRUCIAL = 'ELIGE UNA OPCIÓN PARA CRUCIAL:\n1. 16 GB\n2. 32 GB\n3. VOLVER AL MENU RAM';
    
    const opcionesMenu = menuCRUCIAL.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuCRUCIAL';
  } 

}


//-----------------------------------------------------------------------------------------------------------------



else if (chatbotState === 'menuTRIDENTZ') {
  if (lowercaseMessage.includes( '1')) {
    cambiarImagen('img/SALUDO/MENUS/PC/RAM/TRIDENT Z/16GB/DETALLE.jpg');
    const menuTRID16GB = 'TRIDENT Z 16 GB: PUEDES VUSIALIZAR EN LA IMAGEN LOS DETALLES DEL PRODUCTO\n1.VOLVER AL MENU TRIDENT Z';
    
    const opcionesMenu = menuTRID16GB.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

  chatbotState = 'menuTRID16GB';

}
    

  else if (lowercaseMessage.includes( '2')) {
    cambiarImagen('img/SALUDO/MENUS/PC/RAM/TRIDENT Z/32GB/DETALLE.jpg');
    const menuTRID32GB = 'TRIDENT Z 32 GB: PUEDES VUSIALIZAR EN LA IMAGEN LOS DETALLES DEL PRODUCTO\n1.VOLVER AL MENU TRIDENT Z';
    
    const opcionesMenu = menuTRID32GB.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  chatbotState = 'menuTRID32GB';
}
  
  
 

  
  
  else if (lowercaseMessage.includes( '3')) {
    cambiarImagen('img/SALUDO/MENUS/PC/RAM/RAM.jpg');
    const menuRAM = 'ELIGE UNA OPCIÓN PARA RAM:\n1. CRUCIAL\n2. TRIDENT Z\n3. CORSAIR\n4. KINGSTON\n5. VOLVER AL MENU PC';
    
    const opcionesMenu = menuRAM.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuRAM';
  } 
}




else if (chatbotState === 'menuTRID16GB') {
  if (lowercaseMessage.includes( 'volver') ){
    cambiarImagen('img/SALUDO/MENUS/PC/RAM/TRIDENT Z/TRIDENTZ.jpg');
    const menuTRIDENTZ = 'ELIGE UNA OPCIÓN PARA TRIDENT Z:\n1. 16 GB\n2. 32 GB\n3. VOLVER AL MENU RAM';
    
    const opcionesMenu = menuTRIDENTZ.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
    
    chatbotState = 'menuTRIDENTZ';
  } 

}

else if (chatbotState === 'menuTRID32GB') {
  if (lowercaseMessage.includes( 'volver') ){
    cambiarImagen('img/SALUDO/MENUS/PC/RAM/TRIDENT Z/TRIDENTZ.jpg');
    const menuTRIDENTZ = 'ELIGE UNA OPCIÓN PARA TRIDENT Z:\n1. 16 GB\n2. 32 GB\n3. VOLVER AL MENU RAM';
    
    const opcionesMenu = menuTRIDENTZ.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
    
    chatbotState = 'menuTRIDENTZ';
  } 

}



//-----------------------------------------------------------------------------------------------------------------




else if (chatbotState === 'menuCORSAIR') {
  if (lowercaseMessage.includes( '1')) {
    cambiarImagen('img/SALUDO/MENUS/PC/RAM/CORSAIR/16GB/DETALLE.jpg');
    const menuCOR16GB = 'CORSAIR 16 GB: PUEDES VUSIALIZAR EN LA IMAGEN LOS DETALLES DEL PRODUCTO\n1.VOLVER AL MENU CORSAIR';
    
    const opcionesMenu = menuCOR16GB.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  chatbotState = 'menuCOR16GB';
}
    

  else if (lowercaseMessage.includes( '2')) {
    cambiarImagen('img/SALUDO/MENUS/PC/RAM/CORSAIR/32GB/DETALLE.jpg');
    const menuCOR32GB = 'CORSAIR 32 GB: PUEDES VUSIALIZAR EN LA IMAGEN LOS DETALLES DEL PRODUCTO\n1.VOLVER AL MENU CORSAIR';
    
    const opcionesMenu = menuCOR32GB.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  chatbotState = 'menuCOR32GB';
}
  
  
 

  
  
  else if (lowercaseMessage.includes( '3') ){
    
    cambiarImagen('img/SALUDO/MENUS/PC/RAM/RAM.jpg');
    const menuRAM = 'ELIGE UNA OPCIÓN PARA RAM:\n1. CRUCIAL\n2. TRIDENT Z\n3. CORSAIR\n4. KINGSTON\n5. VOLVER AL MENU PC';
    
    const opcionesMenu = menuRAM.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuRAM';
  } 
}

else if (chatbotState === 'menuCOR16GB') {
  if (lowercaseMessage.includes( 'volver') ){
    cambiarImagen('img/SALUDO/MENUS/PC/RAM/CORSAIR/CORSAIR.jpg');
    const menuCORSAIR = 'ELIGE UNA OPCIÓN PARA CORSAIR:\n1. 16 GB\n2. 32 GB\n3. VOLVER AL MENU RAM';
    
    const opcionesMenu = menuCORSAIR.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  
    chatbotState = 'menuCORSAIR';
  } 
}

else if (chatbotState === 'menuCOR32GB') {
  if (lowercaseMessage.includes( 'volver') ){
    cambiarImagen('img/SALUDO/MENUS/PC/RAM/CORSAIR/CORSAIR.jpg');
    const menuCORSAIR = 'ELIGE UNA OPCIÓN PARA CORSAIR:\n1. 16 GB\n2. 32 GB\n3. VOLVER AL MENU RAM';
    
    const opcionesMenu = menuCORSAIR.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  
    chatbotState = 'menuCORSAIR';
  } 

}





//-----------------------------------------------------------------------------------------------------------------



else if (chatbotState === 'menuKINGSTON') {
  if (lowercaseMessage.includes( '1') ){
    cambiarImagen('img/SALUDO/MENUS/PC/RAM/KINGSTON/16GB/DETALLE.jpg');
    const menuHX16GB = 'KINGSTON 16 GB: PUEDES VUSIALIZAR EN LA IMAGEN LOS DETALLES DEL PRODUCTO\n1.VOLVER AL MENU HYPERX';
    
    const opcionesMenu = menuHX16GB.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  chatbotState = 'menuHX16GB';
}
    

  else if (lowercaseMessage.includes( '2') ){
    cambiarImagen('img/SALUDO/MENUS/PC/RAM/KINGSTON/32GB/DETALLE.jpg');
    const menuHX32GB = 'KINGSTON 32 GB: PUEDES VUSIALIZAR EN LA IMAGEN LOS DETALLES DEL PRODUCTO\n1.VOLVER AL MENU HYPERX';
    
    const opcionesMenu = menuHX32GB.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  chatbotState = 'menuHX32GB';
}
  
  
 

  
  
  else if (lowercaseMessage.includes( '3') ){
    cambiarImagen('img/SALUDO/MENUS/PC/RAM/RAM.jpg');
    const menuRAM = 'ELIGE UNA OPCIÓN PARA RAM:\n1. CRUCIAL\n2. TRIDENT Z\n3. CORSAIR\n4. KINGSTON\n5. VOLVER AL MENU PC';
    
    const opcionesMenu = menuRAM.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuRAM';
  } 
}


else if (chatbotState === 'menuHX16GB') {
  if (lowercaseMessage.includes( 'volver') ){
  cambiarImagen('img/CELULARES.jpg');
    const menuKINGSTON = 'ELIGE UNA OPCIÓN PARA KINGSTON:\n1. 16 GB\n2. 32 GB\n3. VOLVER AL MENU RAM';
    
    const opcionesMenu = menuKINGSTON.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuKINGSTON';
  } }

else if (chatbotState === 'menuHX32GB') {
  if (lowercaseMessage.includes( 'volver') ){
  cambiarImagen('img/SALUDO/MENUS/PC/RAM/KINGSTON/KINGSTON.jpg');
    const menuKINGSTON = 'ELIGE UNA OPCIÓN PARA KINGSTON:\n1. 16 GB\n2. 32 GB\n3. VOLVER AL MENU RAM';
    
    const opcionesMenu = menuKINGSTON.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuKINGSTON';
  } }








//----------------------------------------------------------







//------------------------------------------------------------
//                          ███ ███ ███ ██ ██ ██ ███ ██▄ ███ ███
//                          █▄█ █▄╬ █╬█ █╬ █▄ █▄ █▄█ █╬█ █╬█ █▄╬
//                          █╬╬ █╬█ █▄█ ██ █▄ ▄█ █╬█ ███ █▄█ █╬█
//                          

else if (chatbotState === 'menuPROCESADOR') {
  if (lowercaseMessage.includes( '1')) {
    cambiarImagen('img/SALUDO/MENUS/PC/PROCESADOR/AMD/AMD.jpg');
    const menuAMD = 'ELIGE UNA OPCIÓN PARA AMD:\n1. RYZEN 6 5600G\n2. RYZEN 7 5700G\n3. VOLVER AL MENU PROCESADOR';
    
    const opcionesMenu = menuAMD.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuAMD';
  } 
  
  
  else if (lowercaseMessage.includes( '2')) {
    cambiarImagen('img/SALUDO/MENUS/PC/PROCESADOR/AMD/INTEL/INTEL.jpg');
    const menuINTEL = 'ELIGE UNA OPCIÓN PARA INTEL:\n1. CORE I7 12700K\n2. CORE I9 12900K\n3. VOLVER AL MENU PROCESADOR';
    
    const opcionesMenu = menuINTEL.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
    
    chatbotState = 'menuINTEL';
  } 
  
  
  else if (lowercaseMessage.includes( '3')) {
    cambiarImagen('img/SALUDO/MENUS/PC/PC.jpg');
    const menuPC = 'ELIGE UNA OPCIÓN PARA PC:\n1. RAM\n2.PROCESADOR\n3. MOTHERBOARD\n4 VOLVER AL MENU CATALOGO';
    
    const opcionesMenu = menuPC.split('\n');
    for (let opcion of opcionesMenu) {
    displayChatbotMessage(opcion);
    }
    chatbotState = 'menuPC';
}
}


//-----------------------------------------------------------------------------------------------------------------

else if (chatbotState === 'menuAMD') {
  if (lowercaseMessage.includes( '1') ){
    cambiarImagen('img/SALUDO/MENUS/PC/PROCESADOR/AMD/RYZEN6/DETALLE.jpg');
    const menuRYZEN65600G = 'RYZEN 6 5600G: PUEDES VUSIALIZAR EN LA IMAGEN LOS DETALLES DEL PRODUCTO\n1.VOLVER AL MENU AMD';
    
    const opcionesMenu = menuRYZEN65600G.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  chatbotState = 'menuRYZEN65600G';
}
    

  else if (lowercaseMessage.includes( '2') ){
    cambiarImagen('img/SALUDO/MENUS/PC/PROCESADOR/AMD/RYZEN7/DETALLE.jpg');
    const menuRYZEN75700G = 'RYZEN 7 5700G: PUEDES VUSIALIZAR EN LA IMAGEN LOS DETALLES DEL PRODUCTO\n1.VOLVER AL MENU AMD';
    
    const opcionesMenu = menuRYZEN75700G.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  chatbotState = 'menuRYZEN75700G';
}
  

  
  
  else if (lowercaseMessage.includes( '3')) {
    
    cambiarImagen('img/SALUDO/MENUS/PC/PROCESADOR/PROCESADOR.jpg');
    const menuPROCESADOR = 'ELIGE UNA OPCIÓN PARA PROCESADOR:\n1. AMD\n2. INTEL\n3. VOLVER AL MENU PC';
    
    const opcionesMenu = menuPROCESADOR.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
    
    chatbotState = 'menuPROCESADOR';
  
}
}

else if (chatbotState === 'menuRYZEN65600G') {
  if (lowercaseMessage.includes( 'volver') ){
    cambiarImagen('img/SALUDO/MENUS/PC/PROCESADOR/AMD/AMD.jpg');
    const menuAMD = 'ELIGE UNA OPCIÓN PARA AMD:\n1. RYZEN 6 5600G\n2. RYZEN 7 5700G\n3. VOLVER AL MENU PROCESADOR';
    
    const opcionesMenu = menuAMD.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuAMD';
  } 

}

else if (chatbotState === 'menuRYZEN75700G') {
  if (lowercaseMessage.includes( 'volver') ){
    cambiarImagen('img/SALUDO/MENUS/PC/PROCESADOR/AMD/AMD.jpg');
    const menuAMD = 'ELIGE UNA OPCIÓN PARA AMD:\n1. RYZEN 6 5600G\n2. RYZEN 7 5700G\n3. VOLVER AL MENU PROCESADOR';
    
    const opcionesMenu = menuAMD.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuAMD';
  } 

}


//-----------------------------------------------------------------------------------------------------------------



else if (chatbotState === 'menuINTEL') {
  if (lowercaseMessage.includes( '1')) {
    cambiarImagen('img/SALUDO/MENUS/PC/PROCESADOR/INTEL/COREI7/DETALLE.jpg');
    const menuCOREI712700K = 'CORE I7 12700K: PUEDES VUSIALIZAR EN LA IMAGEN LOS DETALLES DEL PRODUCTO\n1.VOLVER AL MENU INTEL';
    
    const opcionesMenu = menuCOREI712700K.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  chatbotState = 'menuCOREI712700';
}
    

  else if (lowercaseMessage.includes( '2')) {
    cambiarImagen('img/SALUDO/MENUS/PC/PROCESADOR/INTEL/COREI9/DETALLE.jpg');
    const menuCOREI912900K = 'CORE I9 12900K: PUEDES VUSIALIZAR EN LA IMAGEN LOS DETALLES DEL PRODUCTO\n1.VOLVER AL MENU INTEL';
    
    const opcionesMenu = menuCOREI912900K.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  chatbotState = 'menuCOREI912900K';
}
  
  
 

  
  
  else if (lowercaseMessage.includes( '3') ){
    
      cambiarImagen('img/SALUDO/MENUS/PC/PROCESADOR/PROCESADOR.jpg');
      const menuPROCESADOR = 'ELIGE UNA OPCIÓN PARA PROCESADOR:\n1. AMD\n2. INTEL\n3. VOLVER AL MENU PC';
      
      const opcionesMenu = menuPROCESADOR.split('\n');
    for (let opcion of opcionesMenu) {
    displayChatbotMessage(opcion);
    }
      
      chatbotState = 'menuPROCESADOR';
    
  }
}


else if (chatbotState === 'menuCOREI71270') {
  if (lowercaseMessage.includes( 'volver') ){
    cambiarImagen('img/SALUDO/MENUS/PC/PROCESADOR/AMD/INTEL/INTEL.jpg');
    const menuINTEL = 'ELIGE UNA OPCIÓN PARA INTEL:\n1. CORE I7 12700K\n2. CORE I9 12900K\n3. VOLVER AL MENU PROCESADOR';
    
    const opcionesMenu = menuINTEL.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
    
    chatbotState = 'menuINTEL';
  } }

else if (chatbotState === 'menuCOREI912900K') {
  if (lowercaseMessage.includes( 'volver') ){
    cambiarImagen('img/SALUDO/MENUS/PC/PROCESADOR/AMD/INTEL/INTEL.jpg');
    const menuINTEL = 'ELIGE UNA OPCIÓN PARA INTEL:\n1. CORE I7 12700K\n2. CORE I9 12900K\n3. VOLVER AL MENU PROCESADOR';
    
    const opcionesMenu = menuINTEL.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
    
    chatbotState = 'menuINTEL';
  } }

//----------------------------------------------------------











//                    █▀▄▀█ █▀█ ▀█▀ █░█ █▀▀ █▀█ █▄▄ █▀█ ▄▀█ █▀█ █▀▄
//                    █░▀░█ █▄█ ░█░ █▀█ ██▄ █▀▄ █▄█ █▄█ █▀█ █▀▄ █▄▀
//                    ░░░░░ ░░░ ░░░ ░░░ ░░░ ░░░ ░░░ ░░░ ░░░ ░░░ ░░░

else if (chatbotState === 'menuMOTHERBOARD') {
  if (lowercaseMessage.includes( '1') ){
    cambiarImagen('img/SALUDO/MENUS/PC/MOTHERBOARD/ASUS/ASUS.jpg');
    const menuASUS = 'ELIGE UNA OPCIÓN PARA ASUS:\n1. B550 GB\n2. X570\n3. VOLVER AL MENU MOTHERBOARD';
    
    const opcionesMenu = menuASUS.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuASUS';
  } 
  
  
  else if (lowercaseMessage.includes( '2') ){
    cambiarImagen('img/SALUDO/MENUS/PC/MOTHERBOARD/AORUS/AORUS.jpg');
    const menuAORUS = 'ELIGE UNA OPCIÓN PARA AORUS:\n1. B550 GB\n2. X570\n3. VOLVER AL MENU MOTHERBOARD';
    
    const opcionesMenu = menuAORUS.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
    
    chatbotState = 'menuAORUS';
  } 
  
  
  

  
  
  else if (lowercaseMessage.includes( '3')) {
    cambiarImagen('img/SALUDO/MENUS/PC/PC.jpg');
    const menuPC = 'ELIGE UNA OPCIÓN PARA PC:\n1. RAM\n2.PROCESADOR\n3. MOTHERBOARD\n4 VOLVER AL MENU CATALOGO';
    
    const opcionesMenu = menuPC.split('\n');
    for (let opcion of opcionesMenu) {
    displayChatbotMessage(opcion);
    }
    chatbotState = 'menuPC';
}
}

//--------------------------------------------------------------------------------------------------

else if (chatbotState === 'menuASUS') {
  if (lowercaseMessage.includes( '1') ){
    cambiarImagen('img/SALUDO/MENUS/PC/MOTHERBOARD/ASUS/B550/DETALLE.jpg');
    const menuB550 = 'B550: PUEDES VUSIALIZAR EN LA IMAGEN LOS DETALLES DEL PRODUCTO\n1.VOLVER AL MENU ASUS';
    
    const opcionesMenu = menuB550.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  chatbotState = 'menuB550';
}
    

  else if (lowercaseMessage.includes( '2') ){
    cambiarImagen('img/SALUDO/MENUS/PC/MOTHERBOARD/ASUS/X570/DETALLE.jpg');
    const menuX570 = 'X570: PUEDES VUSIALIZAR EN LA IMAGEN LOS DETALLES DEL PRODUCTO\n1.VOLVER AL MENU ASUS';
    
    const opcionesMenu = menuX570.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  chatbotState = 'menuX570';
}
  
  
 

  
  
  else if (lowercaseMessage.includes( '3')) {
    cambiarImagen('img/SALUDO/MENUS/PC/MOTHERBOARD/MOTHERBOARD.jpg');
    const menuMOTHERBOARD = 'ELIGE UNA OPCIÓN PARA MOTHERBOARD:\n1. ASUS\n2. AORUS\n3. VOLVER AL MENU PC';

    const opcionesMenu = menuMOTHERBOARD.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  
    chatbotState = 'menuMOTHERBOARD';
  } 
}

else if (chatbotState === 'menuB550') {
  if (lowercaseMessage.includes( 'volver') ){
    cambiarImagen('img/SALUDO/MENUS/PC/MOTHERBOARD/ASUS/ASUS.jpg');
    const menuASUS = 'ELIGE UNA OPCIÓN PARA ASUS:\n1. B550 GB\n2. X570\n3. VOLVER AL MENU MOTHERBOARD';
    
    const opcionesMenu = menuASUS.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuASUS';
  } 

}

else if (chatbotState === 'menuX570') {
  if (lowercaseMessage.includes( 'volver') ){
    cambiarImagen('img/SALUDO/MENUS/PC/MOTHERBOARD/ASUS/ASUS.jpg');
    const menuASUS = 'ELIGE UNA OPCIÓN PARA ASUS:\n1. B550 GB\n2. X570\n3. VOLVER AL MENU MOTHERBOARD';
    
    const opcionesMenu = menuASUS.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }

    chatbotState = 'menuASUS';
  } 

}


//-----------------------------------------------------------------------------------------------------------------



else if (chatbotState === 'menuAORUS') {
  if (lowercaseMessage.includes( '1') ){
    cambiarImagen('img/SALUDO/MENUS/PC/MOTHERBOARD/AORUS/B550/DETALLE.jpg');
    const menuB550 = 'B550: PUEDES VUSIALIZAR EN LA IMAGEN LOS DETALLES DEL PRODUCTO\n1.VOLVER AL MENU AORUS';
    
    const opcionesMenu = menuB550.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  chatbotState = 'menuB550';
}
    

  else if (lowercaseMessage.includes( '2') ){
    cambiarImagen('img/SALUDO/MENUS/PC/MOTHERBOARD/AORUS/X570/DETALLE.jpg');
    const menuX570 = 'X570: PUEDES VUSIALIZAR EN LA IMAGEN LOS DETALLES DEL PRODUCTO\n1.VOLVER AL MENU AORUS';
    
    const opcionesMenu = menuX570.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  chatbotState = 'menuX570';
}
  
  
 

  
  
  else if (lowercaseMessage.includes( '3')) {
    cambiarImagen('img/SALUDO/MENUS/PC/MOTHERBOARD/MOTHERBOARD.jpg');
    const menuMOTHERBOARD = 'ELIGE UNA OPCIÓN PARA MOTHERBOARD:\n1. ASUS\n2. AORUS\n3. VOLVER AL MENU PC';

    const opcionesMenu = menuMOTHERBOARD.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
  
    chatbotState = 'menuMOTHERBOARD';
  } 
}

else if (chatbotState === 'menuB550') {
  if (lowercaseMessage.includes( 'volver') ){
    cambiarImagen('img/SALUDO/MENUS/PC/MOTHERBOARD/AORUS/AORUS.jpg');
    const menuAORUS = 'ELIGE UNA OPCIÓN PARA AORUS:\n1. B550 GB\n2. X570\n3. VOLVER AL MENU MOTHERBOARD';
    
    const opcionesMenu = menuAORUS.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
    
    chatbotState = 'menuAORUS';
  } 

}

else if (chatbotState === 'menuX570') {
  if (lowercaseMessage.includes( 'volver') ){
    cambiarImagen('img/SALUDO/MENUS/PC/MOTHERBOARD/AORUS/AORUS.jpg');
    const menuAORUS = 'ELIGE UNA OPCIÓN PARA AORUS:\n1. B550 GB\n2. X570\n3. VOLVER AL MENU MOTHERBOARD';
    
    const opcionesMenu = menuAORUS.split('\n');
  for (let opcion of opcionesMenu) {
  displayChatbotMessage(opcion);
  }
    
    chatbotState = 'menuAORUS';
  } 

}












//----------------------------------------------------------



































//                                        
//                                        ░█████╗░░█████╗░███╗░░██╗░██████╗██╗░░░██╗██╗░░░░░████████╗░█████╗░██████╗░
//                                        ██╔══██╗██╔══██╗████╗░██║██╔════╝██║░░░██║██║░░░░░╚══██╔══╝██╔══██╗██╔══██╗
//                                        ██║░░╚═╝██║░░██║██╔██╗██║╚█████╗░██║░░░██║██║░░░░░░░░██║░░░██║░░██║██████╔╝
//                                        ██║░░██╗██║░░██║██║╚████║░╚═══██╗██║░░░██║██║░░░░░░░░██║░░░██║░░██║██╔══██╗
//                                        ╚█████╔╝╚█████╔╝██║░╚███║██████╔╝╚██████╔╝███████╗░░░██║░░░╚█████╔╝██║░░██║
//                                        ░╚════╝░░╚════╝░╚═╝░░╚══╝╚═════╝░░╚═════╝░╚══════╝░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
else if (chatbotState === 'menuConsultor') {
  if (lowercaseMessage.includes('no ')&&lowercaseMessage.includes('ingresar')&&lowercaseMessage.includes('cuenta')) {
    
    const menuPC = 'no hay sistema';
    
    const opcionesMenu = menuPC.split('\n');
    for (let opcion of opcionesMenu) {
    displayChatbotMessage(opcion);
    }
   
  }














  else if (lowercaseMessage.includes( 'volver')) {
          
          
    const menuInicio = 'ELIGE UNA OPCIÓN:\n1. catalogo\n2. consultor';
  
    const opcionesMenu = menuInicio.split('\n');
   for (let opcion of opcionesMenu) {
     displayChatbotMessage(opcion);
   }
   chatbotState = 'menuInicio';
  }



} 

else displayChatbotMessage('¡HOLA! ¿EN QUÉ PUEDO AYUDARTE?');




//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 








        



        
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