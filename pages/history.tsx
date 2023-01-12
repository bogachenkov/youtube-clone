import { useState } from "react";


import History from "@modules/History";



export default function HistoryPage() {
  const [search, setSearch] = useState('');

  return (
    <History />
  )
}
