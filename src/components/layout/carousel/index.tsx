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

export default function Carousel(): JSX.Element {
  const renderSlides = (): React.JSX.Element[] =>
    BannerList.map((i) => (
      <div key={i.id}>
        <div>
          <Image src={i.src} alt="" />
        </div>
      </div>
    ));

  return (
    <div className="App">
      <Slider dots={true}>{renderSlides()}</Slider>
    </div>
  );
}
