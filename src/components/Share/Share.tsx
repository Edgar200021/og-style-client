import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  OKIcon,
  OKShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  VKIcon,
  VKShareButton,
  ViberIcon,
  ViberShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share'

import shareIcon from '../../assets/icons/share.svg'

import { cn } from '@/utils'
import { useState } from 'react'

interface Props {
  className?: string
  shareUrl: string
}

export const Share = ({ className, shareUrl }: Props) => {
  const [isOpened, setIsOpened] = useState(false)
  return (
    <div
      role="button"
      onClick={() => setIsOpened(prev => !prev)}
      className={cn('relative w-6 h-6', className)}
    >
      <img className="w-full h-full" src={shareIcon} alt="share" />
      <div
        className={cn(
          'w-40 max-h-[120px] overflow-auto rounded-lg bg-dark p-2 absolute right-0 top-10 hidden z-50',
          {
            'flex flex-wrap gap-2': isOpened,
          }
        )}
      >
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon size={30} />
        </FacebookShareButton>
        <TelegramShareButton url={shareUrl}>
          <TelegramIcon size={30} />
        </TelegramShareButton>
        <TwitterShareButton url={shareUrl}>
          <TwitterIcon size={30} />
        </TwitterShareButton>
        <WhatsappShareButton url={shareUrl}>
          <WhatsappIcon size={30} />
        </WhatsappShareButton>
        <ViberShareButton url={shareUrl}>
          <ViberIcon size={30} />
        </ViberShareButton>
        <VKShareButton url={shareUrl}>
          <VKIcon size={30} />
        </VKShareButton>
        <RedditShareButton url={shareUrl}>
          <RedditIcon size={30} />
        </RedditShareButton>
        <LinkedinShareButton url={shareUrl}>
          <LinkedinIcon size={30} />
        </LinkedinShareButton>
        <OKShareButton url={shareUrl}>
          <OKIcon size={30} />
        </OKShareButton>
      </div>
    </div>
  )
}
