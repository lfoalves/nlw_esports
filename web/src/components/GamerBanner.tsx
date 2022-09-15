interface GamerBannerProps {
  bannerUrl: string,
  title: string,
  adsCount: number
}

export function GamerBanner(props: GamerBannerProps) {
  return(
    <a
      href="#"
      className='relative rounded-lg overflow-hidden hover:scale-110 hover:shadow-xl hover:shadow-violet-500 hover:brightness-110 transition-all'
      title={props.title}
    >
      <img src={props.bannerUrl} alt="" />
      <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
          <strong className='font-bold text-white block'>{props.title}</strong>
        <span className='text-zinc-300 text-sm block mt-1'>{props.adsCount} anúncio(s)</span>
      </div>
    </a>
  );
}