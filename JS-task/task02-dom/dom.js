function changeElements() {
  document.querySelectorAll('.example').forEach( e => {
    e.style.backgroundColor = 'red';
    e.style.fontStyle = 'italic';
  });
}


export { changeElements };