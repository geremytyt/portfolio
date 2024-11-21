
import pic1 from "../assets/pics/pic1.jpg";
import pic2 from "../assets/pics/pic2.jpg";
import pic3 from "../assets/pics/pic3.jpg";
import pic4 from "../assets/pics/pic4.jpg";
import pic5 from "../assets/pics/pic5.jpg";
import pic6 from "../assets/pics/pic6.jpg";

const photos = [
  {
    src: pic1,
    width: 1080,
    height: 780,
    alt: "Picture 1",
  },
  {
    src: pic2,
    width: 1080,
    height: 1620,
    alt: "Picture 2",
  },
  {
    src: pic3,
    width: 1080,
    height: 720,
    alt: "Picture 3",
  },
  {
    src: pic4,
    width: 1080,
    height: 720,
    alt: "Picture 4",
  },
  {
    src: pic5,
    width: 1080,
    height: 1620,
    alt: "Picture 5",
  },
  {
    src: pic6,
    width: 1080,
    height: 607,
    alt: "Picture 6",
  },
].map(({ src, alt, width, height }) => ({
  src,
  alt,
  width,
  height,
  srcSet: [ // Generate different sizes for responsive support
    {
      src,
      width: 1080,
      height,
    },
    {
      src,
      width: 720,
      height: Math.round((height / width) * 720),
    },
    {
      src,
      width: 480,
      height: Math.round((height / width) * 480),
    },
  ],
}));

export default photos;
