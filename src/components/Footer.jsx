import { RxInstagramLogo } from "react-icons/rx";
import { FiFacebook } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineCall } from "react-icons/md";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-herobg bg-blue-950 py-8 px-4 md:px-16 ">
      <div className="flex flex-col gap-y-8 xl:flex-row ">
        <div className="flex flex-col items-start gap-4 md:flex-row lg:gap-2 ">
          <div className="mt-8 flex items-start justify-start gap-2 md:mt-0  ">
            <img src="/metalogo.png" alt="logo" className="w-[50px]" />
          </div>
          <div className="flex w-full flex-col justify-between md:flex-row xl:flex-col">
            <h1 className="mb-4 hidden md:block ">
              <span className="font-['Exo'] text-3xl font-semibold tracking-widest text-white">
                MetaLogic
              </span>
              <br />
              <span className="text-sm text-white ">
                Software Private Limited
              </span>
            </h1>
            <ul className="flex flex-col gap-2 text-sm text-white">
              <li className="flex gap-2">
                <SlLocationPin className="text-white" />
                Saptakhel, Lalitpur (Head office)
              </li>
              <li className="flex gap-2">
                <MdOutlineCall className="text-white" />+ 977 9851353599
              </li>
              <li className="flex gap-2">
                <CiMail className="text-white" />
                info@metalogic.com.np
              </li>
            </ul>
          </div>
        </div>
        {/* Gap in the middle */}
        <div className="hidden md:flex md:flex-grow"></div>
        <div className="flex flex-col gap-y-8 md:flex-row md:gap-8 lg:gap-16 xl:mx-0">
          <div className="flex flex-col gap-y-2">
            <h3 className="mb-2 font-semibold text-white">Company</h3>
            <ul className="flex flex-col gap-2 text-xs">
              <li>
                <a href="/contact" className="text-white">
                  Feedback
                </a>
              </li>
              <li>
                <a href="/contact/partner" className="text-white">
                  Partnership
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-white">Services</h3>
            <ul className="flex flex-col gap-2 text-xs">
              <li>
                <a href="/services/software-development" className="text-white">
                  Custom Software Development
                </a>
              </li>
              <li>
                <a href="/services/web-development" className="text-white">
                  Web Development
                </a>
              </li>
              <li>
                <a href="/services/mobile-app" className="text-white">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="/services/cloud-computing" className="text-white">
                  Cloud Computing Services
                </a>
              </li>
              <li>
                <a href="/services/qa" className="text-white">
                  Quality Assurance and Testing
                </a>
              </li>
              <li>
                <a href="/services/ui-ux" className="text-white">
                  UI/UX Designing
                </a>
              </li>
              <li>
                <a href="/services/support" className="text-white">
                  Maintenance and Support
                </a>
              </li>
              <li>
                <a href="/services/devops" className="text-white">
                  Dev Ops
                </a>
              </li>
              <li>
                <a href="/services/blockchain" className="text-white">
                  Blockchain Solutions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-white">Join</h3>
            <ul className="flex flex-col gap-2 text-xs">
              <li>
                <a href="/careers" className="text-white">
                  Careers at MetaLogic
                </a>
              </li>
              <li>
                <a href="/career" className="text-white">
                  Internships
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-white">
              Join us on Social Medias
            </h3>
            <ul className="flex gap-4 text-sm">
              <li className="rounded-full border-2 p-2  text-white">
                <a
                  aria-label="whatsapp messaging direct link"
                  target="_blank"
                  href="https://wa.me/9851353599"
                >
                  <BsWhatsapp />
                </a>
              </li>
              <li className="rounded-full border-2 p-2">
                <a
                  aria-label="our facebook page link"
                  target="_blank"
                  href="https://www.facebook.com/metalogicsoftware"
                >
                  <FiFacebook className="text-white" />
                </a>
              </li>
              <li className="rounded-full border-2 p-2">
                <a
                  aria-label="our instagram facebook page link"
                  target="_blank"
                  href="https://www.instagram.com/metalogicsoftware?igsh=bDE5dG1pdGFoMGg3"
                >
                  <RxInstagramLogo className="text-white" />
                </a>
              </li>
              <li className="rounded-full border-2 p-2">
                <a
                  aria-label="our linkedin page link"
                  target="_blank"
                  href="https://www.linkedin.com/company/metalogic-software-pvt-ltd/"
                >
                  <SlSocialLinkedin className="text-white" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-y-2 text-sm md:flex-row">
        <span className="text-white">
          © Copyright MetaLogic. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
