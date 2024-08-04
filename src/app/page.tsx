import { FC } from "react"

import AppLayout from "@/components/layout/app-layout"
import { CommonProps } from "@/core/types"

type Props = CommonProps

const Home: FC<Props> = (props) => {
  return (
    <AppLayout className="mx-auto" showHeaderNav showTopLoader>
      <div className="flex flex-col md:flex-row items-center justify-center gap-x-20 pt-20">
        <p className="uppercase">{process.env.ENVIRONMENT}</p>
      </div>
    </AppLayout>
  )
}

export default Home
