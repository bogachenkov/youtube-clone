import dynamic from "next/dynamic"

// import History from "@modules/History";
const History = dynamic(() => import('@modules/History'), { ssr: false })

export default function HistoryPage() {
  return (
    <History />
  )
}
