import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Faq from "./components/help/Faq";
import Contact from "./components/help/Contact";
import RootLayouts from "./layouts/RootLayouts";
import HelpLayout from "./layouts/HelpLayout";
import NotFound from "./components/NotFound";
import SomeRecentQuestions from "./components/help/Faq/SomeRecentQuestions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayouts />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} >
          <Route path="mostrecentquestion" element={<SomeRecentQuestions/>}/>
        </Route>
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
export default function App() {
  return <RouterProvider router={router} />;
}
