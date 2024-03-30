import Modal from 'react-modal';

const ImageModal = ({ imageUrl, modalIsOpen, onRequestClose }) => {
  
Modal.setAppElement('#root');

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <img src={imageUrl} alt="Modal Image" />
    </Modal>
  );
};

export default ImageModal;
