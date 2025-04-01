import React from "react";
import H1 from "./ace_of_hearts.svg";
import H2 from "./2_of_hearts.svg";
import H3 from "./3_of_hearts.svg";
import H4 from "./4_of_hearts.svg";
import H5 from "./5_of_hearts.svg";
import H6 from "./6_of_hearts.svg";
import H7 from "./7_of_hearts.svg";
import H8 from "./8_of_hearts.svg";
import H9 from "./9_of_hearts.svg";
import H10 from "./10_of_hearts.svg";
import H11 from "./jack_of_hearts.svg";
import H12 from "./queen_of_hearts.svg";
import H13 from "./king_of_hearts.svg";

import D1 from "./ace_of_diamonds.svg";
import D2 from "./2_of_diamonds.svg";
import D3 from "./3_of_diamonds.svg";
import D4 from "./4_of_diamonds.svg";
import D5 from "./5_of_diamonds.svg";
import D6 from "./6_of_diamonds.svg";
import D7 from "./7_of_diamonds.svg";
import D8 from "./8_of_diamonds.svg";
import D9 from "./9_of_diamonds.svg";
import D10 from "./10_of_diamonds.svg";
import D11 from "./jack_of_diamonds.svg";
import D12 from "./queen_of_diamonds.svg";
import D13 from "./king_of_diamonds.svg";

import C1 from "./ace_of_clubs.svg";
import C2 from "./2_of_clubs.svg";
import C3 from "./3_of_clubs.svg";
import C4 from "./4_of_clubs.svg";
import C5 from "./5_of_clubs.svg";
import C6 from "./6_of_clubs.svg";
import C7 from "./7_of_clubs.svg";
import C8 from "./8_of_clubs.svg";
import C9 from "./9_of_clubs.svg";
import C10 from "./10_of_clubs.svg";
import C11 from "./jack_of_clubs.svg";
import C12 from "./queen_of_clubs.svg";
import C13 from "./king_of_clubs.svg";

import S1 from "./ace_of_spades.svg";
import S2 from "./2_of_spades.svg";
import S3 from "./3_of_spades.svg";
import S4 from "./4_of_spades.svg";
import S5 from "./5_of_spades.svg";
import S6 from "./6_of_spades.svg";
import S7 from "./7_of_spades.svg";
import S8 from "./8_of_spades.svg";
import S9 from "./9_of_spades.svg";
import S10 from "./10_of_spades.svg";
import S11 from "./jack_of_spades.svg";
import S12 from "./queen_of_spades.svg";
import S13 from "./king_of_spades.svg";

import back from "./back.svg";
const cardDeck = {
  "2H": H2,
  "3H": H3,
  "4H": H4,
  "5H": H5,
  "6H": H6,
  "7H": H7,
  "8H": H8,
  "9H": H9,
  "10H": H10,
  JH: H11,
  QH: H12,
  KH: H13,
  AH: H1,

  "2D": D2,
  "3D": D3,
  "4D": D4,
  "5D": D5,
  "6D": D6,
  "7D": D7,
  "8D": D8,
  "9D": D9,
  "10D": D10,
  JD: D11,
  QD: D12,
  KD: D13,
  AD: D1,

  "2C": C2,
  "3C": C3,
  "4C": C4,
  "5C": C5,
  "6C": C6,
  "7C": C7,
  "8C": C8,
  "9C": C9,
  "10C": C10,
  JC: C11,
  QC: C12,
  KC: C13,
  AC: C1,

  "2S": S2,
  "3S": S3,
  "4S": S4,
  "5S": S5,
  "6S": S6,
  "7S": S7,
  "8S": S8,
  "9S": S9,
  "10S": S10,
  JS: S11,
  QS: S12,
  KS: S13,
  AS: S1,
};
const PlayingCard = ({ code }) => {
  const cardSrc = cardDeck[code];

  if (!cardSrc) {
    return <img src={back} alt={"back"} className="w-full h-auto" />;
  }

  return <img src={cardSrc} alt={code} className="w-full h-auto" />;
};

export default PlayingCard;
