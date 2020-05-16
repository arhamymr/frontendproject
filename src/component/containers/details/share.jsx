import React from "react";

import { Share } from "./styled";
import { colors } from "Utils"

import {
  FacebookShareButton,
  LinkedinShareButton,
  MailruShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const Index = ({shareUrl}) => (
	  <Share>
	 		<FacebookShareButton url={shareUrl}/>
	 		<LinkedinShareButton url={shareUrl}/>
	 		<MailruShareButton url={shareUrl}/>
	 		<TelegramShareButton url={shareUrl}/>
	 		<TwitterShareButton url={shareUrl}/>
	 		<WhatsappShareButton url={shareUrl}/>
	  </Share>
);

export default Index;
