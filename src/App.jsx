import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/dragcarousel", element: <DragCarousel /> },
  { path: "/pageui", element: <PageUI /> },
  { path: "/animatecount", element: <AnimateCount /> },
  { path: "/moveonmove", element: <MoveOnMove /> },
  { path: "/textscroll", element: <TextScroll /> },
  { path: "/carousel", element: <Carousel /> },
  { path: "/lighthouse", element: <Lighthouse /> },
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
