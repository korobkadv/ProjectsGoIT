import { Component } from 'react';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const {
      image: { webformatURL, largeImageURL, tags },
    } = this.props;

    return (
      <GalleryItem>
        <GalleryItemImage
          src={webformatURL}
          alt={tags}
          onClick={this.openModal}
        />
        <Modal
          isOpen={isModalOpen}
          onClose={this.closeModal}
          largeImageURL={largeImageURL}
          alt={tags}
        />
      </GalleryItem>
    );
  }
}
