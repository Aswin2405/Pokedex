import React from "react";
import Layout from "../../components/Layout";

interface Props{
  pokeman:any;
  styles:any;
}

const Details = ({ pokeman, styles }:Props) => {
  console.log(pokeman);
  return (
    // <div>
<Layout title={pokeman.name.english}>
  <div>
<main className="min-h-screen container mx-auto">
<div className="flex flex-wrap mt-6">
      <div className="flex flex-wrap p-8 justify-center md:flex-nowrap">
          <img className="sm:mr-20 my-auto" width="400" height="400" src={pokeman.image.hires} alt="" />
        <div className="flex flex-col">
            <h1 className="font-semibold text-4xl w-full">
              <span className="font-semibold text-4xl mr-4">#{pokeman.id}</span>
              {pokeman.name.english}
              </h1>
          <p className="mb-6">
          <span className="mr-2 text-sm"><b>Japanese:</b> {pokeman.name.japanese}</span>
          <br />
            <span className="mr-2 text-sm"><b>Chinese:</b> {pokeman.name.chinese}</span>
            <br />
            <span className="mr-2 text-sm"><b>French:</b> {pokeman.name.french}</span>
          </p>
          <p>
            <span className="font-semibold text-lg mr-2">Species:&nbsp;</span>
            <span className="text-lg">{pokeman.species}</span>
          </p>
          <p>{pokeman.description}</p>
          <p>
            <span className="font-semibold mr-2">Height:&nbsp;</span>
            <span>{pokeman.profile.height}</span>
          </p>
          <p>
            <span className="font-semibold mr-2">Weight:&nbsp;</span>
            <span>{pokeman.profile.weight}</span>
          </p>
          <div className="mt-4 mb-4">
            {pokeman.type.map((type:any, j:any) => {
              return (
                <span
                  key={type}
                  className="font-semibold tracking-wide mr-2 px-5 py-2 rounded text-lg sm:text-xl text-white"
                  style={{ backgroundColor: styles[type.toLowerCase()] }}
                >
                  {type}
                </span>
              );
            })}
          </div>
          <div>
            {Object.keys(pokeman.base).map((stat, i) => {
              let statPercentFactor = 0
              let statColor
              switch (stat) {
                case "HP":
                  statPercentFactor = 2.55;
                  statColor = "#da4343";
                  break;
                case "Attack":
                  statPercentFactor = 1.81;
                  statColor = "#f38d45";
                  break;
                case "Defense":
                  statPercentFactor = 2.3;
                  statColor = "#f3d14a";
                  break;
                case "Sp. Attack":
                  statPercentFactor = 1.73;
                  statColor = "#547fe4";
                  break;
                case "Sp. Defense":
                  statPercentFactor = 2.3;
                  statColor = "#84df57";
                  break;
                case "Speed":
                  statPercentFactor = 2.0;
                  statColor = "#f75887";
                  break;
              }
              return <div className="m-1" key={stat}>
                <div className="flex justify-between">
                  <p className="font-semibold text-lg">{stat.toUpperCase()}</p>
                  <p>{pokeman.base[stat]}</p>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2.5">
                  <div className="h-2.5 rounded-full" style={{backgroundColor:statColor, width:parseInt(pokeman.base[stat])*statPercentFactor}}></div>
                </div>
              </div>;
            })}
          </div>
        </div>
      </div>
      </div>
      </main>
      </div>
    </Layout>
    // </div>
    
  );
};

export async function getServerSideProps({ query }:any) {
  try {
    const res = await fetch(`https://api.pikaserve.xyz/pokemon/${query.id}`);
    const data = await res.json();
    return {
      props: {
        pokeman: data,
        styles: {
          normal: "#A8A77A",
          fire: "#EE8130",
          water: "#6390F0",
          electric: "#F7D02C",
          grass: "#7AC74C",
          ice: "#96D9D6",
          fighting: "#C22E28",
          poison: "#A33EA1",
          ground: "#E2BF65",
          flying: "#A98FF3",
          psychic: "#F95587",
          bug: "#A6B91A",
          rock: "#B6A136",
          ghost: "#735797",
          dragon: "#6F35FC",
          dark: "#705746",
          steel: "#B7B7CE",
          fairy: "#D685AD",
        },
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default Details;
