import React from "react";
import Advertisement from "../advertisement/Advertisement";
import Blogs from "../blogs/Blogs";
import Categories from "../categories/Categories";
import MostPopular from "../mostPopular/MostPopular";

export default function MainSection() {
  return (
    <div class="flex ... mt-5">
      <div class="flex-auto w-3/4 ... bg-green-400 mr-2">
        <Blogs />
      </div>
      <div class="flex-auto w-1/4 ...">
        <Advertisement />
        <MostPopular />
        <Categories />
        <Advertisement />
      </div>
    </div>
  );
}
