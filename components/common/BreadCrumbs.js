import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function BreadCrumbs({ data }) {
  const router = useRouter();
  const pN = router.asPath;
  return (
    <div className="flex gap-3  pb-5 flex-wrap text-sm md:text-lg">
      {data?.map((item, index) => {
        const urlSplit = pN.split("/");
        return (
          <span className="flex gap-3" key={item.title}>
            <Link href={item.href}>
              <a>
                <p
                  className={`${
                    "/" + urlSplit[urlSplit.length - 1] === item.href
                      ? "font-bold"
                      : ""
                  }`}
                  style={{
                    cursor: data.length - 1 !== index ? "pointer" : "none",
                  }}
                >
                  {item.title}
                </p>
              </a>
            </Link>
            {data.length - 1 !== index && <p className="">/</p>}
          </span>
        );
      })}
    </div>
  );
}
