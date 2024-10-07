
document.getElementById('enviar-email').onclick = function() {

    const name = document.getElementById('Nome').value;
    const email = document.getElementById('Email').value;
    const message = document.getElementById('Mensagem').value;

    const subject = `Mensagem de ${name}`;
    const body = `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`;

    window.location.href = `mailto:domenico.palumbo@yahoo.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    document.getElementById('contato-formulario').reset();
}
