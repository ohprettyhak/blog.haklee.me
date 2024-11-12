import { BUTTON_CLASS, CONTAINER_CLASS } from './constants.js';
import './toast.css';

const TOAST_CLASS = 'codeblock-copy-toast';
const TOAST_MESSAGE_CLASS = 'codeblock-copy-toast-message';
const TOAST_MESSAGE = 'copied!';
const TOAST_DURATION = 2000;

export const onClientEntry = () => {
  document.querySelector('body').addEventListener('click', async evt => {
    const targetElement = evt.target;
    if (targetElement.className !== BUTTON_CLASS) {
      return;
    }

    const code = targetElement.closest(`.${CONTAINER_CLASS}`).querySelector('pre').innerText;

    await navigator.clipboard.writeText(code);

    const toastElement = document.createElement('div');
    toastElement.className = TOAST_CLASS;
    toastElement.innerHTML = `
      <div class="${TOAST_MESSAGE_CLASS}">${TOAST_MESSAGE}</div>
    `.trim();

    document.body.appendChild(toastElement);

    setTimeout(() => {
      document.body.removeChild(toastElement);
    }, TOAST_DURATION);
  });
};
