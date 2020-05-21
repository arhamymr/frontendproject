import React from "react";

import { Share } from "./styled";
import { colors } from "Utils"

import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton
} from "react-share";

import { IconContext } from "react-icons"
import {
	FaFacebook,
	FaLinkedin,
	FaTelegram,
	FaTwitter
} from "react-icons/fa";

const Index = ({shareUrl}) => (
		<IconContext.Provider value={{ "size": "2em", color: colors.black }}>
		  <Share>
		  	<p> Share</p>
		 		<FacebookShareButton url={shareUrl}>
		 			<FaFacebook/>
		 		</FacebookShareButton>
		 		<LinkedinShareButton url={shareUrl}>
		 			<FaLinkedin/>
		 		</LinkedinShareButton>
		 		<TelegramShareButton url={shareUrl}>
		 			<FaTelegram/>
		 		</TelegramShareButton>
		 		<TwitterShareButton url={shareUrl}>
		 			<FaTwitter/>
		 		</TwitterShareButton>
		 	</Share>
		 	</IconContext.Provider>
);

export default Index;
