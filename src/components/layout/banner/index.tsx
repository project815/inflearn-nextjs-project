import Image from "next/image";
import Slider from "react-slick";
import {
  ImageBanner1,
  ImageBanner2,
  ImageBanner3,
  ImageBanner4,
} from "../../../../public/assets/images";

const BannerList = [
  { id: 1, src: ImageBanner1 },
  { id: 2, src: ImageBanner2 },
  { id: 3, src: ImageBanner3 },
  { id: 4, src: ImageBanner4 },
];

export default function Banner(): JSX.Element {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Slider
        dots={true}
        prevArrow={<></>}
        nextArrow={<></>}
        autoplay={true}
        autoplaySpeed={2000}
      >
        {BannerList?.map((i) => (
          <div key={i.id}>
            <div>
              <Image
                src={i.src}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
