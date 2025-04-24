import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { motion } from "motion/react";

import SharedLayout from "./layouts/Shared";
import Cascade from "./layouts/Cascade";
import ScrollLinked from "./layouts/Scroll";
import AnimateEntry from "./layouts/AnimateEntry";
import Slideshow from "./layouts/Slideshow";
import ScrollXBox from "./layouts/ScrollXBox";
import NotificationsApp from "./layouts/Notifications";
import DragTransform from "./layouts/DragTransform";
import TabSwitch from "./layouts/TabSwitch";
import StaggerNav from "./layouts/StaggerNav";
import DragPage from "./layouts/DragPage";
import InfiniteScroll from "./layouts/InfiniteScroll";
import ScrollToFull from "./layouts/ScrollToFull";
import MobileLogo from "./layouts/MobileLogo";
import Lighthouse from "./layouts/Lighthouse";
import Carousel from "./layouts/Carousel";
import TextScroll from "./layouts/TextScroll";
import MoveOnMove from "./layouts/MoveOnMove";
import AnimateCount from "./layouts/AnimateCount";
import PageUI from "./layouts/PageUI";
import DragCarousel from "./layouts/DragCarousel";
import Home from "./layouts/HomePage";
import Cards from "./layouts/Cards";
import Vignette from "./layouts/Vignette";
import { withFade } from "./helpers/PageWrap";

const pages = [
  { path: "/", element: <Home />, wrap: true },
  { path: "/vignette", element: <Vignette />, wrap: true },
  { path: "/cards", element: <Cards />, wrap: true },
  { path: "/dragcarousel", element: <DragCarousel />, wrap: true },
  { path: "/pageui", element: <PageUI />, wrap: true },
  { path: "/animatecount", element: <AnimateCount />, wrap: true },
  { path: "/moveonmove", element: <MoveOnMove />, wrap: true },
  { path: "/textscroll", element: <TextScroll /> },
  { path: "/carousel", element: <Carousel /> },
  { path: "/lighthouse", element: <Lighthouse />, wrap: true },
  { path: "/mobileLogo", element: <MobileLogo /> },
  { path: "/scrolltofull", element: <ScrollToFull /> },
  { path: "/infinitescroll", element: <InfiniteScroll /> },
  { path: "/animateentry", element: <AnimateEntry /> },
  { path: "/staggernav", element: <StaggerNav /> },
  { path: "/tabswitch", element: <TabSwitch /> },
  { path: "/dragtransform", element: <DragTransform /> },
  { path: "/dragpage", element: <DragPage /> },
  { path: "/notificationsapp", element: <NotificationsApp /> },
  { path: "/scrollxbox", element: <ScrollXBox /> },
  { path: "/cascade", element: <Cascade /> },
  { path: "/sharedlayout", element: <SharedLayout /> },
  { path: "/slideshow", element: <Slideshow /> },
];
const router = createBrowserRouter(
  pages.map(({ path, element, wrap }) => ({
    path,
    element: wrap === true ? withFade(element) : element,
  }))
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
