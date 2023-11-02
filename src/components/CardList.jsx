import { useState } from "react";
import { DetailsModal } from "./DetailsModal";
import { InfoCard } from "./InfoCard";

export const CardList = (params) => {
    const[showModal, setShowModal]=useState(false)
    const[shownDogData, setShownDogData]=useState(null)


  const handlerInfoCardClick = (dogInfo) => {
    console.log("cardlist>infocard", dogInfo);
    setShownDogData(dogInfo);

    setShowModal(true);
  };

  const handlerModalClose=()=>{
    setShowModal(false);
    setShownDogData(null);
  }
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {params.dogData.map((dog) => {
        return (
          <InfoCard
            onCardClick={handlerInfoCardClick}
            key={dog.id}
            dogCardData={dog}
          />
        );
      })}

      <DetailsModal showModal={showModal} onModalClose={handlerModalClose}  dogCardData={shownDogData}></DetailsModal>
    </div>  
  );
};
