import BobaDex from "user/BobaDex";
import React from "react";
//import { linkTo } from "@storybook/addon-links";
import UserDetails from "user/UserDetails";
import goreBackground from "./images/gore.png";

export default {
  title: "Users Preview",
  component: UserDetails,
};

export const UserDetailsStory = () => (
  <div style={{ marginTop: "50px" }}>
    <UserDetails
      username={"Gore Lover 90"}
      imageUrl={goreBackground}
      editable
    />
  </div>
);

UserDetailsStory.story = {
  name: "details display",
};

export const UserDetailsEdit = () => {
  const [imgSrc, setImgSrc] = React.useState("");
  return (
    <div style={{ marginTop: "50px" }}>
      <UserDetails
        username={"Gore Lover 90"}
        imageUrl={goreBackground}
        editing
        onSubmit={(result) => {
          result.then((value) => {
            console.log(value.editedImg);
            setImgSrc(value.editedImg);
          });
        }}
      />
      <img src={imgSrc} />
    </div>
  );
};

UserDetailsEdit.story = {
  name: "details edit",
};

export const UserDetailsLoadingStory = () => (
  <div style={{ marginTop: "50px" }}>
    <UserDetails
      username={"Gore Lover 90"}
      imageUrl={goreBackground}
      editable
      loading
      editing
    />
  </div>
);

UserDetailsLoadingStory.story = {
  name: "details loading",
};

export const BobaDexStory = () => (
  <div>
    <BobaDex
      totalIdentities={25}
      revealedIdentities={[
        {
          id: "4nio9x8eg",
          index: 0,
          name: "Hot Bod Dad",
          avatar:
            "https://firebasestorage.googleapis.com/v0/b/bobaboard-fb.appspot.com/o/images%2Fbobaland%2Fc26e8ce9-a547-4ff4-9486-7a2faca4d873%2F3214aa86-3239-48ea-a5fc-94e802726885?alt=media&token=af438f30-9b13-4665-a5d0-83222848b362",
        },
        {
          id: "dnuosboev3",
          index: 5,
          name: "We Just Don't Know",
          avatar:
            "https://firebasestorage.googleapis.com/v0/b/bobaboard-fb.appspot.com/o/images%2Fbobaland%2Fc26e8ce9-a547-4ff4-9486-7a2faca4d873%2Fe0eebb0e-96bf-452f-b679-1cbd25d06231?alt=media&token=f356fd6b-587c-41a3-9061-7a8b0b36ae0e",
        },
        {
          id: "win09jxefqw",
          index: 23,
          name: "Elijah Wood",
          avatar:
            "https://firebasestorage.googleapis.com/v0/b/bobaboard-fb.appspot.com/o/images%2Fbobaland%2Fc26e8ce9-a547-4ff4-9486-7a2faca4d873%2Ff784c0fd-b0a3-47cd-b321-fe4003e6b642?alt=media&token=db6aeeb9-cec6-4cf2-b0a2-554e18c5d8d2",
        },
      ]}
    />
  </div>
);

BobaDexStory.story = {
  name: "bobadex",
};
