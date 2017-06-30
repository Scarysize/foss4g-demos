export default function(colorMap) {
  const key = document.createElement('ul');

  for (const category in colorMap) {
    const keyItem = document.createElement('li');
    const colorIndicator = document.createElement('div');
    const label = document.createElement('span');

    label.textContent = category;
    colorIndicator.style.backgroundColor = colorMap[category];

    keyItem.appendChild(colorIndicator);
    keyItem.appendChild(label);
    key.appendChild(keyItem);
  }

  key.classList.add('color-key');
  document.body.appendChild(key);
}
