import ReactModal from 'react-modal';
import { ModalImage } from './Modal.styled';

const styles = {
  overlay: {
    backgroundColor: '#212121',
  },
  content: {
    maxHeight: '90vh',
    top: '55%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 20,
  },
};

ReactModal.setAppElement('#root');

export const Modal = ({ isOpen, onClose, largeImageURL, alt }) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose} style={styles}>
      <ModalImage src={largeImageURL} alt={alt} />
    </ReactModal>
  );
};
