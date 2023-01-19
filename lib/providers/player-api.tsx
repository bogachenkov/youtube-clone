import { useToggle } from "@lib/hooks/useToggle";
import React, {
  createContext,
  ReactNode,
  useMemo,
  useContext,
  useState,
  useEffect,
  useRef
} from "react";

export type TimeRanges = {
  played: number;
  buffered: number;
  duration: number;
}

type State = {
  isPlaying: boolean;
  isMuted: boolean;
  isFullscreen: boolean;
  volume: number;
  timings: TimeRanges;
};

type PlayerRefs = {
  video: React.RefObject<HTMLVideoElement>;
  container: React.RefObject<HTMLDivElement>;
}

type UpdateTimingsArgs = {
  el?: HTMLVideoElement;
  timeValue?: number;
}

type API = {
  togglePlaying: VoidFunction;
  toggleMute: VoidFunction;
  toggleFullscreen: VoidFunction;
  updateVolume: (volume: number) => void;
  updateTimings: (args: UpdateTimingsArgs) => void;
  resetProgress: VoidFunction;
};

const PlayerPlayingContext = createContext<State["isPlaying"]>(
  {} as State["isPlaying"]
);
const PlayerMutedContext = createContext<State["isMuted"]>(
  {} as State["isMuted"]
);
const PlayerFullscreenContext = createContext<State["isFullscreen"]>(
  {} as State["isFullscreen"]
);
const PlayerVolumeContext = createContext<State["volume"]>(
  {} as State["volume"]
);
const PlayerTimingContext = createContext<State["timings"]>(
  {} as State["timings"]
);
const PlayerRefsContext = createContext<PlayerRefs>(
  {} as PlayerRefs
);
const PlayerAPIContext = createContext<API>({} as API);

export const PlayerDataProvider = ({ children }: { children: ReactNode }) => {
  const [isPlaying, togglePlaying] = useToggle(true);
  const [isMuted, setMute] = useState(true);
  const [isFullscreen, setFullscreen] = useState(false);

  const [volume, setVolume] = useState(50);
  const [timings, setTimings] = useState<TimeRanges>({
    played: 0,
    buffered: 0,
    duration: 0
  });

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.play() : videoRef.current.pause();
    }
  }, [isPlaying]);

  const state:State = {
    isPlaying,
    isMuted,
    isFullscreen,
    volume,
    timings
  };

  const api = useMemo<API>(() => {
    const toggleFullscreen = () => {
      if (!containerRef.current) return;
      const element = containerRef.current;
  
      if (window.screenTop && window.screenY) {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.mozRequestFullScreen) { /* Firefox */
          element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
          element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { /* IE/Edge */
          element.msRequestFullscreen();
        }
        setFullscreen(true);
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
          document.msExitFullscreen();
        }
        setFullscreen(false);
      }  
    };

    const updateTimings:API['updateTimings'] = ({ timeValue, el }) => {
      const videoElement = el || videoRef.current;
      if (!videoElement) return;
      
      if (timeValue) videoElement.currentTime = timeValue;

      const buffered = videoElement.buffered;
      setTimings({
        played: videoElement.currentTime,
        buffered: buffered.length > 0 ? buffered.end(buffered.length - 1) : 0,
        duration: videoElement.duration
      }); 
    };

    const updateVolume = (val: number) => {
      if (!videoRef.current) return;
      videoRef.current.volume = val / 100;
      setVolume(val);
      setMute(mute => {
        if (mute && val > 0) return false;
        if (!mute && val === 0) return true;
        return mute;
      })
    }

    const resetProgress = () => {
      setTimings({
        played: 0,
        buffered: 0,
        duration: 0
      });
    }

    return { 
      togglePlaying,
      toggleMute: () => setMute(mute => !mute),
      toggleFullscreen,
      updateVolume,
      updateTimings,
      resetProgress
    };
  }, [togglePlaying]);

  return (
    <PlayerAPIContext.Provider value={api}>
      <PlayerPlayingContext.Provider value={state.isPlaying}>
        <PlayerMutedContext.Provider value={state.isMuted}>
          <PlayerFullscreenContext.Provider value={state.isFullscreen}>
            <PlayerVolumeContext.Provider value={state.volume}>
              <PlayerTimingContext.Provider value={state.timings}>
                <PlayerRefsContext.Provider value={{
                  video: videoRef,
                  container: containerRef
                }}>
                  {children}
                </PlayerRefsContext.Provider>
              </PlayerTimingContext.Provider>
            </PlayerVolumeContext.Provider>
          </PlayerFullscreenContext.Provider>
        </PlayerMutedContext.Provider>
      </PlayerPlayingContext.Provider>
    </PlayerAPIContext.Provider>
  );
};

export const usePlayerAPI = () => useContext(PlayerAPIContext);
export const usePlayerRefs = () => useContext(PlayerRefsContext);
export const usePlayerPlaying= () => useContext(PlayerPlayingContext);
export const usePlayerMuted= () => useContext(PlayerMutedContext);
export const usePlayerFullscreen= () => useContext(PlayerFullscreenContext);
export const usePlayerTimings= () => useContext(PlayerTimingContext);
export const usePlayerVolume= () => useContext(PlayerVolumeContext);
