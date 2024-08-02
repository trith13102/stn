import { FC } from "react"

import PublicLayout from "@/components/layout/PublicLayout"
import { CommonProps } from "@/core/types"

type Props = CommonProps

const Home: FC<Props> = (props) => {
  return (
    <PublicLayout className="mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-center gap-x-20">
        <p className="mt-5 uppercase">{process.env.NODE_ENV}</p>
      </div>
    </PublicLayout>
  )
}

export default Home
