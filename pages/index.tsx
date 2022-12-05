import { VIDEOS_DATA } from "../const/data";

export default function HomePage() {
  return (
    <div>
      {/* <Sidebar /> */}
      {
        VIDEOS_DATA.map(vid => (
          <video key={vid.title} src={vid.source} poster={vid.thumb} controls>
            Sorry
          </video>
        ))
      }
    </div>
  )
}
