
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('circle-text');
  container.style.fontSize = '18px';
  container.style.position = 'absolute';
  container.style.borderRadius = '100%';
  container.style.fontFamily = '"Kharkiv Tone", sans-serif';



  const text = "Кокос Кориця Горіх Цукор Вафля Орео Нонпарель Печиво";
  const totalAngle = 180;
  // Вираховуємо радіус з огляду на розміри контейнера
  const radius = 226; // Половина від ширини або висоти, оскільки вони однакові

  const arcLength = Math.PI * radius; // Довжина напівкола
  const letters = text.split('');
  const letterSpacing = arcLength / letters.length;

  letters.forEach((letter, i) => {
    const span = document.createElement('span');
    span.style.position = 'absolute';
    span.innerText = letter;
    container.appendChild(span);

    let angle = ((letterSpacing * i) / arcLength) * totalAngle - (totalAngle / 2);
    // Корекція, щоб текст починався з середини лівої сторони кола
    angle += (-10 - totalAngle / 2);

    const x = radius * Math.cos(angle * Math.PI / 180);
    const y = radius * Math.sin(angle * Math.PI / 180);

    gsap.set(span, {
      x: container.offsetWidth / 2 + x - span.offsetWidth / 2,
      y: radius + y - span.offsetHeight / 2,
      rotation: angle + 90,
      transformOrigin: '50% 50%'
    });
  });
});

