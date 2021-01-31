import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { Container } from './styles';
import { ToastMessage, useToast } from '../../../hooks/toast';

interface ToastProps {
  message: ToastMessage;
}

const icons = {
  info: <FiInfo size={34} />,
  error: <FiAlertCircle size={34} />,
  success: <FiCheckCircle size={34} />,
};

const Toast: React.FC<ToastProps> = ({ message }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 5000);

    // se eu retorno uma função, ela é executada automaticamente quando o compoentne deixa de existir.
    // Usado para controlar a função caso o toast ja tenha sido removido
    return () => {
      clearTimeout(time);
    };
  }, [message.id, removeToast]);

  return (
    <Container type={message.type} hasDescription={!!message.description}>
      {icons[message.type || 'info']}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>
      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;