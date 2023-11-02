import { Modal, Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
import { getDogPictures } from "../service/dataService";

export const DetailsModal = (props) => {
  const [pictureUrls, setPictureUrls] = useState([]);
  useEffect(() => {
    console.log("DetailsModal", props.dogCardData);
    if (props.dogCardData) {
      const getDogPictureUrls = async () => {
        let pictures = await getDogPictures(props.dogCardData.id);
        if (pictures.length > 0) {
          setPictureUrls(pictures);
        }
      };
      getDogPictureUrls().catch(console.error);
    }
  }, [props]);

  const onModalCloseHandler = () => {
    props.onModalClose();
    setPictureUrls([]);
  };
  return (
    <Modal show={props.showModal} onClose={onModalCloseHandler}>
      <Modal.Header>{props.dogCardData && props.dogCardData.name}</Modal.Header>
      <Modal.Body>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            {pictureUrls &&
              pictureUrls.map((url, idx) => (
                <img key={idx} src={url} alt="..." />
              ))}
          </Carousel>
        </div>
        <div>kjabdjhbsjhfb</div>
      </Modal.Body>
    </Modal>
  );
};
