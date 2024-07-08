"use client";
import { footerLinks } from "@/app/_lib/data";
import React from "react";
import DownloadLinks from "./DownloadLinks";
import AppleStoreImage from "@/assets/appstore.png";
import GooglePlayImage from "@/assets/get-it-on-google-play-badge.png";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { PiPhone } from "react-icons/pi";
import VatLogo from "@/assets/vat.png";

import { FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Modal from "./Modal";
import SallaViewResource from "./SallaViewResource";

export default function Footer() {
  return (
    <section className="sm:pt-24">
      <div className="container px-2">
        {/* links */}
        <div className=" grid px-3 sm:grid-cols-2  lg:grid-cols-4 md:grid-cols-3 gap-10">
          <Modal>
            {footerLinks.map((link) => {
              return (
                <div key={link.pageId}>
                  <h2 className="mb-3 text-[20px] text-accent-200 font-semibold">
                    {link.about}
                  </h2>
                  <ul className="space-y-3">
                    {link.subLinks.map((link, index) => (
                      <React.Fragment key={index}>
                        <Modal.Open opens={link.label}>
                          <li className="text-accent-150 tracking-wider cursor-pointer">
                            {link.label}
                          </li>
                        </Modal.Open>
                        <Modal.Window name={link.label}>
                          <SallaViewResource
                            resourceName={link.label}
                            href={link.url}
                          />
                        </Modal.Window>
                      </React.Fragment>
                    ))}
                  </ul>
                </div>
              );
            })}
          </Modal>
        </div>
        {/* download */}
        <div className="flex gap-3 sm:w-full flex-col w-[250px] md:flex-row md:items-center justify-between">
          <DownloadLinks
            appStore={AppleStoreImage}
            googlePlay={GooglePlayImage}
          />

          <div className="flex items-center gap-6 text-accent-150 ">
            <FiYoutube className="h-7 w-4 cursor-pointer" />
            <FaXTwitter className="h-7 w-4 cursor-pointer" />
            <FaInstagram className="h-7 w-4 cursor-pointer" />
          </div>
        </div>
        {/* contact */}
        <div className="flex mt-5 md:mt-0 flex-col-reverse lg:flex-row tracking-wider text-primary-200 py-4 text-sm justify-between border-t border-t-[#00495640] lg:items-center">
          <div>
            {" "}
            جميع الحقوق محفوظة لدى سلة القابضة {new Date().getFullYear()} &copy;
          </div>
          <div className="flex gap-4 lg:items-center lg:flex-row flex-col ">
            <div className="flex gap-2  items-center">
              <PiPhone size={18} />
              <span className="-tracking-wider">8001111210</span>
            </div>

            <div className="flex gap-2 items-center">
              <IoLocationOutline size={18} />
              <span className="tracking-wider">
                مكة المكرمة، المملكة العربية السعودية
              </span>
            </div>
            <div className="flex gap-2 text-[13px]  items-center">
              <MdOutlineEmail size={18} />
              <a className="" href="mailto:info@salla.sa">
                info@salla.sa
              </a>
            </div>
            <Image
              className="w-14 object-cover h-18 sm:w-10 sm:h-12"
              src={VatLogo}
              alt="vat image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
