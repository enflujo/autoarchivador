import './scss/styles.scss';

const actualizar = document.getElementById('actualizar');
const resultado = document.getElementById('resultado');

actualizar.onclick = () => {
  fetch('http://localhost:3000/actualizar').then((res) => {
    res.json().then((datos) => {
      console.log(datos);
    });
  });
};
