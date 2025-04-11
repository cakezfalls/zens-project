import "../App.css";
import { useState, useEffect } from "react";

function getRelativeExpiry(unix) {
  const expires = new Date(Number(unix) * 1000);
  const now = new Date();
  const diffMs = expires - now;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return "expired";
  if (diffDays < 30) return `${diffDays} days`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months`;
  return `${Math.floor(diffDays / 365)} years`;
}

export default function MyNames() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    const fetchNames = async () => {
      const query = `
      {
        domainRegistereds(first: 10, orderBy: blockTimestamp, orderDirection: desc) {
          id
          name
          expired
        }
      }
    `;

      const res = await fetch(
        "https://api.studio.thegraph.com/query/108919/zens-subgraph/version/latest",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query }),
        }
      );
      const json = await res.json();
      setNames(json.data.domainRegistereds);
    };
    fetchNames();
  }, []);

  return (
    <div className="flex flex-col items-center mt-[110px]">
      <h1>
        <span className="font-satoshi text-[44px] text-gradient">My Names</span>
      </h1>
      <div className="w-[534px] m-5 rounded-3xl bg-white">
        {names.map((domain, i) => (
          <div
            key={domain.id}
            className={`p-5 flex justify-between items-center ${
              i !== names.length - 1 ? "border-b border-[#7A839F]" : ""
            }`}
          >
            <div className="flex items-center">
              <div className="mr-2">
                <img
                  src="/public/ZERO_icons/icons/SVG/circle/icon_dark_circle.svg"
                  alt=""
                  className="w-11 h-11"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-satoshi-medium">{domain.name}</span>
                <span className="font-satoshi-medium text-[#5A6CDE]">
                  Current period expires in {getRelativeExpiry(domain.expired)}
                </span>
              </div>
            </div>
            <div className="bg-[#eff0fc] rounded-full px-2 py-[2.5px]">
              <span className="text-[#5A6CDE]">Owner</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
