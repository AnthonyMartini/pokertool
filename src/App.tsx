import React, { useEffect, useState } from "react";
import PlayingCard from "./assets/PlayingCard.jsx";
import preflop from "./data/preflop.json";
import "./index.css"; // Ensure Tailwind CSS is imported here

const CardInput = ({
  title,
  code,
  onChange,
}: {
  title: string;
  code: string;
  onChange: (e: any) => void;
}) => {
  return (
    <div className="flex flex-col gap-2 items-center w-[200px] h-[325px] bg-slate-100 shadow-2xl rounded-lg p-4">
      <div className="flex items-center gap-2">
        <h2 className="font-bold text-slate-800">{title}:</h2>
        <input
          id={title}
          type="text"
          title="cardinput"
          value={code.toUpperCase()}
          onChange={onChange}
          className="border border-gray-700 rounded-lg p-2 w-[75px] "
        />
      </div>
      {/* SVG based on input1 */}
      <div className="shadow-lg h-[218.054px] w-[150px]">
        <PlayingCard code={code.toUpperCase()} />
      </div>
    </div>
  );
};
interface OddsType {
  SF: number;
  S: number;
  RF: number;
  F: number;
  K4: number;
  K3: number;
  FH: number;
  P2: number;
  P: number;
}

const App = () => {
  const [card1, setCard1] = useState("");
  const [card2, setCard2] = useState("");

  const [flop1, setFlop1] = useState("");
  const [flop2, setFlop2] = useState("");
  const [flop3, setFlop3] = useState("");
  const [turn, setTurn] = useState("");
  const [river, setRiver] = useState("");

  const [odds, setOdds] = useState<OddsType | null>(null);

  useEffect(() => {
    if (card1 !== "" && card2 !== "") {
      console.log("Both cards are set.");
      const r1 = card1.slice(0, -1); // Everything except the last character
      const s1 = card1.slice(-1);
      const r2 = card2.slice(0, -1); // Everything except the last character
      const s2 = card2.slice(-1);
      const hand = `${r1}${r2}${s1 === s2 ? "S" : "N"}`;
      if (hand in preflop) {
        setOdds(preflop[hand as keyof typeof preflop]);
      } else {
        console.error("Invalid hand:", hand);
      }
      console.log(odds);
    }
  }, [card1, card2, flop1, flop2, flop3, turn, river]);

  return (
    <div className="flex flex-col h-screen w-full">
      <div className="bg-gray-800 p-4 text-white">
        <h1 className="text-xl font-bold">My Card App</h1>
      </div>
      <div className="flex h-full">
        <div className="flex flex-col flex-1">
          <div className="flex-1 bg-white border p-4 ">
            <h2 className="text-xl font-semibold">Your Cards</h2>

            <div className="flex flex-col items-center p-4">
              <div className="flex flex-wrap gap-2">
                <CardInput
                  title="Card 1"
                  code={card1}
                  onChange={(e) => setCard1(e.target.value)}
                />
                <CardInput
                  title="Card 2"
                  code={card2}
                  onChange={(e) => setCard2(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex-1 bg-white border p-4 ">
            <h2 className="text-xl font-semibold">Board Cards</h2>
            <div className="flex flex-wrap gap-2">
              <CardInput
                title="Flop 1"
                code={flop1}
                onChange={(e) => setFlop1(e.target.value)}
              />
              <CardInput
                title="Flop 2"
                code={flop2}
                onChange={(e) => setFlop2(e.target.value)}
              />
              <CardInput
                title="Flop 3"
                code={flop3}
                onChange={(e) => setFlop3(e.target.value)}
              />
              <CardInput
                title="Turn"
                code={turn}
                onChange={(e) => setTurn(e.target.value)}
              />
              <CardInput
                title="River"
                code={river}
                onChange={(e) => setRiver(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="w-[300px] bg-red-200">
          {" "}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md max-w-sm">
            <h2 className="text-lg font-bold mb-2">Hand Odds</h2>
            <ul className="list-disc pl-4">
              <li>
                <strong>Straight Flush:</strong> {odds ? odds.SF : 0}%
              </li>
              <li>
                <strong>Straight:</strong> {odds ? odds.S : 0}%
              </li>
              <li>
                <strong>Royal Flush:</strong> {odds ? odds.RF : 0}%
              </li>
              <li>
                <strong>Flush:</strong> {odds ? odds.F : 0}%
              </li>
              <li>
                <strong>Four of a Kind:</strong> {odds ? odds.K4 : 0}%
              </li>
              <li>
                <strong>Three of a Kind:</strong> {odds ? odds.K3 : 0}%
              </li>
              <li>
                <strong>Full House:</strong> {odds ? odds.FH : 0}%
              </li>
              <li>
                <strong>Two Pair:</strong> {odds ? odds.P2 : 0}%
              </li>
              <li>
                <strong>One Pair:</strong> {odds ? odds.P : 0}%
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
