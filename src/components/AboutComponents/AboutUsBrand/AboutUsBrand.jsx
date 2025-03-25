import {
  FaGoogle,
  FaGithub,
  FaAmazon,
  FaSpotify,
  FaApple,
  FaMicrosoft,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaSlack,
} from "react-icons/fa";

const AboutUsBrand = () => {
  const brands = [
    {
      name: "Google",
      logo: <FaGoogle style={{ color: "white", fontSize: "2rem" }} />,
    },
    {
      name: "GitHub",
      logo: <FaGithub style={{ color: "white", fontSize: "2rem" }} />,
    },
    {
      name: "Amazon",
      logo: <FaAmazon style={{ color: "white", fontSize: "2rem" }} />,
    },
    {
      name: "Spotify",
      logo: <FaSpotify style={{ color: "white", fontSize: "2rem" }} />,
    },
    {
      name: "Apple",
      logo: <FaApple style={{ color: "white", fontSize: "2rem" }} />,
    },
    {
      name: "Microsoft",
      logo: <FaMicrosoft style={{ color: "white", fontSize: "2rem" }} />,
    },
    {
      name: "Facebook",
      logo: <FaFacebook style={{ color: "white", fontSize: "2rem" }} />,
    },
    {
      name: "Twitter",
      logo: <FaTwitter style={{ color: "white", fontSize: "2rem" }} />,
    },
    {
      name: "LinkedIn",
      logo: <FaLinkedin style={{ color: "white", fontSize: "2rem" }} />,
    },
    {
      name: "Slack",
      logo: <FaSlack style={{ color: "white", fontSize: "2rem" }} />,
    },
  ];

  return (
    <>
      {/* title */}
      <h3 className="text-center">
        {" "}
        Trusted by <strong className="text-custom-primary">
          Industry
        </strong>{" "}
        Leaders
      </h3>

        {/* brands cards */}
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-6 mt-20 px-10">
            {brands.map((brand, ind)=>(
                // card
                <div className="border border-gray-400 flex items-center justify-center gap-2 p-4 rounded-lg" key={ind}>
                    <span>{brand.logo}</span>
                    <h4>{brand.name}</h4>
                </div>
            ))}
        </div>

    </>
  );
};

export default AboutUsBrand;
