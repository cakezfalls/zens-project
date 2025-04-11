import react, { useState } from "react";
import "../App.css";
import Register from "./Register";
import { Link } from "react-router-dom";
import { useDomain } from "./DomainContext";

export default function Content() {
  const [value, setValue] = useState("");
  const [domains, setDomains] = useState([]);
  const [pick, setPick] = useState(false);
  const [selectDomain, setSelectDomain] = useState("");
  const { setDomain } = useDomain();

  async function checkDomainStatus(name) {
    const query = `
      {
        domainRegistereds(where: { name: "${name}" }) {
          id
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

    const data = await res.json();
    return data.data.domainRegistereds.length > 0 ? "Registered" : "Available";
  }

  async function handleChange(e) {
    const input = e.target.value;
    setValue(input);

    if (input.trim() === "") {
      setDomains([]);
    } else {
      const endings = ["zero", "zens", "zeth"];
      const domainChecks = await Promise.all(
        endings.map(async (end) => {
          const name = `${input}.${end}`;
          const status = await checkDomainStatus(name);
          return { name, status };
        })
      );
      setDomains(domainChecks);
    }
  }

  function handlePickDomain(domainName) {
    setPick(!pick);
    setSelectDomain(domainName);
  }

  return pick === false ? (
    <div className="flex flex-col justify-center items-center mt-40">
      <h1 className="font-satoshi text-5xl text-gradient">
        <p>Your Web3 username</p>
      </h1>
      <div className="mt-3 text-s text-[#7A839F]">
        <p className="w-110 text-center">
          Your identity across web3, one name for all your crypto addresses, and
          your decentralised website
        </p>
      </div>
      <div>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="font-satoshi-medium text-base w-85 h-13 rounded-2xl mt-11 bg-amber-50 pl-3.5 placeholder:text-[#7A839F] border-2 border-transparent focus: ring-2 ring-[#9CA9FF] outline-none"
          placeholder="Search for a name"
        />

        <ul className="mt-3  bg-amber-50 rounded-2xl">
          {domains.map((domain, index) => (
            <Link to="/reg">
              <li
                onClick={() => {
                  handlePickDomain(domain.name);
                  setDomain(domain.name);
                }}
                key={index}
                className="font-satoshi-medium text-base flex items-center justify-between p-4 hover:bg-[#F0F0F0] rounded-2xl cursor-pointer "
              >
                <span>{domain.name}</span>
                <span
                  className={`px-3 py-1 rounded-lg
                        ${
                          domain.status === "Available"
                            ? "text-green-600 bg-green-100"
                            : domain.status === "Registered"
                            ? "text-blue-600 bg-blue-100"
                            : "text-red-600 bg-red-100"
                        }`}
                >
                  {domain.status}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <Register name={selectDomain} />
  );
}
