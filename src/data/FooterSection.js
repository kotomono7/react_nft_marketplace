import { AiFillFacebook } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { MdEmail, MdPhoneInTalk } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export const servicesLinks = ["Art", "Common", "Generic", "Rare", "Trading"];

export const usefulLinks = [
	{
		title: "Home",
		link: "home",
		offset: 0,
	},
	{
		title: "About",
		link: "about",
		offset: -50,
	},
	{
		title: "Create",
		link: "create",
		offset: -50,
	},
	{
		title: "Marketplace",
		link: "market",
		offset: -50,
	},
	{
		title: "Subscribe",
		link: "subscribe",
		offset: -50,
	},
];

export const contactInfo = [
	{
		icon: <MdPhoneInTalk />,
		value: "+(480) 777-0103",
	},
	{
		icon: <MdEmail />,
		value: "umamudayo@gmail.com",
	},
	{
		icon: <IoLocationSharp />,
		value: "Simbang Wetan 10th, Buaran, Pekalongan.",
	},
];

export const socialIcons = [
	<AiFillFacebook />,
	<FaTwitterSquare />,
	<FaInstagramSquare />,
	<BsLinkedin />,
];
