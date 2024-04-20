import Modal from '../Modal';
import Button from '../Button';
import { useState } from 'react';

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} success rounded outline>
        Open Modal
      </Button>
      {showModal && modal}

      <p className='mb-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptas,
        odio perferendis distinctio odit a tempora porro excepturi? A nemo
        itaque ad eos dolorem illum voluptas laudantium, quos totam nostrum.
      </p>
      <p className='mb-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptas,
        odio perferendis distinctio odit a tempora porro excepturi? A nemo
        itaque ad eos dolorem illum voluptas laudantium, quos totam nostrum.
      </p>
      <p className='mb-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptas,
        odio perferendis distinctio odit a tempora porro excepturi? A nemo
        itaque ad eos dolorem illum voluptas laudantium, quos totam nostrum.
      </p>
      <p className='mb-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptas,
        odio perferendis distinctio odit a tempora porro excepturi? A nemo
        itaque ad eos dolorem illum voluptas laudantium, quos totam nostrum.
      </p>
      <p className='mb-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptas,
        odio perferendis distinctio odit a tempora porro excepturi? A nemo
        itaque ad eos dolorem illum voluptas laudantium, quos totam nostrum.
      </p>
      <p className='mb-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptas,
        odio perferendis distinctio odit a tempora porro excepturi? A nemo
        itaque ad eos dolorem illum voluptas laudantium, quos totam nostrum.
      </p>
      <p className='mb-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptas,
        odio perferendis distinctio odit a tempora porro excepturi? A nemo
        itaque ad eos dolorem illum voluptas laudantium, quos totam nostrum.
      </p>
      <p className='mb-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptas,
        odio perferendis distinctio odit a tempora porro excepturi? A nemo
        itaque ad eos dolorem illum voluptas laudantium, quos totam nostrum.
      </p>
      <p className='mb-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptas,
        odio perferendis distinctio odit a tempora porro excepturi? A nemo
        itaque ad eos dolorem illum voluptas laudantium, quos totam nostrum.
      </p>
      <p className='mb-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptas,
        odio perferendis distinctio odit a tempora porro excepturi? A nemo
        itaque ad eos dolorem illum voluptas laudantium, quos totam nostrum.
      </p>
      <p className='mb-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptas,
        odio perferendis distinctio odit a tempora porro excepturi? A nemo
        itaque ad eos dolorem illum voluptas laudantium, quos totam nostrum.
      </p>
      <p className='mb-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptas,
        odio perferendis distinctio odit a tempora porro excepturi? A nemo
        itaque ad eos dolorem illum voluptas laudantium, quos totam nostrum.
      </p>
      <p className='mb-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptas,
        odio perferendis distinctio odit a tempora porro excepturi? A nemo
        itaque ad eos dolorem illum voluptas laudantium, quos totam nostrum.
      </p>
      <p className='mb-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptas,
        odio perferendis distinctio odit a tempora porro excepturi? A nemo
        itaque ad eos dolorem illum voluptas laudantium, quos totam nostrum.
      </p>
      <p className='mb-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptas,
        odio perferendis distinctio odit a tempora porro excepturi? A nemo
        itaque ad eos dolorem illum voluptas laudantium, quos totam nostrum.
      </p>
      <p className='mb-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptas,
        odio perferendis distinctio odit a tempora porro excepturi? A nemo
        itaque ad eos dolorem illum voluptas laudantium, quos totam nostrum.
      </p>
      <p className='mb-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptas,
        odio perferendis distinctio odit a tempora porro excepturi? A nemo
        itaque ad eos dolorem illum voluptas laudantium, quos totam nostrum.
      </p>
    </div>
  );
};
export default ModalPage;
