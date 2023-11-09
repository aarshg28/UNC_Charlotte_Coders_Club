import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const socialLinks = [
  {
    url: "mailto:asever@uncc.edu",
    icon: faEnvelope,
  },
];
function Footer() {
  return (
    <footer className="p-4 min-w-full  border-t-2 border-red-600 text-neutral-900">
      <div className="flex flex-row justify-center space-x-4  px-4">
        {socialLinks.map((item, index) => (
          <p key={index}>
            <a href={item.url} className="text-black hover:text-red-500">
              <FontAwesomeIcon className="h-8 w-8" icon={item.icon} />
            </a>
          </p>
        ))}
      </div>

      <div className="p-4 text-center">
        © {new Date().getFullYear()} Copyright
        <a className="" href="">
          {" "}
          Code Tonic
        </a>
      </div>
    </footer>
  );
}

export default Footer;
