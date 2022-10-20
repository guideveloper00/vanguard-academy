import FacebookIcon from "../../../../../public/facebookIcon.svg";
import InstagramIcon from "../../../../../public/instagramIcon.svg";
import OutlookIcon from "../../../../../public/outlookIcon.svg";
import TiktokIcon from "../../../../../public/tiktokIcon.svg";
import TwitterIcon from "../../../../../public/twitterIcon.svg";
import WhatsappIcon from "../../../../../public/whatsappIcon.svg";
import YoutubeIcon from "../../../../../public/youtubeIcon.svg";
import * as S from "./styles";

export const ContactVanguard = () => {
  return (
    <S.Container>
      <S.Content>
        <h2>Nossas redes sociais</h2>
        <S.SocialMedia>
          <S.SocialMediaLink href="/">
            <S.SocialMediaLinkContent>
              WhatsApp <WhatsappIcon />
            </S.SocialMediaLinkContent>
          </S.SocialMediaLink>
          <S.SocialMediaLink href="/">
            <S.SocialMediaLinkContent>
              Facebook <FacebookIcon />
            </S.SocialMediaLinkContent>
          </S.SocialMediaLink>
          <S.SocialMediaLink href="/">
            <S.SocialMediaLinkContent>
              Youtube <YoutubeIcon />
            </S.SocialMediaLinkContent>
          </S.SocialMediaLink>
          <S.SocialMediaLink href="/">
            <S.SocialMediaLinkContent>
              Email <OutlookIcon />
            </S.SocialMediaLinkContent>
          </S.SocialMediaLink>
          <S.SocialMediaLink href="/">
            <S.SocialMediaLinkContent>
              Tik tok <TiktokIcon />
            </S.SocialMediaLinkContent>
          </S.SocialMediaLink>
          <S.SocialMediaLink href="/">
            <S.SocialMediaLinkContent>
              Instagram <InstagramIcon />
            </S.SocialMediaLinkContent>
          </S.SocialMediaLink>
          <S.SocialMediaLink href="/">
            <S.SocialMediaLinkContent>
              Twitter <TwitterIcon />
            </S.SocialMediaLinkContent>
          </S.SocialMediaLink>
        </S.SocialMedia>
      </S.Content>
    </S.Container>
  );
};
