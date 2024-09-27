import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { header } from 'express/lib/request';


//calendario render
let calendarE1 = document.getElementById(calendar);
let calendar = new Calendar(calendarE1, {
    Plugins:[dayGridPlugin, timeGridPlugin, listPlugin],
    initialView: ' daygridMonth',
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth, TimeGridWeek,ListWeek'
    }
});
calendar.render();

document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault(); 

  
   const usuario = document.getElementById('usuario').value.trim();
   const senha = document.getElementById('senha').value.trim();

   const mensagemErro = document.getElementById('mensagemErro');

   mensagemErro.style.display = 'none';

 
   if (!usuario) {
       mensagemErro.textContent = 'O campo "Usuário" é obrigatório.';
       mensagemErro.style.display = 'block';
       return;
   }

   if (!senha) {
       mensagemErro.textContent = 'O campo "Senha" é obrigatório.';
       mensagemErro.style.display = 'block';
       return;
   }

   if (senha.length < 6) {
       mensagemErro.textContent = 'A senha deve ter pelo menos 6 caracteres.';
       mensagemErro.style.display = 'block';
       return;
   }

   autenticarUsuario(usuario, senha);
});

function autenticarUsuario(usuario, senha) {
   // Aqui você implementaria a lógica para fazer uma requisição ao backend
   console.log('Autenticando usuário:', usuario);

   // Exemplo simples de simulação
   if (usuario === 'Santo Cristo' && senha === '123456') {
       alert('Login bem-sucedido!');
       // Redireciona ou faz outra ação
   } else {
       const mensagemErro = document.getElementById('mensagemErro');
       mensagemErro.textContent = 'Usuário ou senha inválidos.';
       mensagemErro.style.display = 'block';
   }
}



