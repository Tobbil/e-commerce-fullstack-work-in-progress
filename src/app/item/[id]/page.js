"use client";

import Header from "@/app/layout/Header.js";
import Body from "@/app/layout/Body.js";
import Footer from "@/app/layout/Footer.js";
import Navbar from "@/app/layout/Navbar.js";
import Categories from "@/app/components/Categories";
import Item2Cols from "@/app/components/Item2Cols";
import TextWithPhoto2Cols from "@/app/components/TextWithPhoto2Cols";
import Features from "@/app/components/Features";
import InTheBox from "@/app/components/InTheBox";
import Recommendations from "@/app/components/Recommendations";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ItemPage({ params }) {
  const router = useRouter();
  const { id } = React.use(params);
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
  if (!item) return <div>Item not found</div>;

  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Body>
        <div className="self-center w-[20rem] md:w-[43rem] lg:w-[69rem] mt-16">
          <span
            onClick={() => router.back()}
            className="text-black opacity-50"
            style={{ cursor: "pointer" }}
          >
            Go Back
          </span>
        </div>
        <Item2Cols imagePosition="left" addToCart={true} itemId={id} />
        <div className="flex flex-col lg:flex-row gap-6 md:w-[43rem] lg:w-[69rem] self-center md:mt-10 lg:mt-20">
          <Features item={item} />
          <InTheBox item={item} />
        </div>
        <div className="mt-20 w-[69rem] self-center hidden lg:block">
          <Image
            src={`https://audiophile-store-bucket.s3.eu-north-1.amazonaws.com/items/${id}/product_detail_bottom.png`}
            width={1110}
            height={592}
            alt="alt text" // TODO
          />
        </div>
        <div className="mt-20 w-[43rem] self-center hidden md:max-lg:block">
          <Image
            src={`https://audiophile-store-bucket.s3.eu-north-1.amazonaws.com/items/${id}/product_detail_bottom.png`}
            width={690}
            height={368}
            alt="alt text" // TODO
          />
        </div>
        <div className="mt-20 w-[20rem] self-center md:hidden">
          <Image
            src={`https://audiophile-store-bucket.s3.eu-north-1.amazonaws.com/items/${id}/product_detail_bottom_mobile.png`}
            width={327}
            height={756}
            alt="alt text" // TODO
          />
        </div>
        <Recommendations itemId={id} />
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
