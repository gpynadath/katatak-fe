import { Image } from "react-native";
//import tick from "../../assets/tick-icon.png"
//import cross from "../../assets/cross-icon.png"

type result = {
  pass: boolean;
  description: string;
  logs: string[];
};

export default function TestResult({ pass, description, logs }: result) {
  console.log(pass, "<---pass");
  return (
    <>
      {pass ? (
        <Image source={require("../../assets/tick-icon.png")} alt="tick icon" />
      ) : (
        <Image
          source={require("../../assets/cross-icon.png")}
          alt="cross icon"
        />
      )}
    </>
  );
}
