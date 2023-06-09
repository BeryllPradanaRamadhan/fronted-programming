import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import CreateMovie from "./pages/movie/CreateMovie";
import PopularMovie from "./pages/movie/Popular";
import NowPlayingMovie from "./pages/movie/NowPlaying";
import TopRatedMovie from "./pages/movie/TopRatedMovie";
import Layout from "./Layout/layout";
import { ThemeProvider } from "styled-components";
import theme from "./components/utils/constants/theme";
import GlobalStyle from "./components/GlobalStyle";
import Detail from "./pages/movie/Detail";


function App () {
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    <Layout>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movie/create" element={<CreateMovie />}></Route>
      <Route path="/movie/popular" element={<PopularMovie />}></Route>
      <Route path="/movie/now-playing" element={<NowPlayingMovie />}></Route>
      <Route path="/movie/top-rated" element={<TopRatedMovie />}></Route>
      <Route path="/movie/:id" element={<Detail />}></Route>
      </Routes>
      </Layout>
    </ThemeProvider>
    </>
  );
}

export default App;