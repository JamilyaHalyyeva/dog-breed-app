import { Card } from "flowbite-react";
export const InfoCard = (props) => {

  return (
    <Card onClick={()=>{
        props.onCardClick(props.dogCardData);
    }}
      className="max-w-sm"
      renderImage={() => {
        let imgUrl =`https://cdn2.thedogapi.com/images/${props.dogCardData.reference_image_id}.jpg`
        return <img className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          width={500}
          height={500}
          src={imgUrl}
        />
      }}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </Card>
  );
};
