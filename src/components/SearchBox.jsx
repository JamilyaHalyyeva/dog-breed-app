"use client";

import { TextInput, Dropdown } from "flowbite-react";
export const SearchBox = (params) => {
  console.log(params);

  const getListItems = () => {
    let generated = params.listItems.map((item, idx) => {
      return (
        <Dropdown.Item
          key={idx+1}
          onClick={() => params.onDogBreedChanged(item)}
        >
          {item}
        </Dropdown.Item>
      );
    });
    generated.unshift(
      <Dropdown.Item key={0} onClick={() => params.onDogBreedChanged("all")}>
        All
      </Dropdown.Item>
    );
    console.log(generated)
    return generated;
  };
  return (
    <div className="flex max-w-md flex-col gap-4 bg-slate-400 p-5 m-2">
      <div>
        <TextInput id="dog-name" type="text" placeholder="name" />
      </div>
      <div className=" w-full">
        <Dropdown label="Select Dog Breed" placement="bottom">
          {getListItems()}
        </Dropdown>
      </div>
    </div>
  );
};
