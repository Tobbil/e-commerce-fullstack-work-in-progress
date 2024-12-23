import Header from "@/app/layout/Header.js";
import Body from "@/app/layout/Body.js";
import Footer from "@/app/layout/Footer.js";
import Navbar from "@/app/layout/Navbar.js";
import Categories from "@/app/components/Categories";
import Item2Cols from "@/app/components/Item2Cols";
import TextWithPhoto2Cols from "@/app/components/TextWithPhoto2Cols";
import Features from "@/app/components/Features";
import InTheBox from "@/app/components/InTheBox";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ItemPage() {
  const router = useRouter();
  const { id } = router.query;

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`/api/item?id=${id}`)
        .then((res) => res.json())
        .then((data) => {
          setItem(data[0]);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;
  console.log(item);
  if (!item) return <div>Item not found</div>;

  console.log(item.features);
  const paragraphs = item.features.split("\\n");

  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Body>
        <div className="self-center w-[69rem] mt-16">
          <span
            onClick={() => router.back()}
            className="text-black opacity-50"
            style={{ cursor: "pointer" }}
          >
            Go Back
          </span>
        </div>
        <Item2Cols imagePosition="left" addToCart={true} itemId={id} />
        <div className="flex flex-row gap-24 w-[69rem] self-center mt-20">
          <Features item={item} />
          <InTheBox item={item} />
        </div>
        <div className="mt-20 w-[69rem] self-center">
          <Image
            src={`https://audiophile-store-bucket.s3.eu-north-1.amazonaws.com/items/${id}/product_detail_bottom.png`}
            width={1110}
            height={592}
          />
        </div>
        <Categories />
        <TextWithPhoto2Cols
          headlineText="BRINGING YOU THE BEST AUDIO GEAR"
          highlightIndex={3}
        />
      </Body>
      <Footer />
    </>
  );
}
