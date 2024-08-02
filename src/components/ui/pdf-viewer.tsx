"use client"

import { FC } from "react"
import { Viewer, Worker } from "@react-pdf-viewer/core"
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"

import "@react-pdf-viewer/default-layout/lib/styles/index.css"
import "@react-pdf-viewer/core/lib/styles/index.css"

import { AppTheme } from "@/core/types"

type Props = {
  url: string
  scale?: number
  theme?: AppTheme  
}

const PDFViewer: FC<Props> = (props) => {
  const { url, scale = 1, theme = "light" } = props

  const defaultLayoutPluginInstance = defaultLayoutPlugin()
  return (
    <div className="w-full h-screen">
      <Worker workerUrl="/vendor/pdfjs-dist/build/pdf.worker.min.js">
        <Viewer
          defaultScale={scale}
          theme={theme}
          fileUrl={url}
          plugins={[defaultLayoutPluginInstance]}
        />
      </Worker>
    </div>
  )
}

export default PDFViewer
