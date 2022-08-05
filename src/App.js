import React, { useState } from "react";
import { useClick } from "./useClcik";
import { useInput } from "./useInput";
import { Button } from "./useTab";
import { useTitle } from "./useTitle";
import { useConfirm } from "./useConfirm";
import { usePreventLeave } from "./usePreventLeave";
import { useBeforeLeave } from "./useBeforeLeave";
import { useFadeIn } from "./useFadeIn";
import { useNetwork } from "./useNetwork";
import { useScroll } from "./useScroll";
import { useFullscreen } from "./useFullscreen";
import { useNotification } from "./useNotification";
import { useAxios } from "./useAxios";

export default function App() {
  const { data, error, loading } = useAxios({
    url: "https://yts.am/api/v2/list_movies.json"
  });
  console.log(`${data}\n${error}\n${loading}`);
  return <div className="App"></div>;
}
